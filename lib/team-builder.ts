/**
 * Unofficial Epic Seven team-builder matcher.
 * Compares a player roster only against dated sample teams already published
 * on /tier-list/. Do not invent teams, substitutes, or roles for sample-only
 * names.
 */
import { HERO_BUILDS, type HeroBuild } from './hero-builds.ts';
import {
  TIER_PVE_ABYSS91_APPEARANCE,
  TIER_PVE_ABYSS91_TEAMS,
  TIER_PVE_BANSHEE_HELL_APPEARANCE,
  TIER_PVE_BANSHEE_HELL_TEAMS,
  TIER_PVE_EXPEDITION_APPEARANCE,
  TIER_PVE_EXPEDITION_TEAMS,
  TIER_PVE_PHERUS_S3_APPEARANCE,
  TIER_PVE_PHERUS_S3_TEAMS,
  TIER_PVE_WYVERN_APPEARANCE,
  TIER_PVE_WYVERN_HELL_APPEARANCE,
  TIER_PVE_WYVERN_HELL_TEAMS,
  TIER_PVE_WYVERN_TEAMS,
  TIER_RESOURCES_CHECKED,
  type TierPveTeam,
} from './i18n/tier-resources.ts';

export const TEAM_BUILDER_CHECKED = '2026-11-13';
export const WINDOW_HUNT = '29 October–4 November 2026';
export const WINDOW_ABYSS91 = '7 August–4 November 2026';

const HIDEOUT_HUNTS = 'https://www.hideoutgacha.com/games/epic-seven/hunts';
const HIDEOUT_EXPEDITION = 'https://www.hideoutgacha.com/games/epic-seven/expedition';
const HIDEOUT_ABYSS = 'https://www.hideoutgacha.com/games/epic-seven/abyss';

export type RosterKind = 'library' | 'sample-only';

export type TeamBuilderModeId =
  | 'wyvern-hell'
  | 'banshee-hell'
  | 'pherus-stage-3'
  | 'abyss-91'
  | 'wyvern-normal'
  | 'pherus-stage-1';

export type AppearanceShare = { hero: string; rate: string };

export type TeamBuilderMode = {
  id: TeamBuilderModeId;
  label: string;
  window: string;
  checked: string;
  onSite: string;
  sourceHref: string;
  sourceLabel: string;
  limits: string;
  rawTeams: readonly TierPveTeam[];
  appearance: readonly AppearanceShare[];
};

export const TEAM_BUILDER_MODES: readonly TeamBuilderMode[] = [
  {
    id: 'wyvern-hell',
    label: 'Wyvern · Hell',
    window: WINDOW_HUNT,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/#wyvern-hell',
    sourceHref: HIDEOUT_HUNTS,
    sourceLabel: 'Hideout Hunt Teams (citation already used on /tier-list/)',
    limits:
      'Representative top three community clear teams from the on-site Hideout sample, not every team on that panel. Share of clears is not a win rate. This is not “Wyvern 13.”',
    rawTeams: TIER_PVE_WYVERN_HELL_TEAMS,
    appearance: TIER_PVE_WYVERN_HELL_APPEARANCE,
  },
  {
    id: 'banshee-hell',
    label: 'Banshee · Hell',
    window: WINDOW_HUNT,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/#banshee-hell',
    sourceHref: HIDEOUT_HUNTS,
    sourceLabel: 'Hideout Hunt Teams (citation already used on /tier-list/)',
    limits:
      'Representative top three community clear teams from the on-site Hideout sample, not every team on that panel. Share of clears is not a win rate. Bellona on these teams is not Seaside Bellona.',
    rawTeams: TIER_PVE_BANSHEE_HELL_TEAMS,
    appearance: TIER_PVE_BANSHEE_HELL_APPEARANCE,
  },
  {
    id: 'pherus-stage-3',
    label: 'Brutal Pherus · Stage 3',
    window: WINDOW_HUNT,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/#pherus-3',
    sourceHref: HIDEOUT_EXPEDITION,
    sourceLabel: 'Hideout Expedition (citation already used on /tier-list/)',
    limits:
      'Representative top three community clear teams. This is Stage 3, not Stage 1. Share of clears is not a win rate.',
    rawTeams: TIER_PVE_PHERUS_S3_TEAMS,
    appearance: TIER_PVE_PHERUS_S3_APPEARANCE,
  },
  {
    id: 'abyss-91',
    label: 'Abyss Floor 91',
    window: WINDOW_ABYSS91,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/#abyss-91',
    sourceHref: HIDEOUT_ABYSS,
    sourceLabel: 'Hideout Abyss (citation already used on /tier-list/)',
    limits:
      'Representative top three community clear teams. This is Floor 91, not Floor 1, and the date window is longer than the hunt window. Share of clears is not a win rate.',
    rawTeams: TIER_PVE_ABYSS91_TEAMS,
    appearance: TIER_PVE_ABYSS91_APPEARANCE,
  },
  {
    id: 'wyvern-normal',
    label: 'Wyvern · Normal',
    window: WINDOW_HUNT,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/',
    sourceHref: HIDEOUT_HUNTS,
    sourceLabel: 'Hideout Hunt Teams (citation already used on /tier-list/)',
    limits:
      'Earlier bounded on-site sample (top five). Still valid; not merged with Wyvern · Hell. Share of clears is not a win rate. This is not “Wyvern 13.”',
    rawTeams: TIER_PVE_WYVERN_TEAMS,
    appearance: TIER_PVE_WYVERN_APPEARANCE,
  },
  {
    id: 'pherus-stage-1',
    label: 'Brutal Pherus · Stage 1',
    window: WINDOW_HUNT,
    checked: TIER_RESOURCES_CHECKED,
    onSite: '/tier-list/',
    sourceHref: HIDEOUT_EXPEDITION,
    sourceLabel: 'Hideout Expedition (citation already used on /tier-list/)',
    limits:
      'Earlier bounded on-site sample (top five). Still valid; not merged with Stage 3. Vildred and Arbiter Vildred are different units. Share of clears is not a win rate.',
    rawTeams: TIER_PVE_EXPEDITION_TEAMS,
    appearance: TIER_PVE_EXPEDITION_APPEARANCE,
  },
] as const;

export type SampleTeam = {
  id: string;
  modeId: TeamBuilderModeId;
  rank: string;
  heroes: readonly string[];
  share: string;
};

export type RosterHero = {
  slug: string;
  name: string;
  kind: RosterKind;
  class?: HeroBuild['class'];
  element?: HeroBuild['element'];
  roles?: readonly string[];
  href?: string;
  modes: readonly TeamBuilderModeId[];
};

export type TeamMatch = {
  team: SampleTeam;
  have: string[];
  missing: string[];
  complete: boolean;
};

export type ModeMatchResult = {
  mode: TeamBuilderMode;
  teams: TeamMatch[];
  completeCount: number;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function heroKey(name: string): string {
  return name.trim().toLowerCase();
}

export function namesEqual(a: string, b: string): boolean {
  return heroKey(a) === heroKey(b);
}

export function parseTeamLine(team: string): string[] {
  return team
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

export function getMode(id: string): TeamBuilderMode | undefined {
  return TEAM_BUILDER_MODES.find((mode) => mode.id === id);
}

export function sampleTeamsFor(mode: TeamBuilderMode): SampleTeam[] {
  return mode.rawTeams.map((row) => ({
    id: `${mode.id}-rank-${row.rank}`,
    modeId: mode.id,
    rank: row.rank,
    heroes: parseTeamLine(row.team),
    share: row.share,
  }));
}

export const SAMPLE_TEAMS: readonly SampleTeam[] = TEAM_BUILDER_MODES.flatMap((mode) =>
  sampleTeamsFor(mode),
);

function modesForHero(name: string): TeamBuilderModeId[] {
  const key = heroKey(name);
  const ids: TeamBuilderModeId[] = [];
  for (const mode of TEAM_BUILDER_MODES) {
    const listed = sampleTeamsFor(mode).some((team) =>
      team.heroes.some((hero) => heroKey(hero) === key),
    );
    if (listed) ids.push(mode.id);
  }
  return ids;
}

const libraryByKey = new Map(HERO_BUILDS.map((hero) => [heroKey(hero.name), hero]));

const sampleOnlyNames = new Set<string>();
for (const team of SAMPLE_TEAMS) {
  for (const name of team.heroes) {
    if (!libraryByKey.has(heroKey(name))) sampleOnlyNames.add(name);
  }
}

export const ROSTER_HEROES: readonly RosterHero[] = [
  ...HERO_BUILDS.map((hero) => ({
    slug: hero.slug,
    name: hero.name,
    kind: 'library' as const,
    class: hero.class,
    element: hero.element,
    roles: hero.roles,
    href: `/hero-builds/#${hero.slug}`,
    modes: modesForHero(hero.name),
  })),
  ...Array.from(sampleOnlyNames)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      slug: slugify(name),
      name,
      kind: 'sample-only' as const,
      modes: modesForHero(name),
    })),
];

export function getRosterHero(slugOrName: string): RosterHero | undefined {
  const key = heroKey(slugOrName);
  return ROSTER_HEROES.find((hero) => hero.slug === slugOrName || heroKey(hero.name) === key);
}

export function rosterHas(roster: Iterable<string>, name: string): boolean {
  const wanted = heroKey(name);
  return Array.from(roster).some((entry) => heroKey(entry) === wanted);
}

export function matchTeam(roster: Iterable<string>, team: SampleTeam): TeamMatch {
  const have: string[] = [];
  const missing: string[] = [];
  for (const hero of team.heroes) {
    if (rosterHas(roster, hero)) have.push(hero);
    else missing.push(hero);
  }
  return {
    team,
    have,
    missing,
    complete: missing.length === 0 && team.heroes.length > 0,
  };
}

export function matchMode(modeId: string, roster: Iterable<string>): ModeMatchResult | undefined {
  const mode = getMode(modeId);
  if (!mode) return undefined;
  const teams = sampleTeamsFor(mode).map((team) => matchTeam(roster, team));
  return {
    mode,
    teams,
    completeCount: teams.filter((row) => row.complete).length,
  };
}

/** Library-hero role coverage only. Never invents a job for a sample-only name. */
export function libraryRoleCoverage(roster: Iterable<string>): { hero: RosterHero; roles: readonly string[] }[] {
  const keys = new Set(Array.from(roster, heroKey));
  return ROSTER_HEROES.filter(
    (hero) => hero.kind === 'library' && keys.has(heroKey(hero.name)) && (hero.roles?.length || 0) > 0,
  ).map((hero) => ({ hero, roles: hero.roles || [] }));
}

export function filterRosterHeroes(heroes: readonly RosterHero[], query: string): RosterHero[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...heroes];
  return heroes.filter((hero) => {
    return (
      hero.name.toLowerCase().includes(q) ||
      hero.slug.includes(q) ||
      (hero.class || '').toLowerCase().includes(q) ||
      (hero.element || '').toLowerCase().includes(q)
    );
  });
}

export function heroesInMode(modeId: TeamBuilderModeId): RosterHero[] {
  return ROSTER_HEROES.filter((hero) => hero.modes.includes(modeId));
}

export function libraryHeroesNotInMode(modeId: TeamBuilderModeId): RosterHero[] {
  return ROSTER_HEROES.filter((hero) => hero.kind === 'library' && !hero.modes.includes(modeId));
}

export const TEAM_BUILDER_COUNTS = {
  modes: TEAM_BUILDER_MODES.length,
  teams: SAMPLE_TEAMS.length,
  libraryHeroes: HERO_BUILDS.length,
  sampleOnlyHeroes: ROSTER_HEROES.filter((hero) => hero.kind === 'sample-only').length,
  rosterHeroes: ROSTER_HEROES.length,
} as const;
