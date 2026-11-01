'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from './Reveal';

// Every figure here is on the CV: Artim Labs and PhatOps
const stats = [
  { value: 6, label: 'Live production systems' },
  { value: 7, label: 'Client brands' },
  { value: 4, label: 'Sectors' },
  { value: 20, label: 'Daily users on PhatOps' },
];

function CountUp({ to, start }: { to: number; start: boolean }) {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? to : 0);

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setShown(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: v => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, to, reduceMotion]);

  return <span aria-hidden="true">{shown}</span>;
}

export function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section aria-label="Key numbers" className="relative bg-[#040404] border-t border-white/5 px-6 py-14 md:py-16">
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white tabular-nums">
              <span className="sr-only">{stat.value}</span>
              <CountUp to={stat.value} start={inView} />
            </p>
            <p className="mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
