"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import BalloonSVG from "@/components/illustrations/BalloonSVG";
import { BALLOON_COLORS, BALLOON_WORDS } from "@/lib/constants";
import { miniConfetti } from "@/lib/confetti";
import type { StepScreenProps } from "@/types";

type BalloonStatus = "idle" | "popping" | "popped";

const DURATIONS = ["3.2s", "2.8s", "3.6s", "3s"];
const DELAYS = ["0s", "0.4s", "0.2s", "0.6s"];
const POP_ANIM_MS = 380;

export default function BalloonPopScreen({ onContinue }: StepScreenProps) {
  const [status, setStatus] = useState<BalloonStatus[]>(["idle", "idle", "idle", "idle"]);
  const [unlocked, setUnlocked] = useState(false);

  const handlePop = useCallback(
    (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
      if (status[i] !== "idle") return;
      const rect = e.currentTarget.getBoundingClientRect();
      miniConfetti({
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      });

      setStatus((prev) => {
        const next = [...prev];
        next[i] = "popping";
        return next;
      });

      setTimeout(() => {
        setStatus((prev) => {
          const next = [...prev];
          next[i] = "popped";
          return next;
        });
      }, POP_ANIM_MS);
    },
    [status],
  );

  const poppedCount = status.filter((s) => s === "popped").length;
  const allPopped = poppedCount === status.length;

  useEffect(() => {
    if (allPopped) {
      const timer = setTimeout(() => setUnlocked(true), 350);
      return () => clearTimeout(timer);
    }
  }, [allPopped]);

  return (
    <div className="animate-fade-slide-up flex flex-col items-center gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#4A3B3B]">Pop all 4 balloons! 🎈</h2>
        <p className="mt-1 text-sm text-[#7A5C5C]">{poppedCount}/4 popped</p>
      </div>

      {/* Balloon grid — collapses into a single line once every word is revealed */}
      <div
        className={
          unlocked
            ? "flex flex-row flex-wrap items-center justify-center gap-2"
            : "grid grid-cols-2 gap-5 sm:gap-6"
        }
      >
        {BALLOON_COLORS.map((color, i) => (
          <div
            key={i}
            className={unlocked ? "relative" : "relative flex h-28 w-20 items-center justify-center"}
          >
            {status[i] === "idle" && (
              <button
                onClick={(e) => handlePop(i, e)}
                className="animate-balloon-float absolute inset-0 cursor-pointer border-0 bg-transparent p-0"
                style={{ animationDuration: DURATIONS[i], animationDelay: DELAYS[i] }}
                aria-label={`Pop ${color.label} balloon`}
              >
                <BalloonSVG color={color.bg} darker={color.pop} />
              </button>
            )}

            {status[i] === "popping" && (
              <>
                <span
                  className="animate-shockwave pointer-events-none absolute h-16 w-16 rounded-full border-[3px]"
                  style={{ borderColor: color.pop }}
                />
                <div className="animate-balloon-pop absolute inset-0">
                  <BalloonSVG color={color.bg} darker={color.pop} />
                </div>
              </>
            )}

            {status[i] === "popped" && (
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={
                  unlocked
                    ? "flex items-center gap-1 rounded-full border-2 px-3.5 py-2 shadow-sm"
                    : "flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 shadow-sm"
                }
                style={{
                  background: `linear-gradient(160deg, ${color.bg}30, ${color.bg}10)`,
                  borderColor: `${color.pop}55`,
                }}
              >
                <motion.span
                  layout="position"
                  className="font-dancing-script font-bold whitespace-nowrap"
                  style={{ color: color.pop, fontSize: unlocked ? "1.15rem" : "1.5rem" }}
                >
                  {BALLOON_WORDS[i]}
                </motion.span>
                {!unlocked && <span className="text-base">✨</span>}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Trailing flourish once the sentence has assembled into one line */}
      <div
        className="transition-all duration-500"
        style={{
          opacity: unlocked ? 1 : 0,
          transform: unlocked ? "translateY(0) scale(1)" : "translateY(10px) scale(0.9)",
        }}
      >
        <span className="text-2xl">💕</span>
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
