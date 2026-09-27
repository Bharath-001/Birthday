interface RoseProps {
  cx: number;
  cy: number;
  r: number;
}

function Rose({ cx, cy, r }: RoseProps) {
  const s = r / 26;
  return (
    <g transform={`translate(${cx - 26 * s}, ${cy - 26 * s}) scale(${s})`}>
      <circle cx="26" cy="26" r="22" fill="#C0392B" opacity="0.2" />
      <ellipse cx="26" cy="10" rx="9" ry="12" fill="#C0392B" opacity="0.7" />
      <ellipse cx="42" cy="18" rx="9" ry="12" fill="#C0392B" opacity="0.7" transform="rotate(60 42 18)" />
      <ellipse cx="42" cy="38" rx="9" ry="12" fill="#C0392B" opacity="0.7" transform="rotate(120 42 38)" />
      <ellipse cx="26" cy="44" rx="9" ry="12" fill="#C0392B" opacity="0.7" transform="rotate(180 26 44)" />
      <ellipse cx="10" cy="38" rx="9" ry="12" fill="#C0392B" opacity="0.7" transform="rotate(240 10 38)" />
      <ellipse cx="10" cy="18" rx="9" ry="12" fill="#C0392B" opacity="0.7" transform="rotate(300 10 18)" />
      <ellipse cx="26" cy="16" rx="7" ry="9" fill="#E53935" opacity="0.9" />
      <ellipse cx="37" cy="22" rx="7" ry="9" fill="#E53935" opacity="0.9" transform="rotate(60 37 22)" />
      <ellipse cx="37" cy="34" rx="7" ry="9" fill="#E53935" opacity="0.9" transform="rotate(120 37 34)" />
      <ellipse cx="26" cy="38" rx="7" ry="9" fill="#E53935" opacity="0.9" transform="rotate(180 26 38)" />
      <ellipse cx="15" cy="34" rx="7" ry="9" fill="#E53935" opacity="0.9" transform="rotate(240 15 34)" />
      <ellipse cx="15" cy="22" rx="7" ry="9" fill="#E53935" opacity="0.9" transform="rotate(300 15 22)" />
      <circle cx="26" cy="26" r="8" fill="#B71C1C" />
      <circle cx="26" cy="26" r="5" fill="#E53935" />
      <circle cx="24" cy="24" r="2" fill="#EF9A9A" opacity="0.5" />
    </g>
  );
}

export default function RoseBouquetSVG() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[240px] w-[200px]">
      <path d="M60 180 L80 240 L120 240 L140 180Z" fill="#FDDDE6" stroke="#F9A8C4" strokeWidth="1.5" />
      <path d="M60 180 Q100 195 140 180" stroke="#F9A8C4" strokeWidth="2" fill="none" />
      <path d="M90 180 Q80 168 85 162 Q90 156 100 162 Q110 156 115 162 Q120 168 110 180Z" fill="#E879A0" />
      <circle cx="100" cy="174" r="7" fill="#F9A8C4" />
      <path d="M100 174 Q85 162 75 155" stroke="#E879A0" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M100 174 Q115 162 125 155" stroke="#E879A0" strokeWidth="3" strokeLinecap="round" fill="none" />

      <line x1="80" y1="180" x2="75" y2="120" stroke="#5D8A6A" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="180" x2="100" y2="115" stroke="#5D8A6A" strokeWidth="3" strokeLinecap="round" />
      <line x1="120" y1="180" x2="125" y2="120" stroke="#5D8A6A" strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="175" x2="60" y2="125" stroke="#5D8A6A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="132" y1="175" x2="140" y2="125" stroke="#5D8A6A" strokeWidth="2.5" strokeLinecap="round" />

      <ellipse cx="85" cy="148" rx="10" ry="5" fill="#6DAA78" transform="rotate(-30 85 148)" />
      <ellipse cx="115" cy="148" rx="10" ry="5" fill="#6DAA78" transform="rotate(30 115 148)" />
      <ellipse cx="65" cy="155" rx="8" ry="4" fill="#6DAA78" transform="rotate(-45 65 155)" />
      <ellipse cx="135" cy="155" rx="8" ry="4" fill="#6DAA78" transform="rotate(45 135 155)" />

      <Rose cx={100} cy={95} r={26} />
      <Rose cx={72} cy={110} r={22} />
      <Rose cx={128} cy={110} r={22} />
      <Rose cx={52} cy={118} r={18} />
      <Rose cx={148} cy={118} r={18} />

      {[
        [88, 75],
        [112, 78],
        [96, 68],
        [104, 72],
        [80, 82],
        [120, 82],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="white" opacity="0.9" />
      ))}

      <text x="28" y="50" fontSize="14" opacity="0.7">✨</text>
      <text x="158" y="58" fontSize="12" opacity="0.6">⭐</text>
      <text x="90" y="40" fontSize="10" opacity="0.5">💕</text>
    </svg>
  );
}
