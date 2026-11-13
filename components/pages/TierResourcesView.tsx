import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import {
  TIER_ACCOUNT_DECISIONS,
  TIER_DIRECT_LINKS,
  TIER_LIMITS,
  TIER_METHOD_POINTS,
  TIER_PVE_SS_ROWS,
  TIER_PVE_WYVERN_APPEARANCE,
  TIER_PVE_WYVERN_TEAMS,
  TIER_RESOURCES_CHECKED,
  TIER_SOURCE_ROWS,
  TIER_WA_ROWS,
} from '@/lib/i18n/tier-resources';
import styles from './TierResourcesView.module.css';

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
        criteria, and what remains incomplete. PvE has dated partial coverage
        (a Wyvern · Normal clear window and one stale editorial SS band) but no
        current full letter board. Foundry Guild War has official phases and
        role coverage, but no mode-specific letter board yet. For World Arena /
        RTA we only cite a bounded, dated global Champion+ must-ban band — not
        a full roster and not a Foundry measurement. Steam/transfer build order
        stays on the{' '}
        <Link href="/steam-tier-list/">Steam build-priorities page</Link>.
      </p>
      <nav className="anchor-nav" aria-label="Jump to">
        <span className="anchor-nav-label">Jump to</span>
        <a href="#sources">Source comparison</a>
        <a href="#pve">PvE — dated coverage</a>
        <a href="#guild-war">Guild War — phases &amp; roles</a>
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
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
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
                  <td data-label="Source">
                    <strong>{row.source}</strong>
                  </td>
                  <td data-label="Mode">{row.modes}</td>
                  <td data-label="Method / data">{row.method}</td>
                  <td data-label="Source updated">{row.updated}</td>
                  <td data-label="Checked">{row.checked}</td>
                  <td data-label="Limits">{row.limits}</td>
                  <td data-label="Direct link" className={styles.cellBreak}>
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
        <h2>PvE — dated coverage, not a current full board</h2>
        <p>
          <strong>Applies to:</strong> story, Hunts (Wyvern and the other Hunt
          stages), and Abyss/Adventure-style PvE clears. The main dated data
          below is a community clear sample for <strong>Wyvern · Normal</strong>,
          plus one editorial top band that is explicitly stale. This section
          does not answer RTA bans or Guild War offense and defense.
        </p>
        <p>
          <strong>Criteria:</strong> only a source’s own visible update date and
          stated method. Hideout reports “share of clears”, not a letter grade.
          epic7db is an editorial board; its PvE page says “Last Updated: Aug 28,
          2025”, so it is not a November 2026 board. This site does not invent
          letter grades.
        </p>

        <h3>Usable list 1 — Hideout community Wyvern · Normal clears</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://www.hideoutgacha.com/games/epic-seven/hunts">
            hideoutgacha.com/games/epic-seven/hunts
          </ExternalLink>{' '}
          — HTTP 200, read <time dateTime="2026-11-13">2026-11-13</time> (18:27
          Beijing time). The page shows clears from{' '}
          <strong>29 October 2026 to 4 November 2026</strong>.
        </p>
        <p>
          <strong>Method (the source’s):</strong> Community Teams, built and
          upvoted by players; ranking is by share of clears. Community /
          non-official. This round the visible HTML yielded a stable Wyvern ·
          Normal team table; Hard/Hell and the other Hunts did not form a
          complete, independently provable list here, so they are not invented.
        </p>
        <p>Top five teams as listed, with the source’s share of clears:</p>
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Team (source-listed order)</th>
                <th scope="col">Share of clears</th>
              </tr>
            </thead>
            <tbody>
              {TIER_PVE_WYVERN_TEAMS.map((row) => (
                <tr key={row.rank}>
                  <td data-label="Rank">{row.rank}</td>
                  <td data-label="Team">
                    <strong>{row.team}</strong>
                  </td>
                  <td data-label="Share of clears">{row.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Single-hero appearance on the same page and window:</strong>{' '}
          {TIER_PVE_WYVERN_APPEARANCE.map((row, index) => (
            <span key={row.hero}>
              {row.hero} {row.rate}
              {index < TIER_PVE_WYVERN_APPEARANCE.length - 1 ? '; ' : '. '}
            </span>
          ))}
          These are appearance rates in this community sample, not strength
          letter grades, and they do not cover Foundry Hunts.
        </p>
        <p>
          <strong>Short reason:</strong> this is a dated community clear sample
          you can use to see which Wyvern · Normal teams were common in that
          week. It cannot be extended to Foundry Hunts or treated as a full PvE
          tier list.
        </p>

        <h3>Usable list 2 — epic7db PvE SS band (stale, still readable)</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://epic7db.com/tier-list">
            epic7db.com/tier-list
          </ExternalLink>{' '}
          — the “PvE Tier List - Best Heroes for PvE” section shows{' '}
          <strong>“Last Updated: Aug 28, 2025”</strong>. A 2026-11-13 HTTP 200
          re-check found the same date (about 14 months old at this check).
          Non-Smilegate editorial board.
        </p>
        <p>
          <strong>Only the SS band is quoted</strong> — eight heroes, with the
          source’s class and element. Its S (16), A (30), B (44) and C (37)
          rows are deliberately not copied.
        </p>
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
            <thead>
              <tr>
                <th scope="col">Source SS hero</th>
                <th scope="col">Source class / element</th>
              </tr>
            </thead>
            <tbody>
              {TIER_PVE_SS_ROWS.map((row) => (
                <tr key={row.hero}>
                  <td data-label="SS hero">
                    <strong>{row.hero}</strong>
                  </td>
                  <td data-label="Class / element">{row.classElement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Short reason:</strong> this is the last dated PvE top band
          this site could read directly, but it is 14 months old. Use it to look
          up that source’s final SS list, not as a current November 2026 table.
        </p>
        <p>
          For opening-order advice — Angelic Montmorancy, Falconer Kluri,
          Commander Lorina, and a farmer such as Alexa — use{' '}
          <Link href="/steam-tier-list/#pve">
            the Steam build-priorities page
          </Link>
          . That is account progression, not a PvE letter ranking.
        </p>

        <h3>What is still missing, and what was tried</h3>
        <ul>
          <li>
            No current, dated, legally summarizable all-mode PvE letter board
            was available for 2026-11.
          </li>
          <li>
            gacha.gg, PocketGamer and Fandom returned HTTP 403 in this round or
            at the 2026-11-13 16:57 CST read, so their earlier 2026-11-10
            readings stay in the source table.
          </li>
          <li>
            epic7x.com/tier-list returned a 301 and then timed out or came back
            empty on the tier-list-builder path; gamepress.gg/epicseven/tier-list
            returned 404; prydwen.gg/epic-seven returned 404.
          </li>
          <li>
            hideoutgacha /guild-war and /teams returned 404 (relevant to the
            Guild War gap below). epic7x /wyvern-hunt/ returned 200 but was a
            2019-copyright mechanics page with template placeholders and no
            dated team table, so it was not used for a roster.
          </li>
        </ul>
        <p>
          <strong>Verdict: partial, date-bounded coverage.</strong> Wyvern ·
          Normal top five plus the stale epic7db SS band are usable; a complete,
          current PvE S/A/B/C board is still not completed.
        </p>
      </section>

      <section id="guild-war">
        <h2>Guild War — official phases and role coverage, not a letter board</h2>
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
          <strong>Attempted Guild War boards:</strong> hideoutgacha
          /games/epic-seven/guild-war returned HTTP 404 on 2026-11-13 18:27 CST,
          as did /teams. Epic Helper’s homepage describes RTA/Arena/Guild War
          draft tools, but its /tier-list page is labelled RTA Champion+, so it
          is not a Guild War board. RankedMeta’s method sentence mentions Guild
          War cross-checks, but its board is mixed and based on 16 voters, so
          its letter grades are not quoted here. prydwen.gg/epic-seven and
          gamepress.gg/epicseven/tier-list returned 404. There is no Foundry
          Guild War match data yet.
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
          . The four World Arena SS names below are <strong>not</strong> a Guild
          War roster; they are quoted only for the RTA mode.
        </p>
        <p>
          <strong>Verdict: official phases and role coverage usable; the Guild
          War letter board is still incomplete.</strong>
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
          List Champion+ · updated November 2026”. The list page was read at
          2026-11-13 16:57 CST and each of the four /hero/ entity pages was
          re-read at 18:25 CST; the split figures above come from those entity
          pages. Checked <time dateTime="2026-11-13">2026-11-13</time>.
          Global-server RTA data, not a Foundry World Arena ladder.
        </p>
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Entity (source)</th>
                <th scope="col">Class</th>
                <th scope="col">Source-reported RTA rates</th>
                <th scope="col">Source URL</th>
              </tr>
            </thead>
            <tbody>
              {TIER_WA_ROWS.map((row) => (
                <tr key={row.name}>
                  <td data-label="Name">
                    <strong>{row.name}</strong>
                    <br />
                    <span className="muted">{row.band}</span>
                  </td>
                  <td data-label="Entity (source)">{row.entity}</td>
                  <td data-label="Class">{row.classElement}</td>
                  <td data-label="Source-reported RTA rates">
                    <span className="muted">List page:</span>{' '}
                    <strong>{row.listNumbers}</strong>
                    <br />
                    <span className="muted">Entity page:</span> {row.split}
                    <br />
                    <span className="muted">Current season · Champion+</span>
                  </td>
                  <td data-label="Source URL" className={styles.cellBreak}>
                    <ExternalLink href={row.url}>{row.url}</ExternalLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Short reason:</strong> each row meets this source’s 35%+
          pick-or-ban threshold in its Champion+ RTA pool. That is the source’s
          statistic — not this site’s build advice, not a full-mode
          recommendation, and not a Foundry World Arena measurement.
        </p>
        <p>
          <strong>Rhianna and Luciella — not the same-name artifact:</strong>{' '}
          this row cites Epic Helper’s hero page (Title: Dark Thief), and this
          round’s fields classify it as a Dark Thief hero, not an artifact. A
          Thief artifact with the same name exists historically; the Helper
          /artifact/rhianna-and-luciella path returned 404 on 2026-11-13, while
          /hero/rhianna-and-luciella returned 200 and epic7db.com/heroes/
          rhianna-and-luciella returned a Hero Details page. Do not read this
          row as an artifact entry.
        </p>
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
