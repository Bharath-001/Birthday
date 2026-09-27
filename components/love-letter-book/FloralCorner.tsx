interface FloralCornerProps {
  style?: React.CSSProperties;
  mirror?: boolean;
  flipY?: boolean;
  size?: number;
}

export default function FloralCorner({ style, mirror = false, flipY = false, size = 100 }: FloralCornerProps) {
  const transform = [mirror ? "scaleX(-1)" : "", flipY ? "scaleY(-1)" : ""].filter(Boolean).join(" ");
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, transform: transform || undefined, ...style }}
    >
      {/* Main curved vine */}
      <path d="M6 114 Q18 72 52 42 Q78 18 114 6" stroke="#8B6B4A" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M28 90 Q22 78 28 66" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M54 58 Q62 50 72 52" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* Leaves */}
      <ellipse cx="22" cy="94" rx="11" ry="5" fill="#7DAA6A" opacity="0.55" transform="rotate(-42 22 94)" />
      <ellipse cx="40" cy="72" rx="10" ry="4.5" fill="#8DB87A" opacity="0.5" transform="rotate(-58 40 72)" />
      <ellipse cx="62" cy="50" rx="9" ry="4" fill="#7DAA6A" opacity="0.5" transform="rotate(-68 62 50)" />
      <ellipse cx="84" cy="30" rx="8" ry="3.5" fill="#8DB87A" opacity="0.45" transform="rotate(-75 84 30)" />
      <ellipse cx="96" cy="18" rx="7" ry="3" fill="#7DAA6A" opacity="0.4" transform="rotate(-80 96 18)" />
      <ellipse cx="30" cy="68" rx="7" ry="3" fill="#6B9A5A" opacity="0.4" transform="rotate(30 30 68)" />
      <ellipse cx="70" cy="50" rx="6" ry="2.8" fill="#7DAA6A" opacity="0.35" transform="rotate(-30 70 50)" />

      {/* Main flower — pink rose */}
      <circle cx="8" cy="112" r="9" fill="#F9C4D4" opacity="0.9" />
      <ellipse cx="2" cy="106" rx="6" ry="3.5" fill="#FDDDE6" opacity="0.8" transform="rotate(-45 2 106)" />
      <ellipse cx="14" cy="106" rx="6" ry="3.5" fill="#FDDDE6" opacity="0.8" transform="rotate(45 14 106)" />
      <ellipse cx="2" cy="118" rx="6" ry="3.5" fill="#FDDDE6" opacity="0.75" transform="rotate(45 2 118)" />
      <ellipse cx="14" cy="118" rx="6" ry="3.5" fill="#FDDDE6" opacity="0.75" transform="rotate(-45 14 118)" />
      <ellipse cx="8" cy="103" rx="5.5" ry="3" fill="#FDDDE6" opacity="0.8" />
      <ellipse cx="8" cy="121" rx="5.5" ry="3" fill="#FDDDE6" opacity="0.75" />
      <circle cx="8" cy="112" r="5.5" fill="#F9A8C4" opacity="0.9" />
      <circle cx="8" cy="112" r="3" fill="#E879A0" opacity="0.85" />
      <circle cx="6.5" cy="110.5" r="1" fill="white" opacity="0.6" />

      {/* Mid flower — yellow daisy */}
      <circle cx="56" cy="22" r="7" fill="#FFF8C0" opacity="0.9" />
      <ellipse cx="50" cy="17" rx="4.5" ry="2.5" fill="#FFFACD" opacity="0.8" transform="rotate(-45 50 17)" />
      <ellipse cx="62" cy="17" rx="4.5" ry="2.5" fill="#FFFACD" opacity="0.8" transform="rotate(45 62 17)" />
      <ellipse cx="50" cy="27" rx="4.5" ry="2.5" fill="#FFFACD" opacity="0.75" transform="rotate(45 50 27)" />
      <ellipse cx="62" cy="27" rx="4.5" ry="2.5" fill="#FFFACD" opacity="0.75" transform="rotate(-45 62 27)" />
      <ellipse cx="56" cy="15" rx="4" ry="2.2" fill="#FFFACD" opacity="0.8" />
      <ellipse cx="56" cy="29" rx="4" ry="2.2" fill="#FFFACD" opacity="0.75" />
      <circle cx="56" cy="22" r="4" fill="#FFD700" opacity="0.85" />
      <circle cx="56" cy="22" r="2" fill="#FFA500" opacity="0.7" />

      {/* Small top-right flower — pink */}
      <circle cx="108" cy="8" r="6" fill="#F9C4D4" opacity="0.85" />
      <ellipse cx="103" cy="4" rx="4" ry="2.2" fill="#FDDDE6" opacity="0.75" transform="rotate(-45 103 4)" />
      <ellipse cx="113" cy="4" rx="4" ry="2.2" fill="#FDDDE6" opacity="0.75" transform="rotate(45 113 4)" />
      <ellipse cx="103" cy="12" rx="4" ry="2.2" fill="#FDDDE6" opacity="0.7" transform="rotate(45 103 12)" />
      <ellipse cx="113" cy="12" rx="4" ry="2.2" fill="#FDDDE6" opacity="0.7" transform="rotate(-45 113 12)" />
      <circle cx="108" cy="8" r="3.5" fill="#F9A8C4" opacity="0.85" />
      <circle cx="108" cy="8" r="1.8" fill="#E879A0" opacity="0.75" />

      {/* Tiny berries */}
      <circle cx="34" cy="82" r="2.5" fill="#C0392B" opacity="0.45" />
      <circle cx="38" cy="79" r="2" fill="#C0392B" opacity="0.4" />
      <circle cx="31" cy="79" r="1.8" fill="#E74C3C" opacity="0.35" />
      <circle cx="78" cy="40" r="2" fill="#C0392B" opacity="0.35" />
      <circle cx="75" cy="43" r="1.5" fill="#C0392B" opacity="0.3" />

      {/* Tiny floating dots */}
      <circle cx="44" cy="60" r="1.5" fill="#E879A0" opacity="0.3" />
      <circle cx="70" cy="34" r="1.2" fill="#FFB347" opacity="0.35" />
      <circle cx="18" cy="98" r="1.2" fill="#E879A0" opacity="0.3" />
    </svg>
  );
}
