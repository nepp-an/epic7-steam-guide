import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { GearScoreCalculatorTool } from '@/components/pages/GearScoreCalculatorTool';
import { BRAND, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/gear-score-calculator/';
const TITLE = 'Epic Seven Gear Score Calculator (Unofficial)';
const DESCRIPTION =
  'Unofficial Epic Seven gear score calculator for one piece or a six-piece set. Community formula, not Smilegate. A needed speed breakpoint can outrank GS.';

const FAQS = [
  [
    'What does this Epic Seven gear score calculator measure?',
    'It turns the stats you enter for a gear piece into one community-weighted number so you can compare rolls. It does not say whether those stats fit a specific hero, and it is not an official Smilegate rating.',
  ],
  [
    'Is this an official Epic Seven gear score?',
    'No. Smilegate and Epic Seven do not publish an official gear score. This tool uses a widely cited community formula documented by the Potential project, which cites artistalley7. Other calculators use different weights or add level, set, or hero-fit factors. Those extras are not part of the default score here.',
  ],
  [
    'Why are Speed and Crit Chance weighted more than a plain percent stat?',
    'In this formula, Speed is multiplied by 2 and Crit Chance by 1.6 because those stats roll in smaller raw numbers than a comparable Attack % or Health % roll. Crit Damage is multiplied by 1.1. The weights are community conventions, not official values.',
  ],
  [
    'How are flat Attack, Health, and Defense treated?',
    'By default the published conversions are included: Flat Attack ÷ 10, Flat Health ÷ 50, and Flat Defense ÷ 6. Some players ignore flats and compare percent stats plus Speed and Crit only. The calculator shows both totals so you can use either method.',
  ],
  [
    'Why might a lower score still be the right piece?',
    'A needed Speed breakpoint, an Effectiveness floor, or a stat the hero actually uses can matter more than a higher total built from stats that hero does not use. Gear score is a shorthand for roll quality, not a substitute for fitting the character or the fight.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/gear-score-calculator.png',
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

      <h1>Epic Seven gear score calculator</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Formula and sources checked <time dateTime="2026-11-26">2026-11-26</time>{' '}
        (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Unofficial tool: </strong>
        Enter a piece&apos;s stats and this Epic Seven gear score calculator
        totals them with a widely cited community formula. It is not a Smilegate
        or Epic Seven official score. A needed Speed breakpoint can still
        outrank a higher number.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#calculator">Calculator</a>
        <a href="#formula">Formula</a>
        <a href="#example">Worked example</a>
        <a href="#ranges">Community ranges</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        Use it when you want a fast, repeatable way to compare two rolls, or to
        add up a six-piece set with the same weights. Enter substats for the
        usual community comparison. Include a main stat only if that is how you
        already compare pieces — the tool scores what you type, and it does not
        invent a separate main-stat weight.
      </p>

      <section id="calculator" aria-labelledby="calculator-title">
        <h2 id="calculator-title">Score a piece or a six-piece set</h2>
        <p>
          Pick a slot, type the numbers from the gear screen, and the total
          updates as you type. The default score includes the published flat
          conversions. Switch to percent, Speed, and Crit only if you prefer to
          keep flats to the side. The six-piece total uses the same formula on
          weapon, helmet, chest, boots, necklace, and ring.
        </p>
        <GearScoreCalculatorTool />
      </section>

      <section id="formula" aria-labelledby="formula-title">
        <h2 id="formula-title">The exact community formula used here</h2>
        <p>
          The default score is the sum below. There is no level factor, set
          bonus, or “hero fit” percentage in this number.
        </p>
        <figure className="gs-formula">
          <pre>
            {`GS = ATK% + HP% + DEF% + Eff% + ER%
  + (Crit Chance% × 1.6)
  + (Crit Damage% × 1.1)
  + (Speed × 2)
  + (Flat ATK ÷ 10)
  + (Flat HP ÷ 50)
  + (Flat DEF ÷ 6)`}
          </pre>
          <figcaption>
            Unofficial community gear score. Documented by the Potential
            project, which cites artistalley7. This site opened that Potential
            README on 26 November 2026; artistalley7 itself returned HTTP 500
            the same day and is not quoted from the live page.
          </figcaption>
        </figure>
        <p>
          Attack %, Health %, Defense %, Effectiveness %, and Effect Resistance
          each add one point per percent. Speed is doubled. Crit Chance is
          multiplied by 1.6, and Crit Damage by 1.1. Flat Attack, Health, and
          Defense use the conversions in the formula. The same weights are used
          for every slot and for the six-piece total.
        </p>
      </section>

      <section id="example" aria-labelledby="example-title">
        <h2 id="example-title">A worked example you can reproduce in the tool</h2>
        <p>
          Take a piece with 20% Attack, 5% Health, 4% Defense, and 7% Crit
          Damage, and no other stats entered:
        </p>
        <p>
          20 + 5 + 4 + (7 × 1.1) = 20 + 5 + 4 + 7.7 = <strong>36.7</strong>
        </p>
        <p>
          Press “Load the 36.7 worked example” on the calculator to fill those
          four values into the selected slot. The displayed full score should
          be 36.70. The percent-only score is the same here because this
          example has no flats. That 36.7 figure also appears in GamesAdda’s 23
          December 2022 write-up, which uses the same percentage weights.
        </p>
      </section>

      <section id="ranges" aria-labelledby="ranges-title">
        <h2 id="ranges-title">Community score ranges, not official grades</h2>
        <p>
          Players often ask what a “good” score looks like on a Lv.85 piece
          versus a Lv.90 piece. There is no official band. One community chart
          published in GamesAdda’s 2022 guide, and treated here only as a rule
          of thumb, is:
        </p>
        <ul>
          <li>
            Lv.85: 40–49 often called okay, 50–59 good, 60–70 very good, 71–85
            best.
          </li>
          <li>
            Lv.90: 50–59 often called okay, 60–69 good, 70–80 very good, 81–90
            best.
          </li>
        </ul>
        <p>
          Those ranges are not a Smilegate standard, and they do not change the
          score this tool calculates. A piece that hits a needed Speed
          breakpoint — or that holds the one stat a hero actually wants — can
          be the right keep even when its total sits below a higher-scoring
          roll of the wrong stats. The optional level menu on the calculator
          only labels this hint; it never applies a level multiplier.
        </p>
      </section>

      <section id="limits" aria-labelledby="limits-title">
        <h2 id="limits-title">What this score does not decide</h2>
        <p>
          Gear score is a shorthand for how hard a piece rolled, after the
          community weights above. It cannot tell you if a hero wants Attack
          or Health, whether your team already meets a Speed check, or whether
          a set bonus is worth a weaker roll. This page does not recommend
          hero builds, artifacts, or teams. For Steam-account build order and
          mode sources, use the{' '}
          <a href="/steam-tier-list/">Steam build-priority page</a> and the{' '}
          <a href="/tier-list/">tier-list resource page</a>. Hero cards for
          early-account roles live on the{' '}
          <a href="/heroes/">heroes page</a>.
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
            <ExternalLink href="https://github.com/dizonivan11/Potential">
              Potential (dizonivan11) README
            </ExternalLink>
            : the Level 85 community formula, including the flat conversions,
            and a citation to artistalley7. Opened 26 November 2026.
          </li>
          <li>
            artistalley7 guide “How to calculate gear score in Epic Seven”:
            requested the same day; the host returned HTTP 500, so this page
            does not quote that article from a live fetch.
          </li>
          <li>
            <ExternalLink href="https://gamesadda.in/gaming/calculate-gear-score-epic-seven/">
              GamesAdda, “How To Calculate Gear Score In Epic Seven,” 23
              December 2022
            </ExternalLink>
            : the same percentage weights, the 36.7 worked example, and the
            Lv.85 / Lv.90 community ranges quoted above. That article does not
            publish the flat-stat conversions used in the default score here.
          </li>
        </ul>
        <p className="muted">
          Other public calculators use different models — for example a 1.5
          Crit Chance weight, a different Flat Health divisor, or extra
          level, set, or hero-fit multipliers. This tool does not follow
          those models.
        </p>
      </section>
    </PageShell>
  );
}
