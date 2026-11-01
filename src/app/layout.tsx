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
  metadataBase: new URL('https://sahadhfazal.com'),
  alternates: {
    canonical: '/',
  },
  title: "Sahadh Fazal Mohamed | Data Analyst, AI Engineer, Software Engineer",
  description: "Data Analyst and AI Engineer. I turn messy business data into reports people actually use, and build AI tools that don't make things up. Power BI, SQL, Python and RAG. UK based, open to graduate data and BI roles.",
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/profile.jpeg' }],
    shortcut: '/favicon.ico',
    apple: '/profile.jpeg',
  },
  openGraph: {
    type: 'website',
    url: 'https://sahadhfazal.com',
    siteName: 'Sahadh Fazal Mohamed',
    title: 'Sahadh Fazal Mohamed | Data Analyst, AI Engineer, Software Engineer',
    description: "I turn messy business data into reports people actually use, and build AI tools that don't make things up.",
    locale: 'en_GB',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: "Sahadh Fazal Mohamed. I turn messy business data into reports people actually use, and build AI tools that don't make things up.",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahadh Fazal Mohamed | Data Analyst, AI Engineer, Software Engineer',
    description: "I turn messy business data into reports people actually use, and build AI tools that don't make things up.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sahadh Fazal Mohamed",
              "url": "https://sahadhfazal.com",
              "sameAs": [
                "https://www.linkedin.com/in/sahadhfazal",
                "https://github.com/SaaFazal"
              ],
              "jobTitle": "Data Analyst, AI Engineer, Software Engineer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Nottingham Trent University"
              }
            })
          }}
        />
      </head>
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
