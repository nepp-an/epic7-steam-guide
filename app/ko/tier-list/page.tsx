import type { Metadata } from 'next';
import { TierListView } from '@/components/pages/renderers';
import { TIER_LIST_COPY } from '@/lib/i18n/tier-list';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'ko' as const;
const PATH = '/tier-list/';
const copy = TIER_LIST_COPY[LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
});

export default function Page() {
  return <TierListView locale={LOCALE} />;
}
