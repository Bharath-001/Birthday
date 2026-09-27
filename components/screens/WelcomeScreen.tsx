"use client";

import { useState } from "react";
import Image from "next/image";
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
          Happy Birthday, <span className="text-[#E879A0]">Linda!</span>
        </h1>
      </div>

      {/* Cats & cake photo */}
      <div className="relative w-full max-w-[320px]">
        <Image
          src="/images/welcome-cats-cake-v5.png"
          alt="Two cats sitting beside Linda's birthday cake"
          width={1360}
          height={768}
          priority
          sizes="(max-width: 400px) 90vw, 320px"
          className="animate-float h-auto w-full"
        />

        {/* Soft glow accent on the photo's own candle flame */}
        <div
          className="animate-glow pointer-events-none absolute rounded-full"
          style={{
            left: "51.3%",
            top: "48%",
            width: "3.5%",
            aspectRatio: "1 / 1",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,190,90,0.65) 0%, transparent 72%)",
            filter: "blur(3px)",
          }}
        />

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
