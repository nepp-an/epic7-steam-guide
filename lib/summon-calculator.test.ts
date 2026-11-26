import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  FEATURED_RATE,
  MAX_COUNTER,
  SUMMON_BANNER,
  bannerPhase,
  expectedSummons,
  formatPercent,
  isBannerActive,
  isBannerExpired,
  isValidCounter,
  nextSummonRate,
  probabilityBeforeGuarantee,
  probabilityWithinPulls,
  projectFromCounter,
  worstCaseSummons,
} from './summon-calculator.ts';

describe('current official pickup banner window', () => {
  it('locks the calculator to the opened Bunny Girl Maid Cecilia notice and no other pool', () => {
    assert.equal(SUMMON_BANNER.featuredHero, 'Bunny Girl Maid Cecilia');
    assert.equal(SUMMON_BANNER.featuredHeroRate, 0.01);
    assert.equal(FEATURED_RATE, 0.01);
    assert.equal(MAX_COUNTER, 120);
    assert.equal(SUMMON_BANNER.otherFiveStarHeroesAppear, false);
    assert.equal(SUMMON_BANNER.moonlightHeroesAppear, false);
    assert.equal(SUMMON_BANNER.coexistsWithRegularCovenant, true);
    assert.equal(
      SUMMON_BANNER.officialUrl,
      'https://page.onstove.com/epicseven/global/view/14638143',
    );
    assert.ok(!SUMMON_BANNER.officialUrl.includes('14635038'));
    assert.equal(Object.hasOwn(SUMMON_BANNER, 'threeStarRate'), false);
    assert.equal(Object.hasOwn(SUMMON_BANNER, 'fourStarRate'), false);
    assert.equal(Object.hasOwn(SUMMON_BANNER, 'artifactRate'), false);
  });

  it('treats the official window as active through 12/17 02:59 UTC and expired at 03:00 UTC', () => {
    assert.equal(bannerPhase(new Date('2026-11-26T02:59:59.999Z')), 'upcoming');
    assert.equal(isBannerActive(new Date('2026-11-26T03:00:00.000Z')), true);
    assert.equal(isBannerActive(new Date('2026-12-01T12:00:00.000Z')), true);
    assert.equal(isBannerExpired(new Date('2026-12-17T02:59:59.999Z')), false);
    assert.equal(bannerPhase(new Date('2026-12-17T02:59:59.999Z')), 'active');
    assert.equal(isBannerExpired(new Date('2026-12-17T03:00:00.000Z')), true);
    assert.equal(isBannerActive(new Date('2026-12-17T03:00:00.000Z')), false);
    assert.equal(bannerPhase(new Date('2026-12-17T03:00:00.000Z')), 'expired');
    // An expired clock must not switch the module to a later banner id.
    assert.equal(SUMMON_BANNER.id, 'bunny-girl-maid-cecilia-covert-service');
  });
});

describe('featured-hero pity math', () => {
  it('rejects counters outside the official 0–120 range', () => {
    assert.equal(isValidCounter(0), true);
    assert.equal(isValidCounter(120), true);
    assert.equal(isValidCounter(121), false);
    assert.equal(isValidCounter(-1), false);
    assert.equal(isValidCounter(1.5), false);
    assert.throws(() => nextSummonRate(121), /0 to 120/);
    assert.throws(() => probabilityWithinPulls(10, -1), /non-negative/);
  });

  it('makes the next summon 100% at counter 0 and 1% otherwise, with worst case 121 from 120', () => {
    assert.equal(nextSummonRate(0), 1);
    assert.equal(nextSummonRate(120), 0.01);
    assert.equal(worstCaseSummons(0), 1);
    assert.equal(worstCaseSummons(120), 121);
    assert.equal(probabilityWithinPulls(120, 0), 0);
    assert.equal(probabilityWithinPulls(120, 121), 1);
    assert.equal(probabilityWithinPulls(0, 1), 1);
  });

  it('computes from-counter probabilities and the expected remaining summons', () => {
    const fromOne = projectFromCounter(1);
    assert.equal(fromOne.nextRate, 0.01);
    assert.ok(Math.abs(fromOne.probabilityBeforeGuarantee - 0.01) < 1e-12);
    assert.equal(fromOne.probabilityByWorstCase, 1);
    assert.equal(fromOne.worstCaseSummons, 2);
    assert.ok(Math.abs(fromOne.expectedSummons - 1.99) < 1e-12);

    assert.ok(Math.abs(probabilityWithinPulls(5, 3) - (1 - 0.99 ** 3)) < 1e-12);
    assert.equal(probabilityWithinPulls(5, 6), 1);
    assert.equal(probabilityBeforeGuarantee(0), 0);
    assert.ok(Math.abs(expectedSummons(0) - 1) < 1e-12);

    const fromMax = projectFromCounter(120);
    const expected = (1 - 0.99 ** 121) / 0.01;
    assert.ok(Math.abs(fromMax.expectedSummons - expected) < 1e-10);
    assert.ok(Math.abs(fromMax.probabilityBeforeGuarantee - (1 - 0.99 ** 120)) < 1e-12);
    assert.equal(formatPercent(0.01), '1%');
    assert.equal(formatPercent(1), '100%');
  });
});
