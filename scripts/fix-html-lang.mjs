/**
 * Post-export fix: Next.js has a single root layout, so every static page is
 * emitted with <html lang="en">. Rewrite the lang attribute per locale folder
 * so /ko/, /ja/, /zh-tw/, /th/, /es/, /pt/, /de/, /fr/, /pl/ carry the right value in
 * the static HTML (not only after client-side JS runs).
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const OUT = 'out';
const LOCALE_LANG = {
  ko: 'ko',
  ja: 'ja',
  'zh-tw': 'zh-Hant',
  th: 'th',
  es: 'es',
  pt: 'pt',
  de: 'de',
  fr: 'fr',
  pl: 'pl',
};

function walk(dir) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) files.push(...walk(full));
    else if (name.endsWith('.html')) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(OUT)) {
  const rel = relative(OUT, file).split(sep);
  const lang = LOCALE_LANG[rel[0]] || 'en';
  const html = readFileSync(file, 'utf8');
  let next = html.replace(/<html\b([^>]*?)\blang="[^"]*"/, `<html$1lang="${lang}"`);
  // React emits hrefLang in static HTML; normalize to the standard lowercase attribute.
  next = next.replace(/\bhrefLang=/g, 'hreflang=');
  if (next !== html) {
    writeFileSync(file, next);
    changed += 1;
  }
}
console.log(`fix-html-lang: updated ${changed} HTML files`);
