import Image from "next/image";
import MemoryGrid from "@/components/screens/MemoryGrid";

const HEARTS = ["❤️", "🧡", "💛", "💚", "💙", "💜"];

interface CelebrationScreenProps {
  memoryVisible: boolean;
  letterBtnVisible: boolean;
  onOpenLetter: () => void;
  onReplay: () => void;
}

export default function CelebrationScreen({ memoryVisible, letterBtnVisible, onOpenLetter, onReplay }: CelebrationScreenProps) {
  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6 text-center">
      <h2 className="text-2xl font-bold text-[#4A3B3B]">Lots of love for you! 🐿️❤️</h2>

      <div
        className="card animate-float flex h-60 w-65 items-center justify-center rounded-[36px] p-4"
        style={{ background: "linear-gradient(145deg, #fff9fb, #fff0f5)" }}
      >
        <Image
          src="/images/celebration-cat-squirrel.png"
          alt="A cat and squirrel holding a heart together"
          width={500}
          height={500}
          sizes="220px"
          className="h-auto w-full"
        />
      </div>

      <p className="font-dancing-script text-[1.35rem] leading-relaxed text-[#E879A0]">
        You are so loved, Linda 💕
        <br />
        Wishing you a lifetime of happiness!
      </p>

      {/* Hearts row */}
      <div className="flex gap-3 text-2xl">
        {HEARTS.map((h, i) => (
          <span key={i} className="animate-heart-pop" style={{ animationDelay: `${i * 0.08}s` }}>
            {h}
          </span>
        ))}
      </div>

      {/* Letter book trigger */}
      <div
        className="flex w-full flex-col items-center gap-1.5 transition-all duration-500"
        style={{
          opacity: letterBtnVisible ? 1 : 0,
          transform: letterBtnVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        }}
      >
        <div className="mb-1 flex w-4/5 items-center gap-2 opacity-45">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #8B6B4A)" }} />
          <span className="text-[13px] text-[#8B6B4A]">✦</span>
          <span className="text-[9px] text-[#8B6B4A]">✦</span>
          <span className="text-[13px] text-[#8B6B4A]">✦</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #8B6B4A)" }} />
        </div>
        <p className="font-dancing-script mb-1 text-base text-[#7A5C5C] opacity-85">
          {memoryVisible ? "Want to read it again?" : "One more thing for you..."}
        </p>
        <button
          onClick={onOpenLetter}
          className="font-poppins flex items-center gap-2 rounded-full px-7.5 py-3.5 text-[0.95rem] font-semibold tracking-wide text-[#f4ecd8] shadow-[0_6px_22px_rgba(75,45,20,0.32)] transition-transform hover:-translate-y-0.5 hover:scale-[1.06]"
          style={{ background: "linear-gradient(135deg, #6B4C30, #4A3020)" }}
        >
          💌 Read
        </button>
      </div>

      {/* Sweet Memories — unlocks only after the letter has been opened and closed once */}
      {memoryVisible && (
        <div className="animate-fade-slide-up w-full">
          <MemoryGrid visible />
        </div>
      )}

      <button className="btn-primary" onClick={onReplay}>
        🔁 Replay from the beginning
      </button>

      <p className="font-poppins mt-1 text-xs text-[#B07890] opacity-80">special love for you Linda 💕</p>
    </div>
  );
}
