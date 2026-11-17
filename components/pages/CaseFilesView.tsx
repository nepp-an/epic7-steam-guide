import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { LocaleLink as L } from '@/components/LocaleLink';
import { PageShell } from '@/components/PageShell';
import { CONTENT } from '@/lib/i18n/content';
import { CASE_FILES_VERIFIED_DATE } from '@/lib/i18n/nextCut';
import type { Locale } from '@/lib/site';

/**
 * Case Files guide. English copy is the source of the facts.
 * ko / zh-tw / th are full translations of that page, not English shells.
 * ja and the other locales do not have this path.
 */
export const CASE_FILES_LOCALES = ['en', 'ko', 'zh-tw', 'th'] as const;
export type CaseFilesLocale = (typeof CASE_FILES_LOCALES)[number];

const VERIFIED_CHROME: Record<
  Exclude<CaseFilesLocale, 'en'>,
  { before: string; after: string }
> = {
  ko: { before: '최근 확인: ', after: ' (Steam/Foundry 기준)' },
  'zh-tw': { before: '最近核對：', after: '（Steam／Foundry）' },
  th: { before: 'ตรวจล่าสุด: ', after: ' (โฟกัส Steam/Foundry)' },
};

export function CaseFilesView({ locale = 'en' }: { locale?: CaseFilesLocale }) {
  const c = CONTENT['/case-files/'][locale];
  const verified = locale === 'en' ? null : VERIFIED_CHROME[locale];
  return (
    <PageShell
      locale={locale}
      path="/case-files/"
      languages={CASE_FILES_LOCALES}
    >
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <p className="last-verified">
        {verified ? (
          <>
            {verified.before}
            <time dateTime={CASE_FILES_VERIFIED_DATE}>
              {CASE_FILES_VERIFIED_DATE}
            </time>
            {verified.after}
          </>
        ) : (
          <>
            Last verified:{' '}
            <time dateTime={CASE_FILES_VERIFIED_DATE}>
              {CASE_FILES_VERIFIED_DATE}
            </time>{' '}
            (Steam/Foundry focus)
          </>
        )}
      </p>
      <p className="quick-answer">
        <strong>TL;DR — </strong>
        {c.answer}
      </p>
      {c.paras.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      <h2>{c.related_h2}</h2>
      <ul>
        {c.links.map(([href, label]) => (
          <li key={href}>
            <L locale={locale} href={href}>
              {label}
            </L>
          </li>
        ))}
      </ul>
      <h2>{c.faq_h2}</h2>
      {c.faqs.map(([q, a]) => (
        <div key={q}>
          <h3>{q}</h3>
          <p>{a}</p>
        </div>
      ))}
      <h2>{c.src_h2}</h2>
      <ul className="sources">
        {c.sources.map(([href, label]) => (
          <li key={href}>
            <ExternalLink href={href}>{label}</ExternalLink>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

export function isCaseFilesLocale(locale: Locale): locale is CaseFilesLocale {
  return (CASE_FILES_LOCALES as readonly string[]).includes(locale);
}
