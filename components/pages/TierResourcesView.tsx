import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import {
  TIER_ACCOUNT_DECISIONS,
  TIER_DIRECT_LINKS,
  TIER_GW_EDITORIAL_TEAMS,
  TIER_GW_E7GW_ATTACKERS,
  TIER_GW_E7GW_DEFENSES,
  TIER_LIMITS,
  TIER_METHOD_POINTS,
  TIER_PVE_ABYSS91_APPEARANCE,
  TIER_PVE_ABYSS91_TEAMS,
  TIER_PVE_BANSHEE_HELL_APPEARANCE,
  TIER_PVE_BANSHEE_HELL_TEAMS,
  TIER_PVE_PHERUS_S3_APPEARANCE,
  TIER_PVE_PHERUS_S3_TEAMS,
  TIER_PVE_SS_ROWS,
  TIER_PVE_WYVERN_HELL_APPEARANCE,
  TIER_PVE_WYVERN_HELL_TEAMS,
  TIER_RESOURCES_CHECKED,
  TIER_SOURCE_ROWS,
  TIER_WA_BAND_COUNTS,
  TIER_WA_ROWS,
  TIER_WA_S_SAMPLE,
} from '@/lib/i18n/tier-resources';
import type { TierGwStatRow, TierPveTeam } from '@/lib/i18n/tier-resources';
import styles from './TierResourcesView.module.css';

function PveTeamTable({ teams }: { teams: readonly TierPveTeam[] }) {
  return (
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
          {teams.map((row) => (
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
  );
}

function PveAppearance({
  rows,
}: {
  rows: readonly { hero: string; rate: string }[];
}) {
  return (
    <p>
      <strong>
        Most-used heroes (source top five on the same panel and window):
      </strong>{' '}
      {rows.map((row, index) => (
        <span key={row.hero}>
          {row.hero} {row.rate}
          {index < rows.length - 1 ? '; ' : '. '}
        </span>
      ))}
      These are appearance rates in this community sample, not strength letter
      grades.
    </p>
  );
}

function GwStatTable({
  rows,
  lineupLabel,
  rateLabel,
}: {
  rows: readonly TierGwStatRow[];
  lineupLabel: string;
  rateLabel: string;
}) {
  return (
    <div className={styles.tableScroll}>
      <table className={`data ${styles.dataTable}`}>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">{lineupLabel}</th>
            <th scope="col">Battles</th>
            <th scope="col">Wins</th>
            <th scope="col">Losses</th>
            <th scope="col">{rateLabel}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.rank}>
              <td data-label="Rank">{row.rank}</td>
              <td data-label={lineupLabel}>
                <strong>{row.lineup}</strong>
              </td>
              <td data-label="Battles">{row.battles}</td>
              <td data-label="Wins">{row.wins}</td>
              <td data-label="Losses">{row.losses}</td>
              <td data-label={rateLabel}>
                <strong>{row.rate}</strong>
                <br />
                <span className="muted">{row.rateKind}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
        There is still no single official Epic Seven tier list for every mode,
        and this page does not claim one. What it now carries: four dated,
        bounded community clear samples for representative high-difficulty PvE
        panels (top three teams plus each panel’s most-used five); Guild War
        quotes E7GW’s defenses (labelled “Nov 10 top-50 report”, with no year or
        date range on the page) separately from E7GW’s attackers (no report date
        visible on that page, checked 2026-11-13); Epic7Tools’ 10 November 2026
        editorial archetypes and the official Foundry phases; and a bounded
        Helper Champion+ snapshot for World Arena. None of this is a Foundry
        measurement. The E7GW pages state no region and say they are not
        affiliated with Smilegate. This is not a completed three-mode master
        table.
      </p>
      <nav className="anchor-nav" aria-label="Jump to">
        <span className="anchor-nav-label">Jump to</span>
        <a href="#sources">Source comparison</a>
        <a href="#pve">PvE — high-difficulty samples</a>
        <a href="#guild-war">Guild War — sourced lists &amp; phases</a>
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
        <h2>PvE — representative high-difficulty samples, not a full board</h2>
        <p>
          <strong>Applies to:</strong> four representative high-difficulty PvE
          panels — Wyvern · Hell, Banshee · Hell, Brutal Pherus · Stage 3, and
          Abyss Floor 91. These are community “share of clears” samples, not win
          rates and not letter grades. Each panel was read from the visible
          Hideout UI in the browser on 2026-11-13. Lower-difficulty Wyvern ·
          Normal and Brutal Pherus · Stage 1 remain noted below, not expanded
          again.
        </p>
        <p>
          <strong>Criteria:</strong> the source’s visible panel selection, its
          clear window, and its own “Most-Used Heroes” field. Hunt and
          Expedition panels share the{' '}
          <strong>29 October–4 November 2026</strong> clear window; Abyss Floor
          91 uses <strong>7 August–4 November 2026</strong>. The page-level
          footer totals (248 hunts, 102 expedition, 188 abyss teams) are not the
          selected panel’s team count. Hideout’s “Official … data” wording is
          not treated as a Smilegate official roster, and no mechanic or counter
          reason is invented here.
        </p>
        <p>
          The source’s own most-used cores differ: Wyvern · Hell is led by
          Brieg / Furious / Sigret, while Banshee · Hell is led by Vivian /
          Schniel / Bellona. That is a source-field difference, not a grade.
        </p>

        <h3>1. Wyvern · Hell — Hideout community clears</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://www.hideoutgacha.com/games/epic-seven/hunts#wyvern-hell-1">
            hideoutgacha.com/games/epic-seven/hunts#wyvern-hell-1
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>. Clear window:{' '}
          <strong>29 October–4 November 2026</strong>. Panel count:{' '}
          <strong>All 20 teams</strong>; this page quotes the top three.
        </p>
        <PveTeamTable teams={TIER_PVE_WYVERN_HELL_TEAMS} />
        <PveAppearance rows={TIER_PVE_WYVERN_HELL_APPEARANCE} />
        <p>
          <strong>Short reason:</strong> the top team accounts for 14.66% of
          this panel’s clears, and Brieg is the panel’s most-used hero at 53.0%.
          That makes the listed trio plus Muwi a practical starting point to
          inspect, not a claim that it is best for every account.
        </p>

        <h3>2. Banshee · Hell — Hideout community clears</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://www.hideoutgacha.com/games/epic-seven/hunts#banshee-hell-1">
            hideoutgacha.com/games/epic-seven/hunts#banshee-hell-1
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>. Clear window:{' '}
          <strong>29 October–4 November 2026</strong>. Panel count:{' '}
          <strong>All 20 teams</strong>; this page quotes the top three.
        </p>
        <PveTeamTable teams={TIER_PVE_BANSHEE_HELL_TEAMS} />
        <PveAppearance rows={TIER_PVE_BANSHEE_HELL_APPEARANCE} />
        <p>
          <strong>Short reason:</strong> Vivian appears in all three top teams
          and is the panel’s most-used hero at 42.3%; Schniel and Bellona follow
          at 28.1% and 24.0%. The sample is much flatter than Wyvern · Hell —
          4.70% for the top team — so it should be read as a spread of common
          clears, not a single dominant lineup.
        </p>

        <h3>3. Brutal Pherus · Stage 3 — Hideout community clears</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://www.hideoutgacha.com/games/epic-seven/expedition#pherus-3-1">
            hideoutgacha.com/games/epic-seven/expedition#pherus-3-1
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>. Clear window:{' '}
          <strong>29 October–4 November 2026</strong>. Panel count:{' '}
          <strong>All 10 teams</strong>; the page-level total of 102 teams across
          five bosses and three stages is not this stage’s count.
        </p>
        <PveTeamTable teams={TIER_PVE_PHERUS_S3_TEAMS} />
        <PveAppearance rows={TIER_PVE_PHERUS_S3_APPEARANCE} />
        <p>
          <strong>Short reason:</strong> Brieg is on 87.7% of the panel’s
          most-used list, Tamarinne 67.2%, and Fenne 61.5%. All three top teams
          include Brieg and Tamarinne, which is the clearest shared core in this
          set of four panels.
        </p>

        <h3>4. Abyss Floor 91 — Hideout community clears</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://www.hideoutgacha.com/games/epic-seven/abyss#91-100-91-1">
            hideoutgacha.com/games/epic-seven/abyss#91-100-91-1
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>. Clear window:{' '}
          <strong>7 August–4 November 2026</strong>. Panel count:{' '}
          <strong>All 10 teams</strong>; the page-level total of 188 teams is not
          this floor’s count.
        </p>
        <PveTeamTable teams={TIER_PVE_ABYSS91_TEAMS} />
        <PveAppearance rows={TIER_PVE_ABYSS91_APPEARANCE} />
        <p>
          <strong>Short reason:</strong> Fenne (69.3%), Brieg (63.0%) and
          Tamarinne (56.7%) form the most-used core, and Fenne / Tamarinne /
          Brieg appears in all three top teams. Arbiter Vildred is the fourth
          most-used at 28.5% and is the top team’s fourth slot.
        </p>

        <h3>Lower-difficulty samples already cited — not expanded again</h3>
        <p>
          The earlier bounded samples remain valid but are no longer reprinted
          as five-row tables. Hideout’s <strong>Wyvern · Normal</strong> panel
          (same 29 October–4 November 2026 window) was led by Furious, Sigret,
          Brieg, Muwi at 3.69% of clears, with Free Spirit Tieria the most-used
          hero at 23.9%. Hideout’s <strong>Brutal Pherus · Stage 1</strong>{' '}
          panel (same window) was led by Arbiter Vildred, Vildred, Eligos,
          Lisette at 11.42%, with Brieg the most-used hero at 59.3%. These are
          lower-difficulty community samples; they are not merged with the
          Hell, Stage 3 or Floor 91 panels above.
        </p>

        <h3>epic7db PvE SS band — stale editorial band, still readable</h3>
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
          source’s class and element. The same source’s PvE board has{' '}
          <strong>16 names in its S band</strong>; along with its A (30), B (44)
          and C (37) rows, those are deliberately not copied.
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
          <strong>Why this is not a current grade:</strong> the last date the
          source shows is 28 August 2025. Use it to look up that source’s final
          SS band, not as a November 2026 ranking and not as a substitute for
          the high-difficulty samples above.
        </p>

        <h3>What this PvE section still does not cover</h3>
        <ul>
          <li>
            No other Hunts, bosses, Expedition stages or Abyss floors are
            expanded here. The four panels above are representative, not the
            whole PvE surface.
          </li>
          <li>
            No current, dated, all-mode PvE letter board for 2026-11 was found
            or copied. The epic7db SS band is explicitly stale, and its S/A/B/C
            rows are not republished.
          </li>
          <li>
            The page-level Hideout totals and the “Official … data” footer
            wording do not turn these community samples into a Smilegate roster.
          </li>
        </ul>
        <p>
          <strong>Verdict: bounded but usable.</strong> Four dated
          high-difficulty community samples plus the stale epic7db SS band are
          usable; a complete, current all-mode PvE table is still not completed.
        </p>
      </section>

      <section id="guild-war">
        <h2>
          Guild War — sourced lists and official phases, not a Foundry
          measurement, not a complete statistical board
        </h2>
        <p>
          <strong>Applies to:</strong> the live (non-Foundry) Guild War
          reference lists from E7GW and Epic7Tools, plus the official Foundry
          schedule. Foundry Guild War is not open, so none of these lists is a
          Foundry measurement, and this is not a complete Guild War letter
          board.
        </p>
        <p>
          <strong>Official phases (no clock time added where the source gives
          none):</strong>
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
          <strong>Role coverage, not a ranking:</strong> cover a tank, a
          cleanse/revive support, and a damage dealer usable on both offense and
          defense. Build order stays on{' '}
          <Link href="/steam-tier-list/#guild-war">
            the Steam build-priorities page
          </Link>
          . The four World Arena SS names below are <strong>not</strong> a Guild
          War roster; they are quoted only for the RTA mode.
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

        <h3>A. E7GW defenses — “Nov 10 top-50 report” only</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://e7gw.xyz/defenses">
            e7gw.xyz/defenses
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>. Visible
          sentence: <strong>“Stats from the Nov 10 top-50 report.”</strong> The
          page shows <strong>no year and no date range</strong>; this page does
          not add either.
        </p>
        <p>
          <strong>What the source measures:</strong> “Ranked by how often they
          appear. Gold bar = hold rate (higher means harder to break).”{' '}
          <strong>Hold rate</strong> is the source’s column name. The page does
          not define its formula or whose perspective the WINS / LOSSES columns
          use, so this page does not supply either.
        </p>
        <p>
          <strong>Boundary:</strong> this is a top-50 frequency/hold-rate
          report, not a complete statistical board. The same page says{' '}
          <strong>360 more defenses</strong> have solution data but{' '}
          <strong>“No popularity or hold-rate data”</strong>, and it shows{' '}
          <strong>410 defenses overall</strong>. No Global/Asia/server/region is
          stated. Footer: “Not affiliated with Smilegate.”
        </p>
        <GwStatTable
          rows={TIER_GW_E7GW_DEFENSES}
          lineupLabel="Lineup"
          rateLabel="Hold rate"
        />
        <p>
          The first three rows were cross-checked in an independent browser
          read; rows 4–5 come from the existing capture of the same public
          table. Not a Foundry measurement. Rhianna and Luciella appears as a
          hero (Dark Thief) in the third and fourth lineups, not as the
          same-name artifact.
        </p>

        <h3>B. E7GW attackers — no report date visible on this page</h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://e7gw.xyz/attackers">
            e7gw.xyz/attackers
          </ExternalLink>{' '}
          — read <time dateTime="2026-11-13">2026-11-13</time>.{' '}
          <strong>
            This page has no visible report date and no “Nov 10” label.
          </strong>{' '}
          It therefore cannot share the defenses table’s Nov 10 label or
          denominator. The figures below were checked on 2026-11-13; Lisette’s
          first row (40,834 battles / 96.84%) matches the cross-check.
        </p>
        <p>
          <strong>What the source measures:</strong> “Most Used Offense Heroes”;
          “Ranked by total battles fought on offense. Blue bar = win rate.”
          Visible columns: # / HERO / BATTLES / WINS / LOSSES / WIN RATE.
        </p>
        <p>
          <strong>Boundary:</strong> no Global/Asia/server/region is stated;
          footer: “Not affiliated with Smilegate.” Appearance, hold rate and
          attack win rate are different fields, not one strength scale.
        </p>
        <GwStatTable
          rows={TIER_GW_E7GW_ATTACKERS}
          lineupLabel="Hero"
          rateLabel="Win rate"
        />
        <p>
          These are the five most-used attackers by total offense battles in
          that source, with the source’s own win-rate column. The row order is
          not a letter grade, and this table is not a copy of the defense
          ranking.
        </p>

        <h3>
          C. Epic7Tools editorial — Updated 10 November 2026 (not observed
          frequency)
        </h3>
        <p>
          <strong>Source / checked:</strong>{' '}
          <ExternalLink href="https://epic7tools.dev/guides/guild-war-defense/">
            epic7tools.dev/guides/guild-war-defense/
          </ExternalLink>{' '}
          — visible <strong>“Updated 10 November 2026”</strong>; read{' '}
          <time dateTime="2026-11-13">2026-11-13</time>. This is an editorial
          guide, not a battles/hold-rate sample.
        </p>
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
            <thead>
              <tr>
                <th scope="col">Archetype</th>
                <th scope="col">Team</th>
                <th scope="col">Source reason</th>
              </tr>
            </thead>
            <tbody>
              {TIER_GW_EDITORIAL_TEAMS.map((row) => (
                <tr key={row.name}>
                  <td data-label="Archetype">
                    <strong>{row.name}</strong>
                  </td>
                  <td data-label="Team">{row.team}</td>
                  <td data-label="Source reason">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The guide adds: <strong>“Never two revival teams together”</strong> —
          an attack that stops revivals beats both. Its four pairing examples:
          Fixed Speed + Ferocious Stand; buffs wiped + resistance wall; block
          and silence + revivals; against burst + evasion and counters.
        </p>
        <p>
          The <strong>Fixed Speed</strong> row (Harsetti, Belian, Haru) was seen
          directly on the source page with the short reason quoted above. These
          eight teams are editorial archetypes, not an E7GW appearance ranking;
          some do not appear in E7GW’s Nov 10 top five.
        </p>

        <h3>D. Hideout Community Teams — empty for Guild War</h3>
        <p>
          The Hideout Community Teams Guild War category and the{' '}
          <code>mode=guild-war</code> team API were empty when re-read on
          2026-11-13 (0 posts;{' '}
          <code>{'{"posts":[],"total":0,"chars":{}}'}</code>), and Player Tier
          Lists said “No lists here yet.” That only negates this submission
          board; it does not negate the E7GW and Epic7Tools lists above. The one
          published community team was tagged Arena and is not treated as Guild
          War.
        </p>

        <h3>E. Verdict</h3>
        <p>
          <strong>Usable, but not complete.</strong> This page now has bounded
          statistical top-five rows from E7GW (defenses under the source’s Nov
          10 top-50 label; attackers with no visible report date), plus
          Epic7Tools’ editorial archetypes and the official Foundry phases. It
          is still not a complete Guild War letter table or a complete
          statistical board; the server/region is unstated and Foundry Guild War
          has not opened.
        </p>
      </section>

      <section id="world-arena">
        <h2>World Arena / RTA — bounded quote, not a full table</h2>
        <p>
          <strong>Applies to:</strong> Epic Helper’s{' '}
          <strong>November 2026 Champion+</strong> global-server RTA statistics
          only. This is not a Foundry World Arena measurement, and it is not a
          Guild War or PvE list. Foundry World Arena opens after the 12/10
          maintenance (official Steam wording: KST; no clock time is posted).
          Before then these names are not a Foundry WA measurement.
        </p>
        <p>
          <strong>Criteria (the source’s, not ours):</strong> Epic Helper says
          it ranks by real RTA win rate plus pick and ban. Its SS band means a
          hero was picked or banned in more than 35% of drafts, which the source
          describes as must-ban. It is a community/fan project, not Smilegate
          official.
        </p>
        <h3>How the source layers its board</h3>
        <p>
          <strong>The source’s own SS rule:</strong> “SS is every hero picked or
          banned in 35%+ of all drafts — the must-ban list.” That is the source
          intro’s wording and threshold, not a grade this site assigns.
        </p>
        <div className={styles.tableScroll}>
          <table className={`data ${styles.dataTable}`}>
            <thead>
              <tr>
                <th scope="col">Band</th>
                <th scope="col">Count in this snapshot</th>
                <th scope="col">Source rule</th>
              </tr>
            </thead>
            <tbody>
              {TIER_WA_BAND_COUNTS.map((row) => (
                <tr key={row.band}>
                  <td data-label="Band">
                    <strong>{row.band}</strong>
                  </td>
                  <td data-label="Count in this snapshot">{row.count}</td>
                  <td data-label="Source rule">{row.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The source intro gives no numeric threshold for <strong>S Meta</strong>{' '}
          or <strong>A Strong</strong>; this site does not invent one. The S and
          A labels below are the source’s, not replacement letter grades from
          this site.
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
        <h3>
          Bounded S Meta sample — highest source P/B in that band, not a copied
          S board
        </h3>
        <p>
          This sample takes the three heroes with the highest source P/B in the
          S Meta band. Tidal Rift Elvira and Belian both show 16% P/B; Belian’s
          57% win rate is lower than Elvira’s 58%, so both are listed rather
          than hiding the tie. The band has 10 names; this is a bounded excerpt,
          not a ranking of our own.
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
              {TIER_WA_S_SAMPLE.map((row) => (
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
          The remaining six S Meta names and every A/B name are not copied.
          These numbers are the source’s statistics, not this site’s
          recommendation, and not a Foundry measurement.
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
          <strong>Not included:</strong> the remaining six S Meta names, Epic
          Helper’s A and B bands, RankedMeta’s letter list, any “complete World
          Arena tier list” claim, and any Foundry WA grade.
        </p>
        <p>
          <strong>Verdict: partially deliverable.</strong> The source’s layering
          is explainable, and the bounded SS + S Meta samples are usable; a
          complete WA table and a Foundry measurement are still not completed.
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
          open slot; the <Link href="/banners/">banners page</Link> covers the
          live pickup.
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
