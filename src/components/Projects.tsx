'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Send } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { TiltCard } from './TiltCard';
import { HandCanvas } from './HandCanvas';

export function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Mobile gets a bigger x range because cards are wider relative to viewport
    // Use function form of useTransform so it reads the live value on each frame
    const isMobileRef = useRef(false);
    useEffect(() => {
        const check = () => { isMobileRef.current = window.innerWidth < 768; };
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const x = useTransform(scrollYProgress, (v: number) => {
        // Mobile: -93% brings the CTA fully into view. Desktop: -80%
        const end = isMobileRef.current ? -93 : -80;
        return `${v * end}%`;
    });

    return (
        <section id="projects" ref={targetRef} className="relative h-[900vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10">

                {/* Frame-by-frame Hand Canvas - Buttery smooth, Veo cropped */}
                <HandCanvas scrollYProgress={scrollYProgress} />

                <motion.div style={{ x }} className="flex items-center px-6 md:px-24 z-10 relative">
                    {/* Header Module */}
                    <div className="flex-shrink-0 w-[220px] md:w-[350px] pr-8 md:pr-16">
                        <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-none text-white uppercase italic">
                            PROJECTS
                        </h2>
                    </div>

                    {/* Spacing for initial entry */}
                    <div className="flex-shrink-0 w-[60px] md:w-[200px]" />

                    {/* Projects Track */}
                    <div className="flex gap-8 md:gap-16">
                        {projects.map((project, index) => (
                            <ProjectModule
                                key={project.id}
                                project={project}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isMobileRef={isMobileRef}
                            />
                        ))}
                    </div>

                    {/* Final CTA - desktop: shifted right to meet finger, mobile: centered */}
                    <div className="flex-shrink-0 w-[300px] md:w-[800px] flex flex-col justify-center items-center text-center px-8 md:px-24 translate-y-[-60px] translate-x-[40px] md:translate-x-[120px]">
                        <h3 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter leading-tight italic">Ready to<br/>scale?</h3>
                        <Link href="#contact" className="group flex items-center gap-3 px-8 md:px-12 py-4 md:py-6 bg-white text-black rounded-full transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                            <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em]">Contact</span>
                            <Send size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectModule({ project, index, scrollYProgress, isMobileRef }: { project: any, index: number, scrollYProgress: any, isMobileRef: React.MutableRefObject<boolean> }) {
    // Sync animation start to when card becomes visible horizontally
    // Mobile cards are 75vw, desktop are 420px — timing is calculated per device
    const start = index * 0.07;
    const end = start + 0.10;

    const y = useTransform(
        scrollYProgress,
        (v: number) => {
            // Interpolate: before start = offset, after end = 0
            const offset = index % 2 === 0 ? -100 : 100;
            const progress = Math.min(1, Math.max(0, (v - start) / (end - start)));
            return offset * (1 - progress);
        }
    );

    const opacity = useTransform(
        scrollYProgress,
        (v: number) => {
            const progress = Math.min(1, Math.max(0, (v - start) / 0.06));
            return progress;
        }
    );

    return (
        <motion.div
            style={{ y, opacity }}
            className="flex-shrink-0 w-[75vw] md:w-[420px] relative group"
        >
            <div className="absolute -top-12 -left-6 text-9xl font-black opacity-[0.03] text-white leading-none select-none pointer-events-none">
                {index + 1}
            </div>

            <TiltCard className="h-[50vh] md:h-[60vh]">
                <div className="group relative bg-[#121212] border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-700 h-full flex flex-col shadow-2xl overflow-hidden">
                    <div className="flex-1 relative overflow-hidden bg-black">
                        {project.image ? (
                            <>
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                                <span className="text-[8px] font-bold tracking-[0.4em] uppercase opacity-20">{project.title}</span>
                            </div>
                        )}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col relative bg-[#121212]">
                        {/* Clean number label */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] font-black text-primary/80 tracking-[0.3em]">{String(index + 1).padStart(2, '0')}</span>
                            <div className="h-[1px] w-4 bg-white/10" />
                        </div>

                        {/* Original title - no uppercase */}
                        <h3 className="text-lg md:text-2xl font-black mb-2 tracking-tight text-white leading-snug">{project.title}</h3>

                        {/* Short description */}
                        <p className="text-white/40 text-[11px] leading-relaxed mb-4 md:mb-6 line-clamp-2">{project.description}</p>

                        <div className="flex items-center justify-between mt-auto">
                            <Link
                                href={project.details ? `/projects/${project.id}` : (project.link || '#')}
                                className="group/link flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                            >
                                <span className="text-[9px] font-black uppercase tracking-[0.2em]">View</span>
                                <ArrowUpRight size={14} />
                            </Link>

                            <Zap size={14} className="text-white/10" />
                        </div>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
}
