import type { Locale } from '@/lib/site';

export type NavKey =
  | 'home'
  | 'download'
  | 'transfer'
  | 'foundry'
  | 'rabbit'
  | 'heroes'
  | 'tier'
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
  { key: 'tier', path: '/tier-list/' },
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
  "en": {
    "home": "Home",
    "download": "Download",
    "transfer": "Transfer",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "Heroes",
    "tier": "Tier list",
    "quests": "Quests",
    "banners": "Banners",
    "updates": "Updates",
    "maintenance": "Maintenance",
    "steamNotes": "Steam notes",
    "faq": "FAQ",
    "demo": "Demo warning",
    "about": "About"
  },
  "ko": {
    "home": "홈",
    "download": "다운로드",
    "transfer": "계정 이전",
    "foundry": "파운드리",
    "rabbit": "래빗 홀",
    "heroes": "영웅",
    "tier": "티어표",
    "quests": "퀘스트",
    "banners": "배너",
    "updates": "업데이트",
    "maintenance": "점검",
    "steamNotes": "Steam 안내",
    "faq": "FAQ",
    "demo": "데모 주의",
    "about": "소개"
  },
  "ja": {
    "home": "ホーム",
    "download": "ダウンロード",
    "transfer": "引き継ぎ",
    "foundry": "ファウンドリ",
    "rabbit": "ラビットホール",
    "heroes": "英雄",
    "tier": "ティア表",
    "quests": "クエスト",
    "banners": "バナー",
    "updates": "更新",
    "maintenance": "メンテナンス",
    "steamNotes": "Steamメモ",
    "faq": "FAQ",
    "demo": "デモ注意",
    "about": "このサイト"
  },
  "zh-tw": {
    "home": "首頁",
    "download": "下載",
    "transfer": "帳號轉移",
    "foundry": "Foundry",
    "rabbit": "兔子洞",
    "heroes": "英雄",
    "tier": "Tier 表",
    "quests": "任務",
    "banners": "卡池",
    "updates": "更新",
    "maintenance": "維護",
    "steamNotes": "Steam 說明",
    "faq": "FAQ",
    "demo": "試玩警告",
    "about": "關於"
  },
  "th": {
    "home": "หน้าแรก",
    "download": "ดาวน์โหลด",
    "transfer": "โอนบัญชี",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "ฮีโร่",
    "tier": "Tier list",
    "quests": "เควสต์",
    "banners": "ตู้",
    "updates": "อัปเดต",
    "maintenance": "เมนเทนแนนซ์",
    "steamNotes": "ข่าว Steam",
    "faq": "FAQ",
    "demo": "คำเตือนเดโม",
    "about": "เกี่ยวกับ"
  },
  "es": {
    "home": "Inicio",
    "download": "Descargar",
    "transfer": "Transferir",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "Héroes",
    "tier": "Tier list",
    "quests": "Misiones",
    "banners": "Banners",
    "updates": "Actualizaciones",
    "maintenance": "Mantenimiento",
    "steamNotes": "Notas de Steam",
    "faq": "FAQ",
    "demo": "Aviso de demo",
    "about": "Acerca de"
  },
  "pt": {
    "home": "Início",
    "download": "Download",
    "transfer": "Transferência",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "Heróis",
    "tier": "Tier list",
    "quests": "Missões",
    "banners": "Banners",
    "updates": "Atualizações",
    "maintenance": "Manutenção",
    "steamNotes": "Notas da Steam",
    "faq": "FAQ",
    "demo": "Aviso sobre a demo",
    "about": "Sobre"
  },
  "de": {
    "home": "Start",
    "download": "Download",
    "transfer": "Transfer",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "Helden",
    "tier": "Tier list",
    "quests": "Quests",
    "banners": "Banner",
    "updates": "Updates",
    "maintenance": "Wartung",
    "steamNotes": "Steam-Hinweise",
    "faq": "FAQ",
    "demo": "Demo-Warnung",
    "about": "Über"
  },
  "fr": {
    "home": "Accueil",
    "download": "Téléchargement",
    "transfer": "Transfert",
    "foundry": "Foundry",
    "rabbit": "Rabbit Hole",
    "heroes": "Héros",
    "tier": "Tier list",
    "quests": "Quêtes",
    "banners": "Bannières",
    "updates": "Mises à jour",
    "maintenance": "Maintenance",
    "steamNotes": "Notes Steam",
    "faq": "FAQ",
    "demo": "Avertissement démo",
    "about": "À propos"
  }
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
  "en": {
    "blurb": "— independent player information. Not affiliated with Smilegate, STOVE, Valve, or Steam.",
    "privacy": "Privacy",
    "about": "About",
    "contact": "Contact",
    "steam": "Official Steam store",
    "faq": "STOVE Steam FAQ",
    "meta": "Epic Seven™ and related marks belong to their respective owners. Short original summaries with outbound citations — verify on official sources before acting."
  },
  "ko": {
    "blurb": "— 비공식 플레이어 정보. Smilegate, STOVE, Valve, Steam과 무관합니다.",
    "privacy": "개인정보",
    "about": "소개",
    "contact": "연락",
    "steam": "공식 Steam 스토어",
    "faq": "STOVE Steam FAQ",
    "meta": "Epic Seven™ 등 상표는 각 권리자에게 있습니다. 공식 출처를 인용한 요약이니 실행 전 공지를 확인하세요."
  },
  "ja": {
    "blurb": "— 非公式プレイヤー情報。Smilegate / STOVE / Valve / Steamとは無関係です。",
    "privacy": "プライバシー",
    "about": "このサイト",
    "contact": "お問い合わせ",
    "steam": "公式Steamストア",
    "faq": "STOVE Steam FAQ",
    "meta": "Epic Seven™ 等の商標は各権利者に帰属します。公式告知への引用付き要約です。操作前に必ず公式を確認してください。"
  },
  "zh-tw": {
    "blurb": "— 非官方玩家資訊。與 Smilegate、STOVE、Valve、Steam 無關。",
    "privacy": "隱私權",
    "about": "關於",
    "contact": "聯絡",
    "steam": "官方 Steam 商店",
    "faq": "STOVE Steam FAQ",
    "meta": "Epic Seven™ 等商標歸各權利人所有。本站為附官方出處之摘要，操作前請以官方為準。"
  },
  "th": {
    "blurb": "— ข้อมูลจากผู้เล่นอิสระ ไม่มีความเกี่ยวข้องกับ Smilegate, STOVE, Valve หรือ Steam",
    "privacy": "ความเป็นส่วนตัว",
    "about": "เกี่ยวกับ",
    "contact": "ติดต่อ",
    "steam": "ร้านค้า Steam ทางการ",
    "faq": "STOVE Steam FAQ",
    "meta": "Epic Seven™ และเครื่องหมายที่เกี่ยวข้องเป็นทรัพย์สินของเจ้าของแต่ละราย สรุปต้นฉบับสั้น ๆ พร้อมอ้างอิงลิงก์ภายนอก — ตรวจสอบกับแหล่งทางการก่อนลงมือ"
  },
  "es": {
    "blurb": "— información independiente para jugadores. No estamos afiliados a Smilegate, STOVE, Valve ni Steam.",
    "privacy": "Privacidad",
    "about": "Acerca de",
    "contact": "Contacto",
    "steam": "Tienda oficial de Steam",
    "faq": "Preguntas frecuentes de STOVE Steam",
    "meta": "Epic Seven™ y las marcas relacionadas pertenecen a sus respectivos propietarios. Resúmenes originales breves con citas externas: verifica en las fuentes oficiales antes de actuar."
  },
  "pt": {
    "blurb": "— informações independentes de jogador. Não afiliado à Smilegate, STOVE, Valve ou Steam.",
    "privacy": "Privacidade",
    "about": "Sobre",
    "contact": "Contato",
    "steam": "Loja oficial da Steam",
    "faq": "FAQ do STOVE Steam",
    "meta": "Epic Seven™ e marcas relacionadas pertencem aos seus respectivos proprietários. Resumos originais curtos com citações externas — verifique nas fontes oficiais antes de agir."
  },
  "de": {
    "blurb": "— unabhängige Spielerinformationen. Nicht mit Smilegate, STOVE, Valve oder Steam verbunden.",
    "privacy": "Datenschutz",
    "about": "Über",
    "contact": "Kontakt",
    "steam": "Offizieller Steam-Store",
    "faq": "STOVE-Steam-FAQ",
    "meta": "Epic Seven™ und zugehörige Marken gehören ihren jeweiligen Inhabern. Kurze eigene Zusammenfassungen mit ausgehenden Quellenangaben – prüfe vor dem Handeln die offiziellen Quellen."
  },
  "fr": {
    "blurb": "— informations indépendantes d’un joueur. Non affilié à Smilegate, STOVE, Valve ou Steam.",
    "privacy": "Confidentialité",
    "about": "À propos",
    "contact": "Contact",
    "steam": "Boutique Steam officielle",
    "faq": "FAQ Steam de STOVE",
    "meta": "Epic Seven™ et les marques associées appartiennent à leurs propriétaires respectifs. De courts résumés originaux avec des citations externes — vérifiez les sources officielles avant d’agir."
  }
};
