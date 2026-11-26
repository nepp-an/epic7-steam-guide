/** Generate public/sitemap.xml for every locale × core path with full hreflang. */
import { writeFileSync } from 'node:fs';

const ORIGIN = 'https://epicsevensteam.com';
const LAST_MOD = '2026-11-09';
/** Pages whose body changed in the 2026-11-21 living-log pass. */
const LIVING_CHANGED = '2026-11-21';
const LIVING_PATHS = new Set([
  '/updates/',
  '/maintenance/',
  '/foundry/',
  '/secret-rabbit-hole/',
  '/about/',
]);
const TIER_CHANGED = '2026-11-10';
const GROWTH_CHANGED = '2026-11-23';
const GROWTH_LOCALES = new Set(['en', 'ko', 'zh-tw', 'th']);
const GROWTH_PATHS = new Set(['/', '/foundry/', '/quests/']);
const PATHS = [
  '/',
  '/download/',
  '/steam-transfer/',
  '/demo-delete-warning/',
  '/steam-notes/',
  '/faq/',
  '/foundry/',
  '/secret-rabbit-hole/',
  '/heroes/',
  '/quests/',
  '/banners/',
  '/updates/',
  '/maintenance/',
  '/about/',
  '/contact/',
  '/privacy/',
];
/**
 * Case Files is a full page in English, Korean, Traditional Chinese, and Thai.
 * Do not list ja/es/pt/de/fr/pl — those URLs do not exist.
 */
const CASE_FILES_LOCALES = [
  ['en', 'en'],
  ['ko', 'ko'],
  ['zh-tw', 'zh-Hant'],
  ['th', 'th'],
];
const CASE_FILES_PUBLISHED = '2026-11-17';
const LOCALES = [
  ['en', 'en'],
  ['ko', 'ko'],
  ['ja', 'ja'],
  ['zh-tw', 'zh-Hant'],
  ['th', 'th'],
  ['es', 'es'],
  ['pt', 'pt'],
  ['de', 'de'],
  ['fr', 'fr'],
  ['pl', 'pl'],
];

function urlFor(locale, path) {
  if (locale === 'en') return `${ORIGIN}${path}`;
  if (path === '/') return `${ORIGIN}/${locale}/`;
  return `${ORIGIN}/${locale}${path}`;
}

/** English Steam page ↔ the nine old locale Steam guides (not the resource page). */
function steamTierUrl(locale) {
  return locale === 'en' ? '/steam-tier-list/' : `/${locale}/tier-list/`;
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
];

function pushUrl(loc, lastmod, alternates, priority = '0.8') {
  lines.push('  <url>');
  lines.push(`    <loc>${loc}</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  for (const [hreflang, href] of alternates) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`,
    );
  }
  lines.push('    <changefreq>weekly</changefreq>');
  lines.push(`    <priority>${priority}</priority>`);
  lines.push('  </url>');
}

for (const path of PATHS) {
  for (const [locale] of LOCALES) {
    const alternates = LOCALES.map(([altLocale, hreflang]) => [
      hreflang,
      urlFor(altLocale, path),
    ]);
    alternates.push(['x-default', urlFor('en', path)]);
    const lastmod = GROWTH_LOCALES.has(locale) && GROWTH_PATHS.has(path)
      ? GROWTH_CHANGED
      : LIVING_PATHS.has(path) ? LIVING_CHANGED : LAST_MOD;
    pushUrl(urlFor(locale, path), lastmod, alternates, path === '/' ? '1.0' : '0.8');
  }
}
for (const [locale] of CASE_FILES_LOCALES) {
  const alternates = CASE_FILES_LOCALES.map(([altLocale, hreflang]) => [
    hreflang,
    urlFor(altLocale, '/case-files/'),
  ]);
  alternates.push(['x-default', urlFor('en', '/case-files/')]);
  pushUrl(
    urlFor(locale, '/case-files/'),
    GROWTH_CHANGED,
    alternates,
  );
}

/*
 * /tier-list/ is now an English-only mode-resource page. It must not claim the
 * nine locale /tier-list/ pages as translations.
 */
pushUrl(`${ORIGIN}/tier-list/`, GROWTH_CHANGED, [
  ['en', `${ORIGIN}/tier-list/`],
  ['x-default', `${ORIGIN}/tier-list/`],
]);

/*
 * The English /steam-tier-list/ page and the nine locale /[locale]/tier-list/
 * Steam guides are one reciprocal hreflang group. Each locale keeps its own
 * self-canonical URL; English points at the new Steam page.
 */
const steamAlternates = LOCALES.map(([locale, hreflang]) => [
  hreflang,
  `${ORIGIN}${steamTierUrl(locale)}`,
]);
steamAlternates.push(['x-default', `${ORIGIN}/steam-tier-list/`]);
for (const [locale] of LOCALES) {
  pushUrl(
    `${ORIGIN}${steamTierUrl(locale)}`,
    TIER_CHANGED,
    steamAlternates,
    locale === 'en' ? '0.9' : '0.8',
  );
}


/*
 * /gear-score-calculator/ is an English-only interactive tool. It must not
 * claim locale paths that do not exist.
 */
const GEAR_SCORE_CHANGED = '2026-11-26';
pushUrl(`${ORIGIN}/gear-score-calculator/`, GEAR_SCORE_CHANGED, [
  ['en', `${ORIGIN}/gear-score-calculator/`],
  ['x-default', `${ORIGIN}/gear-score-calculator/`],
], '0.8');


/*
 * /hero-builds/ is an English-only sourced library. It must not claim
 * locale paths that do not exist.
 */
const HERO_BUILDS_CHANGED = '2026-11-26';
pushUrl(`${ORIGIN}/hero-builds/`, HERO_BUILDS_CHANGED, [
  ['en', `${ORIGIN}/hero-builds/`],
  ['x-default', `${ORIGIN}/hero-builds/`],
], '0.8');

/*
 * /team-builder/ is an English-only interactive matcher. It must not
 * claim locale paths that do not exist.
 */
const TEAM_BUILDER_CHANGED = '2026-11-26';
pushUrl(`${ORIGIN}/team-builder/`, TEAM_BUILDER_CHANGED, [
  ['en', `${ORIGIN}/team-builder/`],
  ['x-default', `${ORIGIN}/team-builder/`],
], '0.8');

/*
 * /steam-beginner/, /steam-vs-mobile/, /summon-calculator/,
 * /already-registered/, /wrong-bind/, and /transfer-vs-foundry/ are
 * English-only pages. They must not claim locale paths that do not exist.
 */
const NEW_EN_PAGES_CHANGED = '2026-11-26';
for (const path of ['/steam-beginner/', '/steam-vs-mobile/', '/summon-calculator/', '/already-registered/', '/wrong-bind/', '/transfer-vs-foundry/', '/epic-road/', '/e7wc-2026-grand-final/', '/call-of-chaos/']) {
  pushUrl(`${ORIGIN}${path}`, NEW_EN_PAGES_CHANGED, [
    ['en', `${ORIGIN}${path}`],
    ['x-default', `${ORIGIN}${path}`],
  ], '0.8');
}

lines.push('</urlset>', '');
writeFileSync('public/sitemap.xml', lines.join('\n'));
console.log(
  `sitemap: ${PATHS.length * LOCALES.length + CASE_FILES_LOCALES.length + 1 + LOCALES.length + 12} urls`,
);
