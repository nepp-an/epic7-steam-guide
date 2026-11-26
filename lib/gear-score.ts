/** Community Epic Seven gear score formula (unofficial). */

export type GearStats = {
  atkPercent: number;
  hpPercent: number;
  defPercent: number;
  effectiveness: number;
  effectResistance: number;
  critChance: number;
  critDamage: number;
  speed: number;
  flatAtk: number;
  flatHp: number;
  flatDef: number;
};

export const GEAR_STAT_KEYS = [
  'atkPercent',
  'hpPercent',
  'defPercent',
  'effectiveness',
  'effectResistance',
  'critChance',
  'critDamage',
  'speed',
  'flatAtk',
  'flatHp',
  'flatDef',
] as const;

export type GearStatKey = (typeof GEAR_STAT_KEYS)[number];

/** Weights from the Potential project README (citing artistalley7). */
export const GEAR_SCORE_WEIGHTS: Record<GearStatKey, number> = {
  atkPercent: 1,
  hpPercent: 1,
  defPercent: 1,
  effectiveness: 1,
  effectResistance: 1,
  critChance: 1.6,
  critDamage: 1.1,
  speed: 2,
  flatAtk: 1 / 10,
  flatHp: 1 / 50,
  flatDef: 1 / 6,
};

export const FLAT_KEYS = ['flatAtk', 'flatHp', 'flatDef'] as const;

export const EMPTY_GEAR_STATS: GearStats = {
  atkPercent: 0,
  hpPercent: 0,
  defPercent: 0,
  effectiveness: 0,
  effectResistance: 0,
  critChance: 0,
  critDamage: 0,
  speed: 0,
  flatAtk: 0,
  flatHp: 0,
  flatDef: 0,
};

/** Worked example: 20 ATK% + 5 HP% + 4 DEF% + 7 CD% = 36.7 */
export const WORKED_EXAMPLE_STATS: GearStats = {
  ...EMPTY_GEAR_STATS,
  atkPercent: 20,
  hpPercent: 5,
  defPercent: 4,
  critDamage: 7,
};

export type GearScoreBreakdown = {
  contributions: Record<GearStatKey, number>;
  /** Includes flat conversions. */
  full: number;
  /** Percentage stats plus Speed and Crit only (flats omitted). */
  percentOnly: number;
  flats: number;
};

function asNumber(value: unknown): number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

export function normalizeGearStats(input: Partial<Record<GearStatKey, unknown>> | GearStats): GearStats {
  const next = { ...EMPTY_GEAR_STATS };
  for (const key of GEAR_STAT_KEYS) {
    const raw = asNumber((input as Partial<Record<GearStatKey, unknown>>)[key]);
    next[key] = raw < 0 ? 0 : raw;
  }
  return next;
}

export function scoreGear(input: Partial<Record<GearStatKey, unknown>> | GearStats): GearScoreBreakdown {
  const stats = normalizeGearStats(input);
  const contributions = {} as Record<GearStatKey, number>;
  let full = 0;
  let flats = 0;
  for (const key of GEAR_STAT_KEYS) {
    const value = stats[key] * GEAR_SCORE_WEIGHTS[key];
    contributions[key] = value;
    full += value;
    if ((FLAT_KEYS as readonly string[]).includes(key)) {
      flats += value;
    }
  }
  return {
    contributions,
    full,
    percentOnly: full - flats,
    flats,
  };
}

export function sumGearScores(pieces: Array<Partial<Record<GearStatKey, unknown>> | GearStats>): {
  full: number;
  percentOnly: number;
  flats: number;
} {
  return pieces.reduce(
    (acc, piece) => {
      const scored = scoreGear(piece);
      acc.full += scored.full;
      acc.percentOnly += scored.percentOnly;
      acc.flats += scored.flats;
      return acc;
    },
    { full: 0, percentOnly: 0, flats: 0 },
  );
}

export function roundScore(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

export function formatScore(value: number, digits = 2): string {
  return roundScore(value, digits).toFixed(digits);
}
