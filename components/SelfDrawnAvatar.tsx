'use client';

import { useState } from 'react';
import {
  avatarAlt,
  avatarLetters,
  avatarSrc,
  avatarTint,
  type AvatarTint,
} from '@/lib/hero-avatars';

export function SelfDrawnAvatar({
  slug,
  name,
  className,
  size,
  tint,
}: {
  slug: string;
  name: string;
  className?: string;
  size: number;
  tint?: AvatarTint;
}) {
  const [failed, setFailed] = useState(false);
  const resolved = tint ?? avatarTint(slug);
  const letters = avatarLetters(slug, name);
  const alt = avatarAlt(name, resolved);
  if (failed) {
    return (
      <span
        className={`avatar-fallback ${className ?? ''}`.trim()}
        style={{ width: size, height: size }}
        title={alt}
        aria-hidden="true"
      >
        {letters}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={avatarSrc(slug)}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
