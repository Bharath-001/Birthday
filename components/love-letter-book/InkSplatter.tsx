interface InkSplatterProps {
  style?: React.CSSProperties;
}

export default function InkSplatter({ style }: InkSplatterProps) {
  return (
    <svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 40, height: 30, ...style }}>
      <circle cx="20" cy="15" r="4" fill="#3d2c1e" opacity="0.06" />
      <circle cx="10" cy="10" r="2" fill="#3d2c1e" opacity="0.04" />
      <circle cx="32" cy="20" r="1.5" fill="#3d2c1e" opacity="0.04" />
      <circle cx="6" cy="22" r="1" fill="#3d2c1e" opacity="0.03" />
      <circle cx="36" cy="8" r="1.2" fill="#3d2c1e" opacity="0.03" />
      <circle cx="25" cy="6" r="0.8" fill="#3d2c1e" opacity="0.04" />
    </svg>
  );
}
