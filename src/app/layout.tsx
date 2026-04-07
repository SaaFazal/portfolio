import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navigation } from "@/components/Navigation";
import { FloatingGithub } from "@/components/FloatingGithub";
import { FloatingLinkedin } from "@/components/FloatingLinkedin";

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
        <div className="fixed inset-0 bg-background overflow-hidden pointer-events-none">
          {/* Main Background Glow */}
          <div className="absolute inset-0 bg-circle-glow opacity-30" />
          
          {/* Subtle Premium Dot Grid */}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-[0.4]" 
               style={{ 
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)`,
                 backgroundSize: '32px 32px'
               }} 
          />
          
          {/* Secondary Layer for Depth */}
          <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_80%)] opacity-[0.1]"
               style={{ 
                 backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                 backgroundSize: '64px 64px'
               }} 
          />
        </div>
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
