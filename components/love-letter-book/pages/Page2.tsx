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
          — things I treasure about our friendship —
        </p>
        <OrnamentalDivider />
      </div>

      <div className="font-caveat text-[1.22rem] leading-[1.85] text-[#3d2c1e]">
        <p className="mb-3.5">
          The way your eyes light up when you talk about something you love. The sound of your laughter genuine,
          loud, and totally contagious that can instantly brighten up any boring room.
        </p>
        <p className="mb-3.5">
          The little things you do without even thinking: how you notice when someone needs a good laugh, how you
          find joy in the smallest things, and how comfortable it is just being around you.
        </p>
        <p className="mb-3.5">
          I carry every one of our shared memories like <em className="text-[#7A4A2A]">precious moments</em> the
          random chats, the endless laughs, and the times that felt ordinary then but are actually gold now.
        </p>
        <p className="text-right italic opacity-70">Thank you for being such an amazing friend.</p>
      </div>
    </div>
  );
}
