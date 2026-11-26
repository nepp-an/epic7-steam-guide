import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DATED_CLEAR_BUILDS,
  DATED_CLEAR_LABEL,
  EMPTY_HERO_FILTERS,
  HERO_BUILDS,
  LIBRARY_HERO_BUILDS,
  filterHeroBuilds,
  getHeroBuild,
} from './hero-builds.ts';

describe('hero-build library data and filters', () => {
  it('includes exactly the 20 sourced heroes and no unsourced extras', () => {
    assert.equal(LIBRARY_HERO_BUILDS.length, 20);
    const slugs = LIBRARY_HERO_BUILDS.map((h) => h.slug);
    assert.equal(new Set(slugs).size, 20);
    assert.ok(slugs.includes('angelic-montmorancy'));
    assert.ok(slugs.includes('arbiter-vildred'));
    assert.ok(!slugs.includes('brieg'));
    assert.ok(!slugs.includes('fenne'));
    assert.ok(!slugs.includes('summers-disciple-alexa'));
  });

  it('returns all 20 heroes for an empty search and filter', () => {
    assert.equal(filterHeroBuilds(LIBRARY_HERO_BUILDS, EMPTY_HERO_FILTERS).length, 20);
  });

  it('finds Angelic Montmorancy by a partial name search', () => {
    const found = filterHeroBuilds(LIBRARY_HERO_BUILDS, { ...EMPTY_HERO_FILTERS, query: 'mont' });
    assert.equal(found.length, 1);
    assert.equal(found[0].slug, 'angelic-montmorancy');
  });

  it('filters Knights without dropping identity fields', () => {
    const found = filterHeroBuilds(LIBRARY_HERO_BUILDS, { ...EMPTY_HERO_FILTERS, className: 'Knight' });
    assert.deepEqual(
      found.map((h) => h.slug).sort(),
      ['falconer-kluri', 'fallen-cecilia', 'ras'],
    );
    assert.ok(found.every((h) => h.class === 'Knight' && h.element && h.summary));
  });

  it('combines Ice + specialty-change and returns an honest empty list when nothing matches', () => {
    const iceSpecialty = filterHeroBuilds(LIBRARY_HERO_BUILDS, {
      query: '',
      className: 'all',
      element: 'Ice',
      group: 'specialty',
    });
    assert.equal(iceSpecialty.length, 1);
    assert.equal(iceSpecialty[0].slug, 'angelic-montmorancy');

    const none = filterHeroBuilds(LIBRARY_HERO_BUILDS, {
      query: 'not-a-hero-zzz',
      className: 'Mage',
      element: 'Fire',
      group: 'specialty',
    });
    assert.equal(none.length, 0);
  });

  it('keeps Furious artifact as the dated on-site team observation only', () => {
    const furious = getHeroBuild('furious');
    assert.ok(furious);
    assert.match(furious.artifact?.text || '', /Song of Stars/);
    assert.match(furious.artifact?.text || '', /29 October/);
    assert.equal(furious.statPriority, undefined);
    assert.ok(furious.hideout.some((s) => s.panel.includes('Wyvern · Hell') && (s.rate || '').includes('49.3%')));
  });

  it('keeps Alexa’s speed/crit note and does not invent sets or merge Summer’s Disciple Alexa', () => {
    const alexa = getHeroBuild('alexa');
    assert.ok(alexa);
    assert.match(alexa.statPriority?.text || '', /speed \/ crit kits/);
    assert.equal(alexa.artifact, undefined);
    assert.equal(alexa.hideout.length, 0);
    assert.match(alexa.limits, /Summer’s Disciple Alexa/);
  });
});

describe('dated-clear appearance cards for team-builder sample-only names', () => {
  it('adds one dated-clear card for each sample-only team-builder name and no extras', () => {
    assert.equal(DATED_CLEAR_BUILDS.length, 23);
    assert.equal(HERO_BUILDS.length, 43);
    const slugs = DATED_CLEAR_BUILDS.map((hero) => hero.slug);
    assert.equal(new Set(slugs).size, 23);
    assert.ok(slugs.includes('brieg'));
    assert.ok(slugs.includes('fenne'));
    assert.ok(slugs.includes('afternoon-soak-flan'));
    assert.ok(slugs.includes('bellona'));
    assert.ok(!slugs.includes('frieren'));
    assert.ok(!slugs.includes('seaside-bellona'));
    assert.ok(!slugs.includes('summers-disciple-alexa'));
    assert.ok(DATED_CLEAR_BUILDS.every((hero) => hero.group === 'dated-clear'));
    assert.ok(DATED_CLEAR_BUILDS.every((hero) => hero.artifact === undefined && hero.statPriority === undefined));
    assert.ok(DATED_CLEAR_BUILDS.every((hero) => hero.roles.length === 0));
    assert.ok(DATED_CLEAR_BUILDS.every((hero) => hero.summary.includes('no on-site build recipe')));
    assert.ok(DATED_CLEAR_BUILDS.every((hero) => hero.limits.includes('Dated clear appearance sample')));
  });

  it('quotes only published appearance shares and keeps class or element blank when unsourced', () => {
    const brieg = getHeroBuild('brieg');
    assert.ok(brieg);
    assert.equal(brieg.element, 'Ice');
    assert.equal(brieg.class, 'Knight');
    const wyvernHell = brieg.hideout.find((sample) => sample.panel === 'Wyvern · Hell');
    assert.ok(wyvernHell);
    assert.ok((wyvernHell.teams || []).some((line) => line.includes('53.0%')));
    assert.equal(wyvernHell.checked, '2026-11-13');
    assert.match(wyvernHell.window, /29 October/);

    const fenne = getHeroBuild('fenne');
    assert.ok(fenne);
    const abyss = fenne.hideout.find((sample) => sample.panel === 'Abyss Floor 91');
    assert.ok(abyss);
    assert.ok((abyss.teams || []).some((line) => line.includes('69.3%')));
    assert.match(abyss.window, /7 August/);

    const angelica = getHeroBuild('angelica');
    assert.ok(angelica);
    assert.equal(angelica.class, undefined);
    assert.equal(angelica.element, undefined);
    const normal = angelica.hideout.find((sample) => sample.panel === 'Wyvern · Normal');
    assert.ok(normal);
    assert.ok((normal.teams || []).some((line) => line.includes('Angelica')));
    assert.ok(!(normal.teams || []).some((line) => /Appearance share/.test(line)));

    const bellona = getHeroBuild('bellona');
    assert.ok(bellona);
    assert.ok(!getHeroBuild('bellona')?.name.includes('Seaside'));
    assert.equal(DATED_CLEAR_LABEL.includes('no on-site build recipe'), true);
  });
});
