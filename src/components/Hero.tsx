'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl"
            >
                <div className="flex flex-col mb-6">
                    <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tight text-white leading-none">
                        Sahadh <span className="text-white/40">Fazal</span>
                    </h1>
                </div>

                <p className="text-white/60 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-10 max-w-xl">
                    Software Engineer | AI Engineer
                </p>

                <p className="text-white/40 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed px-4">
                    Architecting <span className="text-white font-medium">Autonomous Systems</span> and <span className="text-white font-medium">Neural Workflows</span> for the next generation of intelligence.
                </p>

                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <Link href="#projects" className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white font-bold text-[10px] tracking-widest hover:bg-white hover:text-black transition-all uppercase shadow-xl">
                        View Work
                    </Link>
                    <Link href="#contact" className="px-8 py-3 bg-white text-black rounded-full font-bold text-[10px] tracking-widest hover:bg-white/90 transition-all uppercase shadow-xl">
                        Contact
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
