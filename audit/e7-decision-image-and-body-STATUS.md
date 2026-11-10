# E7 decision diagram + same-fact body cleanup — STATUS

- Recorded: **2026-11-10T19:00:19+08:00 (Asia/Shanghai)**
- Repo: `/workspace/cf-migrate/epic7-steam-guide`
- Branch: `master`
- Starting HEAD: `e41373ad0d01b14ccc943f0de0abe3db8cadc72c` (clean; includes the 18:21 approved EN TL;DR narrow fix)
- Task type: narrow E7 content/image correction after DTS 11-skills delivery. No DTS/OCA, no CloudAgent, no second dsh, no GSC/IndexNow/keyword expansion/new domain/paid image API/author invention, no real account Convert/closure/deletion.
- Deploy path: GitHub `master` → Cloudflare Pages. No direct CF upload was done by this session.

This STATUS is written before the commit, so it does not contain its own commit hash. The commit hash is in the final delivery message / `git log -1`.

## 1. Short verdict

- Decision diagram: **PASS** — 1100×360 RGB, same path, Withdraw recovery branch replaced by official Q3 Convert; other two diagrams byte-identical.
- English body: **PASS** — the approved first-screen TL;DR was not touched; below-fold transfer, home field, FAQ, download, demo warning and Steam notes now use Convert, not withdraw.
- Japanese: **PASS** — home, transfer, FAQ, download, demo warning and Steam notes now use official Q3 Convert; no withdraw-as-recovery instruction remains.
- Spanish / Portuguese / German / French / Polish: **PASS** — transfer, FAQ, download, demo warning, Steam notes and home field aligned; no new language shell and no invented condition.
- Korean / Traditional Chinese / Thai: **PASS** — their transfer and FAQ bodies were already Convert-correct; the shared diagram now matches them. No unnecessary body rewrite.
- Build: **PASS** — `npm run build` exit 0, including `fix-html-lang: updated 172 HTML files`.
- Push: attempted; see section 8. If the sandbox has no credential, the commit is left clean for the outer dispatcher.

No row below is a batch-level PASS; each URL has its own gap and evidence.

## 2. Diagram — exact before/after and byte facts

File changed in place: `public/images/diagram-transfer-decision.webp` (path/name unchanged; all existing `src="/images/diagram-transfer-decision.webp"` references kept).

| Item | Bytes | SHA-256 |
|---|---:|---|
| Original | 34,078 | `22f3b6eaa773e01998f167ae2314ef1ce1348aa4d9e4bf76e2f309e9a4d50223` |
| New | 49,248 | `d88e1b6905976fb4a856e2a72cd306050921173afc6981dd02dbc7de015ff4dd` |

Both decode to **1100 × 360, RGB**. Original/new copies and the redraw script are in `audit/e7-decision-image/`; the original there is byte-identical to the read-only dispatch backup.

Text replaced in pixels (English, because the image is shared by all locales):

- Green card:
  - before: `Withdraw Steam-linked STOVE → convert original`
  - after: `Account Information → Convert temp to non-Steam` / `Then convert original email/SNS to Steam`
- Recovery outline:
  - before: `1. Authorize empty Steam link` / `2. Withdraw that STOVE account` / `3. Convert original email/SNS` / `4. Relaunch Steam app 5019180`
  - after: `1. Log in to STOVE with Steam` / `2. Account Information → Convert` / `3. Convert temp to non-Steam login` / `4. Convert original email/SNS → Steam`

Kept unchanged: title `Wrong-bind decision tree (independent)` and subtitle; blue `Steam shows empty Heir?` / `Stop creating characters`; orange `Progress missing` / `Confirm conversion; check STOVE PC/mobile identity`; pink `Demo vs wipe` / `Never in-game delete after transfer → demo warning`; footer `Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam`; dark background, rounded cards, three-colour arrows, right recovery-panel structure, `Full steps: /steam-transfer/`.

Tool verification of “no Withdraw as recovery”:

- The old green body was at x 375–691, y 126–139; the repair repainted the whole interior strip x 366–694, y 121–153, so no original glyph/halo pixel can survive there.
- The old recovery body was at x 761–971, y 182–261; the repair repainted the whole interior strip x 746–1054, y 176–263.
- The new drawn strings were checked against a literal list; none contains `Withdraw`/`withdraw`.
- Final image was read visually at native size. OCR is not installed on this host, so the claim is pixel-region replacement + visual read, not OCR output.
- WebP re-encode changes compression values globally; only the two strips were re-drawn. The other two diagrams were not re-encoded.

Other diagrams (byte-identical to HEAD, and `out/`):

| Image | Bytes | SHA-256 | Worktree vs HEAD |
|---|---:|---|---|
| `public/images/diagram-transfer.webp` | 19,466 | `491c65b0715c4167ad71749bdf78ceda142ea31bdcfdd58782309168ce1c3fc4` | identical |
| `public/images/steam-header.webp` | 27,852 | `08ca2061388c3df32cd744c9bf30f0d62de875132d4ceeec2cec04f2c5fcdb82` | identical |

Official basis: STOVE Epic Seven Global FAQ view **14378309**, question 3 — <https://page.onstove.com/epicseven/global/view/14378309>; readable saved copy `/workspace/research-1110/evidence/extract/steam-body-faqs-regarding-steam.visible.txt`; cross-check `/workspace/verify-1110/e7-ko-deepen-1753/extract/official-source-review.md`. The official answer does not require withdrawal/deletion first and does not state a uniform wait. Demo warning **14581667** supports only “do not use in-game deletion after transfer”; it is not a withdrawal step.

## 3. Per-URL matrix — English

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/` | `CONTENT['/'].en.steps[2][1]` said “Withdraw … first, then convert”. | Do not delete the temporary Steam-linked STOVE account; log in with that Steam account, `[My Profile Icon > Account Information] → Convert` the temporary account to a non-Steam login, then convert the original email/SNS. | Q3 | Source field corrected; current `HomeView` does not render `c.steps`, so no visible out string is expected. Build passed. | PASS (source-only) |
| `/steam-transfer/` | `meta`, `conflict_intro`, `conflict_steps`, `conflict_note`, `cooldown_h2`, `cooldown_rows`, `cooldown_note`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `img_alt2` taught withdraw / 3-month rule. | Official 5-step Q3 flow; no withdrawal; no uniform 3-month rule; grey button → current STOVE UI/CS; FAQ/tree/deep use Convert. | Q3 + 14581667 for demo contrast | `out/steam-transfer/index.html`: `Official Q3 recovery (paraphrased)`, `Account Information → Convert`, alt `official Convert recovery`; old `withdraw-then-convert` absent. Only negative `withdrawal` contrasts remain. | PASS |
| `/faq/` | `answer`, `img_alt`, `faqs[0][1]` said withdraw the empty link, then convert. | Wrong bind: do not delete; log in with that Steam account, Convert temporary to non-Steam, then convert the original; alt updated. | Q3 | `out/faq/index.html`: `a wrong bind usually means Steam made an empty Heir — do not delete it`; alt `Convert the temporary account to a non-Steam login`; old phrase absent. | PASS |
| `/download/` | `demo[1]` said “use withdraw-then-convert”; `deep[1]` said withdraw, wait a holding period, then convert. | Do not press delete; follow official Convert; if empty linked account exists, do not withdraw it, Convert temporary to non-Steam, then convert original. | Q3 | `out/download/index.html`: `do not withdraw it`, `official Convert sequence`; old phrase absent. | PASS |
| `/demo-delete-warning/` | `dos[0]`, `diff_h2`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` framed withdrawal as recovery. | Official recovery is Convert, not withdrawal; demo in-game deletion remains the separate wipe risk; FAQ asks Convert vs deletion/withdrawal. | Q3 + 14581667 | `out/demo-delete-warning/index.html`: `The official recovery ... is Convert, not withdrawal`, `Is Convert the same as deletion or withdrawal?`; old withdraw outline absent. | PASS |
| `/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `launch[1][1]`, `faqs[0][1]` said withdraw the new link, then convert. | Official Q3 Convert; do not withdraw the temporary account; bind-recovery text rewritten. | Q3 | `out/steam-notes/index.html`: `official Q3 Convert; do not withdraw the temporary account`; old “withdraw it, then convert” absent. | PASS |

## 4. Per-URL matrix — Japanese

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/ja/` | Home step said `退会してから本アカウントを変換`. | `削除せず、そのSteamでSTOVEにログインし…Convert…元のメール/SNSをSteamへ`. | Q3 | Source field corrected; `HomeView` does not render `c.steps`; build passed. | PASS (source-only) |
| `/ja/steam-transfer/` | `meta`, `goal`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3,5]`, `tree[0,1]`, `vs_steps[2]`, `deep[0,3]`, `before[4]`, `img_alt2` taught `退会→変換`. | Official Q3 five steps; no withdrawal; no uniform wait; grey button → current UI/CS; FAQ/tree/deep use Convert. | Q3 | `out/ja/steam-transfer/index.html`: `公式FAQ 3番（要約）`, `[マイプロフィールアイコン > アカウント情報] の Convert`, `一律3か月…ありません`; no positive withdraw step. | PASS |
| `/ja/faq/` | `answer`, `img_alt`, `faqs[0][1]` said empty account → withdraw → convert. | Do not delete; Convert temporary to non-Steam, then original to Steam; alt updated. | Q3 | `out/ja/faq/index.html`: `削除せず、そのSteamでSTOVEにログイン`, `一時アカウントをSteam以外のログインに変換`; unrelated FAQ items restored to original wording. | PASS |
| `/ja/download/` | `demo[1]` said `退会→変換`; `deep[1]` said `退会→待ち→本ログイン変換`. | Delete nothing; official Convert sequence; empty linked account → Convert temporary, then original. | Q3 | `out/ja/download/index.html`: `公式FAQ 3番のConvert順`; old `退会→待ち` absent. Other deep paragraphs restored. | PASS |
| `/ja/demo-delete-warning/` | `dos[0]`, `diff_h2`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep` taught withdrawal recovery. | Convert is the official recovery, not withdrawal; demo deletion is the separate danger; button-name “退会” is only a label warning. | Q3 + 14581667 | `out/ja/demo-delete-warning/index.html`: `公式FAQ 3番のConvert復旧`, `退会ではなくConvert`; no positive withdraw step. | PASS |
| `/ja/steam-notes/` | `answer`, `bind_fix`, `launch[1][1]`, `faqs[0][1]`, `deep[1]` said withdraw then convert. | Official Q3 Convert; do not withdraw temporary account; deep text aligned. | Q3 | `out/ja/steam-notes/index.html`: `公式FAQ 3番のConvert`; old `退会→変換` recovery absent. | PASS |

## 5. Per-URL matrix — Spanish / Portuguese

### Spanish

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/es/` | Home step said retira primero, luego convierte. | No borres; login con esa cuenta Steam; `Convert` temporal a no-Steam; luego original a Steam. | Q3 | Source field corrected; not rendered by `HomeView`; build passed. | PASS (source-only) |
| `/es/steam-transfer/` | `meta`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `before[4]`, `img_alt2` taught retirar. | Official 5-step Convert; no retirada; no uniform 3-month wait. | Q3 | `out/es/steam-transfer/index.html`: `Recuperación oficial de la pregunta 3`, `[Mi icono de perfil > Información de la cuenta] → Convert`; old positive retirar step absent. | PASS |
| `/es/faq/` | `img_alt`, `faqs[0][1]` said retira el vínculo y convierte. | No borres; Convert temporal a no-Steam; luego original. | Q3 | `out/es/faq/index.html`: `no lo borres`, `Convert de la cuenta temporal`; alt updated. | PASS |
| `/es/download/` | `demo[1]` said usa retirar y luego convertir; `deep[1]` said retira, espera retención, convierte. | Official Convert; do not withdraw; empty linked account → Convert. | Q3 | `out/es/download/index.html`: `en lugar de retirar la cuenta temporal`, `secuencia Convert oficial`; other deep paragraphs restored. | PASS |
| `/es/demo-delete-warning/` | `dos[0]`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` taught retirar. | Official recovery is Convert, not retirada; demo delete remains separate risk. | Q3 + 14581667 | `out/es/demo-delete-warning/index.html`: `es Convert, no retirar`, `¿Convert es lo mismo que borrar o retirar?`. | PASS |
| `/es/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `faqs[0][1]` said retira el vínculo nuevo. | Official Q3 Convert; do not withdraw temporary account. | Q3 | `out/es/steam-notes/index.html`: `Convert oficial; no retires la cuenta temporal`; old positive step absent. | PASS |

### Portuguese

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/pt/` | Home step said retire primeiro, depois converta. | Não apague; login com essa conta Steam; `Convert` temporária para não-Steam; depois original para Steam. | Q3 | Source field corrected; not rendered by `HomeView`; build passed. | PASS (source-only) |
| `/pt/steam-transfer/` | `meta`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `before[4]`, `img_alt2` taught retirar. | Official 5-step Convert; no retirada; no uniform 3-month wait. | Q3 | `out/pt/steam-transfer/index.html`: `Recuperação oficial da pergunta 3`, `[Meu ícone de perfil > Informações da conta] → Convert`; old positive step absent. | PASS |
| `/pt/faq/` | `img_alt`, `faqs[0][1]` said retire o vínculo e converta. | Não apague; Convert temporária para não-Steam; depois original. | Q3 | `out/pt/faq/index.html`: `não o apague`, `Convert da conta temporária`; alt updated. | PASS |
| `/pt/download/` | `demo[1]` said use retirar-e-converter; `deep[1]` said retire, aguarde retenção, converta. | Official Convert; do not withdraw; empty linked account → Convert. | Q3 | `out/pt/download/index.html`: `em vez de retirar a conta temporária`, `sequência Convert oficial`; other deep paragraphs restored. | PASS |
| `/pt/demo-delete-warning/` | `dos[0]`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` taught retirar. | Official recovery is Convert, not retirada; demo delete remains separate risk. | Q3 + 14581667 | `out/pt/demo-delete-warning/index.html`: `é Convert, não retirada`, `Convert é o mesmo que apagar ou retirar?`. | PASS |
| `/pt/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `faqs[0][1]` said retire o novo vínculo. | Official Q3 Convert; do not withdraw temporary account. | Q3 | `out/pt/steam-notes/index.html`: `Convert oficial; não retire a conta temporária`; old positive step absent. | PASS |

## 6. Per-URL matrix — German / French / Polish

### German

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/de/` | Home step said zurückziehen, dann umwandeln. | Nicht löschen; mit Steam bei STOVE anmelden; `Convert` temporär auf Nicht-Steam; dann Original auf Steam. | Q3 | Source field corrected; not rendered by `HomeView`; build passed. | PASS (source-only) |
| `/de/steam-transfer/` | `meta`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `before[4]`, `img_alt2` taught Rückzug. | Official 5-step Convert; no Rückzug; no uniform 3-month rule. | Q3 | `out/de/steam-transfer/index.html`: `Offizielle Wiederherstellung nach Frage 3`, `[Mein Profilsymbol > Kontoinformationen] → Convert`; old positive Rückzug step absent. | PASS |
| `/de/faq/` | `img_alt`, `faqs[0][1]` said leeren Link zurückziehen, dann umstellen. | Nicht löschen; Convert temporär auf Nicht-Steam; dann Original. | Q3 | `out/de/faq/index.html`: `lösche ihn nicht`, `Convert ... Nicht-Steam-Login`; alt updated. | PASS |
| `/de/download/` | `demo[1]` said Zurückziehen-dann-Umwandeln; `deep[1]` said zurückziehen, Haltefrist abwarten, umwandeln. | Official Convert; do not withdraw; empty linked account → Convert. | Q3 | `out/de/download/index.html`: `offiziellen Convert-Sequenz`, `statt das temporäre Konto zurückzuziehen`; other deep paragraphs restored. | PASS |
| `/de/demo-delete-warning/` | `dos[0]`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` taught Rückzug. | Official recovery is Convert, not Rückzug; demo delete remains separate risk. | Q3 + 14581667 | `out/de/demo-delete-warning/index.html`: `ist Convert, nicht Rückzug`, `Ist Convert dasselbe wie Löschen oder Rückzug?`. | PASS |
| `/de/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `faqs[0][1]` said neuen Link zurückziehen. | Official Q3 Convert; do not withdraw temporary account. | Q3 | `out/de/steam-notes/index.html`: `offizieller Convert; ziehe das temporäre Konto nicht zurück`; old positive step absent. | PASS |

### French

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/fr/` | Home step said retirer d’abord, puis convertir. | Ne pas supprimer; connexion avec ce compte Steam; `Convert` temporaire en non-Steam; puis original en Steam. | Q3 | Source field corrected; not rendered by `HomeView`; build passed. | PASS (source-only) |
| `/fr/steam-transfer/` | `meta`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `before[4]`, `img_alt2` taught retrait. | Official 5-step Convert; no retrait; no uniform 3-month rule. | Q3 | `out/fr/steam-transfer/index.html`: `Récupération officielle de la question 3`, `[Mon icône de profil > Informations du compte] → Convert`; old positive retrait step absent. | PASS |
| `/fr/faq/` | `img_alt`, `faqs[0][1]` said retirer la liaison vide, puis convertir. | Ne pas supprimer; Convert temporaire en non-Steam; puis original. | Q3 | `out/fr/faq/index.html`: `ne le supprimez pas`, `Convert du compte temporaire`; alt updated. | PASS |
| `/fr/download/` | `demo[1]` said retrait puis conversion; `deep[1]` said retirer, attendre rétention, convertir. | Official Convert; do not withdraw; empty linked account → Convert. | Q3 | `out/fr/download/index.html`: `séquence Convert officielle`, `au lieu de retirer le compte temporaire`; other deep paragraphs restored. | PASS |
| `/fr/demo-delete-warning/` | `dos[0]`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` taught retrait. | Official recovery is Convert, not retrait; demo delete remains separate risk. | Q3 + 14581667 | `out/fr/demo-delete-warning/index.html`: `est Convert, pas le retrait`, `Convert est-il la même chose qu’une suppression ou un retrait ?`. | PASS |
| `/fr/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `faqs[0][1]` said retirer la nouvelle liaison. | Official Q3 Convert; do not withdraw temporary account. | Q3 | `out/fr/steam-notes/index.html`: `Convert officiel ; ne retirez pas le compte temporaire`; old positive step absent. | PASS |

### Polish

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/pl/` | Home step said wycofaj, potem przekonwertuj. | Nie usuwać; login tym kontem Steam; `Convert` tymczasowego na nie-Steam; potem pierwotne na Steam. | Q3 | Source field corrected; not rendered by `HomeView`; build passed. | PASS (source-only) |
| `/pl/steam-transfer/` | `meta`, `conflict_*`, `cooldown_*`, `answer`, `faqs[0,1,3]`, `tree[0,1]`, `vs_steps[2]`, `deep[0]`, `before[4]`, `img_alt2` taught wycofanie. | Official 5-step Convert; no wycofanie; no uniform 3-month rule. | Q3 | `out/pl/steam-transfer/index.html`: `Oficjalne odzyskiwanie według pytania 3`, `[Ikona profilu > Informacje o koncie] → Convert`; old positive step absent. | PASS |
| `/pl/faq/` | `answer`, `img_alt`, `faqs[0][1]` said wycofaj pustego Dziedzica i konwertuj. | Nie usuwać; Convert tymczasowego na nie-Steam; potem pierwotne. | Q3 | `out/pl/faq/index.html`: `nie usuwaj go`, `Convert konta tymczasowego`; alt updated. | PASS |
| `/pl/download/` | `demo[1]` said wycofanie, potem konwersja; `deep[1]` said wycofaj, odczekaj wstrzymanie, konwertuj. | Official Convert; do not withdraw; empty linked account → Convert. | Q3 | `out/pl/download/index.html`: `oficjalną sekwencję Convert`, `zamiast wycofywać konto tymczasowe`; other deep paragraphs restored. | PASS |
| `/pl/demo-delete-warning/` | `dos[0]`, `diff`, `answer`, `rows[1][0]`, `diff_steps[0]`, `faqs[1]`, `deep[0]` taught wycofanie. | Official recovery is Convert, not wycofanie; demo delete remains separate risk. | Q3 + 14581667 | `out/pl/demo-delete-warning/index.html`: `to Convert, a nie wycofanie`, `Czy Convert to to samo co usunięcie lub wycofanie?`. | PASS |
| `/pl/steam-notes/` | `answer`, `bind_lead`, `bind_fix`, `faqs[0][1]` said wycofaj nowe powiązanie. | Official Q3 Convert; do not withdraw temporary account. | Q3 | `out/pl/steam-notes/index.html`: `oficjalny Convert; nie wycofuj konta tymczasowego`; old positive step absent. | PASS |

## 7. Per-URL matrix — Korean / Traditional Chinese / Thai (already-correct bodies + shared image consistency)

These six pages were already Convert-correct before this batch. They were re-read, not rewritten. Their body/FAQ/alt and the new shared image now agree.

| URL | Original gap | New content | Basis | `out/` evidence | Verdict |
|---|---|---|---|---|---|
| `/ko/steam-transfer/` | Body already “삭제하지 말고 … Convert … 원래 이메일/SNS를 Steam으로”; shared image still showed Withdraw. | No body change; image now shows Convert temporary → non-Steam → original. | Q3 | `out/ko/steam-transfer/index.html` contains `공식 FAQ 3번`, `[내 프로필 아이콘 > 계정 정보]`, `Convert`; no positive withdraw step; image alt generic/no withdraw. | PASS |
| `/ko/faq/` | Answer/img_alt already Convert; shared image inconsistent. | No body change; image now matches. | Q3 | `out/ko/faq/index.html`: `삭제하지 말고`, `Convert로 임시 계정`; alt `Convert로 임시 계정`; image path unchanged. | PASS |
| `/zh-tw/steam-transfer/` | Body already “不要註銷 … Convert … 再把原本帳號轉成 Steam”; shared image still showed Withdraw. | No body change; image now matches. | Q3 | `out/zh-tw/steam-transfer/index.html`: `不要註銷`, `[我的個人檔案圖示 > 帳號資訊]`, `Convert`; no positive withdraw step. | PASS |
| `/zh-tw/faq/` | Answer/img_alt already Convert; shared image inconsistent. | No body change; image now matches. | Q3 | `out/zh-tw/faq/index.html`: `不要註銷`, `Convert 把臨時帳號`; alt already Convert; image path unchanged. | PASS |
| `/th/steam-transfer/` | Body already “อย่าถอนบัญชี … Convert … แปลงอีเมล/SNS เดิม”; shared image still showed Withdraw. | No body change; image now matches. | Q3 | `out/th/steam-transfer/index.html`: `อย่าถอนบัญชี`, `[ไอคอนโปรไฟล์ของฉัน > ข้อมูลบัญชี]`, `Convert`; no positive withdraw step. | PASS |
| `/th/faq/` | Answer/img_alt already Convert; shared image inconsistent. | No body change; image now matches. | Q3 | `out/th/faq/index.html`: `อย่าถอนบัญชี`, `Convert`; alt already Convert; image path unchanged. | PASS |

## 8. Frozen English first-screen items

Compared old HEAD vs current content object for `/steam-transfer/` `en`:

| Frozen item | Value | Status |
|---|---|---|
| Title | `Epic Seven Steam Transfer Guide | Keep Progress | E7` | unchanged |
| H1 | `Epic Seven Steam transfer — keep progress` | unchanged |
| First H2 | `Pre-transfer checklist` | unchanged |
| Last verified | `2026-11-07` | unchanged |
| Approved `answer` | `Epic Seven Steam transfer keeps progress by converting … Wrong-bind: do not delete the temporary Steam-linked STOVE account. Log in to STOVE with that Steam account (register via Steam login first if needed), open [My Profile Icon > Account Information] → Convert, convert the temporary account to a non-Steam login, then convert the original email/SNS account to Steam. Demo wipe can erase legacy progress after conversion. Transfer ≠ Foundry; Foundry is a separate server — see the [[Foundry server guide|/foundry/]].` | unchanged (byte-for-byte in the content value) |
| First-screen `before` checklist | original five items | unchanged (an intermediate edit was reverted) |
| Other first-screen text | `goal`, `steps`, `diagram`, `diagram_aria` | unchanged |
| Three image paths | `/images/diagram-transfer.webp`, `/images/diagram-transfer-decision.webp`, `/images/steam-header.webp` | unchanged; exactly one each in out |
| Other two image files | SHAs in section 2 | byte-identical to HEAD |

## 9. Protected items and route checks

- `public/ads.txt`: unchanged, `google.com, pub-3175943774981621, DIRECT, f08c47fec0942fa0`.
- AdSense `ca-pub-3175943774981621`: present in 174 built HTML files.
- GA4 `G-QY1D1CDXDZ`: present in 174 built HTML files.
- `next.config.mjs`: unchanged (`output: 'export'`, trailing slash, unoptimized images).
- `package.json`, `package-lock.json`: unchanged.
- `pl`: 17 routes built under `out/pl/` (home + 16 subpages), including `pl/steam-transfer`, `pl/faq`, `pl/download`, `pl/demo-delete-warning`, `pl/steam-notes`.
- No valid locale route was removed and no OCA locale was invented.
- No DTS/OCA files were touched. No CloudAgent, no direct Cloudflare upload, no amend/reset/rebase/force.
- `git diff --check` exit 0.

## 10. Build and out evidence

- `npm run build`: **exit 0** after the final content change.
- Postbuild: `fix-html-lang: updated 172 HTML files`.
- `out/images/diagram-transfer-decision.webp` SHA equals the site file: `d88e1b69…5ff4dd`.
- `out/images/diagram-transfer.webp` and `out/images/steam-header.webp` SHAs equal HEAD.
- Old instructional phrases (`withdraw-then-convert`, `withdraw→convert`, `retirar y luego convertir`, `retirar→convertir`, `retirar e depois converter`, `Zurückziehen→Umstellen`, `retrait→conversion`, `wycofaj→przekonwertuj`) were searched in `out/**/*.html`: zero matches.
- “3-month” occurrences in built output were inspected; remaining occurrences are negative statements (“not a uniform 3-month rule”, “does not state”, “ではありません”, etc.).
- The QA does **not** claim a browser visual pass; `curl`/HTML text is not used as a browser-visual PASS. Diagram visual evidence is the native-size `read_image` read described in section 2.

## 11. Remaining legacy / limitations (not claimed as fixed)

1. **No OCR on host.** Decision-image verification is full-region repaint + new-string literal list + native-size visual read, not OCR.
2. **WebP re-encode is lossy.** Pixels outside the two repainted strips can differ at compression level; no unrelated text/layout was re-drawn. The other two diagrams are byte-identical, not merely visually identical.
3. **Negative wording remains intentionally.** `withdraw`, `retrait`, `Rückzug`, `wycofanie`, `退会`, `註銷` etc. still appear in negative/contrast sentences such as “the official answer does not require withdrawal”, “Convert, not withdrawal”, and “do not withdraw”. These are correct and were not removed.
4. **Home `steps` field is source-only.** Current `HomeView` does not render `CONTENT[path][locale].steps`, so the corrected home sentence has no visible `out/` string. The source field is corrected for content consistency; no UI change was made.
5. **KO/ZH/TH steam-notes** were spot-checked and already use Convert; they were not rewritten in this batch. Their transfer/FAQ pages are the six required consistency checks.
6. **No deploy performed by this session.** GitHub `master` push is the deploy trigger; if the sandbox has no credential, the commit remains clean for the outer dispatcher.

## 12. Files changed

- `public/images/diagram-transfer-decision.webp` — in-place targeted pixel repair.
- `lib/i18n/content.ts` — EN/JA/ES/PT/DE/FR/PL content fields listed above; KO/ZH/TH bodies untouched.
- `lib/i18n/supplement.ts` — FAQ-extra answers for EN/JA/ES/PT/DE/FR/PL Convert wording; 3-month framing removed from 10 FAQ-extra questions.
- `audit/e7-decision-image/` — original/new image copies, SHA/byte record, redraw script.
- `audit/e7-decision-image-and-body-STATUS.md` — this file.

Commit message used: `fix(content): replace decision-diagram Withdraw branch with official Q3 Convert and align leftover recovery copy`.
