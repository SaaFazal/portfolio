'use client';
import Link from 'next/link';
import { Magnetic } from './Magnetic';

export function Navigation() {
  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-6 hidden md:flex">
      <Magnetic>
        <Link href="#about" className="w-24 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[10px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
          About
        </Link>
      </Magnetic>
      <Magnetic>
        <Link href="#projects" className="w-24 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[10px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
          Projects
        </Link>
      </Magnetic>
      <Magnetic>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-24 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[10px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
          Resume
        </a>
      </Magnetic>
      <Magnetic>
        <Link href="#contact" className="w-24 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[10px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
          Contact
        </Link>
      </Magnetic>
    </nav>
  );
}
