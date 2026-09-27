interface CakeSVGProps {
  blown: boolean;
}

export default function CakeSVG({ blown }: CakeSVGProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[200px] w-[200px]">
      <ellipse cx="100" cy="165" rx="72" ry="14" fill="#EDD5E0" />
      <rect x="40" y="118" width="120" height="48" rx="12" fill="#FDDDE6" />
      <rect x="40" y="118" width="120" height="18" rx="12" fill="#F9A8C4" />
      <rect x="40" y="130" width="120" height="8" fill="#F9A8C4" />
      {[55, 75, 95, 115, 135].map((x, i) => (
        <ellipse key={i} cx={x} cy="118" rx="7" ry="5" fill="white" opacity="0.8" />
      ))}
      {[60, 80, 100, 120, 140].map((x, i) => (
        <circle key={i} cx={x} cy="140" r="4" fill="#E879A0" opacity="0.7" />
      ))}
      <rect x="62" y="82" width="76" height="38" rx="10" fill="#FDDDE6" />
      <rect x="62" y="82" width="76" height="14" rx="10" fill="#F9A8C4" />
      {[72, 88, 104, 120].map((x, i) => (
        <ellipse key={i} cx={x} cy="82" rx="6" ry="4" fill="white" opacity="0.8" />
      ))}
      <rect x="95" y="58" width="10" height="26" rx="5" fill="#fff" stroke="#F9A8C4" strokeWidth="1.5" />
      <line x1="95" y1="66" x2="105" y2="66" stroke="#F9A8C4" strokeWidth="2" />
      <line x1="95" y1="74" x2="105" y2="74" stroke="#F9A8C4" strokeWidth="2" />
      <line x1="100" y1="58" x2="100" y2="53" stroke="#8B5E3C" strokeWidth="1.5" strokeLinecap="round" />
      {!blown ? (
        <g style={{ transformOrigin: "100px 48px" }} className="animate-flame-dance">
          <ellipse cx="100" cy="46" rx="6" ry="9" fill="#FFB347" className="animate-glow-flame" />
          <ellipse cx="100" cy="49" rx="3.5" ry="5" fill="#FFE066" />
          <ellipse cx="100" cy="52" rx="1.5" ry="2" fill="white" opacity="0.7" />
        </g>
      ) : (
        <path
          d="M100 53 Q96 42 100 34 Q104 26 100 18"
          stroke="#bbb"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          className="animate-fade-slide-up"
        />
      )}
      {!blown && <circle cx="100" cy="48" r="20" fill="#FFB347" opacity="0.08" className="animate-glow" />}
      <text x="68" y="100" fontSize="14">🍓</text>
      <text x="112" y="100" fontSize="14">🍓</text>
      <text x="22" y="85" fontSize="14" opacity="0.6">⭐</text>
      <text x="164" y="78" fontSize="12" opacity="0.5">✨</text>
    </svg>
  );
}
