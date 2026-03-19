'use client';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  progress: MotionValue<number>;
}

export function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(progress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.2], [0, -100]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.5], [100, -100]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.8], [100, -100]);

  // Section 4: 85% to 100%
  const opacity4 = useTransform(progress, [0.8, 0.9, 1], [0, 1, 0]);
  const y4 = useTransform(progress, [0.8, 1], [100, -100]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center p-8">
      
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-xl shadow-black">
          Sahadh Fazal Mohamed
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide shadow-black drop-shadow-md">
          Software Engineer | Cloud | AI
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center max-w-5xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl shadow-black w-full text-left">
          I build <br/><span className="text-primary font-caveat text-6xl md:text-8xl">digital experiences.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center max-w-5xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl shadow-black w-full text-right">
          Bridging <br/><span className="text-primary font-caveat text-6xl md:text-8xl">design & engineering.</span>
        </h2>
      </motion.div>
      
      {/* Section 4 */}
      <motion.div 
        style={{ opacity: opacity4, y: y4 }}
        className="absolute pb-20 bottom-0 inset-0 flex flex-col items-center justify-end max-w-5xl mx-auto px-4"
      >
        <p className="text-white/60 uppercase tracking-[0.3em] text-sm animate-pulse mb-8 drop-shadow-xl shadow-black">
          Scroll to explore projects ↓
        </p>
      </motion.div>

    </div>
  );
}
