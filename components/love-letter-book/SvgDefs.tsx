export default function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute overflow-hidden">
      <defs>
        <filter id="parchment-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves={4} stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="multiply" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        <filter id="edge-tear" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence type="turbulence" baseFrequency="0.035" numOctaves={4} seed={8} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={7} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
