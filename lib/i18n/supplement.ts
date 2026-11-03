import { OFFICIAL, type Locale } from '@/lib/site';

/**
 * Late-2026 content additions kept separate from the legacy CONTENT block so
 * the long-lived translations stay easy to diff and review.
 */

export type SupplementSection = {
  h2: string;
  intro: string;
  bullets: readonly string[];
  source?: { href: string; label: string };
};

/**
 * Two extra FAQ entries appended to CONTENT['/faq/'][locale].faqs.
 * FAQ_GROUPS item indexes below refer to the combined array.
 */
export const FAQ_EXTRA: Record<
  Locale,
  readonly (readonly [string, string])[]
> = {
  en: [
    [
      'Can I still play on mobile or STOVE PC after converting?',
      'Per the STOVE Steam FAQ, the converted account can still be used on STOVE PC and mobile. Treat Steam as another login route, not a one-way platform lock. Confirm current device rules on the [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]].',
    ],
    [
      'Do purchases, unclaimed rewards, and Epic Pass carry over?',
      'Per the STOVE Steam FAQ, progress and data — including unclaimed rewards, event items, and Epic Pass — carry over when the original login is converted. Verify current details on the [[official FAQ|https://page.onstove.com/epicseven/global/view/14378309]] before converting.',
    ],
    [
      'STOVE says “already been registered” — what does that mean?',
      'That message usually means the Steam ID is already tied to another STOVE login, often the empty account Steam created on first launch. Authorize that Steam ID on STOVE, withdraw the extra STOVE account, then convert the original email/SNS login. Do not create more Steam accounts. Check the exact wording on the [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]].',
    ],
    [
      'Why is the Transfer button greyed out for three months?',
      'STOVE can place a holding or cooldown period on transfer after a wrong-bind cleanup or withdrawal; players commonly report three months. The exact start date and scope are shown in your STOVE account UI, not on this site. Wait it out or ask STOVE customer support — never use a third-party unlock service.',
    ],
  ],
  ko: [
    [
      '전환 후에도 모바일이나 STOVE PC로 플레이할 수 있나요?',
      'STOVE Steam FAQ에 따르면 전환한 계정은 STOVE PC와 모바일에서도 계속 사용할 수 있습니다. Steam은 일방적인 플랫폼 잠금이 아니라 또 하나의 로그인 경로입니다. 최신 기기 규칙은 [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 확인하세요.',
    ],
    [
      '구매 내역, 미수령 보상, Epic Pass도 넘어가나요?',
      'STOVE Steam FAQ 기준으로 미수령 보상, 이벤트 아이템, Epic Pass를 포함한 진행과 데이터가 원래 로그인을 전환할 때 이어집니다. 전환 전에 [[공식 FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 최신 내용을 확인하세요.',
    ],
    [
      'STOVE에 “already been registered”가 뜨면 무슨 뜻인가요?',
      '보통 해당 Steam ID가 다른 STOVE 로그인(첫 실행 때 Steam이 만든 빈 계정인 경우가 많음)에 이미 묶여 있다는 뜻입니다. STOVE에서 그 Steam ID를 인가하고, 여분의 STOVE 계정을 탈퇴한 뒤, 원래 이메일/SNS 로그인을 전환하세요. Steam 계정을 더 만들지 마세요. 정확한 문구는 [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 확인하세요.',
    ],
    [
      '이전 버튼이 3개월 동안 비활성화되는 이유는?',
      '잘못된 연동 정리나 탈퇴 후 STOVE가 이전에 보류/쿨다운 기간을 둘 수 있으며, 흔히 3개월로 보고됩니다. 정확한 시작일과 범위는 이 사이트가 아니라 STOVE 계정 UI에 표시됩니다. 기다리거나 STOVE 고객지원에 문의하고, 제3자 해제 서비스는 쓰지 마세요.',
    ],
  ],
  ja: [
    [
      '変換後もモバイルやSTOVE PCで遊べますか？',
      'STOVE Steam FAQによると、変換したアカウントはSTOVE PCとモバイルでも引き続き利用できます。Steamは一方通行のプラットフォーム固定ではなく、もう一つのログイン経路です。最新の端末ルールは[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で確認してください。',
    ],
    [
      '購入、未受け取り報酬、Epic Passも引き継げますか？',
      'STOVE Steam FAQでは、未受け取り報酬・イベントアイテム・Epic Passを含む進行とデータが、元のログインを変換すると引き継がれるとされています。変換前に[[公式FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で最新情報を確認してください。',
    ],
    [
      'STOVEで「already been registered」と出たら？',
      '通常、そのSteam IDが別のSTOVEログイン（初回起動時にSteamが作った空アカウントが多い）に既に紐づいているという意味です。STOVEでそのSteam IDを認可し、余分なSTOVEアカウントを退会してから、元のメール/SNSログインを変換してください。Steamアカウントを増やさないでください。正確な文面は[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で確認してください。',
    ],
    [
      '引き継ぎボタンが3か月間グレーになるのはなぜ？',
      '誤連携の整理や退会のあと、STOVEが引き継ぎに保留・クールダウン期間を設けることがあり、一般に3か月と報告されています。正確な開始日と範囲は当サイトではなくSTOVEアカウント画面に表示されます。待つかSTOVE公式サポートへ問い合わせ、第三者の解除サービスは使わないでください。',
    ],
  ],
  'zh-tw': [
    [
      '轉換後還能用手機或 STOVE PC 玩嗎？',
      '依 STOVE Steam FAQ，轉換後的帳號仍可在 STOVE PC 與手機使用。Steam 是另一種登入方式，不是單向平台鎖定。最新裝置規則請見[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]。',
    ],
    [
      '購買、未領取獎勵與 Epic Pass 會保留嗎？',
      '依 STOVE Steam FAQ，轉換原本登入後，包含未領取獎勵、活動道具與 Epic Pass 的進度與資料會一併保留。轉換前請在[[官方 FAQ|https://page.onstove.com/epicseven/global/view/14378309]]確認最新說明。',
    ],
    [
      'STOVE 顯示「already been registered」是什麼意思？',
      '通常表示該 Steam ID 已綁定另一個 STOVE 登入（常見是首次啟動時 Steam 自動建立的空白帳號）。請在 STOVE 授權該 Steam ID、註銷多出來的 STOVE 帳號，再轉換原本的 Email／SNS 登入。不要一直新開 Steam 帳號。實際文案請見[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]。',
    ],
    [
      '為什麼轉移按鈕會灰掉三個月？',
      '錯綁清理或註銷後，STOVE 可能對轉移設下保留期／冷靜期，玩家常見回報為三個月。確切起算日與範圍以你的 STOVE 帳號介面為準，不是本站。請等待或詢問 STOVE 客服，切勿使用第三方解鎖服務。',
    ],
  ],
};

/** Visible H2 grouping for /faq/. Item indexes match c.faqs + FAQ_EXTRA. */
export const FAQ_GROUPS: Record<
  Locale,
  readonly { h2: string; intro: string; items: readonly number[] }[]
> = {
  en: [
    {
      h2: 'Account transfer & wrong Steam bind',
      intro:
        'Start here if Steam shows a new Heir, STOVE says “already registered”, or Transfer is greyed out. The usual cause is a second Steam-linked STOVE login, not deleted progress.',
      items: [0, 6, 7, 8, 9],
    },
    {
      h2: 'Foundry, cross-play & schedules',
      intro:
        'Foundry is a separate server opened with the Steam launch. Converting login does not move a legacy character onto it; cross-play uses the same linked account.',
      items: [1, 2],
    },
    {
      h2: 'Launch, anti-cheat & platform pricing',
      intro:
        'Separate client problems from account problems. Anti-cheat and store pricing are platform-level; transfer state is a STOVE account issue.',
      items: [3, 4],
    },
    {
      h2: 'Demo, reinstall & data safety',
      intro:
        'The demo is over, but the deletion trap is not. Do not use in-game account deletion after a successful Steam login transfer.',
      items: [5],
    },
  ],
  ko: [
    {
      h2: '계정 이전·Steam 잘못 연동',
      intro:
        'Steam에 새 후계자가 보이거나, STOVE가 “already registered”를 표시하거나, 이전 버튼이 비활성화되면 여기부터 확인하세요. 흔한 원인은 진행 삭제가 아니라 Steam 연동 STOVE 계정이 하나 더 생긴 것입니다.',
      items: [0, 6, 7, 8, 9],
    },
    {
      h2: '파운드리·크로스플레이·일정',
      intro:
        '파운드리는 Steam 출시와 함께 열린 별도 서버입니다. 로그인을 전환해도 기존 캐릭터가 파운드리로 이동하지 않으며, 크로스플레이는 같은 연동 계정을 사용합니다.',
      items: [1, 2],
    },
    {
      h2: '실행·안티치트·플랫폼 가격',
      intro:
        '클라이언트 문제와 계정 문제를 나눠 보세요. 안티치트와 상점 가격은 플랫폼 영역이고, 이전 상태는 STOVE 계정 문제입니다.',
      items: [3, 4],
    },
    {
      h2: '데모·재설치·데이터 안전',
      intro:
        '데모는 끝났지만 삭제 위험은 남아 있습니다. Steam 로그인 전환에 성공한 뒤에는 게임 내 계정 삭제를 사용하지 마세요.',
      items: [5],
    },
  ],
  ja: [
    {
      h2: 'アカウント引き継ぎ・Steamの誤連携',
      intro:
        'Steamで新しい継承者が出る、STOVEが「already registered」と表示する、引き継ぎボタンがグレーのときは、まずここを確認してください。よくある原因は進行消去ではなく、Steam連携のSTOVEアカウントが二重にできたことです。',
      items: [0, 6, 7, 8, 9],
    },
    {
      h2: 'ファウンドリ・クロスプレイ・日程',
      intro:
        'ファウンドリはSteamローンチと同時に開いた別サーバーです。ログインを変換しても旧キャラクターはファウンドリへ移動せず、クロスプレイは同じ連携アカウントを使います。',
      items: [1, 2],
    },
    {
      h2: '起動・アンチチート・プラットフォーム価格',
      intro:
        'クライアントの問題とアカウントの問題を分けて考えます。アンチチートとストア価格はプラットフォーム側、引き継ぎ状態はSTOVEアカウント側の話です。',
      items: [3, 4],
    },
    {
      h2: 'デモ・再インストール・データ保護',
      intro:
        'デモは終了しましたが、削除の危険は残ります。Steamログイン変換に成功した後に、ゲーム内のアカウント削除を使わないでください。',
      items: [5],
    },
  ],
  'zh-tw': [
    {
      h2: '帳號轉移與 Steam 錯綁',
      intro:
        '若 Steam 出現全新繼承人、STOVE 顯示「already registered」，或轉移按鈕灰掉，先看這裡。常見原因是多了一個 Steam 連結的 STOVE 帳號，而不是進度被刪除。',
      items: [0, 6, 7, 8, 9],
    },
    {
      h2: 'Foundry、跨平台與日程',
      intro:
        'Foundry 是隨 Steam 上架開啟的獨立伺服器。轉換登入不會把舊角色搬到 Foundry；跨平台使用的是同一個已連結帳號。',
      items: [1, 2],
    },
    {
      h2: '啟動、反作弊與平台價格',
      intro:
        '請把客戶端問題和帳號問題分開看。反作弊與商店價格屬平台層面，轉移狀態則屬 STOVE 帳號層面。',
      items: [3, 4],
    },
    {
      h2: '試玩、重裝與資料安全',
      intro:
        '試玩已結束，但刪號風險仍在。Steam 登入轉換成功後，請勿使用遊戲內帳號刪除。',
      items: [5],
    },
  ],
};

export const BANNERS_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  en: [
    {
      h2: 'Luna path vs a normal pickup banner',
      intro:
        'Luna is not the current pickup. The Rank 70 Luna join is a Foundry launch reward path, not a standard limited pickup with its own separate pity counter. Check the in-game banner details before spending.',
      bullets: [
        'Posted window: through ~2026-12-31 02:59 UTC on Foundry, per the STOVE Foundry notice.',
        'Verify in-client: summon cost, current pity state, and whether the banner is Foundry-only.',
        'Daily free Covenant summons come from Summon Support and are separate from the Luna path.',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry notice' },
    },
    {
      h2: 'Before you pull — three checks',
      intro:
        'Banner posts can change after weekly maintenance. Use these checks instead of trusting a copied date.',
      bullets: [
        'Convert the posted UTC end time into your own time zone.',
        'Confirm whether your character is on Foundry or a legacy server; the pools are not interchangeable.',
        'Read the official in-game rates and pity rules. This site does not publish unofficial rate tables.',
      ],
      source: { href: OFFICIAL.steamStore, label: 'Steam store — app 5019180' },
    },
  ],
  ko: [
    {
      h2: '루나 경로와 일반 픽업 배너의 차이',
      intro:
        '루나는 현재 픽업이 아닙니다. Rank 70 루나 합류는 Foundry 출시 보상 경로이며, 별도 천장이 있는 일반 한정 픽업과 같지 않습니다. 재화를 쓰기 전에 게임 내 배너 설명을 확인하세요.',
      bullets: [
        '공지 기준 기간: Foundry에서 2026-12-31 02:59 UTC경까지(STOVE Foundry 공지).',
        '게임 내 확인: 소환 비용, 현재 천장 상태, 해당 배너가 Foundry 전용인지.',
        '매일 무료 성약 소환은 소환 지원에서 받으며 루나 경로와 별개입니다.',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry 공지' },
    },
    {
      h2: '뽑기 전 세 가지 확인',
      intro:
        '배너 공지는 주간 점검 후 바뀔 수 있습니다. 복사된 날짜보다 아래 항목을 직접 확인하세요.',
      bullets: [
        '공지의 UTC 종료 시각을 내 시간대로 바꿔 확인.',
        '내 캐릭터가 Foundry인지 기존 서버인지 확인 — 소환 풀은 서로 호환되지 않습니다.',
        '게임 내 공식 확률·천장 규칙을 읽으세요. 이 사이트는 비공식 확률표를 제공하지 않습니다.',
      ],
      source: { href: OFFICIAL.steamStore, label: 'Steam 스토어 — app 5019180' },
    },
  ],
  ja: [
    {
      h2: 'ルナ導線と通常ピックアップの違い',
      intro:
        'ルナは現在のピックアップではありません。Rank 70ルナ加入はファウンドリのローンチ報酬導線で、独自の天井を持つ通常の限定ピックアップとは異なります。消費前にゲーム内のバナー説明を確認してください。',
      bullets: [
        '告知上の期間：ファウンドリで2026-12-31 02:59 UTC頃まで（STOVEファウンドリ告知）。',
        'ゲーム内で確認：召喚コスト、現在の天井状態、ファウンドリ限定かどうか。',
        '毎日の無料聖約召喚は召喚サポートから受け取り、ルナ導線とは別です。',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVEファウンドリ告知' },
    },
    {
      h2: '引く前の3チェック',
      intro:
        'バナー告知は毎週のメンテ後に変わることがあります。コピーした日付ではなく、次を確認してください。',
      bullets: [
        '告知のUTC終了時刻を自分のタイムゾーンに変換する。',
        '自分のキャラがファウンドリか既存サーバーかを確認 — 召喚プールは互換ではありません。',
        'ゲーム内の公式確率・天井ルールを読む。当サイトは非公式の確率表を出しません。',
      ],
      source: { href: OFFICIAL.steamStore, label: 'Steamストア — app 5019180' },
    },
  ],
  'zh-tw': [
    {
      h2: 'Luna 路線與一般限定召喚的差別',
      intro:
        'Luna 不是目前 Pickup。Rank 70 Luna 加入是 Foundry 開服獎勵路線，不是另一個有獨立保底的限定召喚。投入資源前請先看遊戲內召喚說明。',
      bullets: [
        '公告期間：Foundry 約至 2026-12-31 02:59 UTC（STOVE Foundry 公告）。',
        '遊戲內確認：召喚成本、目前保底狀態、是否為 Foundry 限定。',
        '每日免費聖約召喚在召喚支援領取，與 Luna 路線分開計算。',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry 公告' },
    },
    {
      h2: '抽卡前先做三項確認',
      intro:
        '召喚公告常在每週維護後變動。請直接確認以下項目，不要只信轉貼日期。',
      bullets: [
        '把公告的 UTC 結束時間換算成自己的時區。',
        '確認角色在 Foundry 還是既有伺服器——召喚池不互通。',
        '閱讀遊戲內官方機率與保底規則；本站不提供非官方機率表。',
      ],
      source: { href: OFFICIAL.steamStore, label: 'Steam 商店 — app 5019180' },
    },
  ],
};

export const UPDATES_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  en: [
    {
      h2: 'Steam launch vs Foundry timeline',
      intro:
        'The launch window has two tracks: the Steam client going live and the new Foundry server unlocking content. Keep them separate when you plan.',
      bullets: [
        '2026-10-29 — Steam client live and Foundry open after maintenance.',
        '2026-11-21 03:00 UTC — Foundry Guild War unlocks.',
        '2026-12-10 — Foundry World Arena after maintenance (UTC).',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry notice' },
    },
    {
      h2: 'How to verify an update before acting',
      intro:
        'A summary can age quickly. Check the original notice before you spend currency or change an account setting.',
      bullets: [
        'Open the linked STOVE notice for the original UTC time and eligibility.',
        'Check whether the change is Foundry-only or also applies to legacy servers.',
        'For client fixes, compare the Steam build in your library with the Steam news post.',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam news' },
    },
  ],
  ko: [
    {
      h2: 'Steam 출시와 Foundry 타임라인',
      intro:
        '출시 기간에는 Steam 클라이언트 오픈과 Foundry 서버 콘텐츠 해금이라는 두 가지 일정이 겹칩니다. 계획할 때는 나눠서 보세요.',
      bullets: [
        '2026-10-29 — 점검 후 Steam 클라이언트 정식 오픈, Foundry 개설.',
        '2026-11-21 03:00 UTC — Foundry 길드전 해금.',
        '2026-12-10 — 점검 후 Foundry 월드 아레나(UTC).',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry 공지' },
    },
    {
      h2: '행동 전 업데이트 확인법',
      intro:
        '요약은 빠르게 낡을 수 있습니다. 재화를 쓰거나 계정 설정을 바꾸기 전에 원문 공지를 확인하세요.',
      bullets: [
        '연결된 STOVE 공지에서 원문 UTC 시각과 대상 조건을 확인.',
        '변경이 Foundry 전용인지 기존 서버에도 적용되는지 확인.',
        '클라이언트 수정은 Steam 라이브러리 빌드와 Steam 뉴스 글을 비교.',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam 뉴스' },
    },
  ],
  ja: [
    {
      h2: 'Steamローンチとファウンドリのタイムライン',
      intro:
        'ローンチ期はSteamクライアント開始とファウンドリのコンテンツ解放が重なります。計画では分けて考えてください。',
      bullets: [
        '2026-10-29 — メンテ後にSteamクライアント正式開始、ファウンドリ開設。',
        '2026-11-21 03:00 UTC — ファウンドリのギルド戦解放。',
        '2026-12-10 — メンテ後にファウンドリのワールドアリーナ（UTC）。',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVEファウンドリ告知' },
    },
    {
      h2: '行動前に更新を確認する方法',
      intro:
        '要約はすぐ古くなります。通貨を使ったりアカウント設定を変えたりする前に、原文の告知を確認してください。',
      bullets: [
        'リンクされたSTOVE告知で原文のUTC時刻と対象条件を確認。',
        '変更がファウンドリ限定か、既存サーバーにも適用されるかを確認。',
        'クライアント修正はSteamライブラリのビルドとSteamニュース記事を比較。',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steamニュース' },
    },
  ],
  'zh-tw': [
    {
      h2: 'Steam 上架與 Foundry 時程',
      intro:
        '開服期有兩條時間線：Steam 客戶端開放，以及 Foundry 新伺服器解鎖內容。規劃時請分開看。',
      bullets: [
        '2026-10-29 — 維護後 Steam 客戶端正式上線、Foundry 開服。',
        '2026-11-21 03:00 UTC — Foundry 公會戰解鎖。',
        '2026-12-10 — 維護後 Foundry 世界競技場（UTC）。',
      ],
      source: { href: OFFICIAL.stoveFoundry, label: 'STOVE Foundry 公告' },
    },
    {
      h2: '行動前如何核對更新',
      intro:
        '摘要可能很快過時。投入資源或變更帳號設定前，請先看原始公告。',
      bullets: [
        '點開連結的 STOVE 公告，確認原始 UTC 時間與適用對象。',
        '確認改動是 Foundry 限定，還是也套用到既有伺服器。',
        '客戶端修正請比對 Steam 收藏庫版本與 Steam 新聞內容。',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam 新聞' },
    },
  ],
};

export const MAINTENANCE_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  en: [
    {
      h2: 'What a maintenance window usually changes',
      intro:
        'Weekly maintenance is where event windows, Foundry unlocks, and client fixes land together. Read the notice before you plan pulls or transfers.',
      bullets: [
        'Event and banner start/end times, usually posted in UTC.',
        'Foundry unlocks such as Guild War and World Arena.',
        'Client and anti-cheat updates delivered through Steam.',
      ],
      source: { href: OFFICIAL.stoveHome, label: 'STOVE Epic Seven hub' },
    },
    {
      h2: 'Pre-patch checklist',
      intro:
        'A short checklist prevents most launch-day surprises.',
      bullets: [
        'Claim time-limited mail and event rewards before downtime starts.',
        'Note the official start and end time from STOVE — not a social-media repost.',
        'After patching, relaunch Steam and confirm the build before reporting a launch bug.',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam news' },
    },
  ],
  ko: [
    {
      h2: '점검에서 주로 바뀌는 것',
      intro:
        '주간 점검에는 이벤트 기간, Foundry 해금, 클라이언트 수정이 함께 반영됩니다. 소환·이전 계획 전에 공지를 읽으세요.',
      bullets: [
        '이벤트·배너 시작/종료 시각(보통 UTC).',
        '길드전·월드 아레나 같은 Foundry 해금.',
        'Steam으로 배포되는 클라이언트·안티치트 업데이트.',
      ],
      source: { href: OFFICIAL.stoveHome, label: 'STOVE Epic Seven 허브' },
    },
    {
      h2: '점검 전 체크리스트',
      intro:
        '짧은 점검 목록만으로도 출시일의 대부분의 실수를 막을 수 있습니다.',
      bullets: [
        '점검 시작 전에 기간 한정 우편·이벤트 보상 수령.',
        'SNS 재게시가 아니라 STOVE 공지의 공식 시작·종료 시각 확인.',
        '패치 후 Steam을 다시 실행해 빌드를 확인한 뒤 실행 오류를 제보.',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam 뉴스' },
    },
  ],
  ja: [
    {
      h2: 'メンテで主に変わるもの',
      intro:
        '週次メンテではイベント期間、ファウンドリの解放、クライアント修正がまとめて反映されます。召喚や引き継ぎの計画前に告知を読みましょう。',
      bullets: [
        'イベント・バナーの開始/終了時刻（通常UTC）。',
        'ギルド戦やワールドアリーナなどのファウンドリ解放。',
        'Steam経由で配信されるクライアント・アンチチート更新。',
      ],
      source: { href: OFFICIAL.stoveHome, label: 'STOVE Epic Sevenハブ' },
    },
    {
      h2: 'メンテ前チェックリスト',
      intro:
        '短いチェックでもローンチ日のトラブルの多くを防げます。',
      bullets: [
        'メンテ開始前に期間限定メール・イベント報酬を受け取る。',
        'SNSの転載ではなくSTOVE告知の公式開始・終了時刻を控える。',
        'パッチ後にSteamを再起動しビルドを確認してから起動不具合を報告。',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steamニュース' },
    },
  ],
  'zh-tw': [
    {
      h2: '維護通常會改動什麼',
      intro:
        '每週維護會同時更新活動期間、Foundry 解鎖與客戶端修正。安排召喚或轉移前先讀公告。',
      bullets: [
        '活動與召喚開始／結束時間，通常以 UTC 公布。',
        '公會戰、世界競技場等 Foundry 解鎖。',
        '透過 Steam 派送的客戶端與反作弊更新。',
      ],
      source: { href: OFFICIAL.stoveHome, label: 'STOVE Epic Seven 中心' },
    },
    {
      h2: '維護前檢查清單',
      intro:
        '簡短檢查就能避免開服日多數意外。',
      bullets: [
        '維護開始前領取限時信件與活動獎勵。',
        '記下 STOVE 公告的官方開始／結束時間，不要用社群轉貼。',
        '更新後重開 Steam 確認版本，再回報啟動問題。',
      ],
      source: { href: OFFICIAL.steamNewsFoundry, label: 'Steam 新聞' },
    },
  ],
};

export const RABBIT_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  en: [
    {
      h2: 'Daily points: how to use the 720 cap',
      intro:
        'The Daily Investigation gives points for adventure, battles, and Arena. The posted cap is 720 per day, so plan around it instead of trying to catch up later.',
      bullets: [
        'Earn points through normal play; check the event page for the current daily cap.',
        'Redeem Lucky Board tickets and Leif milestones before the 2026-11-19 02:59 UTC window closes.',
        'The Bunny Girl Party Hall lobby pack runs longer, to 2026-12-10 02:59 UTC, and is optional.',
      ],
      source: { href: OFFICIAL.stoveLuckyBoard, label: 'STOVE Lucky Board notice' },
    },
    {
      h2: 'Case Files without wasted glasses',
      intro:
        'Case Files is a grid-deduction event, not a combat check. The daily magnifying glasses are the limiting resource.',
      bullets: [
        'Use the daily supply first; late-event Energy top-ups are optional.',
        'Fill the O/X grid and unlock the Culprit Clue before accusing.',
        'This page explains mechanics only; it does not publish culprit answer keys.',
      ],
      source: {
        href: OFFICIAL.stoveSecretRabbitCase,
        label: 'STOVE Case Files notice',
      },
    },
  ],
  ko: [
    {
      h2: '일일 포인트 720 상한 활용',
      intro:
        '일일 조사는 모험·전투·아레나로 포인트를 줍니다. 공지 기준 상한은 하루 720이라, 나중에 몰아서 채우기보다 그날 계획을 세우세요.',
      bullets: [
        '일반 플레이로 포인트를 모으고 이벤트 페이지에서 당일 상한을 확인.',
        '2026-11-19 02:59 UTC 창이 닫히기 전에 럭키 보드 티켓·Leif 마일스톤 수령.',
        '버니 걸 파티 홀 로비 팩은 2026-12-10 02:59 UTC까지로 더 길며 선택 사항.',
      ],
      source: { href: OFFICIAL.stoveLuckyBoard, label: 'STOVE 럭키 보드 공지' },
    },
    {
      h2: '돋보기 낭비 없이 케이스 파일',
      intro:
        '케이스 파일은 전투력이 아니라 격자 추리 이벤트입니다. 일일 돋보기가 핵심 자원입니다.',
      bullets: [
        '일일 지급분을 먼저 쓰고, 후반 Energy 보충은 선택.',
        '범인을 지목하기 전에 O/X 격자를 채우고 Culprit Clue를 해금.',
        '이 페이지는 진행 방식만 설명하며 범인 정답표를 제공하지 않습니다.',
      ],
      source: {
        href: OFFICIAL.stoveSecretRabbitCase,
        label: 'STOVE 케이스 파일 공지',
      },
    },
  ],
  ja: [
    {
      h2: 'デイリーポイント720上限の使い方',
      intro:
        'デイリー調査は冒険・バトル・アリーナでポイントが入ります。告知上の上限は1日720なので、後からまとめて取り戻すのではなく当日の計画を立ててください。',
      bullets: [
        '通常プレイでポイントを集め、イベントページで当日の上限を確認。',
        '2026-11-19 02:59 UTCの窓が閉じる前にラッキーボード券・Leifのマイルストーンを受け取る。',
        'バニーガールパーティホールのロビーパックは2026-12-10 02:59 UTCまでで任意。',
      ],
      source: { href: OFFICIAL.stoveLuckyBoard, label: 'STOVEラッキーボード告知' },
    },
    {
      h2: '虫眼鏡を無駄にしないケースファイル',
      intro:
        'ケースファイルは戦闘力ではなくグリッド推理のイベントです。毎日の虫眼鏡が主要リソースです。',
      bullets: [
        '毎日の配布分を先に使い、終盤のEnergy補充は任意。',
        '犯人を指名する前にO/Xグリッドを埋め、Culprit Clueを解放。',
        'このページは進行方法のみを説明し、犯人の答えは掲載しません。',
      ],
      source: {
        href: OFFICIAL.stoveSecretRabbitCase,
        label: 'STOVEケースファイル告知',
      },
    },
  ],
  'zh-tw': [
    {
      h2: '每日 720 點上限怎麼用',
      intro:
        '每日調查透過冒險、戰鬥與競技場取得點數。公告上限為每天 720，請依當日上限規劃，不要想之後一次補回。',
      bullets: [
        '用正常遊玩累積點數，並在活動頁確認當日上限。',
        '在 2026-11-19 02:59 UTC 結束前領取幸運盤券與 Leif 里程碑。',
        '兔女郎派對大廳禮包開放到 2026-12-10 02:59 UTC，屬選購項目。',
      ],
      source: { href: OFFICIAL.stoveLuckyBoard, label: 'STOVE 幸運盤公告' },
    },
    {
      h2: '不浪費放大鏡的案情檔案',
      intro:
        '案情檔案是格子推理活動，不是戰力檢查。每日放大鏡才是關鍵資源。',
      bullets: [
        '先使用每日配給，活動後期的 Energy 補充屬選購。',
        '指名犯人前先填完 O/X 格子並解鎖 Culprit Clue。',
        '本頁只說明玩法，不公布犯人答案。',
      ],
      source: {
        href: OFFICIAL.stoveSecretRabbitCase,
        label: 'STOVE 案情檔案公告',
      },
    },
  ],
};
