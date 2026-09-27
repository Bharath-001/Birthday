const RING_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export default function WaxSeal() {
  return (
    <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[70px] w-[70px]">
      <circle cx="35" cy="35" r="32" fill="#8B1A1A" opacity="0.85" />
      <circle cx="35" cy="35" r="29" fill="#A0201E" opacity="0.9" />
      <circle cx="35" cy="35" r="26" fill="#8B1A1A" opacity="0.8" />
      <circle cx="35" cy="35" r="31" fill="none" stroke="#C0392B" strokeWidth="1" opacity="0.6" />
      {RING_ANGLES.map((angle, i) => {
        const cx = 35 + 14 * Math.cos((angle * Math.PI) / 180);
        const cy = 35 + 14 * Math.sin((angle * Math.PI) / 180);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="4"
            ry="2.5"
            fill="#C0392B"
            opacity="0.6"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}
      <path
        d="M35 42 C35 38 29 33 29 28 C29 24 32 22 35 24 C38 22 41 24 41 28 C41 33 35 38 35 42Z"
        fill="#F9C4D4"
        opacity="0.9"
      />
      <circle cx="35" cy="35" r="3" fill="#FDDDE6" opacity="0.7" />
      <ellipse cx="28" cy="27" rx="5" ry="3" fill="white" opacity="0.12" transform="rotate(-30 28 27)" />
    </svg>
  );
}
