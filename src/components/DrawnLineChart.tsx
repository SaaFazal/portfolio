'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from './Reveal';

// Decorative trend line for the Data & Analytics card; it carries no real figures
const points = [
  [0, 34], [14, 30], [28, 32], [42, 24], [56, 26], [70, 18], [84, 20], [98, 12], [112, 14], [126, 6],
];
const path = points.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');

export function DrawnLineChart() {
  // Reduced motion shows the finished line straight away
  const still = useReducedMotion();
  return (
    <svg viewBox="-2 0 132 40" className="w-full max-w-[220px] h-10 mt-3" aria-hidden="true" focusable="false">
      <line x1="0" y1="38" x2="128" y2="38" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <motion.path
        d={path}
        fill="none"
        stroke="#ff3d00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={still ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, ease: EASE_OUT }}
      />
      <motion.circle
        cx="126"
        cy="6"
        r="3"
        fill="#ff3d00"
        initial={still ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </svg>
  );
}
