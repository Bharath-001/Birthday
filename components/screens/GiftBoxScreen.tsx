"use client";

import { useState } from "react";
import GiftPhaseScreen from "@/components/screens/GiftPhaseScreen";
import CelebrationScreen from "@/components/screens/CelebrationScreen";
import LoveLetterBook from "@/components/love-letter-book/LoveLetterBook";
import { fireConfetti, miniConfetti } from "@/lib/confetti";
import type { GiftPhase } from "@/types";

interface GiftBoxScreenProps {
  onReplay: () => void;
}

export default function GiftBoxScreen({ onReplay }: GiftBoxScreenProps) {
  const [phase, setPhase] = useState<GiftPhase>("gift");
  const [memoryVisible, setMemoryVisible] = useState(false);
  const [letterBtnVisible, setLetterBtnVisible] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (phase !== "gift") return;
    const rect = e.currentTarget.getBoundingClientRect();
    miniConfetti({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    });
    setTimeout(fireConfetti, 200);
    setPhase("celebration");
    setTimeout(() => setMemoryVisible(true), 900);
    setTimeout(() => setLetterBtnVisible(true), 1900);
  };

  if (phase === "gift") {
    return <GiftPhaseScreen onOpen={handleOpen} />;
  }

  if (phase === "letter") {
    return (
      <div className="animate-letter-reveal w-full">
        <LoveLetterBook onFinish={() => setPhase("celebration")} />
      </div>
    );
  }

  return (
    <CelebrationScreen
      memoryVisible={memoryVisible}
      letterBtnVisible={letterBtnVisible}
      onOpenLetter={() => setPhase("letter")}
      onReplay={onReplay}
    />
  );
}
