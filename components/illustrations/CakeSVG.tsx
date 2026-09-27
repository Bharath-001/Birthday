interface CakeSVGProps {
  blown: boolean;
}

const DRIP_ROWS = [
  // [x, dripLength] pairs for the bottom tier's ganache drip
  { x: 48, len: 14 },
  { x: 62, len: 22 },
  { x: 76, len: 12 },
  { x: 90, len: 18 },
  { x: 104, len: 10 },
  { x: 118, len: 20 },
  { x: 132, len: 13 },
  { x: 148, len: 17 },
];

const TOP_DRIP_ROWS = [
  { x: 66, len: 10 },
  { x: 78, len: 16 },
  { x: 92, len: 8 },
  { x: 106, len: 14 },
  { x: 120, len: 9 },
  { x: 132, len: 12 },
];

export default function CakeSVG({ blown }: CakeSVGProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[200px] w-[200px]">
      {/* Plate shadow */}
      <ellipse cx="100" cy="167" rx="74" ry="13" fill="#3D2417" opacity="0.14" />

      {/* Bottom tier — chocolate sponge */}
      <rect x="38" y="120" width="124" height="46" rx="10" fill="#6B3F2A" />
      <rect x="38" y="120" width="124" height="46" rx="10" fill="url(#chocoShadeBottom)" />

      {/* Bottom tier ganache glaze band + drips */}
      <rect x="38" y="120" width="124" height="20" rx="10" fill="#4A2C1D" />
      {DRIP_ROWS.map((d, i) => (
        <path
          key={i}
          d={`M${d.x - 5} 138 Q${d.x} ${138 + d.len + 6} ${d.x} ${138 + d.len} Q${d.x} ${138 + d.len + 6} ${d.x + 5} 138 Z`}
          fill="#4A2C1D"
        />
      ))}
      {/* Ganache gloss highlight */}
      <ellipse cx="70" cy="126" rx="20" ry="4.5" fill="white" opacity="0.14" />
      <ellipse cx="120" cy="130" rx="14" ry="3.5" fill="white" opacity="0.1" />

      {/* Top tier — chocolate sponge */}
      <rect x="60" y="84" width="80" height="36" rx="9" fill="#6B3F2A" />
      <rect x="60" y="84" width="80" height="36" rx="9" fill="url(#chocoShadeTop)" />

      {/* Top tier ganache glaze band + drips */}
      <rect x="60" y="84" width="80" height="15" rx="9" fill="#4A2C1D" />
      {TOP_DRIP_ROWS.map((d, i) => (
        <path
          key={i}
          d={`M${d.x - 4} 99 Q${d.x} ${99 + d.len + 5} ${d.x} ${99 + d.len} Q${d.x} ${99 + d.len + 5} ${d.x + 4} 99 Z`}
          fill="#4A2C1D"
        />
      ))}
      <ellipse cx="82" cy="90" rx="14" ry="3.5" fill="white" opacity="0.14" />

      {/* Cream piping border along the top tier's rim */}
      {[68, 80, 92, 104, 116, 128].map((x, i) => (
        <circle key={i} cx={x} cy="84" r="3.2" fill="#FFF3DA" opacity="0.9" />
      ))}

      {/* Chocolate curls garnish */}
      <path d="M72 82 Q78 74 74 67 Q82 72 80 80Z" fill="#5A3420" opacity="0.9" />
      <path d="M63 84 Q67 78 64 73 Q70 77 68 83Z" fill="#5A3420" opacity="0.8" />

      {/* Cherry on top, offset beside the candle */}
      <circle cx="124" cy="80" r="6.5" fill="#C0392B" />
      <ellipse cx="121.8" cy="77.8" rx="1.8" ry="1.3" fill="white" opacity="0.35" />
      <path d="M124 73.5 Q126 65 132 61" stroke="#5D8A55" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="133" cy="60" rx="3.2" ry="1.8" fill="#6DAA5A" transform="rotate(-25 133 60)" />

      {/* Candle — planted into the frosting, no gap above the cake */}
      <rect x="95" y="52" width="10" height="35" rx="4" fill="#fff" stroke="#F9A8C4" strokeWidth="1.5" />
      <line x1="95" y1="63" x2="105" y2="63" stroke="#F9A8C4" strokeWidth="2" />
      <line x1="95" y1="75" x2="105" y2="75" stroke="#F9A8C4" strokeWidth="2" />
      <line x1="100" y1="52" x2="100" y2="47" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />

      {!blown ? (
        <g style={{ transformOrigin: "100px 42px" }} className="animate-flame-dance">
          <ellipse cx="100" cy="40" rx="6" ry="9" fill="#FFB347" className="animate-glow-flame" />
          <ellipse cx="100" cy="43" rx="3.5" ry="5" fill="#FFE066" />
          <ellipse cx="100" cy="46" rx="1.5" ry="2" fill="white" opacity="0.7" />
        </g>
      ) : (
        <path
          d="M100 47 Q96 36 100 28 Q104 20 100 12"
          stroke="#bbb"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          className="animate-fade-slide-up"
        />
      )}
      {!blown && <circle cx="100" cy="42" r="20" fill="#FFB347" opacity="0.08" className="animate-glow" />}

      <text x="18" y="90" fontSize="14" opacity="0.6">⭐</text>
      <text x="166" y="82" fontSize="12" opacity="0.5">✨</text>
      <text x="24" y="150" fontSize="13" opacity="0.55">🍫</text>
      <text x="160" y="152" fontSize="13" opacity="0.55">🍫</text>

      <defs>
        <linearGradient id="chocoShadeBottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="chocoShadeTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.12" />
        </linearGradient>
      </defs>
    </svg>
  );
}
