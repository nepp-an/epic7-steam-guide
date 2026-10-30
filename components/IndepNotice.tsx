export function IndepNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="indep-notice" role="note">
      <strong>Independent guide.</strong>{' '}
      {compact ? (
        <>
          Not affiliated with Smilegate, STOVE, or Steam. Always verify steps
          and dates on official STOVE / Steam pages.
        </>
      ) : (
        <>
          This site is an unofficial player guide for Epic Seven on Steam. It is{' '}
          <strong>not</strong> the official Smilegate, STOVE, or Steam website.
          We do not sell codes, accounts, or in-game currency. For account
          actions, downloads, and event dates, use the official Steam store and
          STOVE announcements linked on each page.
        </>
      )}
    </aside>
  );
}
