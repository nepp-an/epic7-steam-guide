/**
 * Focused render check for the 3,000-day comment / carrot links.
 * Run after `npm run build`. Reads static HTML in out/.
 *
 * Official Steam/STOVE URLs that were plain text in updates are anchors.
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
if (!hasAnchor(enUpdates, preview)) fail('EN updates missing 14618757 anchor');
if (enUpdates.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, '').includes(preview)) {
  fail('EN updates still has plain-text 14618757');
}

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
  { rel: 'index.html', href: '/case-files/', label: 'Case Files' },
  { rel: 'ko/index.html', href: '/ko/case-files/', label: '케이스 파일' },
  { rel: 'zh-tw/index.html', href: '/zh-tw/case-files/', label: '案例檔案' },
  { rel: 'th/index.html', href: '/th/case-files/', label: 'แฟ้มคดี' },
];
for (const { rel, href, label } of caseFilesLocales) {
  const html = body(read(rel));
  const mapHit = html.includes(`<a href="${href}">${label}</a>`);
  if (!mapHit) fail(`${rel} missing site-map link ${href} “${label}”`);
  if (/href="\/(?:ja|es|pt|de|fr|pl)\/case-files\//.test(html)) {
    fail(`${rel} links a case-files path that does not exist`);
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

const casePages = [
  {
    rel: 'ko/case-files/index.html',
    lang: 'ko',
    canon: 'https://epicsevensteam.com/ko/case-files/',
    h1: 'Epic Seven 케이스 파일(Steam) — 무엇인가',
    title: 'Epic Seven 케이스 파일(Steam) — Secret Rabbit♥Hole 가이드',
  },
  {
    rel: 'zh-tw/case-files/index.html',
    lang: 'zh-Hant',
    canon: 'https://epicsevensteam.com/zh-tw/case-files/',
    h1: 'Epic Seven 案例檔案（Steam）— 是什麼',
    title: 'Epic Seven 案例檔案（Steam）— Secret Rabbit♥Hole 指南',
  },
  {
    rel: 'th/case-files/index.html',
    lang: 'th',
    canon: 'https://epicsevensteam.com/th/case-files/',
    h1: 'แฟ้มคดี Epic Seven (Steam) — คืออะไร',
    title: 'แฟ้มคดี Epic Seven (Steam) — คู่มือ Secret Rabbit♥Hole',
  },
];
for (const page of casePages) {
  const html = read(page.rel);
  if (!html.includes(`<html lang="${page.lang}"`)) fail(`${page.rel} lang`);
  if (!html.includes(`<link rel="canonical" href="${page.canon}"`)) {
    fail(`${page.rel} canonical`);
  }
  if (!html.includes(`<h1>${page.h1}</h1>`)) fail(`${page.rel} h1`);
  if (!html.includes(`<title>${page.title}</title>`)) fail(`${page.rel} title`);
  if (!html.includes('2026-12-10 02:59 UTC') || !html.includes('2026-11-19 02:59 UTC')) {
    fail(`${page.rel} missing verified dates`);
  }
  if (!html.includes('href="https://page.onstove.com/epicseven/global/view/14606293"')) {
    fail(`${page.rel} missing Case Files source link`);
  }
  if (!html.includes('href="https://page.onstove.com/epicseven/global/view/14606365"')) {
    fail(`${page.rel} missing Lucky Board source link`);
  }
  const visible = body(html);
  if (visible.includes('No culprit answers are published here')) {
    fail(`${page.rel} still shows the English answer paragraph`);
  }
  if (visible.includes('<h1>Epic Seven Case Files (Steam) — what it is</h1>')) {
    fail(`${page.rel} is an English H1 fallback`);
  }
  for (const alt of [
    'hreflang="en" href="https://epicsevensteam.com/case-files/"',
    'hreflang="ko" href="https://epicsevensteam.com/ko/case-files/"',
    'hreflang="zh-Hant" href="https://epicsevensteam.com/zh-tw/case-files/"',
    'hreflang="th" href="https://epicsevensteam.com/th/case-files/"',
    'hreflang="x-default" href="https://epicsevensteam.com/case-files/"',
  ]) {
    if (!html.includes(alt)) fail(`${page.rel} missing ${alt}`);
  }
  if (/hreflang="(?:ja|es|pt|de|fr|pl)"/.test(html)) {
    fail(`${page.rel} claims a case-files language that does not exist`);
  }
}
const enCase = read('case-files/index.html');
if (!enCase.includes('<h1>Epic Seven Case Files (Steam) — what it is</h1>')) {
  fail('English case-files H1 changed');
}
if (!enCase.includes('<title>Epic Seven Case Files (Steam) — Trusty Sidekick Alencia | Secret Rabbit♥Hole</title>')) {
  fail('English case-files title changed');
}
if (!enCase.includes('<link rel="canonical" href="https://epicsevensteam.com/case-files/"')) {
  fail('English case-files canonical changed');
}
const desc = enCase.match(/<meta name="description" content="([^"]*)"/);
const descText = desc
  ? desc[1]
      .replace(/&#x27;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, '&')
  : '';
const expectedDesc =
  "Epic Seven Case Files on Steam: Trusty Sidekick Alencia's Case Files, the deduction mini-game inside Secret Rabbit♥Hole, how it differs from the Lucky Board, and the 11/19 vs 12/10 deadlines. No spoilers.";
if (descText !== expectedDesc) fail(`English description is ${descText}`);
if (/culprit|reward|answer/i.test(descText)) {
  fail('English description promises answers, culprits, or rewards');
}

function mainText(html) {
  const m = body(html).match(/<main>([\s\S]*?)<\/main>/);
  return m ? m[1] : '';
}
function hanHits(text) {
  const hits = [];
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    const han =
      (code >= 0x4e00 && code <= 0x9fff) ||
      (code >= 0x3400 && code <= 0x4dbf);
    if (!han) continue;
    hits.push(text.slice(Math.max(0, i - 12), i + 12).replace(/\s+/g, ' '));
  }
  return hits;
}
for (const rel of ['ko/case-files/index.html', 'th/case-files/index.html']) {
  const hits = hanHits(mainText(read(rel)));
  if (hits.length) fail(`${rel} main still has Han: ${hits.slice(0, 6).join(' || ')}`);
}
if (mainText(read('th/case-files/index.html')).includes('推理')) {
  fail('Thai case-files main still contains 推理');
}

const linkPages = [
  ['banners/index.html', 'https://page.onstove.com/epicseven/global/view/14608118'],
  ['ko/banners/index.html', 'https://page.onstove.com/epicseven/global/view/14608118'],
  ['faq/index.html', 'https://page.onstove.com/epicseven/global/view/14608118'],
  ['ja/faq/index.html', 'https://page.onstove.com/epicseven/global/view/14608118'],
  ['maintenance/index.html', 'https://store.steampowered.com/news/app/5019180/view/1848664643349012'],
  ['maintenance/index.html', 'https://page.onstove.com/epicSeven/global/view/14618757'],
  ['de/maintenance/index.html', 'https://page.onstove.com/epicseven/global/view/14608118'],
  ['updates/index.html', 'https://store.steampowered.com/feeds/news/app/5019180/?l=english'],
  ['updates/index.html', 'https://page.onstove.com/epicseven/global/list/986'],
  ['updates/index.html', 'https://page.onstove.com/epicseven/global/view/14628607'],
  ['th/quests/index.html', 'https://page.onstove.com/epicseven/global/view/14628607'],
];
for (const [rel, href] of linkPages) {
  const html = body(read(rel));
  if (!html.includes(`href="${href}"`)) fail(`${rel} missing exact href ${href}`);
  const stripped = html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, '');
  if (stripped.includes(href)) fail(`${rel} still has plain-text ${href}`);
}
for (const rel of ['updates/index.html', 'ko/updates/index.html', 'zh-tw/updates/index.html', 'th/updates/index.html', 'quests/index.html', 'ko/quests/index.html']) {
  const html = body(read(rel));
  if (html.includes('comment on that post by') || html.includes('留言參加') || html.includes('참여합니다') || html.includes('ร่วมโดยคอมเมนต์')) {
    fail(`${rel} still invites a comment in the present tense`);
  }
  if (!html.includes('11/18') || !html.includes('14:59 UTC')) {
    fail(`${rel} lost the 11/18 14:59 UTC comment deadline`);
  }
}
const home = body(read('index.html'));
if (!home.includes('<details class="primary-nav">')) fail('home missing collapsible primary nav');
if (!home.includes('aria-label="Language"')) fail('home missing language switch');
const details = home.match(/<details class="primary-nav">[\s\S]*?<\/details>/);
if (!details || details[0].includes('aria-label="Language"')) {
  fail('language switch is inside the collapsed primary nav');
}
if (!home.includes('>Menu</summary>')) fail('English menu label missing');
if (!body(read('ko/index.html')).includes('>메뉴</summary>')) fail('Korean menu label missing');

if (failures.length) {
  console.error(`FAIL ${failures.length}`);
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}
console.log('PASS event anchors, official links, Thai mailbox, case-files map, no generic autolink');
