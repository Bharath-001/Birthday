const FLOATING_HEARTS = [
  { cx: 110, cy: 75, s: 1.4, delay: "0s" },
  { cx: 100, cy: 55, s: 0.9, delay: "0.3s" },
  { cx: 120, cy: 58, s: 1.0, delay: "0.6s" },
  { cx: 110, cy: 40, s: 0.7, delay: "0.9s" },
];

export default function BearsHeartsIllustration() {
  return (
    <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Left bear */}
      <g transform="translate(10 50)">
        <circle cx="15" cy="12" r="10" fill="#C8956C" />
        <circle cx="15" cy="12" r="5.5" fill="#F2C49B" />
        <circle cx="45" cy="12" r="10" fill="#C8956C" />
        <circle cx="45" cy="12" r="5.5" fill="#F2C49B" />
        <circle cx="30" cy="32" r="24" fill="#D4956A" />
        <ellipse cx="30" cy="38" rx="13" ry="9" fill="#F2C49B" />
        <path d="M20 27 Q23.5 23 27 27" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M33 27 Q36.5 23 40 27" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="30" cy="35" rx="3" ry="2" fill="#8B5E3C" />
        <path d="M23 39 Q30 46 37 39" stroke="#8B5E3C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="36" r="5.5" fill="#F9A8C4" opacity="0.5" />
        <circle cx="44" cy="36" r="5.5" fill="#F9A8C4" opacity="0.5" />
        <ellipse cx="30" cy="76" rx="24" ry="22" fill="#D4956A" />
        <ellipse cx="52" cy="52" rx="10" ry="6" fill="#C8956C" transform="rotate(-45 52 52)" />
      </g>

      {/* Right bear */}
      <g transform="translate(130 54)">
        <circle cx="15" cy="12" r="10" fill="#B07850" />
        <circle cx="15" cy="12" r="5.5" fill="#F2C49B" />
        <circle cx="45" cy="12" r="10" fill="#B07850" />
        <circle cx="45" cy="12" r="5.5" fill="#F2C49B" />
        <circle cx="30" cy="32" r="24" fill="#C4845A" />
        <ellipse cx="30" cy="38" rx="13" ry="9" fill="#F2C49B" />
        <path d="M20 27 Q23.5 23 27 27" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M33 27 Q36.5 23 40 27" stroke="#4A3B3B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="30" cy="35" rx="3" ry="2" fill="#7A4F2A" />
        <path d="M23 39 Q30 47 37 39" stroke="#7A4F2A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle cx="16" cy="36" r="5.5" fill="#F9A8C4" opacity="0.5" />
        <circle cx="44" cy="36" r="5.5" fill="#F9A8C4" opacity="0.5" />
        <path d="M22 10 Q30 6 38 10 Q30 14 22 10Z" fill="#E879A0" />
        <circle cx="30" cy="10" r="3" fill="#F9A8C4" />
        <ellipse cx="30" cy="76" rx="24" ry="22" fill="#C4845A" />
        <ellipse cx="8" cy="52" rx="10" ry="6" fill="#B07850" transform="rotate(45 8 52)" />
      </g>

      {FLOATING_HEARTS.map((h, i) => (
        <g key={i} transform={`translate(${h.cx - 10 * h.s}, ${h.cy - 9 * h.s}) scale(${h.s})`}>
          <path
            d="M10 16 C10 12 6 8 2 8 C-2 8 -4 11 -4 14 C-4 20 10 28 10 28 C10 28 24 20 24 14 C24 11 22 8 18 8 C14 8 10 12 10 16Z"
            fill="#E879A0"
            style={{ animationDelay: h.delay }}
            className="animate-heart-pop"
          />
        </g>
      ))}

      <text x="8" y="30" fontSize="16" opacity="0.6">🧸</text>
      <text x="185" y="35" fontSize="14" opacity="0.5">✨</text>
      <text x="100" y="185" fontSize="12" opacity="0.6">💕</text>
    </svg>
  );
}
