import type { Metadata } from 'next';
import { DownloadView } from '@/components/pages/renderers';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'pl' as const;
const PATH = '/download/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
  ogImage: '/images/steam-header.webp',
});

export default function Page() {
  return <DownloadView locale={LOCALE} />;
}
