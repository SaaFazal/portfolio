'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, ChevronDown, TrendingUp } from 'lucide-react';
import { projects, featuredOrder, moreOrder, Project } from '@/data/projects';
import Link from 'next/link';
import { ProjectMedia } from './ProjectMedia';
import { REVEAL_DURATION, EASE_OUT } from './Reveal';

const filters = ['All', 'Data & BI', 'AI & ML', 'Full Stack', 'Systems', 'Mobile'];

const byId = (ids: string[]) => ids
    .map(id => projects.find(p => p.id === id))
    .filter((p): p is Project => Boolean(p));

const featuredProjects = byId(featuredOrder);
// Anything not listed in either order still shows, at the end of "More projects"
const moreProjects = [
    ...byId(moreOrder),
    ...projects.filter(p => !featuredOrder.includes(p.id) && !moreOrder.includes(p.id)),
];

const sectionLabel: Record<string, string> = {
    'Client Work': 'Client project',
    'Personal Projects': 'Personal project, public data',
    'Engineering and Academic Projects': 'Academic project',
};

export function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showMore, setShowMore] = useState(false);

    const ordered = [...featuredProjects, ...moreProjects];
    const filteredProjects = activeFilter === 'All'
        ? (showMore ? ordered : featuredProjects)
        : ordered.filter(project => project.filterCategory === activeFilter);

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
                        transition={{ duration: REVEAL_DURATION, ease: EASE_OUT }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase italic mb-4">
                            Featured <span className="text-gradient-primary">Projects</span>
                        </h2>
                        <div className="h-[1px] w-24 bg-primary mx-auto mb-4" />
                        <p className="text-sm md:text-base text-white/70 tracking-widest uppercase mb-12">
                            Data, AI and software, shipped
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
                <div className="space-y-24 md:space-y-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const isEven = index % 2 === 0;
                            const themeColor = project.theme?.accent || '#ff3d00';
                            const showMoreHeader = activeFilter === 'All' && index === featuredProjects.length;

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                    transition={{ duration: REVEAL_DURATION, ease: EASE_OUT }}
                                    className="relative"
                                >
                                    {showMoreHeader && (
                                        <div className="relative w-full flex items-center gap-6 mb-16 md:mb-24 pt-4 md:pt-8">
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                            <h3 className="text-lg md:text-xl font-bold text-white/80 tracking-widest uppercase text-center">
                                                More projects
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
                                                {project.image || project.preview ? (
                                                    <>
                                                        <ProjectMedia title={project.title} image={project.image} preview={project.preview} />
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
                                                <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">{sectionLabel[project.section ?? ''] ?? 'Project'}</span>
                                            </div>

                                            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-snug">
                                                {project.title}
                                            </h3>

                                            {project.result && (
                                                <p className="flex items-start gap-2.5 text-sm md:text-base font-semibold text-white leading-snug">
                                                    <TrendingUp size={18} className="shrink-0 mt-0.5" style={{ color: themeColor }} aria-hidden="true" />
                                                    <span>{project.result}</span>
                                                </p>
                                            )}

                                            <p className="text-sm md:text-base text-white/70 leading-relaxed">
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

                    {activeFilter === 'All' && moreProjects.length > 0 && (
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowMore(v => !v)}
                                aria-expanded={showMore}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors"
                            >
                                {showMore ? 'Show fewer projects' : `More projects (${moreProjects.length})`}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    )}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-white/60 tracking-widest font-bold uppercase text-sm">No projects found for this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
