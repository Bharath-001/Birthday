"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  emoji: string;
}

const PETAL_EMOJIS = ["🌸", "✨", "💕", "🌷", "⭐"];
const PETAL_COUNT = 12;

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 8}s`,
        size: 10 + Math.random() * 14,
        emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute animate-float-up"
          style={{
            left: p.left,
            bottom: "-30px",
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: 0.35,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
