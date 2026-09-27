"use client";

import { useEffect, useState } from "react";
import FloralCorner from "@/components/love-letter-book/FloralCorner";
import WaxSeal from "@/components/love-letter-book/WaxSeal";
import OrnamentalDivider from "@/components/love-letter-book/OrnamentalDivider";

interface Page4Props {
  onFinish: () => void;
}

export default function Page4({ onFinish }: Page4Props) {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBtnVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-[1]">
      <div className="pointer-events-none absolute -top-3 -right-3 z-[2]">
        <FloralCorner size={76} mirror />
      </div>
      <div className="pointer-events-none absolute -top-3 -left-3 z-[2]">
        <FloralCorner size={76} />
      </div>
      <div className="pointer-events-none absolute -bottom-4 left-1/2 z-[2] -translate-x-1/2">
        <WaxSeal />
      </div>

      <div className="mb-4 text-center">
        <p className="font-caveat mb-1 text-[0.8rem] tracking-[0.18em] text-[#8B6B4A] uppercase opacity-65">
          — with all my heart —
        </p>
        <OrnamentalDivider />
      </div>

      <div className="font-caveat text-left text-[1.22rem] leading-[1.88] text-[#3d2c1e]">
        <p className="mb-3.5">
          And so, my dear Linda, as we celebrate this wonderful day that belongs entirely to you, I want to leave you
          with this —
        </p>
        <p className="mb-3.5">
          No matter where life takes you, no matter what roads you walk and what seas you cross, know that you are so
          dearly loved. Know that your presence in this world is a gift — one that keeps on giving every single day.
        </p>
        <p className="mb-[18px]">
          Here&apos;s to you, to this beautiful year ahead, and to every magical chapter still waiting to be written.
        </p>
        <div className="mt-1 border-t border-[rgba(139,107,74,0.2)] pt-3 text-right">
          <p className="text-[1.05rem] leading-[1.7] text-[#5c3d2a] italic">
            With all my love and best wishes,
            <br />
            <strong className="font-caveat text-[1.5rem] text-[#8B1A1A]">Yours... 💕</strong>
          </p>
        </div>
      </div>

      <div
        className="mt-6 flex justify-center transition-all duration-500"
        style={{
          opacity: btnVisible ? 1 : 0,
          transform: btnVisible ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <button className="btn-primary text-[0.95rem]" onClick={onFinish}>
          Close Letter 💌
        </button>
      </div>
    </div>
  );
}
