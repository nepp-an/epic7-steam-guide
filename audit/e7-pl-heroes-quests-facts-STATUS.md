# E7 Polish hero fragments + six-locale quests / English Case Files fact cleanup — STATUS

- Recorded: **2026-11-10T20:03+08:00 (Asia/Shanghai)**
- Repo: `/workspace/cf-migrate/epic7-steam-guide`
- Branch: `master`
- Starting HEAD: `59e7c10d0acf3a0a43bd56ce3a2ee872861e1502` (`59e7c10`, clean; `git fetch` showed `master...origin/master` with no divergence)
- Content commit: written immediately before the single new commit; hash is in the final delivery message / `git log -1`
- Task type: narrow E7 content correction. No DTS/OCA, no CloudAgent, no second `dsh`, no GSC/IndexNow, no keyword expansion, no new domain, no paid action, no author invention, no real-account operation.
- Deploy path: GitHub `master` → Cloudflare Pages. This session did **not** do a direct Cloudflare upload or a second deployment.

This STATUS is written before the commit, so it does not contain its own commit hash. The commit hash is in the final delivery message and `git log -1`.

## 1. Short verdict

- **Task 1 — PASS at built-HTML level.** The six broken Polish fragment hrefs now target the real `#specialty-change` section. `/pl/heroes/` has zero in-site hrefs to the three missing fragments; `/pl/tier-list/` has exactly three `/pl/heroes/#specialty-change` hrefs. The target page still has `id="specialty-change"`. Other locales keep their real per-hero fragments and ids.
- **Task 2 — PASS at built-HTML level.** The six unsupported “wrong guess wastes a glass” clauses in ja/es/pt/de/fr/pl `/quests/` were replaced with the officially stated charge trigger: one glass per new question, re-checking a viewed question free. The rest of each paragraph (definition, daily glasses, Foundry / Lucky Board context) was preserved.
- **Task 3 — PASS at built-HTML level.** The English `/case-files/` paragraph replaced only the unsupported final clause with the same official charge trigger; the earlier lobby-icon / daily glasses / O/X / Culprit Clue content is retained.
- **Build — PASS.** `npm run build` completed with exit 0, including `fix-html-lang: updated 172 HTML files`.
- **Push — attempted after the commit.** Result is in the final delivery message; no amend/reset/rebase/force and no second deployment.
- **Not claimed:** no browser visual pass. Evidence here is source diff plus generated `out/` HTML inspection, not a browser test.

No row below is a batch-level PASS; the Polish fragment fix and the wording fixes are separate checks.

## 2. Baseline and changed files

Baseline:

```
59e7c10d0acf3a0a43bd56ce3a2ee872861e1502 fix(content): drop four leftover Withdraw diagrams from notes and demo pages, keep files
```

Changed files:

- `components/pages/renderers.tsx` — locale-aware hero-fragment fallback for the three affected slugs, used by the Heroes roster table and both tier-list renderers.
- `lib/i18n/content.ts` — six `/quests/` clauses and one English `/case-files/` clause.
- `audit/e7-pl-heroes-quests-facts-STATUS.md` — this file.

No DTS files, `next.config.mjs`, `package.json`, `package-lock.json`, `public/ads.txt`, ads/GA markers or locale route lists were changed. `git status` before the commit showed only the two source files above plus this new audit file.

## 3. Task 1 — Polish six bad fragment hrefs

Both source pages returned HTTP 200. This was **3 missing ids on one target page, 6 bad in-site hrefs across two pages**, not six 404 pages.

| Source page | Before | After |
|---|---|---|
| `/pl/heroes/` roster self-link (Angelic Montmorancy) | `#angelic-montmorancy` | `#specialty-change` |
| `/pl/heroes/` roster self-link (Falconer Kluri) | `#falconer-kluri` | `#specialty-change` |
| `/pl/heroes/` roster self-link (Commander Lorina) | `#commander-lorina` | `#specialty-change` |
| `/pl/tier-list/` (Angelic Montmorancy) | `/pl/heroes/#angelic-montmorancy` | `/pl/heroes/#specialty-change` |
| `/pl/tier-list/` (Falconer Kluri) | `/pl/heroes/#falconer-kluri` | `/pl/heroes/#specialty-change` |
| `/pl/tier-list/` (Commander Lorina) | `/pl/heroes/#commander-lorina` | `/pl/heroes/#specialty-change` |

### Implementation

`components/pages/renderers.tsx`:

- Added `RENDERED_HERO_GROUPS = {tutorial, specialty, farmer}` and a small `heroFragment(locale, slug)` helper.
- For `angelic-montmorancy`, `falconer-kluri`, `commander-lorina`, the helper reads that locale’s `CONTENT['/heroes/'][locale].heroes` row.
- If the row’s group is one of the three rendered keys, the href stays `#${slug}` / `/heroes/#${slug}` and the rendered card keeps its real `id={slug}`.
- Only if the row is missing from those rendered keys does it fall back to the existing `specialty-change` section. This is the Polish condition.
- `L()` still applies the locale prefix, so the tier href is generated as `/heroes/#specialty-change` and becomes `/pl/heroes/#specialty-change` only in Polish; no hard-coded `/pl/...` was introduced.
- Card self-links inside rendered cards were not changed.
- Anchor text (hero names) was not changed.
- No empty `<div id>` / shell anchors, no new hero rows, no group-key fix, no other-locale href changes, no epic7x external-link changes.

### Buffer / out evidence

`out/pl/heroes/index.html`:

- `href="#specialty-change"` — 4 (1 anchor-nav + 3 roster links).
- `href="#angelic-montmorancy"`, `href="#falconer-kluri"`, `href="#commander-lorina"` — **0**.
- `id="specialty-change"` — present.
- Roster anchor text remains `Angelic Montmorancy`, `Falconer Kluri`, `Commander Lorina`.

`out/pl/tier-list/index.html`:

- `href="/pl/heroes/#specialty-change"` — exactly **3**.
- The three old absolute hrefs — **0**.
- Anchor text remains the three hero names.

Other locales / English:

- `out/heroes/index.html`, `out/ja/heroes/index.html`, `out/de/heroes/index.html`: each still has `href="#angelic-montmorancy"` / `#falconer-kluri` / `#commander-lorina` and the real `id="..."` card targets.
- `out/steam-tier-list/index.html`, `out/ja/tier-list/index.html`, `out/de/tier-list/index.html`, and the other six non-English tier pages still link `/[locale/]heroes/#angelic-montmorancy` etc.; the matching hero pages contain those ids. No locale was switched to `#specialty-change`.
- English `/tier-list/` is an external-resource comparison and did not use these hero fragment links; it is unchanged.

### Root cause deliberately left in place

In `lib/i18n/content.ts`, the Polish rows for these three heroes still store the translated group key `specjalizacja` and priority `wysoki` instead of `specialty` / `high`. `heroesInGroup(rows, 'specialty')` therefore returns no rows for them in Polish, so `HeroesView` does not render their `id={slug}` cards, while the roster table used to emit `#${slug}`.

This batch does **not** change those keys, does not add hero entries, and does not force the cards to appear. That would change visible page content and needs separate authorization. Only the href destination was corrected to the real section that already names all three heroes in Polish.

## 4. Task 2 — six `/quests/` clauses

The official source is STOVE Epic Seven Global view **14606293**:
<https://page.onstove.com/epicseven/global/view/14606293>

Official statements used:

- “One Trusty Sidekick's Magnifying Glass is consumed each time you ask a question to collect clues.”
- “Re-checking a question you have already viewed does not require a Trusty Sidekick's Magnifying Glass.”
- Grid-entry mistakes can be handled with [Eraser] / [Reset].
- “The outcome of Accusation is either Success or Failure.”

The official text reviewed for this batch does not state an extra glass charge for a wrong guess or a failed accusation. This batch therefore replaces only the unsupported charge assertion with the explicitly stated charge trigger. It does **not** assert any additional negative rule beyond the official wording.

| Locale | Before (relevant clause, full) | After (relevant clause, full) |
|---|---|---|
| ja | 外すと限られた虫眼鏡を浪費します。 | 新しい質問1回につき虫眼鏡1個を消費し、既読の質問の再確認は消費しません。 |
| es | fallar desperdicia lupas limitadas. | cada pregunta nueva consume una lupa; volver a consultar una pregunta ya vista no consume lupas. |
| pt | errar desperdiça lupas limitadas. | cada pergunta nova consome uma lupa; rever uma pergunta já vista não consome lupas. |
| de | Fehlversuche verschwenden die begrenzten Lupen. | jede neue Frage kostet eine Lupe; das erneute Prüfen einer bereits gelesenen Frage kostet keine Lupe. |
| fr | se tromper gaspille des loupes limitées. | chaque nouvelle question consomme une loupe ; revoir une question déjà consultée n’en consomme pas. |
| pl | błędne domysły marnują limitowane lupy. | każde nowe pytanie zużywa jedną lupę; ponowne sprawdzenie wcześniej przeczytanego pytania jej nie zużywa. |

The first letter was lower-cased in es/pt/de/fr/pl where the replacement follows an existing semicolon or em dash, so the clause fits the existing sentence. The Japanese replacement follows the existing comma. Semantics match the requested wording.

Kept in all six paragraphs: the Case Files definition, the launch-window grid-deduction framing, daily magnifying glasses, and the following Foundry daily/weekly / Lucky Board placement. No calendar, three-node, tense or cross-server content was touched.

`out/` evidence:

- New phrase present once in each of `out/ja/quests/`, `out/es/quests/`, `out/pt/quests/`, `out/de/quests/`, `out/fr/quests/`, `out/pl/quests/`.
- Old clauses (`外すと限られた虫眼鏡を浪費`, `fallar desperdicia`, `errar desperdiça`, `Fehlversuche verschwenden`, `se tromper gaspille`, `błędne domysły marnują`) — 0 matches across `out/**/*.html`.

## 5. Task 3 — English `/case-files/`

`CONTENT['/case-files/'].en.paras[0]` — only the final unsupported clause was replaced.

Before:

> A wrong accusation or a wasted clue costs a limited resource, so read the case text before you mark the grid.

After:

> Each new question consumes one magnifying glass; re-checking a question you have already viewed does not. Read the case text before you mark the grid.

Retained unchanged before that clause: lobby event icon → Secret Rabbit♥Hole → Case Files, daily magnifying glasses, O/X grid, unlock the Culprit Clue before accusing.

`out/case-files/index.html`:

- New sentence present once.
- `wrong accusation or a wasted clue costs` — 0 matches.
- No claim was added that an accusation or wrong guess is free; the sentence states only the official charge trigger.

## 6. Intentionally unchanged legacy statements

These same-type statements were found in the listed pages and are **not changed** in this batch, because they are outside the authorized scope (and ko/zh-tw/th `/quests/` are in the previously accepted 21-core area):

| Page | Legacy sentence still present in `out/` |
|---|---|
| `/quests/` en | `wrong guesses waste the limited glasses.` |
| `/ko/quests/` | `틀린 추측은 한정 돋보기를 낭비합니다.` |
| `/zh-tw/quests/` | `猜錯會浪費有限放大鏡。` |
| `/th/quests/` | `ทายผิดจะเสียแว่นที่มีจำกัด` |

All four were confirmed present after the build (`grep -c` = 1 each). They are logged as remaining legacy, not as fixed or endorsed.

Also intentionally untouched: `supplement.ts` h2 headings such as “without wasted glasses / 虫眼鏡を無駄にしない / sin desperdiciar lupas …” (heading-level phrasing, not this charge-rule assertion), the Polish `specjalizacja` / `wysoki` group keys, the 153 non-English entry mixed-snapshot review, and material-licensing research.

## 7. Frozen English `/steam-transfer/` regression

No `/steam-transfer/` content field or asset was edited (`git diff` contains no transfer lines). Built-output checks:

| Frozen item | Observed in `out/steam-transfer/index.html` | Status |
|---|---|---|
| Title | `Epic Seven Steam Transfer Guide \| Keep Progress \| E7` | unchanged |
| H1 | `Epic Seven Steam transfer — keep progress` | unchanged |
| First H2 | `Pre-transfer checklist` | unchanged |
| Last verified | `2026-11-07` | unchanged |
| Approved `answer` / Wrong-bind Convert sentence | `Epic Seven Steam transfer keeps progress by converting … Wrong-bind: do not delete the temporary Steam-linked STOVE account. … [My Profile Icon > Account Information] → Convert …` | unchanged; no diff in the transfer object |
| Image paths | `/images/diagram-transfer-decision.webp`, `/images/diagram-transfer.webp`, `/images/steam-header.webp` | present, unchanged |

Image byte/SHA comparison:

| Image | Bytes | SHA-256 | Status |
|---|---:|---|---|
| `public/images/diagram-transfer-decision.webp` | 49,248 | `d88e1b6905976fb4a856e2a72cd306050921173afc6981dd02dbc7de015ff4dd` | matches required freeze |
| `public/images/diagram-transfer.webp` | 19,466 | `491c65b0715c4167ad71749bdf78ceda142ea31bdcfdd58782309168ce1c3fc4` | matches required freeze |
| `public/images/steam-header.webp` | 27,852 | `08ca2061388c3df32cd744c9bf30f0d62de875132d4ceeec2cec04f2c5fcdb82` | matches required freeze |

## 8. Protected items / route checks

- `public/ads.txt` unchanged; AdSense `ca-pub-3175943774981621` and GA4 `G-QY1D1CDXDZ` source markers unchanged.
- `next.config.mjs` unchanged (`output: 'export'`, trailing slash, unoptimized images).
- `pl` remains a valid locale with its 17 routes, including `/pl/heroes/` and `/pl/tier-list/`.
- No locale route was removed or invented. No OCA/DTS work was performed.
- No new page, no site-wide rewrite, no keyword expansion, no GSC/IndexNow call, no paid action.
- `git diff --check` — exit 0.

## 9. Build and verification

- `npm run build` — exit 0.
- Postbuild — `fix-html-lang: updated 172 HTML files`.
- Homepage/quests/case-files/tier pages were inspected from generated `out/` HTML, not from the total-manager summary.
- Verification is source + static-output HTML only. **No browser visual test was run**; this STATUS does not claim one.

## 10. Commit / push

Single new commit prepared with message:

```
fix(content): retarget pl hero fragments and align Case Files glass-cost wording with official rules
```

Push is attempted after that commit with `git push origin master`. If the sandbox has no credential, the clean local commit is left for the outer dispatcher; no direct Cloudflare upload, amend, reset, rebase or force is used. The final delivery message records the actual push result.
