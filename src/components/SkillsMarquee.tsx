'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  colorClass: string;
  logo: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "Python",
    colorClass: "hover:text-[#3776AB] hover:border-[#3776AB]/40 hover:bg-[#3776AB]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
        <path fill="#3776AB" d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.7h3v1h-4.3c-2.3 0-2.3 2-2.3 2v3.7c0 .8.7 1.4 1.4 1.4h1.1v-1.7c0-1.6 1.3-2.9 2.9-2.9h3.7V5.5c0-3.5-3.6-3.5-3.6-3.5z"/>
        <path fill="#FFE873" d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.7h-3v-1h4.3c2.3 0 2.3-2 2.3-2v-3.7c0-.8-.7-1.4-1.4-1.4h-1.1v1.7c0 1.6-1.3 2.9-2.9 2.9H9.5v3.1c0 3.5 3.6 3.5 3.6 3.5z"/>
      </svg>
    )
  },
  {
    name: "Java",
    colorClass: "hover:text-[#F89820] hover:border-[#F89820]/40 hover:bg-[#F89820]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="#F89820" strokeWidth="2">
        <path d="M6 9h10v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V9z"/>
        <path d="M16 11h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2"/>
        <path d="M10 2c0 2-2 3-2 5M13 3c0 2-2 3-2 5"/>
      </svg>
    )
  },
  {
    name: "C++",
    colorClass: "hover:text-[#00599C] hover:border-[#00599C]/40 hover:bg-[#00599C]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#00599C">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm1 12h-2v2H9v-2H7v-2h2V9h2v2h2v2zm6 0h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    colorClass: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/40 hover:bg-[#F7DF1E]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#F7DF1E">
        <rect width="24" height="24" rx="3"/>
        <text x="14" y="19" fill="#000000" fontSize="12" fontWeight="bold" fontFamily="sans-serif">JS</text>
      </svg>
    )
  },
  {
    name: "TypeScript",
    colorClass: "hover:text-[#3178C6] hover:border-[#3178C6]/40 hover:bg-[#3178C6]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#3178C6">
        <rect width="24" height="24" rx="3"/>
        <text x="13" y="19" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
      </svg>
    )
  },
  {
    name: "SQL",
    colorClass: "hover:text-[#00758F] hover:border-[#00758F]/40 hover:bg-[#00758F]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#00758F]" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/>
      </svg>
    )
  },
  {
    name: "React",
    colorClass: "hover:text-[#61DAFB] hover:border-[#61DAFB]/40 hover:bg-[#61DAFB]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 flex-shrink-0 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    colorClass: "hover:text-white hover:border-white/30 hover:bg-white/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" fill="#000" stroke="#333"/>
        <path d="M9 17V7l7 10V7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Django",
    colorClass: "hover:text-[#092E20] hover:border-[#092E20]/40 hover:bg-[#092E20]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#092E20]" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <text x="8" y="16" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="serif">d</text>
      </svg>
    )
  },
  {
    name: "Flask",
    colorClass: "hover:text-[#e8e8e8] hover:border-white/20 hover:bg-white/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3h6M10 3v5l-6 9v2h16v-2l-6-9V3"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    colorClass: "hover:text-[#339933] hover:border-[#339933]/40 hover:bg-[#339933]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#339933]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
        <path d="M12 22V12M3 7l9 5 9-5"/>
      </svg>
    )
  },
  {
    name: "Docker",
    colorClass: "hover:text-[#2496ED] hover:border-[#2496ED]/40 hover:bg-[#2496ED]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 flex-shrink-0 text-[#2496ED]" fill="currentColor">
        <rect x="5" y="4" width="3" height="3" rx="0.5"/>
        <rect x="9" y="4" width="3" height="3" rx="0.5"/>
        <rect x="13" y="4" width="3" height="3" rx="0.5"/>
        <rect x="9" y="8" width="3" height="3" rx="0.5"/>
        <rect x="13" y="8" width="3" height="3" rx="0.5"/>
        <path d="M2 14c0 3.5 3.5 4 7 4h8c3.5 0 5-1.5 5-4.5 0-1-.5-2-1.5-2.5C18.5 10 16 12 12 12c-4 0-4-3-8-2-1 .5-2 1.5-2 4z"/>
      </svg>
    )
  },
  {
    name: "AWS",
    colorClass: "hover:text-[#FF9900] hover:border-[#FF9900]/40 hover:bg-[#FF9900]/5",
    logo: (
      <div className="flex flex-col items-center justify-center -space-y-1">
        <span className="font-sans font-black tracking-tight text-[8px] text-[#FF9900] select-none">aws</span>
        <svg viewBox="0 0 24 6" className="w-5 h-1.5 text-[#FF9900]" fill="currentColor">
          <path d="M2 1 C 8 5, 16 5, 22 1 C 18 3, 10 3, 2 1 Z" />
        </svg>
      </div>
    )
  },
  {
    name: "TensorFlow",
    colorClass: "hover:text-[#FF6F00] hover:border-[#FF6F00]/40 hover:bg-[#FF6F00]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#FF6F00]" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5l7 3.5v6l-7 3.5-7-3.5v-6l7-3.5z"/>
      </svg>
    )
  },
  {
    name: "PyTorch",
    colorClass: "hover:text-[#EE4C2C] hover:border-[#EE4C2C]/40 hover:bg-[#EE4C2C]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#EE4C2C]" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s10 10 10 10c3 0 7-2 9-5-3 0-5-2-6-4s.5-4 2-6c-2-2-4-5-5-5z"/>
      </svg>
    )
  },
  {
    name: "Scikit-learn",
    colorClass: "hover:text-[#F7931E] hover:border-[#F7931E]/40 hover:bg-[#F7931E]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#F7931E]" fill="currentColor">
        <rect x="2" y="2" width="9" height="9" rx="1"/>
        <rect x="13" y="13" width="9" height="9" rx="1" fill="#0072C6"/>
      </svg>
    )
  },
  {
    name: "Git",
    colorClass: "hover:text-[#F05032] hover:border-[#F05032]/40 hover:bg-[#F05032]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#F05032]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M6 9v6M9 9h3a3 3 0 0 1 3 3v3"/>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    colorClass: "hover:text-[#06B6D4] hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/5",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#06B6D4]" fill="currentColor">
        <path d="M12 6.09c-2.97 0-4.95 1.48-5.94 4.45 1.48-1.98 3.22-2.72 5.2-2.23.99.25 1.7.98 2.49 1.79 1.28 1.32 2.76 2.84 5.94 2.84 2.97 0 4.95-1.48 5.94-4.45-1.48 1.98-3.22 2.72-5.2 2.23-.99-.25-1.7-.98-2.49-1.79-1.28-1.32-2.76-2.84-5.94-2.84zm-6 5.91c-2.97 0-4.95 1.48-5.94 4.45 1.48-1.98 3.22-2.72 5.2-2.23.99.25 1.7.98 2.49 1.79 1.28 1.32 2.76 2.84 5.94 2.84 2.97 0 4.95-1.48 5.94-4.45-1.48 1.98-3.22 2.72-5.2 2.23-.99-.25-1.7-.98-2.49-1.79-1.28-1.32-2.76-2.84-5.94-2.84z"/>
      </svg>
    )
  }
];

// Duplicate 4 times to guarantee it fills ultrawide monitors
const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

export function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden flex py-8 bg-black/20 backdrop-blur-md border-y border-white/5 shadow-2xl">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-6 px-4 whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 45, repeat: Infinity }}
      >
        {duplicatedSkills.map((skill, i) => (
          <div
            key={i}
            className={`flex-shrink-0 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/90 font-bold tracking-widest text-xs hover:scale-105 hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all duration-300 cursor-default shadow-lg flex items-center gap-2.5 ${skill.colorClass}`}
          >
            {skill.logo}
            <span>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
