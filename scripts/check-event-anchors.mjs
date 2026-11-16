/**
 * Focused render check for the 3,000-day comment / carrot links.
 * Run after `npm run build`. Reads static HTML in out/.
 *
 * Does not auto-link every URL: 14618757 on English updates must stay plain text.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const outDir = path.join(root, 'out');
const COMMENT = 'celebrate-3000-comment';
const CARROT = 'gather-carrots';
const STOVE_COMMENT =
  'https://page.onstove.com/epicseven/global/view/14628607';
const STOVE_CARROT =
  'https://page.onstove.com/epicseven/global/view/14606362';
const LOCALES = [
  { prefix: '', hrefPrefix: '' },
  { prefix: 'ko', hrefPrefix: '/ko' },
  { prefix: 'zh-tw', hrefPrefix: '/zh-tw' },
  { prefix: 'th', hrefPrefix: '/th' },
];

const failures = [];

function fail(msg) {
  failures.push(msg);
}

function read(rel) {
  const file = path.join(outDir, rel);
  if (!fs.existsSync(file)) {
    fail(`missing ${rel}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function body(html) {
  return html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
}

function hrefs(html, id) {
  const re = new RegExp(
    `<a\\b[^>]*\\bhref="([^"]*${id}[^"]*)"`,
    'g',
  );
  return [...html.matchAll(re)].map((m) => m[1]);
}

function hasAnchor(html, href) {
  const esc = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`<a\\b[^>]*\\bhref="${esc}"`).test(html);
}

function plainUrlOutsideAnchors(html, url) {
  const stripped = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, '');
  return stripped.includes(url);
}

for (const { prefix, hrefPrefix } of LOCALES) {
  const updatesRel = prefix ? `${prefix}/updates/index.html` : 'updates/index.html';
  const questsRel = prefix ? `${prefix}/quests/index.html` : 'quests/index.html';
  const updates = body(read(updatesRel));
  const quests = body(read(questsRel));
  const label = prefix || 'en';

  for (const [name, html] of [
    ['updates', updates],
    ['quests', quests],
  ]) {
    if (!html.includes(`id="${COMMENT}"`)) {
      fail(`${label} ${name} missing #${COMMENT}`);
    }
    if (!html.includes(`id="${CARROT}"`)) {
      fail(`${label} ${name} missing #${CARROT}`);
    }
  }

  if (!hasAnchor(updates, STOVE_COMMENT)) fail(`${label} updates missing comment official <a>`);
  if (!hasAnchor(updates, STOVE_CARROT)) fail(`${label} updates missing carrot official <a>`);
  if (!hasAnchor(quests, STOVE_COMMENT)) fail(`${label} quests missing comment official <a>`);
  if (plainUrlOutsideAnchors(updates, STOVE_COMMENT)) {
    fail(`${label} updates still has plain-text comment URL`);
  }
  if (plainUrlOutsideAnchors(updates, STOVE_CARROT)) {
    fail(`${label} updates still has plain-text carrot URL`);
  }
  if (plainUrlOutsideAnchors(quests, STOVE_COMMENT)) {
    fail(`${label} quests still has plain-text comment URL`);
  }
  if (updates.includes('epicsevensteam.com/quests')) {
    fail(`${label} updates still has absolute quests URL`);
  }
  if (quests.includes('epicsevensteam.com/updates')) {
    fail(`${label} quests still has absolute updates URL`);
  }
  if (updates.includes('[[') || quests.includes('[[')) {
    fail(`${label} visible markup still contains [[`);
  }

  const questFromUpdates = `${hrefPrefix}/quests/#${CARROT}`;
  const commentFromQuests = `${hrefPrefix}/updates/#${COMMENT}`;
  const carrotFromQuests = `${hrefPrefix}/updates/#${CARROT}`;
  if (!hasAnchor(updates, questFromUpdates)) {
    fail(`${label} updates missing ${questFromUpdates}`);
  }
  if (!hasAnchor(quests, commentFromQuests)) {
    fail(`${label} quests missing ${commentFromQuests}`);
  }
  if (!hasAnchor(quests, carrotFromQuests)) {
    fail(`${label} quests missing ${carrotFromQuests}`);
  }

  const windows = [
    '14:59 UTC',
    '11/26',
    '02:59 UTC',
    '11/18',
  ];
  for (const bit of windows) {
    if (!updates.includes(bit)) fail(`${label} updates lost window text ${bit}`);
    if (!quests.includes(bit)) fail(`${label} quests lost window text ${bit}`);
  }
  if (!updates.includes('2 Leif') || !updates.includes('7')) {
    fail(`${label} updates lost reward caveat`);
  }
  if (!updates.includes('800')) fail(`${label} updates lost 800 carrot caveat`);
}

const th = body(read('th/updates/index.html'));
if (th.includes('ถล่องจดหมาย')) fail('Thai typo ถล่องจดหมาย still present');
if (!th.includes('ส่งเข้ากล่องจดหมายในเกม')) {
  fail('Thai mailbox wording ส่งเข้ากล่องจดหมายในเกม missing');
}

const enUpdates = body(read('updates/index.html'));
const preview = 'https://page.onstove.com/epicseven/global/view/14618757';
if (!enUpdates.includes(preview)) fail('EN updates lost untouched 14618757 notice');
if (hasAnchor(enUpdates, preview)) fail('EN updates auto-linked unrelated 14618757');
if (hrefs(enUpdates, '14618757').length) fail('14618757 appeared in an href');

for (const rel of ['ja/updates/index.html', 'ja/quests/index.html', 'es/updates/index.html']) {
  const html = body(read(rel));
  if (html.includes(`id="${COMMENT}"`) || html.includes(`id="${CARROT}"`)) {
    fail(`${rel} gained an event anchor outside EN/KO/zh-tw/TH`);
  }
  if (html.includes('14628607') || html.includes('14606362')) {
    fail(`${rel} gained a 3000-day post id`);
  }
}

const caseFilesLocales = [
  { rel: 'index.html', label: 'Case Files' },
  { rel: 'ko/index.html', label: 'Case Files (영어)' },
  { rel: 'zh-tw/index.html', label: 'Case Files（英文）' },
  { rel: 'th/index.html', label: 'Case Files (ภาษาอังกฤษ)' },
];
for (const { rel, label } of caseFilesLocales) {
  const html = body(read(rel));
  const mapHit = html.includes(`<a href="/case-files/">${label}</a>`);
  if (!mapHit) fail(`${rel} missing site-map link /case-files/ “${label}”`);
  if (/href="\/(?:ko|zh-tw|th|ja)\/case-files\//.test(html)) {
    fail(`${rel} links a localized case-files shell`);
  }
}
const jaHome = body(read('ja/index.html'));
const jaCase = [...jaHome.matchAll(/href="([^"]*case-files[^"]*)"/g)].map((m) => m[1]);
if (jaCase.length !== 1 || jaCase[0] !== '/case-files/') {
  fail(`ja home case-files hrefs changed: ${jaCase.join(',')}`);
}
if (jaHome.includes('>Case Files</a>') || jaHome.includes('>Case Files (')) {
  fail('ja home gained an English Case Files site-map label');
}

if (failures.length) {
  console.error(`FAIL ${failures.length}`);
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}
console.log('PASS event anchors, official links, Thai mailbox, case-files map, no generic autolink');
