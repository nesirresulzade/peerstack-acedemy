"use client";

import React from 'react';

type AvatarProps = {
  src?: string | null;
  initials?: string;
  size?: number;
  alt?: string;
  className?: string;
};

export default function Avatar({ src = null, initials = 'AA', size = 40, alt = 'avatar', className = '' }: AvatarProps) {
  const s = size;
  const style: React.CSSProperties = {
    width: s,
    height: s,
    borderRadius: '9999px',
  };

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={s}
        height={s}
        style={style}
        className={`object-cover rounded-full ${className}`}
      />
    );
  }

  return (
    <span
      data-slot="avatar-fallback"
      style={style}
      className={`flex size-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold ${className}`}
    >
      <span style={{ fontSize: 16, lineHeight: 1 }}>{initials}</span>
    </span>
  );
}