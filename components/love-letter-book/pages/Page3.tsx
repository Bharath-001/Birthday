import FloralCorner from "@/components/love-letter-book/FloralCorner";
import FloralSideBouquet from "@/components/love-letter-book/FloralSideBouquet";
import OrnamentalDivider from "@/components/love-letter-book/OrnamentalDivider";

export default function Page3() {
  return (
    <div className="relative z-[1] flex">
      <div className="pointer-events-none absolute -top-2 -right-[18px] z-[2]" style={{ filter: "url(#parchment-grain)" }}>
        <FloralSideBouquet />
      </div>

      <div className="pointer-events-none absolute -top-3 -left-3 z-[2]">
        <FloralCorner size={68} />
      </div>

      <div className="flex-1 pr-10">
        <div className="mb-4 text-center">
          <p className="font-caveat mb-1 text-[0.8rem] tracking-[0.18em] text-[#8B6B4A] uppercase opacity-65">
            — with deepest gratitude —
          </p>
          <OrnamentalDivider />
        </div>

        <div className="font-caveat text-[1.2rem] leading-[1.88] text-[#3d2c1e]">
          <p className="mb-3.5">
            On this day, as you celebrate another beautiful year, I want you to know that you deserve every good
            thing the universe has in store for you.
          </p>
          <p className="mb-3.5">
            You have given so much of yourself — your love, your time, your gentle and generous heart. Now it is
            your turn to receive.
          </p>
          <p className="mb-3.5">
            May this birthday bring you endless laughter, unexpected surprises, and quiet moments of perfect peace.
            May every dream you have carried softly in your heart begin to{" "}
            <em className="text-[#7A4A2A]">bloom</em> this year like the most beautiful of gardens.
          </p>
          <p className="italic opacity-75">
            You deserve mornings that feel like promises
            <br />
            and evenings that feel like poetry. ✨
          </p>
        </div>
      </div>
    </div>
  );
}
