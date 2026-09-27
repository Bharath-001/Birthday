import type { Metadata } from "next";
import { Poppins, Dancing_Script, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--next-font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--next-font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  variable: "--next-font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Happy Birthday, Linda! 🎉",
  description: "A personalized birthday surprise for Linda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
