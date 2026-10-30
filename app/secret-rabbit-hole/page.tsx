import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Secret Rabbit♥Hole side story & events',
  description:
    'Independent overview of Epic Seven Secret Rabbit♥Hole: six-week side story, Alencia Case Files, Lucky Board, lobby pack. Cite STOVE.',
};

export default function SecretRabbitHolePage() {
  return (
    <>
      <h1>Secret Rabbit♥Hole</h1>
      <IndepNotice compact />
      <p>
        Special side story running alongside the Steam / Foundry launch window.
        Enter from lobby via the <strong>Secret Rabbit♥Hole</strong> icon.
        Summaries below cite STOVE posts — schedules can change in-game.
      </p>

      <h2>At a glance</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Piece</th>
            <th>Window (as posted)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Side story Secret Rabbit♥Hole</td>
            <td>~6 weeks from 2026-10-29</td>
            <td>Lobby icon → event hub</td>
          </tr>
          <tr>
            <td>Trusty Sidekick Alencia&apos;s Case Files</td>
            <td>Same six-week window</td>
            <td>3 cases unlock in sequence</td>
          </tr>
          <tr>
            <td>Great Detective Daily Investigation &amp; Lucky Board</td>
            <td>10/29 after maint → 11/19 02:59 UTC</td>
            <td>Daily points → tickets / Leif</td>
          </tr>
          <tr>
            <td>Bunny Girl Party Hall Lobby Pack</td>
            <td>10/29 after maint → 12/10 02:59 UTC</td>
            <td>Optional Skystone pack (shop)</td>
          </tr>
        </tbody>
      </table>

      <h2>Case Files — how it plays</h2>
      <div className="card">
        <ol>
          <li>Open Case Files from the Secret Rabbit♥Hole event page.</li>
          <li>
            Collect clues by spending Trusty Sidekick&apos;s Magnifying Glasses
            (daily achievement supply; late-event Energy top-ups possible).
          </li>
          <li>Fill the case grid (O/X) using clue list; unlock Culprit Clue.</li>
          <li>Accuse when the grid matches — success or failure outcome.</li>
        </ol>
        <p className="muted">
          Paraphrased from{' '}
          <ExternalLink href={OFFICIAL.stoveSecretRabbitCase}>
            STOVE — Alencia Case Files
          </ExternalLink>
          . Not a spoiler guide for culprit answers.
        </p>
      </div>

      <h2>Daily Investigation &amp; Lucky Board</h2>
      <p>
        Play adventure / battle / Arena content for daily points (cap called out
        as 720/day on STOVE). Milestone rewards include Lucky Board draw tickets
        and Leif. Path: Lobby → Event → Special Event → Secret Rabbit♥Hole.
      </p>
      <p>
        Source:{' '}
        <ExternalLink href={OFFICIAL.stoveLuckyBoard}>
          STOVE — Daily Investigation &amp; Lucky Board
        </ExternalLink>
        .
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/foundry/">Foundry calendar through 12/31</Link>
        </li>
        <li>
          <Link href="/banners/">Banners / new heroes</Link>
        </li>
        <li>
          <Link href="/updates/">Updates log</Link>
        </li>
      </ul>
    </>
  );
}
