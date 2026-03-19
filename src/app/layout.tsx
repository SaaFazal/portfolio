import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";

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
        className={`antialiased bg-background text-foreground font-sans ${caveat.variable}`}
      >
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <Cursor />
        <Navigation />
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
