"use client";

import { useId } from "react";

interface BalloonSVGProps {
  color: string;
  darker: string;
}

export default function BalloonSVG({ color, darker }: BalloonSVGProps) {
  const id = useId();
  const gradientId = `balloon-body-${id}`;
  const shineId = `balloon-shine-${id}`;

  return (
    <svg viewBox="0 0 80 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-28 w-20">
      <defs>
        <radialGradient id={gradientId} cx="34%" cy="30%" r="75%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="35%" stopColor={color} />
          <stop offset="100%" stopColor={darker} />
        </radialGradient>
        <radialGradient id={shineId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Balloon body */}
      <ellipse cx="40" cy="44" rx="32" ry="38" fill={`url(#${gradientId})`} />
      <ellipse cx="40" cy="44" rx="32" ry="38" fill="none" stroke={darker} strokeWidth="0.75" opacity="0.35" />

      {/* Glossy highlights */}
      <ellipse cx="27" cy="26" rx="10" ry="14" fill={`url(#${shineId})`} opacity="0.8" transform="rotate(-18 27 26)" />
      <ellipse cx="49" cy="20" rx="3.5" ry="5" fill="white" opacity="0.55" />

      {/* Tied knot */}
      <path d="M35 79 L40 87 L45 79Z" fill={darker} />
      <ellipse cx="40" cy="80" rx="4.5" ry="3" fill={darker} />

      {/* String */}
      <path d="M40 87 Q36 97 40 104 Q44 100 41 112" stroke={darker} strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.75" />
    </svg>
  );
}
