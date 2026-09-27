export default function BearsCakeIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Cake base */}
      <rect x="75" y="130" width="70" height="44" rx="8" fill="#FDDDE6" />
      <rect x="75" y="130" width="70" height="20" rx="8" fill="#F9A8C4" />
      <rect x="75" y="144" width="70" height="12" fill="#F9A8C4" />
      {/* Cake layer 2 */}
      <rect x="83" y="110" width="54" height="24" rx="7" fill="#FDDDE6" />
      <rect x="83" y="110" width="54" height="12" rx="7" fill="#F9C4D4" />
      {/* Candle */}
      <rect x="106" y="92" width="8" height="20" rx="4" fill="#fff" stroke="#F9A8C4" strokeWidth="1.5" />
      {/* Flame */}
      <ellipse cx="110" cy="88" rx="4" ry="6" fill="#FFB347" className="animate-flame-dance" />
      <ellipse cx="110" cy="90" rx="2" ry="3" fill="#FFE066" />
      {/* Decorations */}
      <circle cx="90" cy="138" r="3" fill="#E879A0" />
      <circle cx="105" cy="135" r="3" fill="#E879A0" />
      <circle cx="120" cy="138" r="3" fill="#E879A0" />
      <circle cx="135" cy="135" r="2.5" fill="#E879A0" />

      {/* Left bear */}
      <g transform="translate(24 80)">
        <circle cx="15" cy="12" r="9" fill="#C8956C" />
        <circle cx="15" cy="12" r="5" fill="#F2C49B" />
        <circle cx="45" cy="12" r="9" fill="#C8956C" />
        <circle cx="45" cy="12" r="5" fill="#F2C49B" />
        <circle cx="30" cy="30" r="22" fill="#D4956A" />
        <ellipse cx="30" cy="36" rx="12" ry="8" fill="#F2C49B" />
        <circle cx="22" cy="26" r="3.5" fill="#4A3B3B" />
        <circle cx="38" cy="26" r="3.5" fill="#4A3B3B" />
        <circle cx="23.5" cy="24.5" r="1" fill="white" />
        <circle cx="39.5" cy="24.5" r="1" fill="white" />
        <ellipse cx="30" cy="33" rx="3" ry="2" fill="#8B5E3C" />
        <path d="M24 37 Q30 43 36 37" stroke="#8B5E3C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="17" cy="34" r="5" fill="#F9A8C4" opacity="0.5" />
        <circle cx="43" cy="34" r="5" fill="#F9A8C4" opacity="0.5" />
        <ellipse cx="30" cy="72" rx="22" ry="20" fill="#D4956A" />
        <ellipse cx="54" cy="65" rx="9" ry="5" fill="#C8956C" transform="rotate(-30 54 65)" />
        <rect x="62" y="56" width="3" height="18" rx="1.5" fill="#DDD" transform="rotate(15 62 56)" />
        <rect x="64" y="60" width="2" height="10" rx="1" fill="#aaa" transform="rotate(15 64 60)" />
      </g>

      {/* Right bear */}
      <g transform="translate(136 84)">
        <circle cx="15" cy="12" r="9" fill="#B07850" />
        <circle cx="15" cy="12" r="5" fill="#F2C49B" />
        <circle cx="45" cy="12" r="9" fill="#B07850" />
        <circle cx="45" cy="12" r="5" fill="#F2C49B" />
        <circle cx="30" cy="30" r="22" fill="#C4845A" />
        <ellipse cx="30" cy="36" rx="12" ry="8" fill="#F2C49B" />
        <path d="M19 26 Q22.5 22 26 26" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M34 26 Q37.5 22 41 26" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="30" cy="33" rx="3" ry="2" fill="#7A4F2A" />
        <path d="M22 37 Q30 46 38 37" stroke="#7A4F2A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="17" cy="34" r="5" fill="#F9A8C4" opacity="0.5" />
        <circle cx="43" cy="34" r="5" fill="#F9A8C4" opacity="0.5" />
        <path d="M22 10 Q30 6 38 10 Q30 14 22 10Z" fill="#E879A0" />
        <circle cx="30" cy="10" r="3" fill="#F9A8C4" />
        <ellipse cx="30" cy="72" rx="22" ry="20" fill="#C4845A" />
        <ellipse cx="6" cy="65" rx="9" ry="5" fill="#B07850" transform="rotate(30 6 65)" />
        <ellipse cx="-4" cy="62" rx="8" ry="4" fill="#fff" stroke="#F9A8C4" strokeWidth="1" />
        <text x="-10" y="62" fontSize="10">🍓</text>
      </g>

      <text x="5" y="30" fontSize="16" opacity="0.7">⭐</text>
      <text x="190" y="40" fontSize="14" opacity="0.6">✨</text>
      <text x="10" y="170" fontSize="12" opacity="0.5">💕</text>
      <text x="195" y="165" fontSize="12" opacity="0.6">🌸</text>
    </svg>
  );
}
