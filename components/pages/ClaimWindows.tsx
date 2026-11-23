import { ExternalLink } from '@/components/ExternalLink';
import { LocaleLink as L } from '@/components/LocaleLink';
import { CLAIM_WINDOWS } from '@/lib/i18n/claimWindows';
import { type GrowthLocale } from '@/lib/i18n/growth';
import { OFFICIAL } from '@/lib/site';

export function ClaimWindows({ locale }: { locale: GrowthLocale }) {
  const c = CLAIM_WINDOWS[locale];
  return (
    <section id="claim-windows" aria-labelledby="claim-windows-title">
      <h2 id="claim-windows-title">{c.sectionTitle}</h2>
      <p className="quick-answer">{c.intro}</p>
      <p className="muted">{c.verified}</p>
      <h3>{c.windowTitle}</h3>
      <div className="event-route-table">
        <table className="data">
          <thead>
            <tr>
              <th>{c.windowTh[0]}</th>
              <th>{c.windowTh[1]}</th>
              <th className="num">{c.windowTh[2]}</th>
              <th className="num">{c.windowTh[3]}</th>
            </tr>
          </thead>
          <tbody>
            {c.windows.map(([gift, how, deadline, status]) => (
              <tr key={gift}>
                <td>{gift}</td>
                <td>{how}</td>
                <td className="num">{deadline}</td>
                <td className="num">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>{c.mailTitle}</h3>
      <p className="muted">{c.mailNote}</p>
      <div className="event-route-table">
        <table className="data">
          <thead>
            <tr>
              <th>{c.mailTh[0]}</th>
              <th className="num">{c.mailTh[1]}</th>
            </tr>
          </thead>
          <tbody>
            {c.mailRows.map(([item, qty]) => (
              <tr key={item}>
                <td>{item}</td>
                <td className="num">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>{c.wishlistTitle}</h3>
      <p className="muted">{c.wishlistNote}</p>
      <div className="event-route-table">
        <table className="data">
          <thead>
            <tr>
              <th>{c.wishlistTh[0]}</th>
              <th className="num">{c.wishlistTh[1]}</th>
            </tr>
          </thead>
          <tbody>
            {c.wishlistRows.map(([item, qty]) => (
              <tr key={item}>
                <td>{item}</td>
                <td className="num">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>{c.stuckLabel}</h3>
      <p>{c.stuckBody}</p>
      <p className="sources">
        <ExternalLink href={OFFICIAL.stoveFoundry}>
          {c.sourceLabel}: {c.mailOfficialLabel}
        </ExternalLink>
        {' · '}
        <ExternalLink href={OFFICIAL.stoveWishlist100k}>
          {c.sourceLabel}: {c.wishlistOfficialLabel}
        </ExternalLink>
      </p>
    </section>
  );
}

export function FoundryClaimWindowsNote({ locale }: { locale: GrowthLocale }) {
  const c = CLAIM_WINDOWS[locale];
  return (
    <p className="schedule-note">
      {c.foundryLead}{' '}
      <L locale={locale} href="/quests/#claim-windows">
        {c.foundryLinkLabel}
      </L>
      .
    </p>
  );
}
