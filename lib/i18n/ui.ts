import type { Locale } from '@/lib/site';

export type NavKey =
  | 'home'
  | 'download'
  | 'transfer'
  | 'foundry'
  | 'rabbit'
  | 'heroes'
  | 'quests'
  | 'banners'
  | 'updates'
  | 'maintenance'
  | 'steamNotes'
  | 'faq'
  | 'demo'
  | 'about';

export const NAV_ITEMS: { key: NavKey; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'download', path: '/download/' },
  { key: 'transfer', path: '/steam-transfer/' },
  { key: 'foundry', path: '/foundry/' },
  { key: 'rabbit', path: '/secret-rabbit-hole/' },
  { key: 'heroes', path: '/heroes/' },
  { key: 'quests', path: '/quests/' },
  { key: 'banners', path: '/banners/' },
  { key: 'updates', path: '/updates/' },
  { key: 'maintenance', path: '/maintenance/' },
  { key: 'steamNotes', path: '/steam-notes/' },
  { key: 'faq', path: '/faq/' },
  { key: 'demo', path: '/demo-delete-warning/' },
  { key: 'about', path: '/about/' },
];

export const NAV_LABELS: Record<Locale, Record<NavKey, string>> = {
  en: {
    home: 'Home',
    download: 'Download',
    transfer: 'Transfer',
    foundry: 'Foundry',
    rabbit: 'Rabbit Hole',
    heroes: 'Heroes',
    quests: 'Quests',
    banners: 'Banners',
    updates: 'Updates',
    maintenance: 'Maintenance',
    steamNotes: 'Steam notes',
    faq: 'FAQ',
    demo: 'Demo warning',
    about: 'About',
  },
  ko: {
    home: '홈',
    download: '다운로드',
    transfer: '계정 이전',
    foundry: '파운드리',
    rabbit: '래빗 홀',
    heroes: '영웅',
    quests: '퀘스트',
    banners: '배너',
    updates: '업데이트',
    maintenance: '점검',
    steamNotes: 'Steam 안내',
    faq: 'FAQ',
    demo: '데모 주의',
    about: '소개',
  },
  ja: {
    home: 'ホーム',
    download: 'ダウンロード',
    transfer: '引き継ぎ',
    foundry: 'ファウンドリ',
    rabbit: 'ラビットホール',
    heroes: '英雄',
    quests: 'クエスト',
    banners: 'バナー',
    updates: '更新',
    maintenance: 'メンテナンス',
    steamNotes: 'Steamメモ',
    faq: 'FAQ',
    demo: 'デモ注意',
    about: 'このサイト',
  },
  'zh-tw': {
    home: '首頁',
    download: '下載',
    transfer: '帳號轉移',
    foundry: 'Foundry',
    rabbit: '兔子洞',
    heroes: '英雄',
    quests: '任務',
    banners: '卡池',
    updates: '更新',
    maintenance: '維護',
    steamNotes: 'Steam 說明',
    faq: 'FAQ',
    demo: '試玩警告',
    about: '關於',
  },
};

export const FOOTER: Record<
  Locale,
  {
    blurb: string;
    privacy: string;
    about: string;
    contact: string;
    steam: string;
    faq: string;
    meta: string;
  }
> = {
  en: {
    blurb:
      '— independent player information. Not affiliated with Smilegate, STOVE, Valve, or Steam.',
    privacy: 'Privacy',
    about: 'About',
    contact: 'Contact',
    steam: 'Official Steam store',
    faq: 'STOVE Steam FAQ',
    meta: 'Epic Seven™ and related marks belong to their respective owners. Short original summaries with outbound citations — verify on official sources before acting.',
  },
  ko: {
    blurb:
      '— 비공식 플레이어 정보. Smilegate, STOVE, Valve, Steam과 무관합니다.',
    privacy: '개인정보',
    about: '소개',
    contact: '연락',
    steam: '공식 Steam 스토어',
    faq: 'STOVE Steam FAQ',
    meta: 'Epic Seven™ 등 상표는 각 권리자에게 있습니다. 공식 출처를 인용한 요약이니 실행 전 공지를 확인하세요.',
  },
  ja: {
    blurb:
      '— 非公式プレイヤー情報。Smilegate / STOVE / Valve / Steamとは無関係です。',
    privacy: 'プライバシー',
    about: 'このサイト',
    contact: 'お問い合わせ',
    steam: '公式Steamストア',
    faq: 'STOVE Steam FAQ',
    meta: 'Epic Seven™ 等の商標は各権利者に帰属します。公式告知への引用付き要約です。操作前に必ず公式を確認してください。',
  },
  'zh-tw': {
    blurb:
      '— 非官方玩家資訊。與 Smilegate、STOVE、Valve、Steam 無關。',
    privacy: '隱私權',
    about: '關於',
    contact: '聯絡',
    steam: '官方 Steam 商店',
    faq: 'STOVE Steam FAQ',
    meta: 'Epic Seven™ 等商標歸各權利人所有。本站為附官方出處之摘要，操作前請以官方為準。',
  },
};
