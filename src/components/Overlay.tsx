'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, useReducedMotion, useTransform } from 'framer-motion';
import { ArrowDown, ChevronDown, FileText } from 'lucide-react';

interface OverlayProps {
  progress: MotionValue<number>;
}

// Tailwind v4 does not read tailwind.config.ts here, so the script accent is set directly
const accentStyle = { fontFamily: 'var(--font-caveat), cursive', color: '#ff3d00', fontWeight: 700 };

const cvOptions = [
  { label: 'Data Analyst CV', href: '/SahadhCV.pdf' },
  { label: 'Software & AI CV', href: '/SFM_CV.pdf' },
];

function CvMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
      >
        <FileText size={14} aria-hidden="true" />
        Download CV
        <ChevronDown size={14} aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div role="menu" className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-xl border border-white/15 bg-black/90 backdrop-blur-xl p-1.5 shadow-2xl z-20">
          {cvOptions.map(option => (
            <a
              key={option.href}
              role="menuitem"
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Overlay({ progress }: OverlayProps) {
  const reduceMotion = useReducedMotion();

  // The intro stays readable for most of the sequence, then clears so the portrait finishes on its own
  const opacity = useTransform(progress, [0, 0.55, 0.8], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.8], [0, reduceMotion ? 0 : -80]);

  // Buttons stop catching clicks once the intro has faded
  const [interactive, setInteractive] = useState(true);
  useMotionValueEvent(progress, 'change', v => setInteractive(v < 0.75));

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center p-6">
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-3 tracking-tight text-white drop-shadow-xl">
          Sahadh Fazal Mohamed
        </h1>
        <p className="text-[11px] md:text-lg font-semibold text-white/85 tracking-[0.08em] md:tracking-[0.2em] uppercase mb-8 md:mb-10">
          Data Analyst | AI Engineer | Software Engineer
        </p>

        <p className="max-w-3xl text-xl md:text-4xl font-bold text-white leading-snug drop-shadow-xl">
          I turn messy business data into{' '}
          <span style={accentStyle} className="text-3xl md:text-6xl leading-none">reports people actually use</span>,
          {' '}and build AI tools that{' '}
          <span style={accentStyle} className="text-3xl md:text-6xl leading-none">don&apos;t make things up.</span>
        </p>

        <p className="mt-6 md:mt-8 text-xs md:text-sm text-white/80 tracking-wider">
          Currently open to graduate data and BI roles · London or Nottingham
        </p>

        <div className={`mt-8 flex flex-wrap items-center justify-center gap-3 ${interactive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            View projects
            <ArrowDown size={14} aria-hidden="true" />
          </a>
          <CvMenu />
        </div>
      </motion.div>
    </div>
  );
}
