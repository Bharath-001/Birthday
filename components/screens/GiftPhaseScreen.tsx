import GiftBoxSVG from "@/components/illustrations/GiftBoxSVG";

interface GiftPhaseScreenProps {
  onOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function GiftPhaseScreen({ onOpen }: GiftPhaseScreenProps) {
  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">One Last Thing... 🎁</h2>
        <p className="font-dancing-script mt-1 text-[1.15rem] text-[#7A5C5C]">Tap the gift 🎀</p>
      </div>
      <button onClick={onOpen} className="animate-gift-bounce cursor-pointer border-0 bg-transparent p-0" aria-label="Open gift">
        <GiftBoxSVG />
      </button>
      <p className="font-dancing-script text-base text-[#B07890] opacity-80">
        One more surprise is waiting for you ✨
      </p>
    </div>
  );
}
