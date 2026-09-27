import type { BalloonColor, MemoryCardData } from "@/types";

export const BALLOON_WORDS: readonly string[] = ["You", "Are", "So", "Special"];

export const BALLOON_COLORS: readonly BalloonColor[] = [
  { bg: "#AED6F1", pop: "#5DADE2", label: "Blue" },
  { bg: "#F9A8C4", pop: "#E879A0", label: "Pink" },
  { bg: "#A9DFBF", pop: "#58D68D", label: "Green" },
  { bg: "#D7BDE2", pop: "#A569BD", label: "Purple" },
];

export const NO_BUTTON_MESSAGES: readonly string[] = [
  "Nope! You have to say Yes! 🥺",
  "Come on... please? 🙏",
  "You really can't say No today! 💕",
  "Linda... please?? 🐱",
  "Okay I'll wait forever then 🫶",
];

export const MEMORY_CARDS: readonly MemoryCardData[] = [
  { image: "/images/memory-boba.png", caption: "Boba", bg: "#eee", rot: 2.0 },
  { image: "/images/memory-beach.png", caption: "Beach", bg: "#eee", rot: -1.5 },
  { image: "/images/memory-booth.png", caption: "Just us", bg: "#eee", rot: 1.0 },
];
