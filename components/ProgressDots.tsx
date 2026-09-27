import type { Step } from "@/types";

const STEPS: readonly Step[] = [1, 2, 3, 4, 5];

interface ProgressDotsProps {
  step: Step;
}

export default function ProgressDots({ step }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {STEPS.map((s) => (
        <div
          key={s}
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: s === step ? 20 : 8, background: s === step ? "#E879A0" : "#F9C4D4" }}
        />
      ))}
    </div>
  );
}
