type Trio = [string, string, string];
type Pair = [string, string];

function Caption({ note }: { note: string }) {
  return <p className="diagram-note">{note}</p>;
}

export function CaseGlyph({ index, className }: { index: 0 | 1 | 2; className?: string }) {
  const title = ['Time and location', 'Disc and arrival order', 'Closed case box'][index];
  return (
    <svg className={className} viewBox="0 0 80 80" width="72" height="72" aria-hidden="true">
      <title>{title}</title>
      {index === 0 && (
        <>
          <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <path d="M32 21v12l8 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M48 50h20v16H20v-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M20 62V46h12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <circle cx="58" cy="42" r="3.2" fill="currentColor" />
        </>
      )}
      {index === 1 && (
        <>
          <circle cx="34" cy="38" r="16" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="34" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M50 30l16-6v36l-16-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <circle cx="18" cy="16" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="18" y="19.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">1</text>
          <circle cx="32" cy="14" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="32" y="17.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">2</text>
          <circle cx="46" cy="16" r="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="46" y="19.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">3</text>
        </>
      )}
      {index === 2 && (
        <>
          <rect x="16" y="28" width="48" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <path d="M16 38h48" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="52" cy="50" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M28 28v-8h24v8" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <ellipse cx="28" cy="52" rx="7" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M62 18h8v10l-4 3-4-3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export function EntryDiagram({ title, steps, note }: { title: string; steps: Trio; note: string }) {
  return (
    <figure className="case-diagram case-diagram-enter">
      <h3 className="diagram-title">{title}</h3>
      <ol className="enter-path">
        {steps.map((label, i) => (
          <li key={label}>
            <span className="enter-icon" aria-hidden="true">
              {i === 0 && (
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <rect x="8" y="14" width="32" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M8 20h32M18 14V8h12v6" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="30" cy="30" r="1.8" fill="currentColor" />
                </svg>
              )}
              {i === 1 && (
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <ellipse cx="24" cy="26" rx="12" ry="10" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M16 18c0-6 4-10 8-10s8 4 8 10" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="24" cy="26" r="3" fill="currentColor" />
                </svg>
              )}
              {i === 2 && (
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <path d="M10 16h20l4 6h6v20H10V16z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                  <path d="M16 28h16" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              )}
            </span>
            <span className="enter-label">{label}</span>
          </li>
        ))}
      </ol>
      <Caption note={note} />
    </figure>
  );
}

export function BoardDiagram({ title, steps, note }: { title: string; steps: [Pair, Pair, Pair, Pair]; note: string }) {
  return (
    <figure className="case-diagram case-diagram-board">
      <h3 className="diagram-title">{title}</h3>
      <ol className="board-path">
        {steps.map(([name, detail], i) => (
          <li key={name}>
            <span className="board-mark" aria-hidden="true">
              {i === 0 && (
                <svg viewBox="0 0 72 40" width="72" height="40">
                  {Array.from({ length: 10 }, (_, n) => (
                    <circle key={n} cx={7 + (n % 5) * 14} cy={n < 5 ? 10 : 28} r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  ))}
                </svg>
              )}
              {i === 1 && (
                <svg viewBox="0 0 72 40" width="72" height="40">
                  <g fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="4" width="30" height="32" rx="2" />
                    <path d="M12 4v32M22 4v32M2 14h30M2 24h30" />
                    <rect x="40" y="4" width="30" height="32" rx="2" />
                    <path d="M50 4v32M60 4v32M40 14h30M40 24h30" />
                  </g>
                </svg>
              )}
              {i === 2 && (
                <svg viewBox="0 0 48 40" width="48" height="40">
                  <rect x="10" y="12" width="28" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 12V8a6 6 0 0 1 12 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 24l3.5 3.5L30 21" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              )}
              {i === 3 && (
                <svg viewBox="0 0 64 28" width="64" height="28">
                  <rect x="1" y="2" width="62" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                </svg>
              )}
            </span>
            <strong>{name}</strong>
            <span>{detail}</span>
          </li>
        ))}
      </ol>
      <Caption note={note} />
    </figure>
  );
}

export function TroubleDiagram({ title, items, note }: { title: string; items: [Pair, Pair, Pair]; note: string }) {
  return (
    <figure className="case-diagram case-diagram-trouble">
      <h3 className="diagram-title">{title}</h3>
      <ul className="trouble-path">
        {items.map(([name, detail], i) => (
          <li key={name}>
            <span className="trouble-icon" aria-hidden="true">
              {i === 0 && (
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M27 27l12 12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              )}
              {i === 1 && (
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <rect x="10" y="18" width="28" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M18 18v-5a6 6 0 0 1 12 0v5" fill="none" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="24" cy="28" r="2" fill="currentColor" />
                </svg>
              )}
              {i === 2 && (
                <svg viewBox="0 0 72 28" width="72" height="28">
                  <rect x="1" y="3" width="70" height="22" rx="5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
                </svg>
              )}
            </span>
            <strong>{name}</strong>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <Caption note={note} />
    </figure>
  );
}
