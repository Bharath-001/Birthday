"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { BookAnimPhase, FlipDirection } from "@/types";
import SvgDefs from "@/components/love-letter-book/SvgDefs";
import Page1 from "@/components/love-letter-book/pages/Page1";
import Page2 from "@/components/love-letter-book/pages/Page2";
import Page3 from "@/components/love-letter-book/pages/Page3";
import Page4 from "@/components/love-letter-book/pages/Page4";

interface LoveLetterBookProps {
  onFinish: () => void;
}

const TOTAL_PAGES = 4;
const FLIP_MS = 360;

const PHASE_TO_CLASS: Record<BookAnimPhase, string> = {
  idle: "",
  "exit-fwd": "book-exit-fwd",
  "exit-bwd": "book-exit-bwd",
  "enter-fwd": "book-enter-fwd",
  "enter-bwd": "book-enter-bwd",
};

export default function LoveLetterBook({ onFinish }: LoveLetterBookProps) {
  const [page, setPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [animPhase, setAnimPhase] = useState<BookAnimPhase>("idle");
  const isAnimating = useRef(false);

  const flip = useCallback(
    (dir: FlipDirection) => {
      if (isAnimating.current) return;
      const next = dir === "fwd" ? page + 1 : page - 1;
      if (next < 0 || next > TOTAL_PAGES - 1) return;
      isAnimating.current = true;

      setAnimPhase(dir === "fwd" ? "exit-fwd" : "exit-bwd");

      setTimeout(() => {
        setDisplayPage(next);
        setPage(next);
        setAnimPhase(dir === "fwd" ? "enter-fwd" : "enter-bwd");
        setTimeout(() => {
          setAnimPhase("idle");
          isAnimating.current = false;
        }, FLIP_MS);
      }, FLIP_MS);
    },
    [page],
  );

  const animClass = PHASE_TO_CLASS[animPhase];

  const pages = [
    <Page1 key={0} />,
    <Page2 key={1} />,
    <Page3 key={2} />,
    <Page4 key={3} onFinish={onFinish} />,
  ];

  return (
    <>
      <SvgDefs />

      <div className="flex w-full flex-col items-center gap-4">
        {/* Page number tag */}
        <div className="flex items-center gap-2 opacity-60">
          <div className="h-px w-9 bg-[#8B6B4A]" />
          <span className="font-caveat text-[0.95rem] tracking-wide text-[#5c3d2a]">
            Page {displayPage + 1} of {TOTAL_PAGES}
          </span>
          <div className="h-px w-9 bg-[#8B6B4A]" />
        </div>

        {/* The page itself */}
        <div className="w-full" style={{ perspective: "1400px" }}>
          <div
            className={`relative w-full rounded ${animClass}`}
            style={{ transformOrigin: "center center", willChange: "transform, opacity" }}
          >
            {/* Paper background — the deckled/torn-edge warp is confined to this layer only,
                so it never distorts the readable text sitting in the layer above it. */}
            <div
              className="pointer-events-none absolute inset-0 rounded"
              style={{
                background:
                  "radial-gradient(ellipse at 25% 20%, rgba(255,255,255,0.22) 0%, transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(255,255,255,0.1) 0%, transparent 40%), linear-gradient(160deg, #faf4e4 0%, #f4ecd8 28%, #ede0c4 58%, #e6d4b4 80%, #dfc9a4 100%)",
                boxShadow:
                  "inset 0 0 50px rgba(160, 110, 50, 0.18), inset 0 0 120px rgba(130, 85, 30, 0.07), 2px 4px 12px rgba(0,0,0,0.14), 6px 10px 32px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.08)",
                filter: "url(#edge-tear)",
              }}
            />

            {/* Content layer — crisp, unfiltered text */}
            <div className="relative" style={{ padding: "32px 28px 56px" }}>
              {/* Paper grain overlay */}
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(139,107,74,0.03) 28px, rgba(139,107,74,0.03) 29px)",
                }}
              />
              {/* Aged vignette edges */}
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded"
                style={{ boxShadow: "inset 0 0 28px rgba(100,60,20,0.2), inset 0 0 8px rgba(80,40,10,0.15)" }}
              />
              {/* Fold line */}
              <div
                className="pointer-events-none absolute top-1/2 right-[10%] left-[10%] z-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(139,107,74,0.12), transparent)" }}
              />

              <div className="relative z-[1]">{pages[displayPage]}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex w-full items-center justify-between px-1">
          <button
            onClick={() => flip("bwd")}
            disabled={page === 0}
            className="nav-btn font-caveat flex items-center gap-1.5 rounded-full border border-[rgba(139,107,74,0.3)] bg-white/60 px-4.5 py-2 text-base text-[#5c3d2a] backdrop-blur-sm transition-all"
            style={{ opacity: page === 0 ? 0.35 : 0.85, cursor: page === 0 ? "not-allowed" : "pointer" }}
          >
            <ChevronLeft size={16} /> Prev
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <div
                key={i}
                className="h-1.75 rounded-full transition-all duration-300"
                style={{
                  width: i === page ? 22 : 7,
                  background: i === page ? "#8B1A1A" : "rgba(139,107,74,0.35)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => flip("fwd")}
            disabled={page === TOTAL_PAGES - 1}
            className="nav-btn font-caveat flex items-center gap-1.5 rounded-full border border-[rgba(139,107,74,0.3)] bg-white/60 px-4.5 py-2 text-base text-[#5c3d2a] backdrop-blur-sm transition-all"
            style={{
              opacity: page === TOTAL_PAGES - 1 ? 0.35 : 0.85,
              cursor: page === TOTAL_PAGES - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
