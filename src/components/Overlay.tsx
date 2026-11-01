'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, MotionValue, useMotionValueEvent, useReducedMotion, useTransform } from 'framer-motion';
import { ArrowDown, ChevronDown, FileText } from 'lucide-react';

interface OverlayProps {
  progress: MotionValue<number>;
}

// Tailwind v4 does not read tailwind.config.ts here, so the script accent is set directly.
// Caveat sits small for its size, so 1.3em makes it read the same height as the bold words.
const accentStyle = { fontFamily: 'var(--font-caveat), cursive', color: '#ff3d00', fontWeight: 700, fontSize: '1.3em', lineHeight: 1, textShadow: '0 2px 14px rgba(0,0,0,0.9), 0 0 4px rgba(0,0,0,0.6)' };

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
        className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 bg-black/50 backdrop-blur-md text-white text-[11px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
      >
        <FileText size={13} aria-hidden="true" />
        Download CV
        <ChevronDown size={13} aria-hidden="true" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        // Opens upwards because the buttons sit at the bottom of the screen
        <div role="menu" className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 rounded-xl border border-white/15 bg-black/90 backdrop-blur-xl p-1.5 shadow-2xl z-20">
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
  const shift = (from: number, to: number) => (reduceMotion ? [0, 0] : [from, to]);

  // Section 1: name, 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], shift(0, -100));

  // Section 2: left line, 20% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.5], shift(100, -100));

  // Section 3: right line, 50% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.8], shift(100, -100));

  // Section 4: buttons, from 80% and they stay until the projects arrive
  const opacity4 = useTransform(progress, [0.8, 0.9, 1], [0, 1, 1]);
  const y4 = useTransform(progress, [0.8, 0.9], shift(40, 0));

  // Buttons only catch clicks while they are visible
  const [buttonsLive, setButtonsLive] = useState(false);
  useMotionValueEvent(progress, 'change', v => setButtonsLive(v > 0.85));

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center p-8">

      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-xl">
          Sahadh Fazal Mohamed
        </h1>
        <p className="text-xs md:text-xl font-medium text-white/85 tracking-[0.15em] md:tracking-widest uppercase drop-shadow-xl">
          Data Analyst | AI Engineer | Software Engineer
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center max-w-5xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl w-full text-left">
          I turn messy business data <br/>into <span style={accentStyle}>reports people actually use.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center max-w-5xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl w-full text-right">
          And build AI tools <br/>that <span style={accentStyle}>don&apos;t make things up.</span>
        </h2>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-x-0 bottom-0 pb-24 md:pb-16 flex flex-col items-center px-4"
      >
        <div className={`flex flex-wrap items-center justify-center gap-3 ${buttonsLive ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-[11px] font-bold tracking-widest uppercase hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            View projects
            <ArrowDown size={13} aria-hidden="true" />
          </a>
          <CvMenu />
        </div>
      </motion.div>

    </div>
  );
}
