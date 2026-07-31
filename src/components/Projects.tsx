'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import Link from 'next/link';

const filters = ['All', 'Data & BI', 'AI & ML', 'Full Stack', 'Systems', 'Mobile'];

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(project => 
        activeFilter === 'All' ? true : project.filterCategory === activeFilter
    );

    return (
        <section id="projects" className="relative bg-[#040404] py-32 px-6 md:px-12 overflow-hidden border-t border-white/5">
            {/* Ambient section boundary glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            {/* Background glowing gradients */}
            <div className="absolute top-0 left-1/4 w-[30vw] h-[30vw] rounded-full bg-[#ff3d00]/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic mb-4">
                            Featured <span className="text-gradient-primary">Projects</span>
                        </h2>
                        <div className="h-[1px] w-24 bg-primary mx-auto mb-4" />
                        <p className="text-sm md:text-base text-white/50 tracking-widest uppercase mb-12">
                            Bridging Design & Engineering
                        </p>
                    </motion.div>
                    
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                                    activeFilter === filter 
                                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="space-y-32 md:space-y-48">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const isEven = index % 2 === 0;
                            const themeColor = project.theme?.accent || '#ff3d00';
                            
                            const showSectionHeader = activeFilter === 'All' && 
                                (index === 0 || project.section !== filteredProjects[index - 1].section);

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    {showSectionHeader && project.section && (
                                        <div className="absolute -top-20 md:-top-32 left-0 w-full flex items-center gap-6">
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                            <h3 className="text-xl md:text-2xl font-black text-white/80 tracking-widest uppercase italic">
                                                {project.section}
                                            </h3>
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                        </div>
                                    )}

                                    <div className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${
                                        isEven ? '' : 'md:flex-row-reverse'
                                    }`}>
                                        {/* Project Image Box */}
                                        <div className="w-full md:w-1/2 group relative">
                                            {/* Theme color outline glow */}
                                            <div 
                                                className="absolute -inset-1 rounded-2xl opacity-10 group-hover:opacity-20 transition duration-1000 blur-lg pointer-events-none"
                                                style={{ backgroundColor: themeColor }}
                                            />
                                            
                                            <div className="relative aspect-[16/10] w-full rounded-2xl border border-white/10 overflow-hidden bg-black/40 shadow-2xl">
                                                {project.image ? (
                                                    <>
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.title} 
                                                            loading="lazy"
                                                            decoding="async"
                                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700" 
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                                    </>
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                                                        <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-20">{project.title}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Project Description Box */}
                                        <div className="w-full md:w-1/2 space-y-6">
                                            <div className="flex items-center gap-3">
                                                <span 
                                                    className="text-xs font-black tracking-[0.4em]"
                                                    style={{ color: themeColor }}
                                                >
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <div className="h-[1px] w-8 bg-white/10" />
                                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Project details</span>
                                            </div>

                                            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-snug">
                                                {project.title}
                                            </h3>

                                            <p className="text-sm md:text-base text-white/60 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Tech Tag Pills */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {project.tags.map((tag, tagIdx) => (
                                                    <span 
                                                        key={tagIdx} 
                                                        className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/80 hover:border-white/20 hover:bg-white/10 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTAs */}
                                            <div className="flex items-center gap-4 pt-4">
                                                <Link
                                                    href={project.details ? `/projects/${project.id}` : (project.link || '#')}
                                                    className="group/link flex items-center gap-3 px-6 py-3.5 bg-white text-black font-black rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-white/5"
                                                >
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Check Out</span>
                                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                </Link>
                                                
                                                {project.link && project.link !== '#' && !project.details && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/5 hover:bg-white/5"
                                                    >
                                                        <span>Live Demo</span>
                                                        <ExternalLink size={12} />
                                                    </a>
                                                )}
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-xs font-bold text-white/60 hover:text-white transition-colors py-2 px-3 rounded-lg border border-white/5 hover:bg-white/5"
                                                    >
                                                        <span>View Code</span>
                                                        <Github size={12} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                    
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-white/40 tracking-widest font-bold uppercase text-sm">No projects found for this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
