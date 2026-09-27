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
      style={{ filter: "drop-shadow(0 8px 20px rgba(90,60,20,0.28))" }}
    >
      <rect x="10" y="40" width="260" height="130" rx="8" fill="#e8d9b8" stroke="#8B6B4A" strokeWidth="1.5" />
      <path d="M10 170 L140 100 L270 170Z" fill="#dbc596" />
      <path d="M10 40 L140 105 L10 170Z" fill="#e2cea2" />
      <path d="M270 40 L140 105 L270 170Z" fill="#e2cea2" />
      <path
        d="M10 40 L140 115 L270 40Z"
        fill="#ecdfb9"
        stroke="#8B6B4A"
        strokeWidth="1.5"
        style={{
          transformOrigin: "140px 40px",
          transform: open ? "rotateX(-160deg)" : "rotateX(0deg)",
          transition: "transform 0.6s ease",
        }}
      />
      <rect
        x="10"
        y="40"
        width="260"
        height="130"
        rx="8"
        fill="none"
        stroke="#8B6B4A"
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.4"
      />
    </svg>
  );
}
