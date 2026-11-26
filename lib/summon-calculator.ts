/**
 * Unofficial calculator for one official Drop Rate Up banner.
 * Rates and pity come only from the opened STOVE notice. This module does
 * not invent 3★/4★/artifact rates, a general-covenant table, or spending
 * advice, and it never swaps in a later banner after the window ends.
 */

export const SUMMON_BANNER = {
  id: 'bunny-girl-maid-cecilia-covert-service',
  name: 'Bunny Girl Maid Cecilia & Covert Service Drop Rate Up!',
  featuredHero: 'Bunny Girl Maid Cecilia',
  featuredArtifactName: 'Covert Service',
  officialUrl: 'https://page.onstove.com/epicseven/global/view/14638143',
  officialTitle:
    '11/19 (Thu) Version 8.7 2nd Update Content (Added at 11/19 06:28)',
  startUtc: '2026-11-26T03:00:00.000Z',
  /** Official end inclusive through this minute. */
  endUtc: '2026-12-17T02:59:00.000Z',
  /** First instant after the official window. */
  expireAtUtc: '2026-12-17T03:00:00.000Z',
  featuredHeroRate: 0.01,
  maxCounter: 120,
  moonlightHeroesAppear: false,
  otherFiveStarHeroesAppear: false,
  coexistsWithRegularCovenant: true,
} as const;

export const FEATURED_RATE = SUMMON_BANNER.featuredHeroRate;
export const MAX_COUNTER = SUMMON_BANNER.maxCounter;
export const MISS_RATE = 1 - FEATURED_RATE;

export type BannerPhase = 'upcoming' | 'active' | 'expired';

export function bannerPhase(now: Date): BannerPhase {
  const t = now.getTime();
  if (t < Date.parse(SUMMON_BANNER.startUtc)) return 'upcoming';
  if (t >= Date.parse(SUMMON_BANNER.expireAtUtc)) return 'expired';
  return 'active';
}

export function isBannerActive(now: Date): boolean {
  return bannerPhase(now) === 'active';
}

export function isBannerExpired(now: Date): boolean {
  return bannerPhase(now) === 'expired';
}

export function isValidCounter(value: number): boolean {
  return Number.isInteger(value) && value >= 0 && value <= MAX_COUNTER;
}

/** Chance the next summon is the featured 5★ hero. */
export function nextSummonRate(counter: number): number {
  if (!isValidCounter(counter)) {
    throw new RangeError('Summon counter must be an integer from 0 to 120');
  }
  return counter === 0 ? 1 : FEATURED_RATE;
}

/** Remaining summons in the worst case, including the guaranteed pull. */
export function worstCaseSummons(counter: number): number {
  if (!isValidCounter(counter)) {
    throw new RangeError('Summon counter must be an integer from 0 to 120');
  }
  return counter + 1;
}

/**
 * Probability of summoning the featured 5★ hero within `pulls` more summons,
 * starting from the given remaining counter. After `counter` misses the next
 * summon is guaranteed, so the probability is 1 at or beyond that point.
 */
export function probabilityWithinPulls(counter: number, pulls: number): number {
  if (!isValidCounter(counter)) {
    throw new RangeError('Summon counter must be an integer from 0 to 120');
  }
  if (!Number.isInteger(pulls) || pulls < 0) {
    throw new RangeError('Pull count must be a non-negative integer');
  }
  if (pulls === 0) return 0;
  if (pulls >= counter + 1) return 1;
  return 1 - MISS_RATE ** pulls;
}

/** Chance of hitting the featured hero in the remaining 1% summons, before the guarantee. */
export function probabilityBeforeGuarantee(counter: number): number {
  return probabilityWithinPulls(counter, counter);
}

/**
 * Expected remaining summons until the featured 5★ hero, including the
 * guarantee at counter + 1. Equals (1 - 0.99^(counter+1)) / 0.01, which is
 * also E[min(Geo(0.01), counter+1)].
 */
export function expectedSummons(counter: number): number {
  if (!isValidCounter(counter)) {
    throw new RangeError('Summon counter must be an integer from 0 to 120');
  }
  return (1 - MISS_RATE ** (counter + 1)) / FEATURED_RATE;
}

export type SummonProjection = {
  counter: number;
  nextRate: number;
  probabilityBeforeGuarantee: number;
  probabilityByWorstCase: number;
  expectedSummons: number;
  worstCaseSummons: number;
};

export function projectFromCounter(counter: number): SummonProjection {
  return {
    counter,
    nextRate: nextSummonRate(counter),
    probabilityBeforeGuarantee: probabilityBeforeGuarantee(counter),
    probabilityByWorstCase: 1,
    expectedSummons: expectedSummons(counter),
    worstCaseSummons: worstCaseSummons(counter),
  };
}

export function formatPercent(rate: number, digits = 2): string {
  const pct = rate * 100;
  if (rate === 0) return '0%';
  if (rate === 1) return '100%';
  const fixed = pct.toFixed(digits);
  return `${fixed.replace(/\.?0+$/, '')}%`;
}

export function formatExpected(value: number): string {
  return value.toFixed(2);
}
