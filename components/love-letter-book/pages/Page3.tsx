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
            — with so much happiness —
          </p>
          <OrnamentalDivider />
        </div>

        <div className="font-caveat text-[1.2rem] leading-[1.88] text-[#3d2c1e]">
          <p className="mb-3.5">
            On this day, as you celebrate another great year, I want you to know that you deserve every good thing
            coming your way.
          </p>
          <p className="mb-3.5">
            You bring so much positivity and good vibes to everyone around you. Now it&apos;s your turn to sit back
            and enjoy the best treatment!
          </p>
          <p className="mb-3.5">
            May this birthday bring you endless laughter, great surprises, and all the success you&apos;ve been
            working for. May every dream you have start{" "}
            <em className="text-[#7A4A2A]">blooming</em> this year.
          </p>
          <p className="italic opacity-75">You deserve days full of good food, good music, and zero stress! ✨</p>
        </div>
      </div>
    </div>
  );
}
