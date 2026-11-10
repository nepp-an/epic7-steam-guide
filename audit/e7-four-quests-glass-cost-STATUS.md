# E7 剩余四语 `/quests/` Case Files 镜子收费句最小纠错 — STATUS

- Recorded: **2026-11-10T20:31+08:00 (Asia/Shanghai)**
- Repo: `/workspace/cf-migrate/epic7-steam-guide`
- Branch: `master`
- Baseline (clean): `69808a4a08ddd3bfb503a1484c5432a5b01528ff` (`69808a4`)
  - `git fetch` 后 `master...origin/master` 无分叉，工作树在改动前干净。
- 本批只改 `lib/i18n/content.ts` 中 `CONTENT['/quests/']` 的 `en` / `ko` / `zh-tw` / `th` 各一处 `case_files[0]` 分句，并新增本 STATUS。
- 部署路径：GitHub `master` → Cloudflare Pages 自动部署。本会话不做 DTS 直传、不做 Cloudflare 直传或第二次部署。
- 本 STATUS 在 commit 前写入，因此不含自身 commit hash；commit hash 在最终交付消息和 `git log -1` 中。push 结果同样在最终交付消息中报告。

## 1. 结论（按项列，不做整批 PASS）

- **四语句子替换 — 源码与构建产物层面 PASS。** 四个旧“猜错浪费镜子”分句均已消失，替换为官方明确的“每次新提问消耗 1 个镜子 / 重看已读问题不消耗”表述。
- **未反向声称 — PASS。** 没有写成“猜错绝不收费 / accusation never costs a glass”，只陈述官方明确收费触发。
- **上一批六语 quests + 英文 Case Files — PASS（仍保留）。** ja/es/pt/de/fr/pl `/quests/` 与英文 `/case-files/` 的官方收费句仍在构建产物中。
- **冻结区 — PASS。** 英文 `/steam-transfer/` 的指定文案仍在；三张图 SHA-256 与字节数与本 STATUS 记录一致；无冻结文件改动。
- **Polish `/heroes/` 三张专职卡 — 有意保持 PARTIAL。** 未改 group 键，未新增卡片，未加壳锚；`out/pl/heroes/index.html` 中三名英雄的 `id` 卡片仍为 0。
- **Build — PASS。** `npm run build` exit 0；175 个静态页生成；postbuild `fix-html-lang: updated 172 HTML files`。
- **Push — commit 后尝试。** 结果见最终交付消息；未 amend / reset / rebase / force，未做第二次部署。
- **未声称：** 没有做浏览器视觉验收。以下证据是源码 diff + `out/` 静态 HTML 检查，不是浏览器实测。

## 2. 官方依据

来源：STOVE Epic Seven Global，event view **14606293**
<https://page.onstove.com/epicseven/global/view/14606293>

本轮复用的既有官方记录（写入时间 `2026-11-10T19:52:26.191637+08:00` Asia/Shanghai）：

- `/workspace/verify-1110/e7-final-i18n-audit/extract/official-casefiles-14606293.md`

其中官方正文明确写：

> “One Trusty Sidekick's Magnifying Glass is consumed each time you ask a question to collect clues.”
>
> “Re-checking a question you have already viewed does not require a Trusty Sidekick's Magnifying Glass.”

同一份正文还说明填格错误可用 `[Eraser]` / `[Reset]` 处理，指认结果为 Success / Failure；**没有**说明猜错或指认失败会额外消耗镜子。因此本批只把“猜错浪费”改成官方明确的收费触发，不把“未说明”扩写成“绝不收费”。

## 3. 四句 before / after（完整相关句）

只替换下列句子中的相关分句；每段其余内容（Case Files/Secret Rabbit♥Hole 定义、每日镜子、与 Foundry / Lucky Board 并列、后续段落）均保留。

### en — `lib/i18n/content.ts` `CONTENT['/quests/']['en'].case_files[0]`（约第 14644 行）

- Before:
  > You spend daily magnifying glasses to mark clues and narrow the culprit — **wrong guesses waste the limited glasses.**
- After:
  > You spend daily magnifying glasses to mark clues and narrow the culprit — **each new question consumes one magnifying glass; re-checking a question you have already viewed does not.**

### ko — `CONTENT['/quests/']['ko'].case_files[0]`（约第 14730 行）

- Before:
  > 매일 지급되는 돋보기로 단서를 표시하고 범인을 좁히며, **틀린 추측은 한정 돋보기를 낭비합니다.**
- After:
  > 매일 지급되는 돋보기로 단서를 표시하고 범인을 좁히며, **새로운 질문을 할 때마다 돋보기 1개를 소모하며, 이미 확인한 질문을 다시 보는 데에는 소모하지 않습니다.**

### zh-tw — `CONTENT['/quests/']['zh-tw'].case_files[0]`（约第 14901 行）

- Before:
  > 你用每日放大鏡標記線索並縮小兇手範圍；**猜錯會浪費有限放大鏡。**
- After:
  > 你用每日放大鏡標記線索並縮小兇手範圍；**每次提出新問題消耗1個放大鏡；重新查看已讀問題不消耗放大鏡。**

### th — `CONTENT['/quests/']['th'].case_files[0]`（约第 14989 行）

- Before:
  > คุณใช้แว่นขยายรายวันทำเครื่องหมายเบาะแสและจำกัดตัวผู้ต้องสงสัย — **ทายผิดจะเสียแว่นที่มีจำกัด**
- After:
  > คุณใช้แว่นขยายรายวันทำเครื่องหมายเบาะแสและจำกัดตัวผู้ต้องสงสัย — **คำถามใหม่แต่ละครั้งใช้แว่นขยาย 1 อัน ส่วนการตรวจดูคำถามที่เคยอ่านแล้วไม่ใช้แว่นขยาย**

## 4. 源码 diff 范围

`git diff --numstat`（写入本 STATUS 前）：

```
4	4	lib/i18n/content.ts
```

- `lib/i18n/content.ts`：4 处替换，未改其他行。
- 新增：`audit/e7-four-quests-glass-cost-STATUS.md`。
- 未改：`lib/i18n/supplement.ts`（“Case Files without wasted glasses” 标题仍在，未动）、`next.config.mjs`、`public/ads.txt`、DTS、图片、日期字段、21 核心页正文、路由表。

## 5. 构建与 `out/` 核验

命令：

- `npm run build` → exit **0**
  - `✓ Generating static pages (175/175)`
  - postbuild：`fix-html-lang: updated 172 HTML files`
- `git diff --check` → exit **0**

四个目标页（`out/quests/index.html`、`out/ko/quests/index.html`、`out/zh-tw/quests/index.html`、`out/th/quests/index.html`）：

- 新句均出现（en / ko / zh-tw / th 各自命中）。
- 旧句均不存在：
  - `wrong guesses waste the limited glasses`
  - `틀린 추측은 한정 돋보기를 낭비합니다`
  - `猜錯會浪費有限放大鏡`
  - `ทายผิดจะเสียแว่นที่มีจำกัด`

上一批已改内容仍在（均在 `out/` 对应页面命中）：

- ja `/quests/`：`新しい質問1回につき虫眼鏡1個を消費し、既読の質問の再確認は消費しません`
- es `/quests/`：`cada pregunta nueva consume una lupa; volver a consultar una pregunta ya vista no consume lupas`
- pt `/quests/`：`cada pergunta nova consome uma lupa; rever uma pergunta já vista não consome lupas`
- de `/quests/`：`jede neue Frage kostet eine Lupe; das erneute Prüfen einer bereits gelesenen Frage kostet keine Lupe`
- fr `/quests/`：`chaque nouvelle question consomme une loupe ; revoir une question déjà consultée n’en consomme pas`
- pl `/quests/`：`każde nowe pytanie zużywa jedną lupę; ponowne sprawdzenie wcześniej przeczytanego pytania jej nie zużywa`
- en `/case-files/`：`Each new question consumes one magnifying glass; re-checking a question you have already viewed does not`

同时确认六语旧断言在 `out/` 中已不存在（ja `外すと限られた虫眼鏡を浪費します`、es `fallar desperdicia lupas limitadas`、pt `errar desperdiça lupas limitadas`、de `Fehlversuche verschwenden die begrenzten Lupen`、fr `se tromper gaspille des loupes limitées`、pl `błędne domysły marnują limitowane lupy`）。

## 6. 冻结区对照（提交前后）

英文 `/steam-transfer/` 源码区域未被本批改动；`out/steam-transfer/index.html` 仍包含：

| 冻结项 | 期望 | 结果 |
|---|---|---|
| Title | `Epic Seven Steam Transfer Guide \| Keep Progress \| E7` | 存在 |
| H1 | `Epic Seven Steam transfer — keep progress` | 存在 |
| 首屏 goal 正文 | `Goal of this Epic Seven Steam transfer walkthrough: keep existing progress by converting to Simple Login (Steam) on STOVE before relying on a fresh Steam session.` | 存在 |
| 已批准 Wrong-bind Convert 句 | `Official Q3 recovery (paraphrased): do not delete the temporary Steam-linked STOVE account.` 起句 | 存在 |
| 首 H2 | `Pre-transfer checklist` | 存在 |
| Last verified | `2026-11-07` | 存在 |
| 三图引用 | `/images/diagram-transfer-decision.webp`、`/images/diagram-transfer.webp`、`/images/steam-header.webp` | 三个 `src` 均在，无改路径 |

图片 SHA-256 / 字节（改动前后一致）：

| 文件 | SHA-256 | bytes |
|---|---|---|
| `public/images/diagram-transfer-decision.webp` | `d88e1b6905976fb4a856e2a72cd306050921173afc6981dd02dbc7de015ff4dd` | 49248 |
| `public/images/diagram-transfer.webp` | `491c65b0715c4167ad71749bdf78ceda142ea31bdcfdd58782309168ce1c3fc4` | 19466 |
| `public/images/steam-header.webp` | `08ca2061388c3df32cd744c9bf30f0d62de875132d4ceeec2cec04f2c5fcdb82` | 27852 |

`out/images/` 下三图 SHA 与上表一致。

其它保护项：

- `public/ads.txt` 仍为 `google.com, pub-3175943774981621, DIRECT, f08c47fec0942fa0`；页面仍含 AdSense `ca-pub-3175943774981621` 与 GA4 `G-QY1D1CDXDZ`。
- `out/privacy/index.html` 存在；`pl` 及其它有效 locale 路由均在 build 输出中（build 共 175 页）。
- `next.config.mjs`、DTS、所有图片文件均不在本批 diff 中。

## 7. Polish `/heroes/` 有意未改

按任务要求保持 PARTIAL，未改 `specjalizacja` / `wysoki` 键、未新增卡片、未加壳锚：

- `out/pl/heroes/index.html` 中 `id="angelic-montmorancy"`、`id="falconer-kluri"`、`id="commander-lorina"` 计数均为 **0**。
- 页面仍有 `id="specialty-change"`（1 个）及 4 个 `href="#specialty-change"`（1 个导航 + 3 个 roster 链接）。
- 没有新增波兰英雄卡片或空壳锚。

## 8. 有意未改清单

- ja/es/pt/de/fr/pl `/quests/`：上一批已按同一官方规则改过，本批不动。
- 英文 `/case-files/`：上一批已改，本批不动。
- `lib/i18n/supplement.ts` 的标题性 “Case Files without wasted glasses”：未动。
- 日期字段、英文 transfer 冻结、所有图片及引用、21 核心页厚度、日历/三节点/时态/跨服内容：均未动。
- 波兰三张专职卡的 group 键 / 卡片结构：未动（见第 7 节）。
- DTS：未动。

## 9. 未做 / 不声称

- 未做 GSC、IndexNow、扩词、新域名、付费、编作者、清缓存、真实账号操作。
- 未做 CloudAgent、未并行第二个 `dsh`、未做 DTS 直传或第二次部署。
- 未做浏览器视觉验收；本 STATUS 仅记录源码 diff、build 和静态 `out/` HTML 检查。
