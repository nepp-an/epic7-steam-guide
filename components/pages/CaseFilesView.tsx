import { AdBanner468 } from '@/components/AdBanner468';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { LocaleLink as L } from '@/components/LocaleLink';
import { PageShell } from '@/components/PageShell';
import { CONTENT } from '@/lib/i18n/content';
import { CASE_TASK_COPY, CASE_TABLES } from '@/lib/i18n/case-solutions';
import type { Locale } from '@/lib/site';

export const CASE_FILES_LOCALES = ['en', 'ko', 'zh-tw', 'th'] as const;
export type CaseFilesLocale = (typeof CASE_FILES_LOCALES)[number];
const CULPRITS = ['Bunny Girl Great Detective Moro', 'Bunny Girl Dancer Ilynav', 'Bunny Girl Maid Cecilia'];
const NAMES: Record<string, string> = {Yufine: 'Bunny Girl Mafia Yufine', Luna: 'Bunny Girl Queen Luna', Moro: CULPRITS[0], Ilynav: CULPRITS[1], Cecilia: CULPRITS[2]};

export function CaseFilesView({ locale = 'en' }: { locale?: CaseFilesLocale }) {
  const old = CONTENT['/case-files/'][locale];
  const c = CASE_TASK_COPY[locale];
  return (
    <PageShell locale={locale} path="/case-files/" languages={CASE_FILES_LOCALES}>
      <h1>{c.h1}</h1>
      <IndepNotice locale={locale} compact />
      <p className="quick-answer">{c.answer}</p>
      <nav className="anchor-nav" aria-label={c.nav}>
        {[1, 2, 3].map(n => <a key={n} href={`#case-${n}`}>{c.case} {n}</a>)}
        <a href="#before-accusing">{c.rules}</a><a href="#troubleshooting">{c.trouble}</a>
      </nav>
      <p className="muted">{c.window}</p>
      <AdBanner468 />
      <section id="before-accusing"><h2>{c.rules}</h2><ol className="steps">{c.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
      {[0, 1, 2].map(i => (
        <section key={i} id={`case-${i+1}`} className="case-task">
          <h2>{c.case} {i+1} — {c.titles[i]}</h2>
          <details className="spoiler-answer">
            <summary>{c.reveal}</summary>
            <p><strong>{c.culprit}: {CULPRITS[i]}</strong></p>
            <p>{c.clues[i]}</p>
            <div className="task-table-scroll" tabIndex={0} role="region" aria-label={`${c.case} ${i+1}`}>
              <table className="data"><caption>{c.titles[i]}</caption>
                <thead><tr>{c.columns.map(col => <th key={col} scope="col">{col}</th>)}</tr></thead>
                <tbody>{CASE_TABLES[locale][i].map(row => <tr key={row[0]}><th scope="row">{NAMES[row[0]]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="muted">{c.evidence}</p>
            <ul className="sources">
              <li><ExternalLink href="https://epic7tools.dev/guides/secret-rabbit-hole/">Epic7Tools — Cases 1–3</ExternalLink></li>
              <li><ExternalLink href="https://www.gamekee.com/epic7/727226.html">GameKee — Cases 1–3</ExternalLink></li>
              {i === 1 && <li><ExternalLink href="https://page.onstove.com/EPICSeven/kr/view/14626349">STOVE — community discussion, Case 2</ExternalLink></li>}
            </ul>
          </details>
        </section>
      ))}
      <section id="troubleshooting"><h2>{c.trouble}</h2>{c.issues.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
      <h2>{c.sources}</h2><p>{c.sourceNote}</p>
      <ExternalLink href="https://page.onstove.com/epicseven/global/view/14606293">STOVE — Trusty Sidekick Alencia’s Case Files</ExternalLink>
      <h2>{c.related}</h2><ul>{old.links.filter(([href]) => !href.includes('#case-files')).map(([href,label]) => <li key={href}><L locale={locale} href={href}>{label}</L></li>)}</ul>
    </PageShell>
  );
}
export function isCaseFilesLocale(locale: Locale): locale is CaseFilesLocale {
  return (CASE_FILES_LOCALES as readonly string[]).includes(locale);
}
