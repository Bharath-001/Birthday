interface BalloonSVGProps {
  color: string;
  darker: string;
}

export default function BalloonSVG({ color, darker }: BalloonSVGProps) {
  return (
    <svg viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[110px] w-20">
      <ellipse cx="40" cy="44" rx="32" ry="38" fill={color} />
      <ellipse cx="40" cy="44" rx="32" ry="38" fill={darker} opacity="0.3" />
      <ellipse cx="28" cy="28" rx="9" ry="12" fill="white" opacity="0.3" transform="rotate(-20 28 28)" />
      <ellipse cx="50" cy="22" rx="5" ry="7" fill="white" opacity="0.2" />
      <ellipse cx="40" cy="82" rx="4" ry="3" fill={darker} />
      <path d="M40 85 Q37 96 40 105" stroke={darker} strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
