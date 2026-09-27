"use client";

import { useState } from "react";
import type { MemoryCardData } from "@/types";

interface MemoryCardProps extends MemoryCardData {
  delay: number;
}

export default function MemoryCard({ emoji, caption, bg, rot, delay }: MemoryCardProps) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handleTap = () => {
    setTapped(true);
    setTimeout(() => setTapped(false), 380);
  };

  const computedTransform = tapped
    ? "rotate(0deg) scale(0.91)"
    : hovered
      ? "rotate(0deg) scale(1.1) translateY(-3px)"
      : `rotate(${rot}deg)`;

  return (
    <div className="animate-fade-slide-up" style={{ animationDelay: `${delay}s` }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={handleTap}
        className="flex cursor-pointer flex-col items-center bg-white px-1.5 pt-1.5 pb-0 transition-all"
        style={{
          boxShadow: hovered
            ? "0 12px 30px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.1)"
            : "0 3px 10px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.07)",
          transform: computedTransform,
          transition: "transform 0.32s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
        }}
      >
        <div
          className="flex aspect-square w-full shrink-0 items-center justify-center text-[1.75rem]"
          style={{ background: bg }}
        >
          {emoji}
        </div>
        <p className="font-dancing-script w-full px-1 pt-1.5 pb-2.5 text-center text-[0.68rem] leading-tight text-[#7A5C5C]">
          {caption}
        </p>
      </div>
    </div>
  );
}
