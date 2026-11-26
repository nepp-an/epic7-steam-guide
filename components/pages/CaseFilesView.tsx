import { AdBanner468 } from '@/components/AdBanner468';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { LocaleLink as L } from '@/components/LocaleLink';
import { PageShell } from '@/components/PageShell';
import { CASE_TASK_COPY, CASE_TABLES } from '@/lib/i18n/case-solutions';
import { CASE_VISUAL_COPY } from '@/lib/i18n/case-visual';
import { FaqJsonLd, WebPageJsonLd } from '@/components/JsonLd';
import { type Locale } from '@/lib/site';
import { BoardDiagram, CaseGlyph, EntryDiagram, TroubleDiagram } from './CaseDiagrams';

export const CASE_FILES_LOCALES = ['en', 'ko', 'zh-tw', 'th'] as const;
export type CaseFilesLocale = (typeof CASE_FILES_LOCALES)[number];
const PRIMARY_BOARDS = [
  'https://truth.bahamut.com.tw/s01/202611/forum/34880/76437ee9d1a067f0ff4e06caf2cc59c9.JPG',
  'https://truth.bahamut.com.tw/s01/202611/forum/34880/98eeab7245cd7eaa073f8aa7ec774de2.JPG',
  'https://truth.bahamut.com.tw/s01/202611/forum/34880/1f2998c6a91c87df84a7dda604b77c7f.JPG',
] as const;
const SECOND_REPORTS = [
  ['https://www.cashfeed.co.kr/posts/16452672', 'https://cdn.cashfeed.co.kr/attachments/af7d9b4cb1.jpg'],
  ['https://www.cashfeed.co.kr/posts/16471499', 'https://cdn.cashfeed.co.kr/attachments/7584afdd41.jpg'],
  ['https://www.cashfeed.co.kr/posts/16489128', 'https://cdn.cashfeed.co.kr/attachments/ca781b8ca0.jpg'],
] as const;
const CULPRITS = ['Bunny Girl Great Detective Moro', 'Bunny Girl Dancer Ilynav', 'Bunny Girl Maid Cecilia'];
const NAMES: Record<string, string> = {
  Yufine: 'Bunny Girl Mafia Yufine',
  Luna: 'Bunny Girl Queen Luna',
  Moro: CULPRITS[0],
  Ilynav: CULPRITS[1],
  Cecilia: CULPRITS[2],
};

export function CaseFilesView({ locale = 'en' }: { locale?: CaseFilesLocale }) {
  const c = CASE_TASK_COPY[locale];
  const v = CASE_VISUAL_COPY[locale];
  return (
    <PageShell locale={locale} path="/case-files/" languages={CASE_FILES_LOCALES}>
      <WebPageJsonLd
        name={c.h1}
        description={`${v.answerBefore}${v.eventName}${v.answerAfter} ${v.windowEnd}`}
        path="/case-files/"
        locale={locale}
      />
      <FaqJsonLd faqs={c.issues} />
      <article className="case-dossier">
        <header className="dossier-hero">
          <h1>{c.h1}</h1>
        </header>

        <nav className="anchor-nav dossier-jump" aria-label={c.nav}>
          {[1, 2, 3].map(n => <a key={n} href={`#case-${n}`}>{c.case} {n}</a>)}
          <a href="#before-accusing">{c.rules}</a>
          <a href="#troubleshooting">{c.trouble}</a>
        </nav>

        <details className="dossier-brief">
          <summary>{c.brief}</summary>
          <div className="dossier-brief-body">
            <IndepNotice locale={locale} compact />
            <p className="quick-answer">
              {v.answerBefore}
              <L locale={locale} href="/secret-rabbit-hole/">{v.eventName}</L>
              {v.answerAfter}
            </p>
            <p className="dossier-window">
              {v.windowEnd}{' '}
              <L locale={locale} href="/banners/">{v.bannerDates}</L>
              {v.windowBannerAfter}
            </p>
          </div>
        </details>

        <section className="dossier-cases" aria-labelledby="case-files-cases">
        <h2 id="case-files-cases">{v.casesHeading}</h2>
        <div className="dossier-grid">
          {[0, 1, 2].map(i => (
            <section key={i} id={`case-${i + 1}`} className={`dossier-file case-${i + 1}`}>
              <header className="dossier-file-head">
                <CaseGlyph index={i as 0 | 1 | 2} className="dossier-glyph" />
                <div className="dossier-file-copy">
                  <p className="dossier-kicker">{c.case} {i + 1}</p>
                  <h3>{v.shortTitles[i]}</h3>
                  <p className="dossier-type">{v.types[i]}</p>
                </div>
              </header>
              <details className="spoiler-answer">
                <summary>{c.reveal}</summary>
                <div className="case-verdict">
                  <p className="case-culprit"><strong>{c.culprit}: {CULPRITS[i]}</strong></p>
                  <p className="case-clue"><span className="clue-label">{v.decisive}</span> {c.clues[i]}</p>
                </div>
                <p className="case-table-caption" id={`case-${i + 1}-table-caption`}>{c.titles[i]}</p>
                <div className="task-table-scroll" tabIndex={0} role="region" aria-label={`${c.case} ${i + 1}`}>
                  <table className="data" aria-labelledby={`case-${i + 1}-table-caption`}>
                    <thead>
                      <tr>{c.columns.map(col => <th key={col} scope="col">{col}</th>)}</tr>
                    </thead>
                    <tbody>
                      {CASE_TABLES[locale][i].map(row => (
                        <tr key={row[0]}>
                          <th scope="row">{NAMES[row[0]]}</th>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="muted">{c.evidence}</p>
                <ul className="sources">
                  <li><ExternalLink href="https://forum.gamer.com.tw/C.php?bsn=34880&snA=15640">{c.primary} {i + 1}</ExternalLink>{' · '}<ExternalLink href={PRIMARY_BOARDS[i]}>{c.boardImage}</ExternalLink></li>
                  <li><ExternalLink href={SECOND_REPORTS[i][0]}>{c.secondSource}</ExternalLink>{' · '}<ExternalLink href={SECOND_REPORTS[i][1]}>{c.secondImage}</ExternalLink></li>
                  <li><ExternalLink href="https://epic7tools.dev/guides/secret-rabbit-hole/">Epic7Tools — Cases 1–3</ExternalLink></li>
                  <li><ExternalLink href="https://www.gamekee.com/epic7/727226.html">GameKee — Cases 1–3</ExternalLink></li>
                </ul>
              </details>
            </section>
          ))}
        </div>
        </section>

        <AdBanner468 />

        <section id="before-accusing" className="dossier-guide">
          <h2>{c.rules}</h2>
          <EntryDiagram title={v.enterTitle} steps={v.enterSteps} note={v.diagramNote} />
          <ol className="steps">
            {c.steps.map((step, i) => (
              <li key={step}>
                {step}
                {i === 1 && (
                  <>
                    {' '}
                    <L locale={locale} href="/quests/#task-case">{v.questTask}</L>
                  </>
                )}
              </li>
            ))}
          </ol>
          <BoardDiagram title={v.boardTitle} steps={v.boardSteps} note={v.diagramNote} />
        </section>

        <section id="troubleshooting" className="dossier-guide">
          <h2>{c.trouble}</h2>
          <TroubleDiagram title={v.troubleVisualTitle} items={v.troubleVisual} note={v.diagramNote} />
          {c.issues.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>

        <section className="dossier-guide">
          <h2>{c.sources}</h2>
          <p>{c.sourceNote}</p>
          <p>
            <ExternalLink href="https://page.onstove.com/epicseven/global/view/14606293">
              STOVE — Trusty Sidekick Alencia’s Case Files
            </ExternalLink>
          </p>
        </section>

        <section className="dossier-related">
          <h2>{c.related}</h2>
          <ul className="related-cards">
            <li>
              <L locale={locale} href="/secret-rabbit-hole/">{v.eventOverview}</L>
            </li>
            <li>
              <L locale={locale} href="/quests/#task-case">{v.questTask}</L>
            </li>
            <li>
              <L locale={locale} href="/quests/#case-files">{v.questSection}</L>
            </li>
          </ul>
        </section>
      </article>
    </PageShell>
  );
}

export function isCaseFilesLocale(locale: Locale): locale is CaseFilesLocale {
  return (CASE_FILES_LOCALES as readonly string[]).includes(locale);
}
