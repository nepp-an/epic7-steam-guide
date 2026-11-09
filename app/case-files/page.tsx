import type { Metadata } from 'next';
import { CaseFilesView } from '@/components/pages/CaseFilesView';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'en' as const;
const PATH = '/case-files/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
  ogImage: '/images/diagram-quests.webp',
  alternateLocales: ['en'],
});

export default function Page() {
  return <CaseFilesView />;
}
