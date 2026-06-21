'use client';

import { motion } from 'framer-motion';

const experience = [
    {
        role: "Software Engineer (Freelance)",
        company: "TRUKBK",
        period: "January 2026 – June 2026",
        desc: "Architected and deployed an autonomous AI Sales Concierge powered by a custom RAG pipeline (Supabase pgvector, Google Gemini) to automate vehicle quoting. Engineered a high-performance interactive configurator, seamlessly integrating the AI reasoning layer with the frontend client platform.",
        logo: "/TRUKBK.png"
    },
    {
        role: "Software Engineer (Freelance)",
        company: "Arasan Travels",
        period: "August 2025 – Jan 2026",
        desc: "Architected and deployed a custom travel-booking platform. Software engineered an end-to-end automated booking pipeline with Stripe payment reconciliations, reducing manual administration time by 15%. Fully cloud-first infrastructure.",
        logo: "/Arasan Travels.png"
    },
    {
        role: "Application Developer & Store Assistant",
        company: "PHAT Buns UK",
        period: "Dec 2024 - Dec 2025",
        desc: "Engineered 'PhatOps', a cross-platform mobile application launched on the App Store to digitize restaurant operations. Currently powering workforce and order-tracking operations across 4 active PHAT Buns branches, with scheduled rollouts for 16 additional branches. Reduced rendering latency by 20% through optimized Supabase real-time subscriptions.",
        logo: "/Phatbuns.png"
    }
];

const education = [
    {
        degree: "BSc (Hons) Computer Science",
        school: "Nottingham Trent University",
        period: "Sep 2023 – June 2026",
        details: "Grade: Upper Second Class (2:1). Selected modules: Artificial Intelligence, Cloud Computing, Mobile Application Development, Agile Project Management, and Advanced Software Analysis & Design.",
        logo: "/NTU.png"
    },
    {
        degree: "AISSCE - 12 CBSE (Mathematics & Computer Science)",
        school: "KVIS CBSE - Ramanathapuram",
        period: "2021 – 2023",
        details: "Grade: 92%. Leadership & Extracurriculars: House Captain (5 Years), School Football & Cricket Team Captain.",
        logo: "/KVIS.png"
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 bg-[#040404] border-t border-white/5 relative overflow-hidden">
            {/* Ambient section boundary glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">

                {/* Work History */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 20 }}
                >
                    <h3 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-2 uppercase italic tracking-tight text-white">
                        Work <span className="text-gradient-primary">History</span>
                    </h3>
                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 group">
                                {/* Glowing timeline track & indicator */}
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-last:bottom-[90%] transition-colors duration-300 group-hover:bg-primary/50" />
                                <span className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_8px_#ff3d00] transition-all duration-300" />
                                
                                {/* Card Body */}
                                <div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 shadow-md">
                                    <div className="flex gap-4 items-start">
                                        {job.logo && (
                                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shrink-0 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                                                <img 
                                                    src={job.logo} 
                                                    alt={job.company} 
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug">{job.role}</h4>
                                            <p className="text-xs font-black uppercase tracking-widest text-primary/80 mt-1 mb-3">{job.company} — <span className="text-white/40 font-mono">{job.period}</span></p>
                                            <p className="text-xs md:text-sm text-white/60 leading-relaxed">{job.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', damping: 20 }}
                >
                    <h3 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-2 uppercase italic tracking-tight text-white">
                        Education <span className="text-gradient-primary">History</span>
                    </h3>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 group">
                                {/* Glowing timeline track & indicator */}
                                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-last:bottom-[90%] transition-colors duration-300 group-hover:bg-primary/50" />
                                <span className="absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_8px_#ff3d00] transition-all duration-300" />
                                
                                {/* Card Body */}
                                <div className="glass-panel p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 shadow-md">
                                    <div className="flex gap-4 items-start">
                                        {edu.logo && (
                                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1.5 shrink-0 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">
                                                <img 
                                                    src={edu.logo} 
                                                    alt={edu.school} 
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="w-full h-full object-contain filter brightness-100 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug">{edu.degree}</h4>
                                            <p className="text-xs font-black uppercase tracking-widest text-primary/80 mt-1 mb-3">{edu.school} — <span className="text-white/40 font-mono">{edu.period}</span></p>
                                            <p className="text-xs md:text-sm text-white/60 leading-relaxed">{edu.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
