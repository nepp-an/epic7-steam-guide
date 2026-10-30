type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      className={className}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
