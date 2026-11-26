import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  EMPTY_GEAR_STATS,
  WORKED_EXAMPLE_STATS,
  formatScore,
  roundScore,
  scoreGear,
  sumGearScores,
} from './gear-score.ts';

describe('scoreGear community formula', () => {
  it('scores a zeroed form as 0', () => {
    const result = scoreGear(EMPTY_GEAR_STATS);
    assert.equal(result.full, 0);
    assert.equal(result.percentOnly, 0);
    assert.equal(result.flats, 0);
  });

  it('matches the known 20 ATK% + 5 HP% + 4 DEF% + 7 CD% = 36.7 example', () => {
    const result = scoreGear(WORKED_EXAMPLE_STATS);
    assert.equal(roundScore(result.full, 1), 36.7);
    assert.equal(roundScore(result.percentOnly, 1), 36.7);
    assert.equal(result.flats, 0);
    assert.equal(roundScore(result.contributions.atkPercent, 1), 20);
    assert.equal(roundScore(result.contributions.hpPercent, 1), 5);
    assert.equal(roundScore(result.contributions.defPercent, 1), 4);
    assert.equal(roundScore(result.contributions.critDamage, 1), 7.7);
  });

  it('applies speed, crit, and flat conversions', () => {
    const result = scoreGear({
      atkPercent: 10,
      critChance: 5,
      critDamage: 7,
      speed: 8,
      flatAtk: 50,
      flatHp: 100,
      flatDef: 12,
    });
    // 10 + (5*1.6=8) + (7*1.1=7.7) + (8*2=16) + (50/10=5) + (100/50=2) + (12/6=2) = 50.7
    assert.equal(roundScore(result.full, 1), 50.7);
    assert.equal(roundScore(result.percentOnly, 1), 41.7);
    assert.equal(roundScore(result.flats, 1), 9);
    assert.equal(roundScore(result.contributions.critChance, 1), 8);
    assert.equal(roundScore(result.contributions.speed, 1), 16);
    assert.equal(roundScore(result.contributions.flatAtk, 1), 5);
    assert.equal(roundScore(result.contributions.flatHp, 1), 2);
    assert.equal(roundScore(result.contributions.flatDef, 1), 2);
  });

  it('treats missing and negative inputs as zero and ignores non-numeric strings', () => {
    const result = scoreGear({
      atkPercent: '8',
      hpPercent: '',
      defPercent: 'nope',
      speed: -4,
    } as never);
    assert.equal(result.full, 8);
    assert.equal(result.contributions.speed, 0);
    assert.equal(result.contributions.hpPercent, 0);
    assert.equal(result.contributions.defPercent, 0);
  });

  it('sums a six-piece set with the same formula', () => {
    const total = sumGearScores([
      WORKED_EXAMPLE_STATS,
      { speed: 4 },
      { critChance: 5 },
      { flatAtk: 30 },
      EMPTY_GEAR_STATS,
      EMPTY_GEAR_STATS,
    ]);
    // 36.7 + 8 + 8 + 3 = 55.7
    assert.equal(roundScore(total.full, 1), 55.7);
    assert.equal(roundScore(total.percentOnly, 1), 52.7);
    assert.equal(roundScore(total.flats, 1), 3);
  });

  it('formats display scores to two decimal places', () => {
    assert.equal(formatScore(36.7), '36.70');
    assert.equal(formatScore(0), '00.00'.slice(1)); // 0.00
    assert.equal(formatScore(0), '0.00');
  });
});
