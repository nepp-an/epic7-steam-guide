import type { Locale } from '@/lib/site';

/** Verification day for this content cut. Do not bump only to look fresh. */
export const VERIFIED_DATE = '2026-10-30';

export type VerifiedCopy = {
  /** Text before the date, including the trailing space after the colon. */
  before: string;
  /** Text after the date, including the leading space before the parenthesis. */
  after: string;
};

export const HOME_VERIFIED: Record<Locale, VerifiedCopy> = {
  en: {
    before: 'Last verified: ',
    after:
      ' (Steam/Foundry focus). Schedules and kits can change — confirm on STOVE / Steam.',
  },
  ko: {
    before: '최근 확인: ',
    after:
      ' (Steam/Foundry 초점). 일정과 키트는 바뀔 수 있습니다 — STOVE / Steam에서 확인하세요.',
  },
  ja: {
    before: '最終確認: ',
    after:
      ' (Steam/Foundry 焦点). 日程とキットは変わり得ます — STOVE / Steamで確認してください.',
  },
  'zh-tw': {
    before: '最近核對: ',
    after:
      ' (Steam/Foundry 焦點). 日程與技能組可能變動 — 請以 STOVE / Steam 為準.',
  },
};

export const HEROES_VERIFIED: Record<Locale, VerifiedCopy> = {
  en: {
    before: 'Last verified: ',
    after: ' (onboarding roster · kits in-client)',
  },
  ko: {
    before: '최근 확인: ',
    after: ' (온보딩 명단 · 키트는 게임 내)',
  },
  ja: {
    before: '最終確認: ',
    after: ' (オンボーディング名簿 · キットはゲーム内)',
  },
  'zh-tw': {
    before: '最近核對: ',
    after: ' (上手名單 · 技能以遊戲內為準)',
  },
};

export const TRANSFER_VERIFIED: Record<Locale, VerifiedCopy> = {
  en: {
    before: 'Last verified: ',
    after: ' (STOVE↔Steam transfer steps)',
  },
  ko: {
    before: '최근 확인: ',
    after: ' (STOVE↔Steam 이전 단계)',
  },
  ja: {
    before: '最終確認: ',
    after: ' (STOVE↔Steam 引き継ぎ手順)',
  },
  'zh-tw': {
    before: '最近核對: ',
    after: ' (STOVE↔Steam 轉移步驟)',
  },
};

export const FOUNDRY_VERIFIED: Record<Locale, VerifiedCopy> = {
  en: {
    before: 'Last verified: ',
    after: ' (Steam/Foundry focus)',
  },
  ko: {
    before: '최근 확인: ',
    after: ' (Steam/Foundry 초점)',
  },
  ja: {
    before: '最終確認: ',
    after: ' (Steam/Foundry 焦点)',
  },
  'zh-tw': {
    before: '最近核對: ',
    after: ' (Steam/Foundry 焦點)',
  },
};

/**
 * One segment of a start-step line.
 * href "" = plain text; "#id" = same-page anchor; "/path/" = internal route.
 */
export type LineSeg = readonly [text: string, href: string];

export const START5: Record<
  Locale,
  { h2: string; steps: readonly (readonly LineSeg[])[] }
> = {
  en: {
    h2: 'Get started in 5 steps',
    steps: [
      [
        ['Choose path: keep legacy progress (', ''],
        ['convert login', '/steam-transfer/'],
        [') or start fresh on ', ''],
        ['Foundry', '/foundry/'],
        ['.', ''],
      ],
      [
        ['Convert ', ''],
        ['STOVE email/SNS → Steam Simple Login', '/steam-transfer/'],
        [' before treating a new Steam session as main.', ''],
      ],
      [
        ['Install from the official Steam store (app 5019180) and launch — ', ''],
        ['do not delete the in-game demo account after transfer', '#faq'],
        ['.', ''],
      ],
      [
        [
          'On Foundry / new accounts: prioritize specialty-change supports + an early farmer (see ',
          '',
        ],
        ['Heroes hub', '/heroes/'],
        [').', ''],
      ],
      [
        ['Stuck on empty account, anti-cheat, or missing events? Use ', ''],
        ['FAQ', '#faq'],
        [' & ', ''],
        ['troubleshooting', '#troubleshoot'],
        ['.', ''],
      ],
    ],
  },
  ko: {
    h2: '5단계로 시작하기',
    steps: [
      [
        ['경로를 고르세요: 기존 진행도를 유지(', ''],
        ['로그인 전환', '/steam-transfer/'],
        [')하거나 ', ''],
        ['Foundry', '/foundry/'],
        ['에서 새로 시작합니다.', ''],
      ],
      [
        ['새 Steam 세션을 본계정으로 다루기 전에 ', ''],
        ['STOVE 이메일/SNS → Steam Simple Login', '/steam-transfer/'],
        ['으로 전환하세요.', ''],
      ],
      [
        ['공식 Steam 스토어(app 5019180)에서 설치하고 실행하세요 — ', ''],
        ['이전 후 인게임 데모 계정은 삭제하지 마세요', '#faq'],
        ['.', ''],
      ],
      [
        ['Foundry / 신규 계정: 전직 서포트와 초반 파머를 우선하세요(', ''],
        ['영웅 허브', '/heroes/'],
        [' 참고).', ''],
      ],
      [
        ['빈 계정, 안티치트, 또는 이벤트가 안 보이나요? ', ''],
        ['FAQ', '#faq'],
        ['와 ', ''],
        ['문제 해결', '#troubleshoot'],
        ['을 이용하세요.', ''],
      ],
    ],
  },
  ja: {
    h2: '5ステップではじめる',
    steps: [
      [
        ['経路を選ぶ: 既存の進行を残す（', ''],
        ['ログイン変換', '/steam-transfer/'],
        ['）か、', ''],
        ['Foundry', '/foundry/'],
        ['で新しく始める。', ''],
      ],
      [
        ['新しいSteamセッションを本アカウントにする前に、', ''],
        ['STOVEのメール/SNS → Steam Simple Login', '/steam-transfer/'],
        ['へ変換する。', ''],
      ],
      [
        ['公式Steamストア（app 5019180）からインストールして起動する — ', ''],
        ['引き継ぎ後にゲーム内デモアカウントを削除しない', '#faq'],
        ['。', ''],
      ],
      [
        ['Foundry／新規アカウント: 専改サポートと序盤ファーマーを優先する（', ''],
        ['英雄ハブ', '/heroes/'],
        ['を参照）。', ''],
      ],
      [
        ['空のアカウント、アンチチート、またはイベントが見えない？', ''],
        ['FAQ', '#faq'],
        ['と', ''],
        ['トラブルシュート', '#troubleshoot'],
        ['を使う。', ''],
      ],
    ],
  },
  'zh-tw': {
    h2: '5 步驟開始',
    steps: [
      [
        ['先選路徑：保留舊進度（', ''],
        ['轉換登入', '/steam-transfer/'],
        ['），或在 ', ''],
        ['Foundry', '/foundry/'],
        [' 重新開始。', ''],
      ],
      [
        ['把新的 Steam 工作階段當成主帳之前，先完成 ', ''],
        ['STOVE Email／SNS → Steam Simple Login', '/steam-transfer/'],
        [' 轉換。', ''],
      ],
      [
        ['從官方 Steam 商店（app 5019180）安裝並啟動 — ', ''],
        ['轉移後不要刪除遊戲內試玩帳號', '#faq'],
        ['。', ''],
      ],
      [
        ['Foundry／新帳號：優先專職輔助與前期刷圖手（見', ''],
        ['英雄樞紐', '/heroes/'],
        ['）。', ''],
      ],
      [
        ['空白帳號、反作弊，或看不到活動？請用 ', ''],
        ['FAQ', '#faq'],
        [' 與 ', ''],
        ['疑難排解', '#troubleshoot'],
        ['。', ''],
      ],
    ],
  },
};

/** Visible role chips. English strings are identical on every locale. */
export const ROLE_CHIPS: Record<
  string,
  readonly { label: string; aria: string }[]
> = {
  ras: [
    { label: 'Tank', aria: 'Tank' },
    { label: 'Story lead', aria: 'Story lead' },
  ],
  mercedes: [
    { label: 'AoE', aria: 'Area of effect' },
    { label: 'Early clear', aria: 'Early clear' },
  ],
  aither: [
    { label: 'Heal', aria: 'Heal' },
    { label: 'Starter SW', aria: 'Starter Soul Weaver' },
  ],
  judith: [
    { label: 'CR push', aria: 'Combat readiness push' },
    { label: 'Opener', aria: 'Opener' },
  ],
  'angelic-montmorancy': [
    { label: 'Cleanse', aria: 'Cleanse' },
    { label: 'Heal', aria: 'Heal' },
  ],
  'falconer-kluri': [
    { label: 'Def break', aria: 'Defense break' },
    { label: 'CR', aria: 'Combat readiness' },
  ],
  'commander-lorina': [
    { label: 'ST DPS', aria: 'Single-target DPS' },
    { label: 'Abyss', aria: 'Abyss' },
  ],
  alexa: [
    { label: 'Farmer', aria: 'Farmer' },
    { label: 'Wyvern', aria: 'Wyvern' },
  ],
  furious: [
    { label: 'Def break', aria: 'Defense break' },
    { label: 'Target', aria: 'Target' },
  ],
  silk: [
    { label: 'CR push', aria: 'Combat readiness push' },
    { label: 'Cleave', aria: 'Cleave' },
  ],
  vildred: [
    { label: 'Cleave', aria: 'Cleave' },
    { label: 'Adventure', aria: 'Adventure' },
  ],
  luna: [
    { label: 'Foundry path', aria: 'Foundry path' },
    { label: 'Rank 70', aria: 'Rank 70' },
  ],
};
