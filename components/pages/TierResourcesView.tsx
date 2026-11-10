import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import {
  TIER_ACCOUNT_DECISIONS,
  TIER_DIRECT_LINKS,
  TIER_LIMITS,
  TIER_METHOD_POINTS,
  TIER_RESOURCES_CHECKED,
  TIER_SOURCE_ROWS,
} from '@/lib/i18n/tier-resources';

export function TierResourcesView() {
  return (
    <PageShell locale="en" path="/tier-list/" languages={['en']}>
      <h1>Epic Seven tier lists by game mode: sources and limits</h1>
      <IndepNotice locale="en" />
      <p className="last-verified">
        Sources checked:{' '}
        <time dateTime={TIER_RESOURCES_CHECKED}>{TIER_RESOURCES_CHECKED}</time>{' '}
        · this is a resource comparison, not a ranking of our own
      </p>
      <p className="quick-answer">
        <strong>Short answer: </strong>
        There is no single Epic Seven tier list that fits every mode and every
        account. The sources below split PvE, RTA, Guild War and new-account
        investment, and each one has its own date, method and limits. Guild War
        is <strong>not verified</strong> in this round, so no Guild War table is
        reproduced here.
      </p>
      <nav className="anchor-nav" aria-label="Jump to">
        <span className="anchor-nav-label">Jump to</span>
        <a href="#sources">Source comparison</a>
        <a href="#method">Reading method</a>
        <a href="#accounts">Account decisions</a>
        <a href="#limits">Limits / not verified</a>
        <a href="#steam">Steam build priorities</a>
      </nav>
      <p>
        A tier list is only useful after you know which question it answers.
        Most public lists rank a full roster for a specific patch; this site’s
        Steam pages answer a narrower question about build order on a
        Steam/transfer account. Those are different jobs, so they now live on
        different pages instead of pretending to be one ranking.
      </p>

      <section id="sources">
        <h2>Source comparison by mode</h2>
        <p>
          The table records what each source covers, how it is built, when it
          was last updated, and what it cannot tell you. “Checked” is the date
          this site read the page, not the source’s update date. The two must
          stay separate: an old PvE board can still be online today.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="data">
            <thead>
              <tr>
                <th scope="col">Source</th>
                <th scope="col">Mode</th>
                <th scope="col">Method / data</th>
                <th scope="col">Source updated</th>
                <th scope="col">Checked</th>
                <th scope="col">Limits</th>
                <th scope="col">Direct link</th>
              </tr>
            </thead>
            <tbody>
              {TIER_SOURCE_ROWS.map((row) => (
                <tr key={row.source}>
                  <td>
                    <strong>{row.source}</strong>
                  </td>
                  <td>{row.modes}</td>
                  <td>{row.method}</td>
                  <td>{row.updated}</td>
                  <td>{TIER_RESOURCES_CHECKED}</td>
                  <td>{row.limits}</td>
                  <td>
                    {row.href ? (
                      <ExternalLink href={row.href}>{row.linkLabel}</ExternalLink>
                    ) : (
                      <span className="muted">{row.linkLabel}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          Source dates are copied from the pages as read. A missing exact date
          is shown as “not captured” rather than guessed. A source being online
          is not evidence that its data is current.
        </p>
      </section>

      <section id="method">
        <h2>How to read a tier list without misusing it</h2>
        <ol>
          {TIER_METHOD_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
        <aside className="card warn">
          <h3>Equipment speed, draft role and pick rate are not one scale</h3>
          <p>
            A speed-tuned opener, a cleanse/revive support and a Wyvern farmer
            solve different problems. Champion+ RTA pick/ban rate measures
            contest and bans in that pool; it does not measure a story team’s
            clear speed. A community vote measures what that community chose to
            rate; it does not measure every mode. Do not turn any single number
            into a universal S grade.
          </p>
        </aside>
      </section>

      <section id="accounts">
        <h2>Three account decisions</h2>
        <p>
          The same list can be right for one account and wrong for another. Use
          the account you actually have, not the roster a ranking assumes.
        </p>
        {TIER_ACCOUNT_DECISIONS.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
        <p>
          In all three cases, a hero being high on a list is not a pull
          instruction. Check banner timing, pity and whether the hero fills an
          open slot; the{' '}
          <Link href="/banners/">banners page</Link> covers the live pickup.
        </p>
      </section>

      <section id="limits">
        <h2>What is not verified — and what this page does not claim</h2>
        <ul>
          {TIER_LIMITS.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
        <p>
          If a real, citable Guild War board is found later, it should be added
          with its own date, sample and method — not back-filled into this page
          as if it had been checked today.
        </p>
      </section>

      <section id="steam">
        <h2>Steam/transfer build priorities are a different question</h2>
        <p>
          This site’s Steam/transfer page is about what to build first on a
          constrained account. It is not a current full-roster tier list and it
          does not assign letter grades. Use it for build order, then use the
          mode sources above for current placement.
        </p>
        <p>
          <Link href="/steam-tier-list/">
            <strong>
              Steam/transfer build priorities — PvE, Guild War &amp; World
              Arena (not a full ranking)
            </strong>
          </Link>
        </p>
        <p>
          Related: <Link href="/steam-transfer/">STOVE → Steam transfer</Link>,{' '}
          <Link href="/foundry/#guild-war">Foundry Guild War prep</Link>, and{' '}
          <Link href="/heroes/">hero cards</Link>.
        </p>
      </section>

      <section className="sources">
        <h2>Direct links checked</h2>
        <ul>
          {TIER_DIRECT_LINKS.map((link) => (
            <li key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink> —{' '}
              {link.note}
            </li>
          ))}
        </ul>
        <p className="muted">
          No ranking table is copied or republished from these sources. Dates,
          samples and limits are the reason this page exists.
        </p>
      </section>
    </PageShell>
  );
}
