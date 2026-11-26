import type { Metadata } from 'next';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { TeamBuilderTool } from '@/components/pages/TeamBuilderTool';
import { TEAM_BUILDER_COUNTS, TEAM_BUILDER_MODES } from '@/lib/team-builder';
import { BRAND, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/team-builder/';
const TITLE = 'Epic Seven Team Builder — Sourced Hunt Samples (Unofficial)';
const DESCRIPTION =
  'Unofficial Epic Seven team builder. Match your roster to dated Hideout hunt and expedition sample teams. Not Smilegate official.';

const FAQS = [
  [
    'What is this Epic Seven team builder?',
    'It is an unofficial roster matcher. You pick a mode we already have dated community sample teams for, check off the heroes you have, and see which published sample teams you can already fill and which names are missing. It is not a Smilegate official tool and it does not invent a meta team.',
  ],
  [
    'Which modes are included?',
    `v1 matches ${TEAM_BUILDER_COUNTS.teams} dated samples across ${TEAM_BUILDER_COUNTS.modes} modes already published on this site’s tier-list page: Wyvern · Hell, Banshee · Hell, Brutal Pherus · Stage 3, Abyss Floor 91, plus the earlier Wyvern · Normal and Brutal Pherus · Stage 1 samples. Hunt and expedition windows are 29 October–4 November 2026; Abyss Floor 91 uses 7 August–4 November 2026, all checked 13 November 2026.`,
  ],
  [
    'Will it recommend a PvP, RTA, or Wyvern 13 team?',
    'No. Those labels and modes are omitted because this site does not have sourced clear-team samples for them that we can match honestly. The tool will not fill a missing slot with a guessed substitute.',
  ],
  [
    'How should I read the percentages?',
    'They are shares of clears in a named Hideout community panel and date window, already published on the tier-list page. They are not win rates, official grades, or a promise that the team will work on your account.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/team-builder.png',
  alternateLocales: ['en'],
});

export default function Page() {
  return (
    <PageShell locale="en" path={PATH} languages={['en']}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: TITLE,
          url: absoluteUrl(PATH),
          description: DESCRIPTION,
          applicationCategory: 'BrowserApplication',
          operatingSystem: 'Any',
          browserRequirements: 'Requires JavaScript',
          inLanguage: 'en',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          isPartOf: {
            '@type': 'WebSite',
            name: BRAND,
            url: `${SITE_ORIGIN}/`,
          },
        }}
      />
      <FaqJsonLd faqs={FAQS} />

      <h1>Epic Seven team builder</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Samples checked <time dateTime="2026-11-13">2026-11-13</time> (Asia/Shanghai).
        Inventory locked <time dateTime="2026-11-26">2026-11-26</time>.
      </p>
      <p className="quick-answer">
        <strong>Unofficial matcher: </strong>
        This Epic Seven team builder checks your roster against dated Hideout
        community sample teams already published on this site. It does not
        invent a best team, and it is not Smilegate official.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#matcher">Matcher</a>
        <a href="#how-to-read">How to read a result</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        Choose a mode, then check off the heroes you have — the 20 units in the{' '}
        <a href="/hero-builds/">Epic Seven hero builds</a> library plus names
        that only appear on a published sample team. After you have a piece in
        hand, score it with the{' '}
        <a href="/gear-score-calculator/">Epic Seven gear score calculator</a>.
        The dated tables themselves stay on the{' '}
        <a href="/tier-list/">tier-list resource page</a>.
      </p>

      <section id="matcher" aria-labelledby="matcher-title">
        <h2 id="matcher-title">Match a roster to dated sample teams</h2>
        <p>
          Empty and partial results stay honest. A missing name is listed, not
          replaced.
        </p>
        <TeamBuilderTool />
      </section>

      <section id="how-to-read" aria-labelledby="how-title">
        <h2 id="how-title">How to read a result</h2>
        <SiteFig
          src="/images/diagram-team-builder-flow.webp"
          width={1100}
          height={300}
          alt="Self-drawn independent diagram: check off a roster, compare it to dated published sample teams, and list missing names instead of inventing substitutes. Not official Smilegate art."
          credit="Unofficial roster-matcher diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          Each card is one published sample, in the source’s rank order, with
          its share of clears and date window. Share of clears is not a win
          rate. Stage 1 is not Stage 3, and Abyss Floor 91 is not Floor 1.
          Exact names matter: Vildred does not fill Arbiter Vildred, and
          Seaside Bellona does not fill Bellona. Sample-only names are labeled
          as listed on a dated clear team, with no on-site build card.
        </p>
        <p>
          v1 covers {TEAM_BUILDER_COUNTS.teams} samples across{' '}
          {TEAM_BUILDER_MODES.map((mode) => mode.label).join(', ')}. Other
          hunts, other Abyss floors, PvP, RTA, and Guild War are omitted until
          we have sourced clear-team samples we can match without guessing.
        </p>
      </section>

      <section id="faq" className="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">FAQ</h2>
        {FAQS.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <section id="sources" className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Sources we actually used</h2>
        <ul>
          <li>
            This site’s <a href="/tier-list/">tier-list resource page</a> Hideout
            community samples, checked 13 November 2026: Wyvern · Hell, Banshee
            · Hell, Brutal Pherus · Stage 3, Abyss Floor 91, plus the earlier
            Wyvern · Normal and Brutal Pherus · Stage 1 tables in the same
            on-site data file. Hunt and expedition window: 29 October–4 November
            2026. Abyss Floor 91 window: 7 August–4 November 2026.
          </li>
          <li>
            This site’s <a href="/hero-builds/">hero builds</a>,{' '}
            <a href="/heroes/">heroes</a>, and{' '}
            <a href="/steam-tier-list/">Steam build-priority</a> pages, re-read
            26 November 2026, for the 20 library heroes and their unofficial
            role notes only.
          </li>
          <li>
            Hideout was not re-opened this pass, so live default panels could
            not be mixed with the dated published tables. Set and artifact
            widgets were not imported.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
