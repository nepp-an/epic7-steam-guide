import type { Metadata } from 'next';
import { TierResourcesView } from '@/components/pages/TierResourcesView';
import { pageMetadata } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Epic Seven Tier List Resources — PvE, RTA & Guild War',
  description:
    'Compare Epic Seven tier-list sources by mode: PvE, RTA and Guild War. Source dates, methods, limits and direct links, checked 2026-11-10. Guild War full board not verified; no invented letter grades.',
  path: '/tier-list/',
  locale: 'en',
  absoluteTitle: true,
  alternateLocales: ['en'],
});

export default function Page() {
  return <TierResourcesView />;
}
