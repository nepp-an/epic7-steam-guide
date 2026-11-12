import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { CONTENT } from '@/lib/i18n/content';
import { CASE_FILES_VERIFIED_DATE } from '@/lib/i18n/nextCut';

/**
 * English-only intent page for the GSC query "epic seven case files".
 * The content lives in lib/i18n/content.ts under /case-files/ so dates stay
 * in the same content matrix as the Foundry and Rabbit pages.
 */
export function CaseFilesView() {
  const c = CONTENT['/case-files/'].en;
  return (
    <PageShell locale="en" path="/case-files/" languages={['en']}>
      <h1>{c.h1}</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Last verified:{' '}
        <time dateTime={CASE_FILES_VERIFIED_DATE}>
          {CASE_FILES_VERIFIED_DATE}
        </time>{' '}
        (Steam/Foundry focus)
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
            <Link href={href}>{label}</Link>
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
