interface EnvelopeSVGProps {
  open: boolean;
}

export default function EnvelopeSVG({ open }: EnvelopeSVGProps) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ filter: "drop-shadow(0 8px 24px rgba(232,121,160,0.2))" }}
    >
      <rect x="10" y="40" width="260" height="130" rx="16" fill="#FDDDE6" stroke="#F9A8C4" strokeWidth="2" strokeDasharray="6 4" />
      <path d="M10 170 L140 100 L270 170Z" fill="#F9C4D4" />
      <path d="M10 40 L140 105 L10 170Z" fill="#F9D0DC" />
      <path d="M270 40 L140 105 L270 170Z" fill="#F9D0DC" />
      <path
        d="M10 40 L140 115 L270 40Z"
        fill="#FDDDE6"
        stroke="#F9A8C4"
        strokeWidth="2"
        style={{
          transformOrigin: "140px 40px",
          transform: open ? "rotateX(-160deg)" : "rotateX(0deg)",
          transition: "transform 0.6s ease",
        }}
      />
      {!open && (
        <g transform="translate(125, 90)">
          <path
            d="M15 5 C15 3 13 1 11 1 C9 1 7 2.5 7 5 C7 2.5 5 1 3 1 C1 1 -1 3 -1 5 C-1 9 7 15 15 9Z"
            fill="#E879A0"
          />
          <text x="-2" y="16" fontSize="12" fill="white" textAnchor="middle">
            💌
          </text>
        </g>
      )}
      <rect x="10" y="40" width="260" height="130" rx="16" fill="none" stroke="#F9A8C4" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      {!open && (
        <text x="140" y="148" textAnchor="middle" fill="#E879A0" fontFamily="var(--font-dancing-script)" fontSize="16" opacity="0.8">
          tap to open 💕
        </text>
      )}
    </svg>
  );
}
