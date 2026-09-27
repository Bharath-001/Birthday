import confetti from "canvas-confetti";
import type { ConfettiOrigin } from "@/types";

export function fireConfetti(): void {
  const count = 200;
  const defaults: confetti.Options = { origin: { y: 0.6 }, zIndex: 9999 };

  const fire = (particleRatio: number, opts: confetti.Options) =>
    confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });

  fire(0.25, { spread: 26, startVelocity: 55, colors: ["#F9A8C4", "#E879A0", "#FFF5F7"] });
  fire(0.2, { spread: 60, colors: ["#F9A8C4", "#D7BDE2", "#AED6F1"] });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ["#fff", "#F9A8C4", "#A9DFBF"] });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

export function miniConfetti(origin: ConfettiOrigin = { x: 0.5, y: 0.5 }): void {
  confetti({
    particleCount: 60,
    spread: 80,
    origin,
    zIndex: 9999,
    colors: ["#F9A8C4", "#E879A0", "#D7BDE2", "#AED6F1", "#A9DFBF", "#fff"],
  });
}
