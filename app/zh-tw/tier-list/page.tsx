import type { Metadata } from 'next';
import { TierListView } from '@/components/pages/renderers';
import { TIER_LIST_COPY } from '@/lib/i18n/tier-list';
import { pageMetadata, steamTierLanguageAlternates } from '@/lib/site';

const LOCALE = 'zh-tw' as const;
const PATH = '/tier-list/';
const copy = TIER_LIST_COPY[LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  languageAlternates: steamTierLanguageAlternates(),
});

export default function Page() {
  return <TierListView locale={LOCALE} />;
}
