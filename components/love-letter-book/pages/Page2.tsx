import FloralCorner from "@/components/love-letter-book/FloralCorner";
import OrnamentalDivider from "@/components/love-letter-book/OrnamentalDivider";

export default function Page2() {
  return (
    <div className="relative z-[1]">
      <div className="pointer-events-none absolute -top-3 -left-3 z-[2]">
        <FloralCorner size={80} />
      </div>
      <div className="pointer-events-none absolute -bottom-4 -right-3 z-[2]">
        <FloralCorner size={72} mirror flipY />
      </div>

      <div className="mb-4 text-center">
        <p className="font-caveat mb-1 text-[0.8rem] tracking-[0.18em] text-[#8B6B4A] uppercase opacity-65">
          — things I treasure about you —
        </p>
        <OrnamentalDivider />
      </div>

      <div className="font-caveat text-[1.22rem] leading-[1.85] text-[#3d2c1e]">
        <p className="mb-3.5">
          The way your eyes light up when you talk about something you love. The sound of your laughter — genuine,
          warm, utterly contagious — that fills any room with joy the moment it arrives.
        </p>
        <p className="mb-3.5">
          The little things you do without thinking: how you always notice when someone needs a kind word, how you
          find beauty in the smallest corners of life, how you bring comfort simply by being present.
        </p>
        <p className="mb-3.5">
          I carry every one of our shared memories like <em className="text-[#7A4A2A]">pressed flowers</em> —
          preserved, precious, and quietly beautiful. The lazy afternoons, the silly conversations, the moments that
          felt ordinary then but shine like gold now.
        </p>
        <p className="text-right italic opacity-70">Thank you for every single one of them. 🌸</p>
      </div>
    </div>
  );
}
