"use client";

import { useEffect, useRef, useState } from "react";
import EnvelopeSVG from "@/components/illustrations/EnvelopeSVG";
import FloralCorner from "@/components/love-letter-book/FloralCorner";
import OrnamentalDivider from "@/components/love-letter-book/OrnamentalDivider";
import WaxSeal from "@/components/love-letter-book/WaxSeal";
import type { StepScreenProps } from "@/types";

const LETTER_BODY = `Dear Linda,

Happy Birthday to someone truly special, someone whose smile brightens even the cloudiest of days and whose laughter is the sweetest melody.

You bring so much warmth, sweetness, and light into this world. Every moment spent with you feels like a little gift. You deserve nothing but pure joy, love, and all the beautiful things life has to offer.

On this day, I want you to know: you are cherished, and you mean so much to me.

Wishing you the happiest birthday ever!`;

const SIGNATURE = "Yours🤪";
const TYPE_SPEED_MS = 40;
const CHARS_PER_TICK = 1;

function renderWithBreaks(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

export default function EnvelopeLetterScreen({ onContinue }: StepScreenProps) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fullLength = LETTER_BODY.length;
  const typingDone = typedCount >= fullLength;

  useEffect(() => {
    if (!letterVisible) return;
    intervalRef.current = setInterval(() => {
      setTypedCount((prev) => {
        const next = prev + CHARS_PER_TICK;
        if (next >= fullLength && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return Math.min(next, fullLength);
      });
    }, TYPE_SPEED_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [letterVisible, fullLength]);

  const handleOpenLetter = () => {
    setEnvelopeOpen(true);
    setTimeout(() => setLetterVisible(true), 600);
  };

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      {/* Vintage parchment panel */}
      <div
        className="relative w-full overflow-hidden rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12"
        style={{
          background:
            "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,0.22) 0%, transparent 55%), linear-gradient(160deg, #faf4e4 0%, #f4ecd8 28%, #ede0c4 58%, #e6d4b4 80%, #dfc9a4 100%)",
          boxShadow:
            "inset 0 0 40px rgba(160,110,50,0.16), inset 0 0 90px rgba(130,85,30,0.06), 2px 4px 12px rgba(0,0,0,0.12), 6px 10px 28px rgba(0,0,0,0.08)",
        }}
      >
        <div className="pointer-events-none absolute -top-3 -left-3 z-[2]">
          <FloralCorner size={72} />
        </div>
        <div className="pointer-events-none absolute -right-3 -bottom-3 z-[2]">
          <FloralCorner size={72} mirror flipY />
        </div>

        <div className="relative z-[1] flex flex-col items-center gap-5">
          <div className="text-center">
            <h2 className="font-caveat text-[2rem] font-bold text-[#3d2c1e] md:text-4xl">
              A Message From My Heart
            </h2>
            <OrnamentalDivider />
            <p className="font-caveat text-lg text-[#8B6B4A]">
              {!envelopeOpen ? "Tap to open 💌" : "With all my love ❤️"}
            </p>
          </div>

          <div
            className="relative w-full max-w-57.5 sm:max-w-75 md:max-w-105"
            style={{ perspective: "600px" }}
          >
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
                className="animate-letter-reveal min-h-70 rounded-2xl border-[1.5px] border-dashed border-[#8B6B4A]/40 p-6 md:min-h-65 md:p-8"
                style={{
                  background: "linear-gradient(160deg, #faf4e4 0%, #f4ecd8 40%, #ede0c4 100%)",
                  boxShadow: "inset 0 0 24px rgba(160,110,50,0.12), 2px 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <p className="font-caveat text-left text-[1.2rem] leading-[1.85] text-[#3d2c1e] md:text-[1.35rem]">
                  {renderWithBreaks(LETTER_BODY.slice(0, typedCount))}
                  {!typingDone && <span className="animate-pulse text-[#8B6B4A]">▍</span>}
                  {typingDone && (
                    <>
                      <br />
                      <strong className="text-[#8B1A1A]">{SIGNATURE}</strong>
                    </>
                  )}
                </p>
              </div>
            )}

            {!letterVisible && (
              <div
                className="pointer-events-none absolute"
                style={{ left: "50%", top: "58%", transform: "translate(-50%, -50%)" }}
              >
                <WaxSeal />
              </div>
            )}
          </div>
        </div>
      </div>

      {typingDone && (
        <div className="animate-fade-slide-up">
          <button className="btn-primary" onClick={onContinue}>
            One last surprise... 🎁
          </button>
        </div>
      )}
    </div>
  );
}
