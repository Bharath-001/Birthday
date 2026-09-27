"use client";

import { useState } from "react";
import CakeSVG from "@/components/illustrations/CakeSVG";
import { fireConfetti } from "@/lib/confetti";
import type { StepScreenProps } from "@/types";

export default function CakeScreen({ onContinue }: StepScreenProps) {
  const [blown, setBlown] = useState(false);
  const [wishing, setWishing] = useState(false);

  const handleBlow = () => {
    if (blown) return;
    setWishing(true);
    setTimeout(() => {
      setBlown(true);
      fireConfetti();
      setTimeout(onContinue, 1800);
    }, 1200);
  };

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">🎂 Blow the candle, Linda! 🕯️</h2>
        <p className="font-dancing-script mt-1 text-[1.15rem] text-[#7A5C5C]">Close your eyes &amp; make a wish ✨</p>
      </div>

      <div
        className="card animate-float relative flex h-[260px] w-[260px] items-center justify-center rounded-[36px]"
        style={{ background: "linear-gradient(145deg, #fff9fb, #fff0f5)" }}
      >
        <CakeSVG blown={blown} />
        {blown && <div className="animate-pop-in absolute inset-0 flex items-center justify-center text-5xl">🎉</div>}
      </div>

      <p className="font-dancing-script text-center text-[1.1rem] text-[#7A5C5C]">
        {blown ? "Your wish has been sent to the stars! 🌟" : wishing ? "Making your wish... 🌙" : "Ready to make your wish?"}
      </p>

      {!blown && (
        <button className="btn-primary" onClick={handleBlow} disabled={wishing}>
          {wishing ? "Blowing... 💨" : "Blow the candle 💨"}
        </button>
      )}
    </div>
  );
}
