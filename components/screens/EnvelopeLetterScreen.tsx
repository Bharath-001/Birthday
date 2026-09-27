"use client";

import { useState } from "react";
import EnvelopeSVG from "@/components/illustrations/EnvelopeSVG";
import type { StepScreenProps } from "@/types";

export default function EnvelopeLetterScreen({ onContinue }: StepScreenProps) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleOpenLetter = () => {
    setEnvelopeOpen(true);
    setTimeout(() => setLetterVisible(true), 600);
  };

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">A Message From My Heart</h2>
        <p className="font-dancing-script mt-1 text-[1.1rem] text-[#7A5C5C]">
          {!envelopeOpen ? "Tap to open 💌" : "With all my love ❤️"}
        </p>
      </div>

      <div className="w-[280px]" style={{ perspective: "600px" }}>
        {!letterVisible ? (
          <button
            onClick={handleOpenLetter}
            className="w-full cursor-pointer border-0 bg-transparent p-0"
            aria-label="Open envelope"
          >
            <EnvelopeSVG open={envelopeOpen} />
          </button>
        ) : (
          <div
            className="card animate-letter-reveal rounded-[20px] border-[1.5px] border-dashed border-[#F9A8C4] p-7"
            style={{ background: "linear-gradient(145deg, #ffffff, #fffbfc)" }}
          >
            <p className="font-dancing-script text-left text-[1.15rem] leading-[1.8] text-[#4A3B3B]">
              Dear Linda,
              <br />
              <br />
              Happy Birthday to someone truly special — someone whose smile brightens even the cloudiest of days and
              whose laughter is the sweetest melody.
              <br />
              <br />
              You bring so much warmth, sweetness, and light into this world. Every moment spent with you feels like
              a little gift. You deserve nothing but joy, love, and all the beautiful things life has to offer.
              <br />
              <br />
              On this day, I want you to know: you are cherished, you are adored, and you are loved more than words
              could ever say.
              <br />
              <br />
              With all my heart,
              <br />
              <strong>Yours, always 💕</strong>
            </p>
          </div>
        )}
      </div>

      {letterVisible && (
        <div className="animate-fade-slide-up [animation-delay:0.4s]">
          <button className="btn-primary" onClick={onContinue}>
            One last surprise... 🎁
          </button>
        </div>
      )}
    </div>
  );
}
