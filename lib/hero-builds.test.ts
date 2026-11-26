import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  HERO_BUILDS,
  EMPTY_HERO_FILTERS,
  filterHeroBuilds,
  getHeroBuild,
} from './hero-builds.ts';

describe('hero-build library data and filters', () => {
  it('includes exactly the 20 sourced heroes and no unsourced extras', () => {
    assert.equal(HERO_BUILDS.length, 20);
    const slugs = HERO_BUILDS.map((h) => h.slug);
    assert.equal(new Set(slugs).size, 20);
    assert.ok(slugs.includes('angelic-montmorancy'));
    assert.ok(slugs.includes('arbiter-vildred'));
    assert.ok(!slugs.includes('brieg'));
    assert.ok(!slugs.includes('fenne'));
    assert.ok(!slugs.includes('summers-disciple-alexa'));
  });

  it('returns all 20 heroes for an empty search and filter', () => {
    assert.equal(filterHeroBuilds(HERO_BUILDS, EMPTY_HERO_FILTERS).length, 20);
  });

  it('finds Angelic Montmorancy by a partial name search', () => {
    const found = filterHeroBuilds(HERO_BUILDS, { ...EMPTY_HERO_FILTERS, query: 'mont' });
    assert.equal(found.length, 1);
    assert.equal(found[0].slug, 'angelic-montmorancy');
  });

  it('filters Knights without dropping identity fields', () => {
    const found = filterHeroBuilds(HERO_BUILDS, { ...EMPTY_HERO_FILTERS, className: 'Knight' });
    assert.deepEqual(
      found.map((h) => h.slug).sort(),
      ['falconer-kluri', 'fallen-cecilia', 'ras'],
    );
    assert.ok(found.every((h) => h.class === 'Knight' && h.element && h.summary));
  });

  it('combines Ice + specialty-change and returns an honest empty list when nothing matches', () => {
    const iceSpecialty = filterHeroBuilds(HERO_BUILDS, {
      query: '',
      className: 'all',
      element: 'Ice',
      group: 'specialty',
    });
    assert.equal(iceSpecialty.length, 1);
    assert.equal(iceSpecialty[0].slug, 'angelic-montmorancy');

    const none = filterHeroBuilds(HERO_BUILDS, {
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
