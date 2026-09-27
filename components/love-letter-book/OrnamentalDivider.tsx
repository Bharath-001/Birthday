export default function OrnamentalDivider() {
  return (
    <div className="my-3 flex items-center gap-2 opacity-45">
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #8B6B4A)" }} />
      <span className="text-sm text-[#8B6B4A]">✦</span>
      <span className="text-[10px] text-[#8B6B4A]">✦</span>
      <span className="text-sm text-[#8B6B4A]">✦</span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #8B6B4A)" }} />
    </div>
  );
}
