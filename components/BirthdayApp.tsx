"use client";

import { useCallback, useState } from "react";
import FloatingPetals from "@/components/FloatingPetals";
import ProgressDots from "@/components/ProgressDots";
import WelcomeScreen from "@/components/screens/WelcomeScreen";
import BalloonPopScreen from "@/components/screens/BalloonPopScreen";
import CakeScreen from "@/components/screens/CakeScreen";
import BouquetLetterScreen from "@/components/screens/BouquetLetterScreen";
import GiftBoxScreen from "@/components/screens/GiftBoxScreen";
import { fireConfetti } from "@/lib/confetti";
import type { Step } from "@/types";

export default function BirthdayApp() {
  const [step, setStep] = useState<Step>(1);

  const goTo = useCallback((s: Step) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleYes = () => {
    fireConfetti();
    setTimeout(() => goTo(2), 600);
  };

  return (
    <div
      className="animate-bg-pulse relative flex min-h-screen items-center justify-center px-4 py-6"
      style={{
        background: "linear-gradient(160deg, #FFF5F7 0%, #FDDDE6 50%, #FFF0F5 100%)",
        backgroundSize: "200% 200%",
      }}
    >
      <FloatingPetals />

      <div className="relative z-[1] w-full max-w-[420px]">
        <div
          className="card rounded-[36px] px-6 py-8 backdrop-blur-2xl"
          style={{
            background: "rgba(255,255,255,0.88)",
            boxShadow: "0 16px 56px rgba(232,121,160,0.14), 0 4px 16px rgba(232,121,160,0.1)",
          }}
        >
          {step === 1 && <WelcomeScreen onYes={handleYes} />}
          {step === 2 && <BalloonPopScreen onContinue={() => goTo(3)} />}
          {step === 3 && <CakeScreen onContinue={() => goTo(4)} />}
          {step === 4 && <BouquetLetterScreen onContinue={() => goTo(5)} />}
          {step === 5 && <GiftBoxScreen onReplay={() => goTo(1)} />}
        </div>

        <div className="mt-5">
          <ProgressDots step={step} />
        </div>
      </div>
    </div>
  );
}
