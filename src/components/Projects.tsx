'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { TiltCard } from './TiltCard';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 relative z-20 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Featured <span className="text-gradient-primary">Projects</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A selection of my recent work in web and mobile development.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <div className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-2xl">
                                    <div className="aspect-video bg-black/60 relative overflow-hidden" style={{ transform: "translateZ(40px)" }}>
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105 transition-transform duration-700">
                                                <span className="text-sm font-mono tracking-widest uppercase">{project.title}</span>
                                            </div>
                                        )}

                                        {/* Overlay CTA */}
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                            <Link href={project.link || '#'} className="p-4 rounded-full bg-white text-black hover:scale-110 shadow-xl transition-transform duration-300">
                                                <ArrowUpRight size={24} />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-6 flex-1">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
