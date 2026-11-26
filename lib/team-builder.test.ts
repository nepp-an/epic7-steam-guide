import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  TEAM_BUILDER_COUNTS,
  TEAM_BUILDER_MODES,
  ROSTER_HEROES,
  SAMPLE_TEAMS,
  getMode,
  getRosterHero,
  libraryRoleCoverage,
  matchMode,
  matchTeam,
  namesEqual,
  parseTeamLine,
  sampleTeamsFor,
} from './team-builder.ts';

describe('team-builder matcher', () => {
  it('ships six sourced modes and 22 dated sample teams, with no invented extras', () => {
    assert.equal(TEAM_BUILDER_COUNTS.modes, 6);
    assert.equal(TEAM_BUILDER_COUNTS.teams, 22);
    assert.equal(TEAM_BUILDER_COUNTS.libraryHeroes, 20);
    assert.equal(TEAM_BUILDER_COUNTS.sampleOnlyHeroes, 23);
    assert.equal(TEAM_BUILDER_COUNTS.rosterHeroes, 43);
    assert.deepEqual(
      TEAM_BUILDER_MODES.map((mode) => mode.id),
      [
        'wyvern-hell',
        'banshee-hell',
        'pherus-stage-3',
        'abyss-91',
        'wyvern-normal',
        'pherus-stage-1',
      ],
    );
    assert.ok(TEAM_BUILDER_MODES.every((mode) => mode.window && mode.checked === '2026-11-13'));
    assert.ok(SAMPLE_TEAMS.every((team) => team.heroes.length === 4 && team.share.includes('clears')));
  });

  it('marks a known Wyvern · Hell roster as a full match for the rank-1 sample only', () => {
    const mode = getMode('wyvern-hell');
    assert.ok(mode);
    const teams = sampleTeamsFor(mode);
    const roster = ['Brieg', 'Sigret', 'Furious', 'Muwi'];
    const first = matchTeam(roster, teams[0]);
    assert.equal(first.complete, true);
    assert.deepEqual(first.have, ['Brieg', 'Sigret', 'Furious', 'Muwi']);
    assert.deepEqual(first.missing, []);

    const result = matchMode('wyvern-hell', roster);
    assert.ok(result);
    assert.equal(result.teams.length, 3);
    assert.equal(result.completeCount, 1);
    assert.equal(result.teams[0].complete, true);
    assert.deepEqual(result.teams[1].missing, ['Fenne']);
    assert.deepEqual(result.teams[2].missing, ['Rose']);
  });

  it('lists the exact missing names on a partial match and does not invent substitutes', () => {
    const mode = getMode('wyvern-hell');
    assert.ok(mode);
    const team = sampleTeamsFor(mode)[0];
    const partial = matchTeam(['Brieg', 'Sigret', 'Furious'], team);
    assert.equal(partial.complete, false);
    assert.deepEqual(partial.missing, ['Muwi']);
    assert.ok(!partial.missing.includes('Alexa'));
    assert.ok(!JSON.stringify(partial).toLowerCase().includes('recommended for you'));
  });

  it('fills nothing for an empty roster and does not invent a team', () => {
    const result = matchMode('wyvern-hell', []);
    assert.ok(result);
    assert.equal(result.completeCount, 0);
    assert.equal(result.teams.length, 3);
    for (const row of result.teams) {
      assert.equal(row.complete, false);
      assert.equal(row.have.length, 0);
      assert.deepEqual(row.missing, [...row.team.heroes]);
    }
    assert.equal(matchMode('wyvern-13', []), undefined);
    assert.equal(matchMode('rta', ['Ras']), undefined);
  });

  it('uses exact full-name equality so similar names do not fill the wrong slot', () => {
    assert.equal(namesEqual('Vildred', 'Arbiter Vildred'), false);
    assert.equal(namesEqual('Bellona', 'Seaside Bellona'), false);
    assert.equal(namesEqual('  furious ', 'Furious'), true);

    const pherus = getMode('pherus-stage-1');
    assert.ok(pherus);
    const team1 = sampleTeamsFor(pherus)[0];
    assert.deepEqual(team1.heroes, ['Arbiter Vildred', 'Vildred', 'Eligos', 'Lisette']);
    const onlyBase = matchTeam(['Vildred', 'Eligos', 'Lisette'], team1);
    assert.deepEqual(onlyBase.missing, ['Arbiter Vildred']);
    assert.equal(onlyBase.complete, false);

    const banshee = getMode('banshee-hell');
    assert.ok(banshee);
    const bellonaTeam = sampleTeamsFor(banshee)[0];
    const seaside = matchTeam(
      ['Vivian', 'Schniel', 'Seaside Bellona', 'Mort'],
      bellonaTeam,
    );
    assert.deepEqual(seaside.missing, ['Bellona']);
    assert.equal(seaside.complete, false);
  });

  it('labels sample-only names and keeps library role coverage off those names', () => {
    const brieg = getRosterHero('brieg');
    assert.ok(brieg);
    assert.equal(brieg.kind, 'sample-only');
    assert.equal(brieg.roles, undefined);
    assert.ok(brieg.modes.includes('wyvern-hell'));

    const furious = getRosterHero('furious');
    assert.ok(furious);
    assert.equal(furious.kind, 'library');
    assert.ok((furious.roles || []).includes('Defense break'));

    const coverage = libraryRoleCoverage(['Brieg', 'Furious', 'Tamarinne']);
    assert.deepEqual(
      coverage.map((row) => row.hero.slug).sort(),
      ['furious', 'tamarinne'],
    );
    assert.ok(!coverage.some((row) => row.hero.slug === 'brieg'));
  });

  it('parses published team lines without dropping multi-word names', () => {
    assert.deepEqual(parseTeamLine('Free Spirit Tieria, Luna, Sigret, Holiday Yufine'), [
      'Free Spirit Tieria',
      'Luna',
      'Sigret',
      'Holiday Yufine',
    ]);
    const flan = ROSTER_HEROES.find((hero) => hero.name === 'Afternoon Soak Flan');
    assert.ok(flan);
    assert.equal(flan.kind, 'sample-only');
    assert.ok(!ROSTER_HEROES.some((hero) => hero.name === 'Frieren'));
    assert.ok(!ROSTER_HEROES.some((hero) => /wyvern 13/i.test(hero.name)));
  });
});
