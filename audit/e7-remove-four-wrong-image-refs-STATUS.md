# E7 — 去掉 4 张错误 Withdraw 图的实际引用（steam-notes / demo-delete-warning）

- 日期：2026-11-10（Asia/Shanghai）
- 仓库：`/workspace/cf-migrate/epic7-steam-guide`
- 分支：`master`
- 基线：`4d1996b5014eecedd34cd6c49555fdab8e070995`（`docs(audit): record E7 diagram/body verification and push credential failure`）
- 开工前：`git fetch origin` 成功；`git status` 干净；`HEAD == origin/master == 4d1996b`。本轮在其上继续，未覆盖他人提交。
- 构建：`npm run build` **exit 0**；`postbuild` 输出 `fix-html-lang: updated 172 HTML files`；共 174 个 HTML（含 404）。
- 范围：只去 4 张错误图的 **实际渲染引用**；4 个 webp 文件、冻结图、正文文案、路由、广告/统计配置均未改。

## 0. 结论摘要

| 项 | 结果 |
|---|---|
| DemoView 2 个错误 `<Fig>` | 已删除（`diagram-demo-delete`、`diagram-demo-dodont`） |
| SteamNotesView 2 个错误 `<Fig>` | 已删除（`diagram-steam-notes`、`diagram-steam-bind`） |
| SteamNotesView 的 `diagram-uncheater.webp` | 保留，10 个 locale 的 `/steam-notes/` 仍各渲染 1 次 |
| `CONTENT['/'][locale].hubs` 的 FAQ / Demo warning 图片字段 | 10 locale × 2 = 20 处改为 `""`；href/title/blurb 未动 |
| `out/` 中 4 个文件名的引用 | **0**（全部 174 个 HTML 及静态资源内容中均为 0） |
| 20 个目标路由（10 locale × 2） | 全部 PASS（HTML/build 证据；未做浏览器 UI 验收） |
| 4 个错误图文件 | 保留，字节/SHA 未变；`public/images/` 文件数仍为 23 |
| 冻结 3 图 | SHA/字节完全未变 |
| EN `/steam-transfer/` 冻结项 | 未变（见 §4） |
| Commit | 单一新 commit，未 amend/reset/rebase/force |
| Push | 沙箱无凭据（dry-run 已复现），实际 push 尝试后预期失败；干净 commit 留给外层。本会话不做 CF 直传/二次部署 |

## 1. 源码改动（精确范围）

### 1.1 `components/pages/renderers.tsx`

`DemoView` 删除 2 个 `<Fig>`（原约 1083–1092 行）：

- `src="/images/diagram-demo-delete.webp"`
- `src="/images/diagram-demo-dodont.webp"`

该页其余内容全部保留：TL;DR、`quick-answer`、warning card、`table.data`、Do/Don't 文案、FAQ、来源链接均未动。

`SteamNotesView` 删除 2 个 `<Fig>`（原约 1271–1275、1281–1285 行）：

- `src="/images/diagram-steam-notes.webp"`
- `src="/images/diagram-steam-bind.webp"`

保留中间的：

- `src="/images/diagram-uncheater.webp"`（该图不在错误四图之列）

该页正文、列表、FAQ、来源链接均未动。没有改 `TransferView`，没有改 `FaqView` 对 `diagram-transfer-decision.webp` 的引用。

### 1.2 `lib/i18n/content.ts`

`CONTENT['/'][locale].hubs` 中 FAQ 与 Demo warning 两卡的图片字段在 10 个 locale（en/ko/ja/zh-tw/th/es/pt/de/fr/pl）全部改为 `""`：

- `/images/diagram-steam-notes.webp` → `""`（10 处）
- `/images/diagram-demo-dodont.webp` → `""`（10 处）

href、title、blurb 未改；`HomeView` 结构未改。其他 hubs 的图片字段（transfer、heroes、banners）未改。

### 1.3 保留未动

- `IMAGE_SIZE` 中 4 条映射保留（仅尺寸表，不产生 `<img>`）。
- `app/**/steam-notes`、`app/**/demo-delete-warning` 未新增 `ogImage`（本就没有）。
- `public/images/` 下 23 个文件全部保留；4 个错误图文件也未删除。

`git diff --name-only` 只有：`components/pages/renderers.tsx`、`lib/i18n/content.ts`（外加本审计文件）。

## 2. 逐 URL 矩阵（20 页，实际 `<img>` / `og:image` 核验）

说明：

- “0/4”= 该页 HTML 中 `diagram-demo-delete.webp`、`diagram-demo-dodont.webp`、`diagram-steam-bind.webp`、`diagram-steam-notes.webp` 四个文件名的出现次数为 0（不只是 `<img>`，连 `og:image`、preload、文本也没有）。
- `<img>` 数为该页实际 `<img src>` 数量。`steam-notes` 仅剩 uncheater 1 张；`demo-delete-warning` 为 0 张。
- 结构计数（`h2/table/details/li`）用于证明正文、表格、FAQ 仍在，不代表只改了图。
- 结果 PASS 指“引用移除 + 正文仍在 + build/HTML 证据通过”，**不是浏览器 UI 验收**。

| # | URL | 原缺口 | 做了什么 | `out/` 证据 | 结果 |
|---|---|---|---|---|---|
| 1 | `/steam-notes/` (en) | 2 错图 `<Fig>`：steam-notes、steam-bind | 删 2 个 `<Fig>`；保留 uncheater | `0/4`；`<img>`=1（uncheater）；h1=`Steam-specific notes`；h2=10、table=1、details=5、li=42 | PASS |
| 2 | `/demo-delete-warning/` (en) | 2 错图 `<Fig>`：demo-delete、demo-dodont | 删 2 个 `<Fig>`；保留 warning/table/FAQ | `0/4`；`<img>`=0；h1=`Steam demo: account deletion risk`；h2=7、table=1、details=3、li=36 | PASS |
| 3 | `/ja/steam-notes/` | 同上（共享 renderer） | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Steam固有メモ`；h2=10、table=1、details=5、li=42 | PASS |
| 4 | `/ja/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Steamデモ：アカウント削除リスク`；h2=7、table=1、details=3、li=36 | PASS |
| 5 | `/es/steam-notes/` | 同上 | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Notas específicas de Steam`；h2=10、table=1、details=5、li=42 | PASS |
| 6 | `/es/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Demo de Steam: riesgo de borrado de cuenta`；h2=7、table=1、details=3、li=36 | PASS |
| 7 | `/pt/steam-notes/` | 同上 | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Notas específicas do Steam`；h2=10、table=1、details=5、li=42 | PASS |
| 8 | `/pt/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Demo da Steam: risco de exclusão de conta`；h2=7、table=1、details=3、li=36 | PASS |
| 9 | `/de/steam-notes/` | 同上 | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Steam-spezifische Hinweise`；h2=10、table=1、details=5、li=42 | PASS |
| 10 | `/de/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Steam-Demo: Risiko der Kontolöschung`；h2=7、table=1、details=3、li=36 | PASS |
| 11 | `/fr/steam-notes/` | 同上 | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Notes spécifiques à Steam`；h2=10、table=1、details=5、li=42 | PASS |
| 12 | `/fr/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Démo Steam : risque de suppression de compte`；h2=7、table=1、details=3、li=36 | PASS |
| 13 | `/pl/steam-notes/` | 同上 | 同上 | `0/4`；`<img>`=1（uncheater）；h1=`Notatki specyficzne dla Steam`；h2=10、table=1、details=5、li=42 | PASS |
| 14 | `/pl/demo-delete-warning/` | 同上 | 同上 | `0/4`；`<img>`=0；h1=`Demo na Steam: ryzyko usunięcia konta`；h2=7、table=1、details=3、li=36 | PASS |
| 15 | `/ko/steam-notes/` | 同上（同一共享 renderer，报告未抓但源码存在） | 同上，未改 ko 正文 | `0/4`；`<img>`=1（uncheater）；h1=`Steam 전용 안내`；h2=10、table=1、details=5、li=42 | PASS |
| 16 | `/ko/demo-delete-warning/` | 同上 | 同上，未改 ko 正文 | `0/4`；`<img>`=0；h1=`Steam 데모: 계정 삭제 위험`；h2=7、table=1、details=3、li=36 | PASS |
| 17 | `/zh-tw/steam-notes/` | 同上 | 同上，未改 zh-tw 正文 | `0/4`；`<img>`=1（uncheater）；h1=`Steam 專屬說明`；h2=10、table=1、details=5、li=42 | PASS |
| 18 | `/zh-tw/demo-delete-warning/` | 同上 | 同上，未改 zh-tw 正文 | `0/4`；`<img>`=0；h1=`Steam 試玩：刪號風險`；h2=7、table=1、details=3、li=36 | PASS |
| 19 | `/th/steam-notes/` | 同上 | 同上，未改 th 正文 | `0/4`；`<img>`=1（uncheater）；h1=`บันทึกเฉพาะของ Steam`；h2=10、table=1、details=5、li=42 | PASS |
| 20 | `/th/demo-delete-warning/` | 同上 | 同上，未改 th 正文 | `0/4`；`<img>`=0；h1=`Steam demo: ความเสี่ยงจากการลบบัญชี`；h2=7、table=1、details=3、li=36 | PASS |

覆盖关系：

- 独立报告已抓的 14 页（EN + ja/es/pt/de/fr/pl 的 2 路由）全部在上表，逐页为 `0/4`。
- `ko` / `zh-tw` / `th` 的 6 页由**同一 `DemoView` / `SteamNotesView`** 渲染，删共享 `<Fig>` 后同步消失；已额外在 `out/` 核验，不是新开范围，也未改这些 locale 的正文。

### 2.1 全 `out/` 扫描

- `grep -rl 'diagram-demo-delete\|diagram-demo-dodont\|diagram-steam-bind\|diagram-steam-notes' out` → **0 个文件**。
- 20 页中 `og:image` 含有 4 个路径的数量为 **0**；这些页本来也无 `og:image`。
- `out/images/` 仍保留 23 个文件（与 `public/images/` 数量一致），4 张错误图在 `out/images/` 的 SHA 与源文件一致（字节未变）。

### 2.2 正文仍在的证明

- `git diff` 对本轮源码只显示：4 个 `<Fig>` 块被删（20 行删除）+ 20 个 hub 图片字段由路径改为 `""`；**没有任何正文文案字符串被改动**。
- 20 页结构计数仍为：`steam-notes` h2=10、table=1、details=5、li=42；`demo-delete-warning` h2=7、table=1、details=3、li=36。各 locale 的 h1 均正常输出（见上表）。
- `demo-delete-warning` 的 warning card、表格、Do/Don't 文案、3 个 FAQ 仍在（`<img>` 归零，但文本结构未减）。
- 4 个 `img_alt` / `img_alt2` / `img_alt3` 字段仍留在内容对象中，只是不再被渲染；未删字段、未改文案。

## 3. 文件 SHA-256 / 字节对照（提交前后）

“前”= 基线 HEAD `4d1996b` / 任务给定值；“后”= `npm run build` 之后重新计算。`git diff -- public/` 为空。

| 文件 | 字节 | 前 SHA-256 | 后 SHA-256 | 结果 |
|---|---:|---|---|---|
| `public/images/diagram-transfer-decision.webp` | 49248 | `d88e1b6905976fb4a856e2a72cd306050921173afc6981dd02dbc7de015ff4dd` | 同左 | 未变 |
| `public/images/diagram-transfer.webp` | 19466 | `491c65b0715c4167ad71749bdf78ceda142ea31bdcfdd58782309168ce1c3fc4` | 同左 | 未变 |
| `public/images/steam-header.webp` | 27852 | `08ca2061388c3df32cd744c9bf30f0d62de875132d4ceeec2cec04f2c5fcdb82` | 同左 | 未变 |
| `public/images/diagram-steam-bind.webp` | 19492 | `4b18b6a29af73168f12bcfb73e0d0a708f5ca3423f91d4f0f26ece0369ad0007` | 同左 | 保留、未变 |
| `public/images/diagram-steam-notes.webp` | 9528 | `d9d290f4c81896ea1e48618d0dc231adfb7dfd35d043692c3fa29004cc90bcce` | 同左 | 保留、未变 |
| `public/images/diagram-demo-delete.webp` | 10814 | `82eda43c52dc6a1fa19837b5046daed55471eae5109ce70b03aca3b733610ff7` | 同左 | 保留、未变 |
| `public/images/diagram-demo-dodont.webp` | 21228 | `0cab092d12c6fefacc94f5b86d1a557e5b984cfaa82e8e535fed4cfba46b38aa` | 同左 | 保留、未变 |
| `public/images/diagram-uncheater.webp` | 21514 | `646722b5fc0a18e10299db59f242ee4b8d01456525487303b2b6f47a5e17b18f` | 同左 | 保留、引用保留 |

`out/images/` 中 4 张错误图的 SHA 与上表一致（`82eda43c…`、`0cab092d…`、`4b18b6a2…`、`d9d290f4…`），说明 build 只是复制，没有重编码或替换。

## 4. 冻结回归

| 检查项 | 证据 | 结果 |
|---|---|---|
| EN `/steam-transfer/` Title | `Epic Seven Steam Transfer Guide \| Keep Progress \| E7` | 未变 |
| EN H1 | `Epic Seven Steam transfer — keep progress` | 未变 |
| EN 首 H2 | `Pre-transfer checklist` | 未变 |
| EN Last verified | `2026-11-07` | 未变 |
| 已批准 Wrong-bind Convert 句 | TL;DR 中完整存在：`Wrong-bind: do not delete the temporary Steam-linked STOVE account. Log in to STOVE with that Steam account (register via Steam login first if needed), open [My Profile Icon > Account Information] → Convert, convert the temporary account to a non-Steam login, then convert the original email/SNS account to Steam.` | 未变 |
| EN 首屏三图 | 恰好 3 个 `<img>`：`diagram-transfer.webp`、`diagram-transfer-decision.webp`、`steam-header.webp` | 未变 |
| `TransferView` | 源码 diff 未触及 | 未变 |
| FAQ 的 decision 图 | `out/faq/index.html` 仍有 `<img src="/images/diagram-transfer-decision.webp">` 及对应 alt | 保留 |
| `diagram-transfer-decision.webp` | SHA `d88e1b69…`，文件 49248 字节 | 未变 |
| 首页 primary | 10 个 locale 首页均恰好 1 个 `<img>` = `/images/diagram-transfer.webp` | 保留 |
| 首页 secondary 文字链接 | 10 个 locale 首页仍含 `/faq/` 与 `/demo-delete-warning/` 的 hub 链接（图片字段为空，不渲染 `<img>`） | 保留 |
| `diagram-uncheater.webp` | 10 个 `/steam-notes/` 页各 1 个 `<img>`；文件 SHA 未变 | 保留 |
| `IMAGE_SIZE` 4 条 | 仍在 `renderers.tsx` 第 184–198 行 | 保留 |
| `app/**` ogImage | 未改 `app/`（`git diff` 为空），未新增 `og:image` | 未变 |
| ads.txt | `google.com, pub-3175943774981621, DIRECT, f08c47fec0942fa0` | 未变 |
| AdSense / GA4 | 174/174 HTML 均含 `ca-pub-3175943774981621` 与 `G-QY1D1CDXDZ` | 未变 |
| `next.config.mjs` | `output: 'export'`、`trailingSlash: true`、`images.unoptimized`；未改 | 未变 |
| `pl` 路由 | `out/pl/` 18 个条目（含 `pl/steam-transfer`、`pl/faq`、`pl/download`、`pl/demo-delete-warning`、`pl/steam-notes`） | 未变 |
| 其他正确自绘图 | Foundry/Heroes/Quests 未改；`git diff` 不含其文件 | 未变 |

## 5. 构建与验证方法

- `npm run build` → exit 0；`postbuild` 更新 172 个 HTML；`out/` 共 174 个 HTML。
- 20 页逐页用 Node 读取 HTML，统计：
  - 4 个文件名的全文出现次数（全部 0）；
  - `<img src>` 列表（notes=uncheater 1；demo=0）；
  - `og:image` 列表（空）；
  - h1 文本、h2/table/details/li 计数（正文仍在）。
- 全 `out/` 再跑 `grep -rl` 四文件名 → 0 文件。
- 冻结项用 `<title>` / `<h1>` / 首个 `<h2>` / `2026-11-07` / 三图 `<img>` 列表逐项读取。
- 未做浏览器截图/UI 交互验收；本 STATUS 的 PASS 只到 build + 静态 HTML 证据层。

## 6. Git 与推送

- 开工 `git fetch origin` + `status` + `log -1`：干净，`4d1996b`，与 `origin/master` 一致。
- 本轮只创建一个新 commit（未 amend、未 reset、未 rebase、未 force）：
  `fix(content): drop four leftover Withdraw diagrams from notes and demo pages, keep files`
- 环境注：本会话 `GIT_CONFIG_COUNT=1` 但缺少 `GIT_CONFIG_KEY_0`，直接运行 git 会报 `missing config key GIT_CONFIG_KEY_0`；所有 git 命令以 `env -u GIT_CONFIG_COUNT -u GIT_CONFIG_VALUE_0` 运行。
- 推送前 `git push --dry-run origin master` 返回：
  `fatal: could not read Username for 'https://github.com': No such device or address`（exit 128）。
  沙箱无 GitHub 凭据。按任务要求仍会在 commit 后执行一次 `git push origin master`；预计同样失败，失败后不重试、不换方式、不改历史。
- 若 push 失败：commit 保持干净，供外层用其凭据推送；E7 的 Cloudflare Pages 自动部署由该次 master push 触发。本会话**没有**做 CF 直传、DTS 上传或第二次部署。
- 本会话没有 CloudAgent、没有第二个 dsh、没有真实账号操作、没有 GSC/IndexNow/扩词/付费/新域名/编作者。

## 7. 未做 / 限制（不要当成已验收）

1. **没有浏览器 UI 验收。** 没有截图、没有真实点击 Do/Don't 或 warning 卡；PASS 仅为 build + `out/` HTML 结构证据。
2. **4 张错误图文件仍在。** 按任务要求不删、不改像素、不改名；直接访问 `/images/diagram-*.webp` 仍会看到旧 Withdraw 内容。本任务只保证 20 个页面不再引用它们。
3. **未重绘、未改任何图片字节。** 包括 decision 与另外两张冻结图。
4. **未触发 Cloudflare Pages。** 取决于 push 是否成功；本会话未做直传。
5. `img_alt` / `img_alt2` / `img_alt3` 字段仍留在内容对象中但不再渲染；未删除，避免扩大文案改动。
6. 独立报告中的 14 页为 HTML/curl 级证据；本轮新增 `ko`/`zh-tw`/`th` 6 页也为 `out/` 级证据，不是浏览器级。

## 8. 文件变更

- `components/pages/renderers.tsx`：DemoView 删 2 个 `<Fig>`；SteamNotesView 删 2 个错误 `<Fig>`，保留 uncheater。
- `lib/i18n/content.ts`：10 locale × 2 个 hubs 图片字段改为 `""`。
- `audit/e7-remove-four-wrong-image-refs-STATUS.md`：本文件。
