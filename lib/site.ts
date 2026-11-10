/** Site constants — independent fan/info guide. Not Smilegate / STOVE / Steam. */

export const BRAND = 'Epic Seven Steam Guide';

/**
 * Apex: epicsevensteam.com (Cloudflare Registrar; Cloudflare Pages, project
 * epicsevensteam, branch master).
 * Override with NEXT_PUBLIC_SITE_ORIGIN if needed.
 */
export const TARGET_DOMAIN = 'epicsevensteam.com';

export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN?.replace(/\/$/, '') ||
  `https://${TARGET_DOMAIN}`;

export const DOMAIN_CONNECTED = true;

export const CONTACT_PRIVACY = `privacy@${TARGET_DOMAIN}`;

/**
 * GA4 Measurement ID for THIS site only (epicsevensteam.com / E7 Steam Guide).
 * Stream id 16235788475 — notes only. Never use ArtCraft G-LVEKXCFCER.
 */
export const GA4_MEASUREMENT_ID = 'G-QY1D1CDXDZ';

/** L1 locales. Path for Traditional Chinese is /zh-tw/; hreflang uses zh-Hant. */
export type Locale = 'en' | 'ko' | 'ja' | 'zh-tw' | 'th' | 'es' | 'pt' | 'de' | 'fr' | 'pl';
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: readonly Locale[] = [
  'en',
  'ko',
  'ja',
  'zh-tw',
  'th',
  'es',
  'pt',
  'de',
  'fr',
  'pl',
] as const;
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  'zh-tw': '繁體中文',
  th: 'ไทย',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  pl: 'Polski',
};

/** HTML lang attribute (zh-tw → zh-Hant). */
export function htmlLang(locale: Locale): string {
  return locale === 'zh-tw' ? 'zh-Hant' : locale;
}

/** hreflang key for alternates (zh-tw → zh-Hant). */
export function hreflangKey(locale: Locale): string {
  return locale === 'zh-tw' ? 'zh-Hant' : locale;
}

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  ko: 'ko_KR',
  ja: 'ja_JP',
  'zh-tw': 'zh_TW',
  th: 'th_TH',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  pl: 'pl_PL',
};

export function localeDir(_locale: Locale | string): 'ltr' {
  return 'ltr';
}

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const hashAt = path.indexOf('#');
  const hash = hashAt >= 0 ? path.slice(hashAt) : '';
  const base = hashAt >= 0 ? path.slice(0, hashAt) : path;
  if (!base || base === '/') return hash ? `/${hash}` : '/';
  const withSlash = base.startsWith('/') ? base : `/${base}`;
  const normalized = withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
  return `${normalized}${hash}`;
}

export function localizedPath(locale: Locale | string, path: string): string {
  // A hash-only wiki link is a same-page anchor, not a path under /{locale}/.
  if (path.startsWith('#')) return path;
  const n = normalizePath(path);
  if (!locale || locale === DEFAULT_LOCALE || locale === 'en') return n;
  if (n === '/') return `/${locale}/`;
  return `/${locale}${n}`;
}

export function absoluteUrl(path: string): string {
  const p = normalizePath(path);
  if (p === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${p}`;
}

export function languageAlternatesFor(
  path: string,
  locales: readonly Locale[] = LOCALES,
): Record<string, string> {
  const n = normalizePath(path);
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[hreflangKey(loc)] = absoluteUrl(localizedPath(loc, n));
  }
  languages['x-default'] = absoluteUrl(localizedPath(DEFAULT_LOCALE, n));
  return languages;
}

/**
 * The old locale /tier-list/ pages are Steam/transfer build guides, not
 * translations of the English /tier-list/ resource page. Their English
 * equivalent is /steam-tier-list/, so they form one reciprocal hreflang
 * group with that page. Each locale keeps its own self-canonical URL.
 */
export const STEAM_TIER_PATHS: Record<Locale, string> = {
  en: '/steam-tier-list/',
  ko: '/tier-list/',
  ja: '/tier-list/',
  'zh-tw': '/tier-list/',
  th: '/tier-list/',
  es: '/tier-list/',
  pt: '/tier-list/',
  de: '/tier-list/',
  fr: '/tier-list/',
  pl: '/tier-list/',
};

export function steamTierLanguageAlternates(): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[hreflangKey(loc)] = absoluteUrl(
      localizedPath(loc, STEAM_TIER_PATHS[loc]),
    );
  }
  languages['x-default'] = absoluteUrl('/steam-tier-list/');
  return languages;
}

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  absoluteTitle?: boolean;
  /** Site-relative path under /public, e.g. /images/diagram-foundry-calendar.webp */
  ogImage?: string;
  /** Locales that actually ship this path. Defaults to all L1 locales. */
  alternateLocales?: readonly Locale[];
  /** Explicit reciprocal hreflang map. Overrides alternateLocales when set. */
  languageAlternates?: Record<string, string>;
};

export function pageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  absoluteTitle,
  ogImage,
  alternateLocales,
  languageAlternates,
}: PageSeo) {
  const full = absoluteTitle ? title : `${title} | ${BRAND}`;
  const canonicalPath = localizedPath(locale, path);
  const url = absoluteUrl(canonicalPath);
  const images = ogImage
    ? [{ url: absoluteUrl(ogImage.startsWith('/') ? ogImage : `/${ogImage}`) }]
    : undefined;
  return {
    title: { absolute: full },
    description,
    alternates: {
      canonical: url,
      languages:
        languageAlternates ?? languageAlternatesFor(path, alternateLocales),
    },
    openGraph: {
      title: full,
      description,
      url,
      siteName: BRAND,
      locale: OG_LOCALE[locale] || 'en_US',
      type: 'website' as const,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? ('summary_large_image' as const) : ('summary' as const),
      title: full,
      description,
      ...(images ? { images: [images[0].url] } : {}),
    },
  };
}

/** English-root paths shipped in L1. */
export const CORE_PATHS = [
  '/',
  '/download/',
  '/steam-transfer/',
  '/demo-delete-warning/',
  '/steam-notes/',
  '/faq/',
  '/foundry/',
  '/secret-rabbit-hole/',
  '/heroes/',
  '/tier-list/',
  '/quests/',
  '/banners/',
  '/updates/',
  '/maintenance/',
  '/about/',
  '/contact/',
  '/privacy/',
] as const;

export const OFFICIAL = {
  steamStore: 'https://store.steampowered.com/app/5019180/Epic_Seven/',
  steamNewsFoundry:
    'https://store.steampowered.com/news/app/5019180/view/685267261521395852',
  stoveLaunch: 'https://page.onstove.com/epicseven/global/view/14606481',
  stoveSteamFaq: 'https://page.onstove.com/epicseven/global/view/14378309',
  stoveFoundry: 'https://page.onstove.com/epicseven/global/view/14571828',
  stoveDemoDelete: 'https://page.onstove.com/epicseven/global/view/14581667',
  stoveHome: 'https://page.onstove.com/epicseven/global',
  stoveAnnouncements: 'https://page.onstove.com/epicseven/global/list/986',
  stoveSecretRabbitCase:
    'https://page.onstove.com/epicseven/global/view/14606293',
  stoveLuckyBoard: 'https://page.onstove.com/epicseven/global/view/14606365',
  stoveBunnyLobbyPack:
    'https://page.onstove.com/epicseven/global/view/14606343',
} as const;

export const DOMAIN_CANDIDATES = [
  'epicsevensteam.com',
  'epic-seven-steam.com',
  'epic7steam.com',
  'epicsevenfoundry.com',
] as const;

export const AS_OF = '2026-10-29';
