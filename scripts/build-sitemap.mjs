/** Generate public/sitemap.xml for every locale × core path with full hreflang. */
import { writeFileSync } from 'node:fs';

const ORIGIN = 'https://epicsevensteam.com';
const LAST_MOD = '2026-11-07';
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
  '/tier-list/',
  '/quests/',
  '/banners/',
  '/updates/',
  '/maintenance/',
  '/about/',
  '/contact/',
  '/privacy/',
];
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

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
];
for (const path of PATHS) {
  for (const [locale] of LOCALES) {
    lines.push('  <url>');
    lines.push(`    <loc>${urlFor(locale, path)}</loc>`);
    lines.push(`    <lastmod>${LAST_MOD}</lastmod>`);
    for (const [altLocale, hreflang] of LOCALES) {
      lines.push(
        `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${urlFor(altLocale, path)}" />`,
      );
    }
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en', path)}" />`,
    );
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push(`    <priority>${path === '/' ? '1.0' : '0.8'}</priority>`);
    lines.push('  </url>');
  }
}
lines.push('</urlset>', '');
writeFileSync('public/sitemap.xml', lines.join('\n'));
console.log(`sitemap: ${PATHS.length * LOCALES.length} urls`);
