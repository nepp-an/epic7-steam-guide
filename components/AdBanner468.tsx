const AD_KEY = '2f2b23287458fafe6c5ad067db996e93';
const AD_SRC = `https://bauval.org/22/${AD_KEY}`;

/**
 * Adsterra 468x60 unit.
 *
 * Render this once per page, after the first useful answer block. The
 * atOptions assignment must run before the loader; the unit keeps its
 * 468x60 size inside a bounded viewport so narrow screens never get page
 * horizontal overflow or overlap with body copy.
 */
export function AdBanner468({ label = 'Advertisement' }: { label?: string }) {
  return (
    <aside className="ad-468" aria-label={label}>
      <span className="ad-468-label">{label}</span>
      <div className="ad-468-viewport">
        <div className="ad-468-unit">
          <script
            dangerouslySetInnerHTML={{
              __html: `atOptions = {'key':'${AD_KEY}','format':'iframe','height':60,'width':468,'params':{}};`,
            }}
          />
          <script src={AD_SRC} />
        </div>
      </div>
    </aside>
  );
}
