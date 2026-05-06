'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-background">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-5xl"
            >
                {/* Decorative Script Text (Kept as accent) */}
                <div className="relative mb-8">
                    <span className="text-6xl md:text-8xl font-caveat text-primary opacity-90 -rotate-6 z-10 transform duration-500 hover:scale-110 cursor-default block">
                        code
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
                    Sahadh Fazal Mohamed
                </h1>

                <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-12">
                    Software Engineer | AI Developer
                </p>

                {/* Navigation Pills */}
                <div className="flex flex-col gap-4 w-full max-w-[200px]">
                    <Link href="#about" className="w-full py-3 bg-primary rounded-full text-white font-bold text-sm tracking-wide hover:scale-105 transition-transform uppercase flex items-center justify-center">
                        About Me
                    </Link>
                    <Link href="#projects" className="w-full py-3 bg-primary rounded-full text-white font-bold text-sm tracking-wide hover:scale-105 transition-transform uppercase flex items-center justify-center">
                        Projects
                    </Link>
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-primary rounded-full text-white font-bold text-sm tracking-wide hover:scale-105 transition-transform uppercase flex items-center justify-center">
                        Resume
                    </Link>
                    <Link href="#contact" className="w-full py-3 bg-primary rounded-full text-white font-bold text-sm tracking-wide hover:scale-105 transition-transform uppercase flex items-center justify-center">
                        Contact Me
                    </Link>
                </div>

            </motion.div>
        </section>
    );
}
