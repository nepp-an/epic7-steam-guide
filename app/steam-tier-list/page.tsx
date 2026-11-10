import type { Metadata } from 'next';
import { TierListView } from '@/components/pages/renderers';
import { TIER_LIST_COPY } from '@/lib/i18n/tier-list';
import { pageMetadata, steamTierLanguageAlternates } from '@/lib/site';

const copy = TIER_LIST_COPY.en;

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: '/steam-tier-list/',
  locale: 'en',
  absoluteTitle: true,
  languageAlternates: steamTierLanguageAlternates(),
});

export default function Page() {
  return <TierListView locale="en" />;
}
