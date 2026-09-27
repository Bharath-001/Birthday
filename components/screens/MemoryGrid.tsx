import MemoryCard from "@/components/screens/MemoryCard";
import { MEMORY_CARDS } from "@/lib/constants";

interface MemoryGridProps {
  visible: boolean;
}

export default function MemoryGrid({ visible }: MemoryGridProps) {
  return (
    <div
      className="w-full transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Section label */}
      <div className="mb-2.5 flex items-center gap-2">
        <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #F9C4D4)" }} />
        <p className="font-dancing-script text-[1.05rem] whitespace-nowrap text-[#E879A0]">Sweet Memories 📸</p>
        <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #F9C4D4)" }} />
      </div>

      {/* 3x2 Polaroid grid */}
      <div className="grid grid-cols-3 gap-2.5">
        {MEMORY_CARDS.map((card, i) => (
          <MemoryCard key={i} {...card} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
