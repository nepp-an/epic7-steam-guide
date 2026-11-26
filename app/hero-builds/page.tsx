import type { Metadata } from 'next';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { HeroBuildLibrary } from '@/components/pages/HeroBuildLibrary';
import { HERO_BUILDS } from '@/lib/hero-builds';
import { BRAND, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/hero-builds/';
const TITLE = 'Epic Seven Hero Builds — Starter & Hunt Library (Unofficial)';
const DESCRIPTION =
  'Unofficial Epic Seven hero builds and character build notes for starter and hunt units. Sourced library, not Smilegate official.';

const FAQS = [
  [
    'What is this Epic Seven hero builds library?',
    'It is a searchable, unofficial library of 20 starter, specialty-change, hunt, and mode-example heroes already documented on this site. Each card paraphrases those on-site notes and, where we opened a dated Hideout community sample, lists appearance shares and named teams. It is not an official Smilegate or Epic Seven build guide, and it is not a full-roster tier list.',
  ],
  [
    'Why are sets or artifacts blank on some cards?',
    'A field stays blank when we do not have a reliable source we actually opened. We do not invent set recipes, numeric stat floors, or artifact picks, and we do not import third-party build-tool tables as if they were ours.',
  ],
  [
    'How should I read the Hideout numbers?',
    'They are shares of clears in a named panel and date window, or a most-used rate on that panel. They are not win rates, official grades, or proof that a set is correct for your account. Stage 1 and Stage 3, and Abyss Floor 1 and Floor 91, are kept separate.',
  ],
  [
    'Does this replace the heroes or tier-list pages?',
    'No. The heroes page remains the beginner-picks hub, and the tier-list resource page remains the mode-source comparison. This library is the searchable build view of the units we can source honestly. You can score a gear piece on the gear score calculator.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/hero-builds.png',
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
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: TITLE,
          url: absoluteUrl(PATH),
          description: DESCRIPTION,
          inLanguage: 'en',
          isPartOf: {
            '@type': 'WebSite',
            name: BRAND,
            url: `${SITE_ORIGIN}/`,
          },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: HERO_BUILDS.length,
            itemListElement: HERO_BUILDS.map((hero, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: hero.name,
              url: `${absoluteUrl(PATH)}#${hero.slug}`,
            })),
          },
        }}
      />
      <FaqJsonLd faqs={FAQS} />

      <h1>Epic Seven hero builds</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Sources checked <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Unofficial library: </strong>
        Search this Epic Seven hero builds collection for sourced starter,
        specialty-change, and hunt notes. Character build fields stay blank when
        we do not have a source. This is not a Smilegate official guide and not
        a full-roster tier list.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#library">Library</a>
        <a href="#how-to-read">How to read a card</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        v1 covers the 12 units already on the{' '}
        <a href="/heroes/">heroes beginner-picks page</a> and eight mode-example
        units from the{' '}
        <a href="/steam-tier-list/">Steam build-priority page</a>. Hunt and
        expedition numbers come from Hideout community clear samples we opened,
        or from the dated samples already published on the{' '}
        <a href="/tier-list/">tier-list resource page</a>. After you have a
        piece in hand, score it with the{' '}
        <a href="/gear-score-calculator/">Epic Seven gear score calculator</a>.
      </p>
      <p className="muted">
        To match a roster against dated hunt and expedition sample teams, use
        the <a href="/team-builder/">Epic Seven team builder</a>.
      </p>

      <section id="library" aria-labelledby="library-title">
        <h2 id="library-title">Search the sourced library</h2>
        <p>
          Filter by name, class, element, or group. Empty results are empty —
          this page does not invent filler cards.
        </p>
        <HeroBuildLibrary />
      </section>

      <section id="how-to-read" aria-labelledby="how-title">
        <h2 id="how-title">How to read a card</h2>
        <SiteFig
          src="/images/diagram-hero-builds-library.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: this is a sourced retrieval library, blank fields mean no reliable source, and Hideout shares are not win rates. Not official Smilegate art."
          credit="Unofficial sourced-library diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          Role and job lines are paraphrased from this site’s existing unofficial
          notes. Hideout figures are shares of clears in a named panel and date
          window, not win rates and not official grades. Stage 1 is not Stage 3,
          and Abyss Floor 91 is not Floor 1. Set recipes and numeric stat floors
          are omitted unless a source we actually opened supports them. Third-party
          build-tool tables were not imported.
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
        <h2 id="sources-title">Sources we actually reached</h2>
        <ul>
          <li>
            This site’s English <a href="/heroes/">heroes</a> and{' '}
            <a href="/steam-tier-list/">Steam build-priority</a> pages, re-read
            26 November 2026: identity, unofficial role notes, and budget jobs.
          </li>
          <li>
            This site’s <a href="/tier-list/">tier-list resource page</a> samples
            checked 13 November 2026, including Hideout windows of 29 October–4
            November 2026 and Abyss 91 (7 August–4 November 2026), plus one dated
            Team 1 artifact observation for Furious.
          </li>
          <li>
            <a href="https://www.hideoutgacha.com/games/epic-seven/hunts" rel="noopener noreferrer" target="_blank">
              Hideout Hunt Teams
            </a>{' '}
            and{' '}
            <a href="https://www.hideoutgacha.com/games/epic-seven/expedition" rel="noopener noreferrer" target="_blank">
              Hideout Expedition
            </a>
            , opened 26 November 2026 (HTTP 200): Wyvern · Normal, Wyvern · Hell,
            Banshee · Hell, and Brutal Pherus · Stage 1, clears 12–18 November
            2026. Appearance and listed teams only; set tables were not copied.
          </li>
          <li>
            Official STOVE notices were requested the same day; the readable body
            was unavailable or redirected, so those pages are not quoted.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
