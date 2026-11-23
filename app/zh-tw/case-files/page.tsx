import type { Metadata } from 'next';
import { CaseFilesView } from '@/components/pages/CaseFilesView';
import { CONTENT } from '@/lib/i18n/content';
import { pageMetadata } from '@/lib/site';

const LOCALE = 'zh-tw' as const;
const PATH = '/case-files/';
const copy = CONTENT[PATH][LOCALE];

export const metadata: Metadata = pageMetadata({
  title: copy.title,
  description: copy.meta,
  path: PATH,
  locale: LOCALE,
  absoluteTitle: true,
  ogImage: '/images/og-case-files-zh-tw.webp',
  alternateLocales: ['en', 'ko', 'zh-tw', 'th'],
});

export default function Page() {
  return <CaseFilesView locale={LOCALE} />;
}
