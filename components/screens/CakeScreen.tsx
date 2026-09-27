"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CakeSVG from "@/components/illustrations/CakeSVG";
import { fireConfetti } from "@/lib/confetti";
import type { StepScreenProps } from "@/types";

const CLOSE_MS = 500;
const GUST_MS = 480;

export default function CakeScreen({ onContinue }: StepScreenProps) {
  const [blown, setBlown] = useState(false);
  const [wishing, setWishing] = useState(false);
  const [gusting, setGusting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Closes the black screen first, and only once it has fully faded out does the
  // gust of wind sweep across the (now visible) page and hit the candle. The screen
  // stays up indefinitely — nothing happens until the person taps it themselves.
  const closeThenBlow = useCallback(() => {
    if (blown) return;
    setWishing(false);
    setTimeout(() => {
      setGusting(true);
      setTimeout(() => {
        setGusting(false);
        setBlown(true);
        fireConfetti();
        setTimeout(onContinue, 1800);
      }, GUST_MS);
    }, CLOSE_MS);
  }, [blown, onContinue]);

  const handleBlow = () => {
    if (blown || wishing) return;
    setWishing(true);
  };

  const handleOverlayClick = () => {
    if (!wishing || blown) return;
    closeThenBlow();
  };

  const active = wishing && !blown;

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">🎂 Blow the candle, Linda! 🕯️</h2>
      </div>

      <div
        className="card animate-float relative flex h-[260px] w-[260px] items-center justify-center rounded-[36px]"
        style={{ background: "linear-gradient(145deg, #fff9fb, #fff0f5)" }}
      >
        <CakeSVG blown={blown} />
        {/* {blown && <div className="animate-pop-in absolute inset-0 flex items-center justify-center text-5xl">🎉</div>} */}
      </div>

      <p className="font-dancing-script text-center text-[1.1rem] text-[#7A5C5C]">
        {blown ? "Your wish has been sent to the stars! 🌟" : wishing ? "Making your wish... 🌙" : "Ready to make your wish?"}
      </p>

      {!blown && (
        <button className="btn-primary" onClick={handleBlow} disabled={wishing}>
          {wishing ? "Blowing... 💨" : "Blow the candle 💨"}
        </button>
      )}

      {/* Transparent black overlay over the entire screen (portaled to <body> so it escapes this
          screen's animate-fade-slide-up wrapper — a settled transform on an ancestor would otherwise
          trap this fixed element inside that ancestor's box instead of the real viewport). Tapping it
          closes the screen first; only after it's fully gone does the wind gust sweep in and blow out
          the candle, so the gust plays over the revealed page rather than under the black overlay. */}
      {mounted &&
        createPortal(
          <>
            <div
              onClick={handleOverlayClick}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500"
              style={{
                opacity: active ? 0.78 : 0,
                pointerEvents: active ? "auto" : "none",
                cursor: active ? "pointer" : "default",
              }}
            >
              <p
                className="font-dancing-script px-8 text-center text-3xl text-white transition-all duration-500 sm:text-4xl"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                }}
              >
                Close your eyes &amp; make a wish ✨
              </p>
              <p
                className="font-dancing-script mt-2 text-center text-base text-white/70 transition-all delay-150 duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(6px)",
                }}
              >
                Tap anywhere to blow 💨
              </p>
            </div>

            {/* Wind gust — a separate layer so it isn't dimmed by the overlay's own fade-out */}
            {gusting && (
              <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="animate-wind-gust absolute rounded-full bg-white/80"
                    style={{
                      top: `${38 + i * 6}%`,
                      left: 0,
                      height: 3,
                      width: 90 + i * 24,
                      animationDelay: `${i * 45}ms`,
                      filter: "blur(1px)",
                    }}
                  />
                ))}
              </div>
            )}
          </>,
          document.body,
        )}
    </div>
  );
}
