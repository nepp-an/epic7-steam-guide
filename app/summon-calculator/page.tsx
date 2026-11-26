import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { SummonCalculatorTool } from '@/components/pages/SummonCalculatorTool';
import { SUMMON_BANNER } from '@/lib/summon-calculator';
import { BRAND, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/summon-calculator/';
const TITLE = 'Epic Seven Summon Calculator — Bunny Girl Maid Cecilia (Unofficial)';
const DESCRIPTION =
  'Unofficial Epic Seven summon calculator for the current official Bunny Girl Maid Cecilia pickup, 26 November–17 December 2026 UTC. Featured 5★ at 1%, then a 121st guaranteed pull. Not Smilegate official.';

const FAQS = [
  [
    'What does this Epic Seven summon calculator measure?',
    'It uses only the official rates published for the current Bunny Girl Maid Cecilia & Covert Service Drop Rate Up: the featured 5★ hero is 1%, no other 5★ hero can appear, each summon lowers the counter by 1 (maximum 120), and the next summon after 120 misses is 100%. It estimates the chance of seeing that featured hero from your current counter, including the worst case of 121 summons from a full counter. It is not a Smilegate official tool.',
  ],
  [
    'What happens after 17 December 2026, 02:59 UTC?',
    'The official window ends at that time. After 17 December 2026, 03:00 UTC the calculator must show that these rules have expired and that it is waiting for a new official notice. It will not automatically apply a later banner.',
  ],
  [
    'Can I also use the regular covenant pool?',
    'Yes. The official notice says players can use both this guaranteed Drop Rate Up banner and regular covenant summons. This page does not calculate the regular covenant, mystic, or moonlight tables.',
  ],
  [
    'Does this page tell me whether I should pull?',
    'No. It does not give spending advice, bookmark costs, or a recommendation to pull or to skip. Confirm the live window on the official notice and on this site’s banner and updates pages.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/summon-calculator.png',
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

      <h1>Epic Seven summon calculator</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Official notice opened <time dateTime="2026-11-26">2026-11-26</time>{' '}
        (Asia/Shanghai). Banner window: 26 November 2026, 03:00 UTC to 17
        December 2026, 02:59 UTC.
      </p>
      <p className="quick-answer">
        <strong>Unofficial calculator: </strong>
        This tool follows the current official Bunny Girl Maid Cecilia &amp;
        Covert Service Drop Rate Up only. The featured 5★ hero is raised to
        1%, no other 5★ hero appears, and the worst case from a full counter
        is 121 summons. After 17 December 2026, 02:59 UTC the tool must show
        that these rules have expired. It is not Smilegate official.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#calculator">Calculator</a>
        <a href="#rules">Official rules used here</a>
        <a href="#left-blank">Left blank on purpose</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        Confirm the live pickup on the{' '}
        <a href="/banners/">current Epic Seven banner page</a> and the{' '}
        <a href="/updates/">patch notes and known issues page</a>. Those pages
        stay the dated announcement record; this calculator only turns the
        published featured-hero pity into a number.
      </p>

      <section id="calculator" aria-labelledby="calculator-title">
        <h2 id="calculator-title">From a counter to the featured 5★ hero</h2>
        <p>
          Enter the summon counter shown on the official banner, then read the
          chance of seeing {SUMMON_BANNER.featuredHero} on the next pull, before
          the guarantee, and by the worst case.
        </p>
        <SummonCalculatorTool />
      </section>

      <section id="rules" aria-labelledby="rules-title">
        <h2 id="rules-title">Official rules used here</h2>
        <SiteFig
          src="/images/diagram-summon-calculator.webp"
          width={1100}
          height={400}
          alt="Self-drawn independent diagram: current official pickup only, featured 5★ Bunny Girl Maid Cecilia at 1% with a 120-then-guaranteed pity, and the calculator must expire after 17 December 2026 02:59 UTC instead of applying a later banner. Not official Smilegate art."
          credit="Unofficial current-banner pity diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <ul>
          <li>
            Schedule: 26 November 2026, 03:00 UTC to 17 December 2026, 02:59
            UTC, from the opened official notice.
          </li>
          <li>
            The featured 5★ hero, Bunny Girl Maid Cecilia, has her probability
            increased to 1% on this banner, and no other 5★ hero can be
            summoned.
          </li>
          <li>
            Each summon decreases the summon counter by 1, to a maximum of 120
            summons. If the featured hero has not appeared after 120 summons,
            the following summon is 100% guaranteed to be that hero. If the
            featured hero is summoned, the counter resets.
          </li>
          <li>
            Moonlight heroes will not appear during this Drop Rate Up. Players
            can use this guaranteed banner and regular covenant summons at the
            same time.
          </li>
        </ul>
        <p className="muted">
          After 17 December 2026, 02:59 UTC, this page must display that these
          rules have expired and wait for a new official announcement. It does
          not roll forward onto the next pool by itself.
        </p>
      </section>

      <section id="left-blank" aria-labelledby="blank-title">
        <h2 id="blank-title">Left blank on purpose</h2>
        <ul>
          <li>3★, 4★, and artifact drop-rate breakdowns, including Covert Service’s numeric rate.</li>
          <li>Complete regular covenant, mystic, or moonlight rate tables.</li>
          <li>The Korean-language notice 14635038, which this page does not use as a source.</li>
          <li>Whether you should pull, skip, or spend bookmarks.</li>
        </ul>
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
            <ExternalLink href={SUMMON_BANNER.officialUrl}>
              Official STOVE notice: {SUMMON_BANNER.officialTitle}
            </ExternalLink>
            , opened 26 November 2026. The featured-hero rate, pity, moonlight
            exclusion, and coexistence with regular covenant summons used on
            this page come from that English body.
          </li>
          <li>
            This site’s <a href="/banners/">current banner page</a> and{' '}
            <a href="/updates/">updates page</a>, which already point at the
            same notice for the live window.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
