"use client";

import { useCallback, useEffect, useState } from "react";
import BalloonSVG from "@/components/illustrations/BalloonSVG";
import { BALLOON_COLORS, BALLOON_MESSAGES } from "@/lib/constants";
import { miniConfetti } from "@/lib/confetti";
import type { StepScreenProps } from "@/types";

const DURATIONS = ["3.2s", "2.8s", "3.6s", "3s"];
const DELAYS = ["0s", "0.4s", "0.2s", "0.6s"];

export default function BalloonPopScreen({ onContinue }: StepScreenProps) {
  const [popped, setPopped] = useState<boolean[]>([false, false, false, false]);
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false, false]);
  const [unlocked, setUnlocked] = useState(false);

  const handlePop = useCallback(
    (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
      if (popped[i]) return;
      const rect = e.currentTarget.getBoundingClientRect();
      miniConfetti({
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      });

      setPopped((prev) => {
        const next = [...prev];
        next[i] = true;
        return next;
      });

      setTimeout(() => {
        setRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 400);
    },
    [popped],
  );

  const allPopped = popped.every(Boolean);
  useEffect(() => {
    if (allPopped) setUnlocked(true);
  }, [allPopped]);

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">Pop all 4 balloons! 🎈</h2>
        <p className="mt-1 text-sm text-[#7A5C5C]">{popped.filter(Boolean).length}/4 popped</p>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-6">
        {BALLOON_COLORS.map((color, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            {!popped[i] ? (
              <button
                onClick={(e) => handlePop(i, e)}
                className="animate-balloon-float relative cursor-pointer border-0 bg-transparent p-0"
                style={{ animationDuration: DURATIONS[i], animationDelay: DELAYS[i] }}
                aria-label={`Pop ${color.label} balloon`}
              >
                <BalloonSVG color={color.bg} darker={color.pop} />
                <span className="font-poppins absolute inset-0 flex items-center justify-center pb-5 text-lg font-bold text-white">
                  🎈
                </span>
              </button>
            ) : (
              <div className="animate-pop-in flex h-[110px] w-[90px] items-center justify-center">
                <span className="text-5xl">💥</span>
              </div>
            )}

            {/* Message */}
            <div
              className="card flex min-h-16 max-w-[148px] items-center justify-center px-3.5 py-2.5 transition-all duration-500"
              style={{
                opacity: revealed[i] ? 1 : 0,
                transform: revealed[i] ? "translateY(0)" : "translateY(10px)",
              }}
            >
              <p className="font-dancing-script text-center text-[0.95rem] leading-relaxed text-[#4A3B3B]">
                {BALLOON_MESSAGES[i]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Continue button */}
      <div
        className="transition-all duration-500"
        style={{
          opacity: unlocked ? 1 : 0,
          transform: unlocked ? "translateY(0)" : "translateY(16px)",
          pointerEvents: unlocked ? "auto" : "none",
        }}
      >
        <button className="btn-primary" onClick={onContinue}>
          Continue 🎉
        </button>
      </div>
    </div>
  );
}
