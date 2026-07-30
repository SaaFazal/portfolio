'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Magnetic } from './Magnetic';
import { User, FolderGit2, FileText, Send, Award } from 'lucide-react';

export function Navigation() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('screenshot') === 'true') {
        setIsHidden(true);
      }
    }
  }, []);

  if (isHidden) return null;

  return (
    <>
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 hidden md:flex">
        <Magnetic>
          <Link href="#about" className="w-24 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[9px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
            About
          </Link>
        </Magnetic>
        <Magnetic>
          <Link href="#projects" className="w-24 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[9px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
            Projects
          </Link>
        </Magnetic>
        <Magnetic>
          <Link href="#certifications" className="w-24 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[9px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
            Certs
          </Link>
        </Magnetic>
        <div className="relative group flex justify-center">
          <div className="w-24 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[9px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl cursor-default">
            CV
          </div>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <a href="/SahadhCV.pdf" target="_blank" rel="noopener noreferrer" className="w-32 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg text-white font-bold text-[9px] tracking-widest hover:bg-primary transition-all duration-300 uppercase text-center shadow-xl whitespace-nowrap">
              Data Analyst
            </a>
            <a href="/SFM_CV.pdf" target="_blank" rel="noopener noreferrer" className="w-32 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg text-white font-bold text-[9px] tracking-widest hover:bg-primary transition-all duration-300 uppercase text-center shadow-xl whitespace-nowrap">
              Software & AI
            </a>
          </div>
        </div>
        <Magnetic>
          <Link href="#contact" className="w-24 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white font-bold text-[9px] tracking-[0.2em] hover:bg-primary transition-all duration-300 uppercase flex items-center justify-center text-center shadow-xl">
            Contact
          </Link>
        </Magnetic>
      </nav>

      {/* Mobile Floating Bottom Dock */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[450px] h-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full flex md:hidden items-center justify-around px-1.5 shadow-2xl">
        <Link href="#about" className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all p-1.5">
          <User size={16} />
          <span className="text-[8px] font-bold tracking-widest uppercase">About</span>
        </Link>
        <Link href="#projects" className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all p-1.5">
          <FolderGit2 size={16} />
          <span className="text-[8px] font-bold tracking-widest uppercase">Work</span>
        </Link>
        <Link href="#certifications" className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all p-1.5">
          <Award size={16} />
          <span className="text-[8px] font-bold tracking-widest uppercase">Certs</span>
        </Link>
        <div className="relative group">
          <div className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all p-1.5 cursor-pointer">
            <FileText size={16} />
            <span className="text-[8px] font-bold tracking-widest uppercase">CV</span>
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <a href="/SahadhCV.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-white font-bold text-[9px] tracking-widest hover:bg-primary transition-all duration-300 uppercase text-center shadow-xl">
              Data Analyst
            </a>
            <a href="/SFM_CV.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-white font-bold text-[9px] tracking-widest hover:bg-primary transition-all duration-300 uppercase text-center shadow-xl">
              Software & AI
            </a>
          </div>
        </div>
        <Link href="#contact" className="flex flex-col items-center gap-1 text-white/70 hover:text-white hover:scale-110 transition-all p-1.5">
          <Send size={16} />
          <span className="text-[8px] font-bold tracking-widest uppercase">Contact</span>
        </Link>
      </nav>
    </>
  );
}
