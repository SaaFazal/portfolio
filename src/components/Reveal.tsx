'use client';
import { motion, MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

// One easing and duration for every entrance on the site
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const REVEAL_DURATION = 0.5;

// Framer skips transform animations for visitors who ask for reduced motion
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Section headings fade and slide up once as they enter the viewport
export function RevealHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: REVEAL_DURATION, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
