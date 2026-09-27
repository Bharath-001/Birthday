export type Step = 1 | 2 | 3 | 4 | 5;

export type BouquetSubStep = "bouquet" | "letter";

export type GiftPhase = "gift" | "celebration" | "letter";

export type FlipDirection = "fwd" | "bwd";

export type BookAnimPhase = "idle" | "exit-fwd" | "exit-bwd" | "enter-fwd" | "enter-bwd";

export interface BalloonColor {
  bg: string;
  pop: string;
  label: string;
}

export interface MemoryCardData {
  emoji: string;
  caption: string;
  bg: string;
  rot: number;
}

export interface ConfettiOrigin {
  x: number;
  y: number;
}

export interface StepScreenProps {
  onContinue: () => void;
}
