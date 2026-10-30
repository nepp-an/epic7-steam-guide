/** Site constants — independent fan/info guide. Not Smilegate / STOVE / Steam. */

export const BRAND = 'Epic Seven Steam Guide';

/**
 * Apex: epicsevensteam.com (Cloudflare Registrar; DNS → Vercel, gray-cloud).
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
export type Locale = 'en' | 'ko' | 'ja' | 'zh-tw';
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: readonly Locale[] = ['en', 'ko', 'ja', 'zh-tw'] as const;
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  'zh-tw': '繁體中文',
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
};

export function localeDir(_locale: Locale | string): 'ltr' {
  return 'ltr';
}

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
}

export function localizedPath(locale: Locale | string, path: string): string {
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

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  absoluteTitle?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  absoluteTitle,
}: PageSeo) {
  const full = absoluteTitle ? title : `${title} | ${BRAND}`;
  const canonicalPath = localizedPath(locale, path);
  const url = absoluteUrl(canonicalPath);
  return {
    title: { absolute: full },
    description,
    alternates: {
      canonical: url,
      languages: languageAlternatesFor(path),
    },
    openGraph: {
      title: full,
      description,
      url,
      siteName: BRAND,
      locale: OG_LOCALE[locale] || 'en_US',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary' as const,
      title: full,
      description,
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
