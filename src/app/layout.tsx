import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { FloatingGithub } from "@/components/FloatingGithub";
import { FloatingLinkedin } from "@/components/FloatingLinkedin";

import { MouseGlow } from "@/components/MouseGlow";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-caveat' });

export const metadata: Metadata = {
  title: "Sahadh Portfolio",
  description: "Portfolio showcasing premium web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#050505] text-foreground font-sans ${caveat.variable}`}
      >
        <MouseGlow />
        <Cursor />
        <Navigation />
        <FloatingLinkedin />
        <FloatingGithub />
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
