# E7 English `/steam-transfer/` first-screen Q3 narrow-unfreeze audit

- Recorded: **2026-11-10T18:21:14+08:00 (Asia/Shanghai)**
- Intended dispatch path: `/workspace/dsh-seo-dispatch-2026-11-10/e7-en-transfer-q3-narrow-audit.md`
- Actual storage path (the dispatch directory is read-only under the current `workspace-write` sandbox): `audit/e7-en-transfer-q3-narrow-audit.md` in the site repo.
- Scope: **one sentence only** in the English `/steam-transfer/` first-screen TL;DR.
- No other English transfer first-screen text, image path, image file, or existing alt was changed.
- Official basis: STOVE Steam FAQ Q3, `https://page.onstove.com/epicseven/global/view/14378309`; existing readable copy `/workspace/research-1110/evidence/extract/steam-body-faqs-regarding-steam.visible.txt`; button path cross-check `/workspace/verify-1110/e7-ko-deepen-1753/extract/official-source-review.md`.

## 1. Exact location and before/after

- File: `lib/i18n/content.ts`
- Key: `CONTENT['/steam-transfer/'].en.answer`
- Rendered as: `TransferView` → first-screen `TL;DR —` paragraph via `RichInline({ locale, marked: c.answer })` in `components/pages/renderers.tsx`

### Before (full field, exact)

```text
Epic Seven Steam transfer keeps progress by converting STOVE email/SNS to Steam Simple Login. Wrong-bind: withdraw the empty Steam-linked STOVE account, then convert the original. Demo wipe can erase legacy progress after conversion. Transfer ≠ Foundry; Foundry is a separate server — see the [[Foundry server guide|/foundry/]].
```

### After (full field, exact)

```text
Epic Seven Steam transfer keeps progress by converting STOVE email/SNS to Steam Simple Login. Wrong-bind: do not delete the temporary Steam-linked STOVE account. Log in to STOVE with that Steam account (register via Steam login first if needed), open [My Profile Icon > Account Information] → Convert, convert the temporary account to a non-Steam login, then convert the original email/SNS account to Steam. Demo wipe can erase legacy progress after conversion. Transfer ≠ Foundry; Foundry is a separate server — see the [[Foundry server guide|/foundry/]].
```

### Isolated changed substring

Before:

```text
Wrong-bind: withdraw the empty Steam-linked STOVE account, then convert the original.
```

After:

```text
Wrong-bind: do not delete the temporary Steam-linked STOVE account. Log in to STOVE with that Steam account (register via Steam login first if needed), open [My Profile Icon > Account Information] → Convert, convert the temporary account to a non-Steam login, then convert the original email/SNS account to Steam.
```

The adjacent sentences (`Epic Seven Steam transfer keeps progress ...`, `Demo wipe can erase ...`, `Transfer ≠ Foundry ...`) were kept unchanged.

## 2. Official Q3 steps used

From `https://page.onstove.com/epicseven/global/view/14378309` (Q3, read via the saved official copy and official-source review):

1. On the STOVE login page, select Steam login and register STOVE if needed.
2. Log in to the STOVE website with that Steam account, then select **Convert** under **[My Profile Icon > Account Information]**.
3. Select a login method **other than Steam** to convert the temporary account.
4. Convert the email account or social login (SNS) account previously used to a Steam login account.

The official answer does **not** require withdrawal/deletion of the temporary account and does **not** state a uniform waiting period. The demo warning `https://page.onstove.com/epicseven/global/view/14581667` only supports “do not use in-game account deletion after transfer”; it does not authorize withdrawal as a recovery step and is not conflated with Convert.

## 3. Frozen items confirmed unchanged

- Title: `Epic Seven Steam Transfer Guide | Keep Progress | E7`
- H1: `Epic Seven Steam transfer — keep progress`
- First H2: `Pre-transfer checklist`
- Last verified: `2026-11-07`
- Image paths, in order:
  - `/images/diagram-transfer.webp`
  - `/images/diagram-transfer-decision.webp`
  - `/images/steam-header.webp`
- The three image files were not modified. Existing image alts were not changed.
- Independence notice, remaining first-screen sentences, H1/H2 structure, and all non-TL;DR first-screen copy were left unchanged.

## 4. Not expanded by this narrow unfreeze

The following English `/steam-transfer/` lower-page strings still contain withdraw / withdraw→convert / waiting / 3-month wording and were **not** changed because this authorization covers only the first-screen TL;DR sentence:

- `meta`
- `conflict_intro`, `conflict_steps[3]`, `conflict_note`
- `cooldown_h2`, `cooldown_lead`, `cooldown_rows`, `cooldown_note`
- `faqs[0]`, `faqs[1]`, `faqs[3]`
- `tree[0]`, `tree[1]`
- `vs_steps[2]`
- `deep[0]`

Other locales (`ja/es/pt/de/fr/pl`) and the English FAQ page also retain legacy withdraw/waiting wording outside this narrow change. They are recorded as remaining work, not claimed as cleaned in this batch. No `ja/es/pt/de/fr/pl` content was edited in this narrow follow-up.
