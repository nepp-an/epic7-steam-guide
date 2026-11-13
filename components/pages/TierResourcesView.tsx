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
  TIER_WA_ROWS,
} from '@/lib/i18n/tier-resources';

export function TierResourcesView() {
  return (
    <PageShell locale="en" path="/tier-list/" languages={['en']}>
      <h1>Epic Seven tier lists by game mode: sources and limits</h1>
      <IndepNotice locale="en" />
      <p className="last-verified">
        Sources checked by row:{' '}
        <time dateTime={TIER_RESOURCES_CHECKED}>{TIER_RESOURCES_CHECKED}</time>{' '}
        for pages re-read this round; gacha.gg, PocketGamer and Fandom remain
        2026-11-10 after HTTP 403. This is a resource comparison, not a ranking
        of our own.
      </p>
      <p className="quick-answer">
        <strong>Short answer: </strong>
        There is still no single official Epic Seven tier list for every mode.
        This page now states, for each mode, what can be used today, on what
        criteria, and what remains unrated. PvE has no current letter board we
        can responsibly republish. Foundry Guild War is unrated (the mode is not
        open yet on Foundry). For World Arena / RTA we only cite a bounded,
        dated global Champion+ must-ban band — not a full roster and not a
        Foundry measurement. Steam/transfer build order stays on the{' '}
        <Link href="/steam-tier-list/">Steam build-priorities page</Link>.
      </p>
      <nav className="anchor-nav" aria-label="Jump to">
        <span className="anchor-nav-label">Jump to</span>
        <a href="#sources">Source comparison</a>
        <a href="#pve">PvE (unrated)</a>
        <a href="#guild-war">Guild War (unrated)</a>
        <a href="#world-arena">World Arena / RTA</a>
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
                  <td>{row.checked}</td>
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
          is not evidence that its data is current. gacha.gg, PocketGamer and
          Fandom were re-fetched on 2026-11-13 and returned HTTP 403, so their
          checked date stays at 2026-11-10, with the fetch failure recorded in
          the limits column.
        </p>
      </section>

      <section id="pve">
        <h2>PvE — unrated in this round</h2>
        <p>
          <strong>Applies to:</strong> story, Hunts (Wyvern and the other Hunt
          stages), and Abyss/Adventure-style PvE clears. It does not answer RTA
          bans or Guild War offense and defense.
        </p>
        <p>
          <strong>Criteria:</strong> only a source’s own visible update date and
          stated method. This site does not invent letter grades.
        </p>
        <ul>
          <li>
            epic7db’s “PvE Tier List - Best Heroes for PvE” page showed “Last
            Updated: Aug 28, 2025”. A 2026-11-13 HTTP 200 re-check found the
            same date, so it cannot be presented as a November 2026 PvE board.
          </li>
          <li>
            No second, currently readable, dated PvE full board was available
            for a legal summary this round: gacha.gg and PocketGamer returned
            HTTP 403; hideoutgacha and Epic Helper are RTA sources.
          </li>
        </ul>
        <p>
          <strong>Why the limit:</strong> an expired editorial board cannot
          stand in for the current mode, and turning starter free units into
          “S-tier PvE” would disguise account setup as a strength ranking.
        </p>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://epic7db.com/tier-list">
            epic7db.com/tier-list
          </ExternalLink>{' '}
          — page label “PvE Tier List - Best Heroes for PvE Last Updated: Aug
          28, 2025”; checked{' '}
          <time dateTime="2026-11-13">2026-11-13</time>.
        </p>
        <p>
          Steam/transfer opening order is not a PvE tier list; it stays on{' '}
          <Link href="/steam-tier-list/#pve">
            the Steam build-priorities page
          </Link>
          .
        </p>
        <p>
          <strong>Verdict: unrated / not completed.</strong> If you need a
          current PvE letter board, open a dated external source yourself and
          check its update date; this page will not fill in a table it cannot
          support.
        </p>
      </section>

      <section id="guild-war">
        <h2>Guild War — unrated / not completed</h2>
        <p>
          <strong>Applies to:</strong> Foundry Guild War before its playable
          window. This section explains official phases and role coverage only;
          it is not a battle-tested ranking.
        </p>
        <p>
          <strong>Criteria:</strong> the official schedule comes from STOVE and
          Steam notices. Any hero-strength statement needs a current,
          mode-specific, citable source. No such Guild War board was available
          this round.
        </p>
        <ul>
          <li>
            Guild War is scheduled to be introduced to the Foundry Server on
            Thursday, November 19; the official sentence gives no clock time, so
            none is invented here.
          </li>
          <li>
            Form Defense: 11/21 (Sat) 03:00 UTC ={' '}
            <strong>11/21 11:00 Beijing time</strong>.
          </li>
          <li>
            Guild War Matchmaking: 11/23 (Mon) 03:00 UTC ={' '}
            <strong>11/23 11:00 Beijing time</strong>.
          </li>
        </ul>
        <p>
          <strong>Community boards:</strong> hideoutgacha’s visible text showed
          no Guild War board this round. RankedMeta’s method mentions Guild War
          cross-checks, but its board is mixed and based on 16 voters, so its
          letter grades are not quoted here. There is no Foundry Guild War
          match data yet.
        </p>
        <p>
          <strong>Why the limit:</strong> while the mode is closed and no
          independent Guild War board exists, a “GW S/A table” would pass off
          global-server experience or an unrelated source as a Foundry
          measurement.
        </p>
        <p>
          <strong>Source / checked:</strong> Steam — “Foundry Server Guild War
          Update Notice” (
          <ExternalLink href="https://store.steampowered.com/news/app/5019180/view/1848664643349012">
            Steam news
          </ExternalLink>
          ); checked <time dateTime="2026-11-13">2026-11-13</time>.{' '}
          <Link href="/foundry/#guild-war">Foundry Guild War prep</Link> keeps
          the detailed phase notes.
        </p>
        <p>
          <strong>Preparation note, not a ranking:</strong> cover a tank, a
          cleanse/revive support, and a damage dealer usable on both offense and
          defense. Build order stays on{' '}
          <Link href="/steam-tier-list/#guild-war">
            the Steam build-priorities page
          </Link>
          .
        </p>
        <p>
          <strong>Verdict: unrated / not completed.</strong>
        </p>
      </section>

      <section id="world-arena">
        <h2>World Arena / RTA — bounded quote, not a full table</h2>
        <p>
          <strong>Applies to:</strong> global-server Real-Time Arena only; the
          source labels its pool Champion+. Foundry World Arena opens after the
          12/10 maintenance (official Steam wording: KST; no clock time is
          posted). Before then these names are not a Foundry WA measurement.
        </p>
        <p>
          <strong>Criteria (the source’s, not ours):</strong> Epic Helper says
          it ranks by real RTA win rate plus pick and ban. Its SS band means a
          hero was picked or banned in more than 35% of drafts, which the source
          describes as must-ban. It is a community/fan project, not Smilegate
          official.
        </p>
        <p>
          Community / non-official. Source page label: “Epic Seven RTA Tier
          List Champion+ · updated November 2026”. Checked{' '}
          <time dateTime="2026-11-13">2026-11-13</time>. Global-server RTA data,
          not a Foundry World Arena ladder.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="data">
            <thead>
              <tr>
                <th scope="col">Source band</th>
                <th scope="col">Hero</th>
                <th scope="col">Source-reported numbers</th>
                <th scope="col">Short reason</th>
              </tr>
            </thead>
            <tbody>
              {TIER_WA_ROWS.map((row) => (
                <tr key={row.hero}>
                  <td>{row.band}</td>
                  <td>
                    <strong>{row.hero}</strong>
                  </td>
                  <td>{row.numbers}</td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://epic7helper.com/tier-list">
            epic7helper.com/tier-list
          </ExternalLink>{' '}
          — checked <time dateTime="2026-11-13">2026-11-13</time>. A same-day
          200 on hideoutgacha (Fall 2026 Champion+, page-reported 379 heroes /
          16,681,352 picks) only confirms a same-period usage dataset; it is not
          copied as a second ranking.
        </p>
        <p>
          <strong>Not included:</strong> Epic Helper’s S/A and lower bands,
          RankedMeta’s letter list, any “complete World Arena tier list” claim,
          and any Foundry WA grade.
        </p>
        <p>
          <strong>Verdict: partially deliverable.</strong> A dated global
          must-ban band is usable; a full WA table and a Foundry measurement
          remain incomplete.
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
