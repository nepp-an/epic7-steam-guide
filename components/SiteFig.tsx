/** Shared site-fig markup used by the tool pages. Same classes as renderers.tsx. */

export function SiteFig({
  src,
  alt,
  credit,
  width,
  height,
}: {
  src: string;
  alt: string;
  credit?: string;
  width: number;
  height: number;
}) {
  const isDiagram = src.includes('/diagram-');
  return (
    <figure className={`site-fig ${isDiagram ? 'site-fig--diagram' : 'site-fig--photo'}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      {credit ? <figcaption className="muted">{credit}</figcaption> : null}
    </figure>
  );
}
