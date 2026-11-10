/** Generate public/sitemap.xml for every locale × core path with full hreflang. */
import { writeFileSync } from 'node:fs';

const ORIGIN = 'https://epicsevensteam.com';
const LAST_MOD = '2026-11-09';
const TIER_CHANGED = '2026-11-10';
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
/** English-only intent pages (no localized shells until the copy exists). */
const EN_ONLY_PATHS = ['/case-files/'];
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
    pushUrl(urlFor(locale, path), LAST_MOD, alternates, path === '/' ? '1.0' : '0.8');
  }
}
for (const path of EN_ONLY_PATHS) {
  pushUrl(`${ORIGIN}${path}`, LAST_MOD, [
    ['en', `${ORIGIN}${path}`],
    ['x-default', `${ORIGIN}${path}`],
  ]);
}

/*
 * /tier-list/ is now an English-only mode-resource page. It must not claim the
 * nine locale /tier-list/ pages as translations.
 */
pushUrl(`${ORIGIN}/tier-list/`, TIER_CHANGED, [
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

lines.push('</urlset>', '');
writeFileSync('public/sitemap.xml', lines.join('\n'));
console.log(
  `sitemap: ${PATHS.length * LOCALES.length + EN_ONLY_PATHS.length + 1 + LOCALES.length} urls`,
);
