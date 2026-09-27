import type { BalloonColor, MemoryCardData } from "@/types";

export const BALLOON_MESSAGES: readonly string[] = [
  "You light up every room you enter ✨",
  "You are endlessly kind, sweet, and strong 💪",
  "The world is so much better with you in it 🌸",
  "You deserve every joy this birthday brings 🎁",
];

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
  "Linda... please?? 🐻",
  "Okay I'll wait forever then 🫶",
];

export const MEMORY_CARDS: readonly MemoryCardData[] = [
  { emoji: "🌸", caption: "Beautiful you", bg: "linear-gradient(135deg,#FFE4EC,#FDDDE6)", rot: -2.5 },
  { emoji: "✨", caption: "Your sparkle", bg: "linear-gradient(135deg,#FFF9C4,#FFFDE7)", rot: 1.5 },
  { emoji: "💝", caption: "So much love", bg: "linear-gradient(135deg,#F8BBD0,#FCE4EC)", rot: -1.0 },
  { emoji: "🎀", caption: "Our moments", bg: "linear-gradient(135deg,#E8D5F0,#F3E5F5)", rot: 2.0 },
  { emoji: "🌷", caption: "Blooming always", bg: "linear-gradient(135deg,#C8E6C9,#DCEDC8)", rot: -1.5 },
  { emoji: "🧸", caption: "Always cherished", bg: "linear-gradient(135deg,#FFCCBC,#FFE0B2)", rot: 1.0 },
];
