import FloralCorner from "@/components/love-letter-book/FloralCorner";
import InkSplatter from "@/components/love-letter-book/InkSplatter";
import OrnamentalDivider from "@/components/love-letter-book/OrnamentalDivider";

export default function Page1() {
  return (
    <div className="relative z-[1]">
      <div className="pointer-events-none absolute -top-3 -right-3 z-[2]">
        <FloralCorner size={88} mirror />
      </div>
      <div className="pointer-events-none absolute -bottom-4 -left-3 z-[2]">
        <FloralCorner size={72} flipY />
      </div>

      <div className="mb-[18px] text-center">
        <p className="font-caveat mb-1.5 text-sm tracking-[0.2em] text-[#8B6B4A] uppercase opacity-70">
          — A Letter for You —
        </p>
        <h2 className="font-caveat text-[2rem] leading-tight font-bold text-[#3d2c1e]">My Dearest Linda,</h2>
        <OrnamentalDivider />
      </div>

      <div className="font-caveat text-[1.22rem] leading-[1.85] text-[#3d2c1e]" style={{ filter: "url(#ink-bleed)" }}>
        <p className="mb-3.5">
          There are some people who walk into your life and, without even trying, change everything. You are one of
          those rare souls.
        </p>
        <p className="mb-3.5">
          From the moment I knew you, I could feel there was something wonderfully different about you — a warmth
          that radiates from within, a kindness that touches every heart around you, and a spirit that makes even the
          simplest moments feel truly magical.
        </p>
        <p>
          On this special day, I want you to know just how deeply you are valued. Not for what you do, but simply for
          who you are — beautifully, wonderfully, irreplaceably <em className="text-[#8B1A1A]">you.</em>
        </p>
      </div>

      <InkSplatter style={{ position: "absolute", bottom: 10, right: 20 }} />
    </div>
  );
}
