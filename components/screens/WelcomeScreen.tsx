"use client";

import { useState } from "react";
import BearsCakeIllustration from "@/components/illustrations/BearsCakeIllustration";
import { NO_BUTTON_MESSAGES } from "@/lib/constants";

interface WelcomeScreenProps {
  onYes: () => void;
}

export default function WelcomeScreen({ onYes }: WelcomeScreenProps) {
  const [noCount, setNoCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleNo = () => {
    setNoCount((c) => c + 1);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2500);
  };

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6 py-4">
      {/* Header icons */}
      <div className="flex items-center gap-3">
        <span className="animate-wiggle inline-block text-4xl">🎀</span>
        <span className="animate-float inline-block text-3xl [animation-delay:0.5s]">🍓</span>
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="font-poppins text-3xl leading-tight font-bold text-[#4A3B3B]">
          Happy Birthday, <span className="text-[#E879A0]">Linda!</span> 🎉
        </h1>
      </div>

      {/* Bears illustration */}
      <div className="relative flex flex-col items-center">
        <div
          className="card animate-float flex h-[220px] w-[240px] items-center justify-center rounded-[32px] p-2"
          style={{ background: "linear-gradient(145deg, #fff9fb, #fff0f5)" }}
        >
          <BearsCakeIllustration />
        </div>
        <span className="animate-sparkle absolute -top-3 -right-3 text-2xl">✨</span>
        <span className="animate-sparkle absolute -bottom-2 -left-4 text-xl [animation-delay:0.5s]">⭐</span>
      </div>

      {/* Subtext */}
      <p className="font-dancing-script max-w-[280px] text-center text-[1.3rem] leading-relaxed text-[#7A5C5C]">
        Are you excited for what&apos;s next?
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="btn-primary" onClick={onYes}>
          Yes 🎉
        </button>
        <div className="relative">
          <button className="btn-secondary" onClick={handleNo}>
            No 🙈
          </button>
          {showTooltip && (
            <div
              className="animate-pop-in font-poppins absolute -top-16 left-1/2 -translate-x-1/2 rounded-[14px] bg-[#4A3B3B] px-3.5 py-2 text-[0.78rem] whitespace-nowrap text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              {NO_BUTTON_MESSAGES[Math.min(noCount - 1, NO_BUTTON_MESSAGES.length - 1)]}
              <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#4A3B3B]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
