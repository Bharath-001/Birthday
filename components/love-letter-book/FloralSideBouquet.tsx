interface FloralSideBouquetProps {
  style?: React.CSSProperties;
}

export default function FloralSideBouquet({ style }: FloralSideBouquetProps) {
  return (
    <svg viewBox="0 0 56 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 220, ...style }}>
      <path
        d="M28 215 Q26 175 30 140 Q32 110 27 80 Q25 55 29 20 Q30 10 28 2"
        stroke="#8B6B4A"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M28 150 Q18 142 7 140" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M29 110 Q39 102 49 100" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M28 72 Q16 65 6 66" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M28 40 Q38 34 48 36" stroke="#8B6B4A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />

      <ellipse cx="17" cy="144" rx="9" ry="4" fill="#7DAA6A" opacity="0.6" transform="rotate(18 17 144)" />
      <ellipse cx="41" cy="102" rx="9" ry="4" fill="#8DB87A" opacity="0.55" transform="rotate(-18 41 102)" />
      <ellipse cx="15" cy="68" rx="8" ry="3.8" fill="#7DAA6A" opacity="0.55" transform="rotate(15 15 68)" />
      <ellipse cx="40" cy="38" rx="8" ry="3.5" fill="#8DB87A" opacity="0.5" transform="rotate(-22 40 38)" />
      <ellipse cx="26" cy="185" rx="7" ry="3" fill="#7DAA6A" opacity="0.4" transform="rotate(35 26 185)" />
      <ellipse cx="30" cy="125" rx="7" ry="3" fill="#8DB87A" opacity="0.45" transform="rotate(-15 30 125)" />

      {/* Top main flower — full pink rose */}
      <circle cx="28" cy="2" r="11" fill="#F9C4D4" opacity="0.9" />
      <ellipse cx="17" cy="-2" rx="7" ry="4" fill="#FDDDE6" opacity="0.85" transform="rotate(-40 17 -2)" />
      <ellipse cx="39" cy="-2" rx="7" ry="4" fill="#FDDDE6" opacity="0.85" transform="rotate(40 39 -2)" />
      <ellipse cx="17" cy="8" rx="7" ry="4" fill="#FDDDE6" opacity="0.8" transform="rotate(40 17 8)" />
      <ellipse cx="39" cy="8" rx="7" ry="4" fill="#FDDDE6" opacity="0.8" transform="rotate(-40 39 8)" />
      <ellipse cx="28" cy="-4" rx="6.5" ry="3.5" fill="#FDDDE6" opacity="0.85" />
      <ellipse cx="28" cy="10" rx="6.5" ry="3.5" fill="#FDDDE6" opacity="0.8" />
      <circle cx="28" cy="2" r="7" fill="#F9A8C4" opacity="0.9" />
      <circle cx="28" cy="2" r="4" fill="#E879A0" opacity="0.85" />
      <circle cx="26" cy="0.5" r="1.5" fill="white" opacity="0.5" />

      {/* Left branch flower — yellow */}
      <circle cx="7" cy="140" r="7.5" fill="#FFF8C0" opacity="0.9" />
      <ellipse cx="1" cy="135" rx="5" ry="2.8" fill="#FFFACD" opacity="0.8" transform="rotate(-40 1 135)" />
      <ellipse cx="13" cy="135" rx="5" ry="2.8" fill="#FFFACD" opacity="0.8" transform="rotate(40 13 135)" />
      <ellipse cx="1" cy="145" rx="5" ry="2.8" fill="#FFFACD" opacity="0.75" transform="rotate(40 1 145)" />
      <ellipse cx="13" cy="145" rx="5" ry="2.8" fill="#FFFACD" opacity="0.75" transform="rotate(-40 13 145)" />
      <ellipse cx="7" cy="133" rx="4.5" ry="2.4" fill="#FFFACD" opacity="0.8" />
      <ellipse cx="7" cy="147" rx="4.5" ry="2.4" fill="#FFFACD" opacity="0.75" />
      <circle cx="7" cy="140" r="4.5" fill="#FFD700" opacity="0.85" />
      <circle cx="7" cy="140" r="2.2" fill="#FFA500" opacity="0.75" />

      {/* Right branch flower — pink small */}
      <circle cx="49" cy="100" r="6.5" fill="#F9C4D4" opacity="0.85" />
      <ellipse cx="43" cy="95" rx="4.5" ry="2.5" fill="#FDDDE6" opacity="0.8" transform="rotate(-45 43 95)" />
      <ellipse cx="55" cy="95" rx="4.5" ry="2.5" fill="#FDDDE6" opacity="0.8" transform="rotate(45 55 95)" />
      <ellipse cx="43" cy="105" rx="4.5" ry="2.5" fill="#FDDDE6" opacity="0.75" transform="rotate(45 43 105)" />
      <ellipse cx="55" cy="105" rx="4.5" ry="2.5" fill="#FDDDE6" opacity="0.75" transform="rotate(-45 55 105)" />
      <circle cx="49" cy="100" r="4" fill="#F9A8C4" opacity="0.85" />
      <circle cx="49" cy="100" r="2" fill="#E879A0" opacity="0.8" />

      {/* Left branch 2 flower — lavender */}
      <circle cx="6" cy="66" r="6" fill="#DDA8D4" opacity="0.8" />
      <ellipse cx="1" cy="61" rx="4" ry="2.2" fill="#EDD0E8" opacity="0.75" transform="rotate(-45 1 61)" />
      <ellipse cx="11" cy="61" rx="4" ry="2.2" fill="#EDD0E8" opacity="0.75" transform="rotate(45 11 61)" />
      <ellipse cx="1" cy="71" rx="4" ry="2.2" fill="#EDD0E8" opacity="0.7" transform="rotate(45 1 71)" />
      <ellipse cx="11" cy="71" rx="4" ry="2.2" fill="#EDD0E8" opacity="0.7" transform="rotate(-45 11 71)" />
      <circle cx="6" cy="66" r="3.5" fill="#C78DBD" opacity="0.8" />
      <circle cx="6" cy="66" r="1.8" fill="#A569AD" opacity="0.7" />

      {/* Right branch 2 — bud */}
      <ellipse cx="48" cy="36" rx="4" ry="6" fill="#F9C4D4" opacity="0.75" />
      <ellipse cx="48" cy="30" rx="3" ry="4" fill="#FDDDE6" opacity="0.7" />
      <ellipse cx="48" cy="36" rx="3.5" ry="2" fill="#E879A0" opacity="0.55" />

      {/* Berries */}
      <circle cx="24" cy="24" r="3" fill="#C0392B" opacity="0.45" />
      <circle cx="30" cy="21" r="2.5" fill="#C0392B" opacity="0.4" />
      <circle cx="22" cy="20" r="2" fill="#E74C3C" opacity="0.35" />
      <circle cx="26" cy="55" r="2" fill="#C0392B" opacity="0.35" />
      <circle cx="30" cy="52" r="1.5" fill="#C0392B" opacity="0.3" />
    </svg>
  );
}
