/**
 * Self-drawn avatar tints and two-letter badges for the English tool pages.
 *
 * Library heroes use the element already published in hero-builds.ts.
 * Sample-only names use an element colour only when this site already
 * publishes a class/element for that exact name on /tier-list/. Otherwise
 * the plate is a neutral grey placeholder — we do not invent an element.
 */
import { HERO_BUILDS, type HeroElement } from '@/lib/hero-builds';

export type AvatarTint = HeroElement | 'Neutral';

const LIBRARY_TINT: Record<string, HeroElement> = Object.fromEntries(
  HERO_BUILDS.flatMap((hero) => (hero.element ? [[hero.slug, hero.element] as const] : [])),
);

/**
 * On-site class/element quotes from lib/i18n/tier-resources.ts
 * (TIER_PVE_SS_ROWS and the WA samples published on /tier-list/).
 */
const SAMPLE_SOURCED_TINT: Record<string, HeroElement> = {
  'afternoon-soak-flan': 'Fire', // Fire Ranger 5★, TIER_PVE_SS_ROWS
  brieg: 'Ice', // Ice Knight 5★, TIER_PVE_SS_ROWS
  fenne: 'Ice', // Ice Soul Weaver 5★, TIER_PVE_SS_ROWS
  lisette: 'Light', // Light Soul Weaver 5★, TIER_WA_ROWS
  'shepherd-of-the-dark-diene': 'Dark', // Dark Mage 5★, TIER_WA_S_SAMPLE
};

/** Explicit two-letter badges (same rules as scripts/generate-tool-images.py). */
const LETTERS: Record<string, string> = {
  ras: 'Ra',
  mercedes: 'Me',
  aither: 'Ai',
  judith: 'Ju',
  'angelic-montmorancy': 'AM',
  'falconer-kluri': 'FK',
  'commander-lorina': 'CL',
  alexa: 'Al',
  furious: 'Fu',
  silk: 'Si',
  vildred: 'Vi',
  luna: 'Lu',
  tamarinne: 'Ta',
  'fallen-cecilia': 'FC',
  'ruele-of-light': 'RL',
  'seaside-bellona': 'SB',
  'specter-tenebria': 'ST',
  'arbiter-vildred': 'AV',
  politis: 'Po',
  cerise: 'Ce',
  'afternoon-soak-flan': 'AF',
  angelica: 'An',
  bellona: 'Be',
  brieg: 'Br',
  camilla: 'Ca',
  cermia: 'Ce',
  eligos: 'El',
  fenne: 'Fe',
  'free-spirit-tieria': 'FT',
  'holiday-yufine': 'HY',
  'immortal-wukong': 'IW',
  landy: 'La',
  leah: 'Le',
  lisette: 'Li',
  mort: 'Mo',
  muwi: 'Mu',
  'renoa': 'Re',
  rose: 'Ro',
  schniel: 'Sc',
  'shepherd-of-the-dark-diene': 'SD',
  sigret: 'Si',
  'taranor-guard': 'TG',
  vivian: 'Vi',
};

const SKIP = new Set(['of', 'the', 'a', 'an', 'and']);

export function avatarLetters(slug: string, name?: string): string {
  if (LETTERS[slug]) return LETTERS[slug];
  const words = (name || slug)
    .split(/[\s-]+/)
    .map((w) => w.trim())
    .filter((w) => w && !SKIP.has(w.toLowerCase()));
  if (words.length >= 2) {
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
  const compact = (name || slug).replace(/[^a-zA-Z]/g, '');
  if (compact.length >= 2) return compact[0].toUpperCase() + compact[1].toLowerCase();
  return (compact[0] || '?').toUpperCase();
}

export function avatarTint(slug: string): AvatarTint {
  return LIBRARY_TINT[slug] || SAMPLE_SOURCED_TINT[slug] || 'Neutral';
}

export function avatarSrc(slug: string): string {
  return `/images/avatars/${slug}.webp`;
}

export function avatarAlt(name: string, tint: AvatarTint): string {
  if (tint === 'Neutral') {
    return `${name} — self-drawn placeholder avatar, not official art`;
  }
  return `${name} — self-drawn element-colour avatar, not official art`;
}
