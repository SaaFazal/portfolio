'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Zap, Send } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { useRef } from 'react';
import { TiltCard } from './TiltCard';
import { HandCanvas } from './HandCanvas';

export function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10">

                {/* Frame-by-frame Hand Canvas - Buttery smooth, Veo cropped */}
                <HandCanvas scrollYProgress={scrollYProgress} />

                <motion.div style={{ x }} className="flex items-center px-12 md:px-24 z-10 relative">
                    {/* Header Module */}
                    <div className="flex-shrink-0 w-[350px] pr-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-white uppercase italic">
                            PROJECTS
                        </h2>
                    </div>

                    {/* Spacing for initial entry */}
                    <div className="flex-shrink-0 w-[200px]" />

                    {/* Projects Track */}
                    <div className="flex gap-16">
                        {projects.map((project, index) => (
                            <ProjectModule
                                key={project.id}
                                project={project}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>

                    {/* Final CTA - Aligned with the pointing finger */}
                    <div className="flex-shrink-0 w-[800px] flex flex-col justify-center items-center text-center px-24 translate-y-[-60px] translate-x-[120px]">
                        <h3 className="text-4xl md:text-6xl font-black mb-8 text-white uppercase tracking-tighter leading-tight italic">Ready to<br/>scale?</h3>
                        <Link href="#contact" className="group flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                            <span className="text-[12px] font-black uppercase tracking-[0.4em]">Contact</span>
                            <Send size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectModule({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) {
    // Sync animation start to when card becomes visible horizontally
    const start = index * 0.07;
    const end = start + 0.10;

    const y = useTransform(
        scrollYProgress,
        [start, end],
        [index % 2 === 0 ? -100 : 100, 0],
        { clamp: true }
    );

    const opacity = useTransform(
        scrollYProgress,
        [start, start + 0.06],
        [0, 1]
    );

    return (
        <motion.div
            style={{ y, opacity }}
            className="flex-shrink-0 w-[85vw] md:w-[420px] relative group"
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

                    <div className="p-8 flex flex-col relative bg-[#121212]">
                        {/* Clean number label */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[11px] font-black text-primary/80 tracking-[0.3em]">{String(index + 1).padStart(2, '0')}</span>
                            <div className="h-[1px] w-4 bg-white/10" />
                        </div>
                        
                        {/* Original title - no uppercase */}
                        <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight text-white leading-snug">{project.title}</h3>
                        
                        {/* Short description */}
                        <p className="text-white/40 text-[11px] leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                        
                        <div className="flex items-center justify-between mt-auto">
                            <Link
                                href={project.details ? `/projects/${project.id}` : (project.link || '#')}
                                className="group/link flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500"
                            >
                                <span className="text-[9px] font-black uppercase tracking-[0.2em]">View</span>
                                <ArrowUpRight size={16} />
                            </Link>

                            <Zap size={16} className="text-white/10" />
                        </div>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
}
