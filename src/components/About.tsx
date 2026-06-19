'use client';

import { motion } from 'framer-motion';
import { SkillsMarquee } from './SkillsMarquee';
import { Brain, Smartphone, Cloud } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 pointer-events-none" />
            <div className="absolute -top-1/4 -right-1/4 w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="space-y-6"
                    >
                        <span className="text-xs font-black tracking-[0.4em] text-primary uppercase">GET TO KNOW ME</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase italic">
                            Bridging Engineering <span className="text-gradient-primary">& Intuitive AI</span>
                        </h2>
                        
                        <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
                            <p>
                                I am a Software Engineer, AI Developer, and BSc (Hons) Computer Science graduate (2:1) from Nottingham Trent University. 
                                I specialize in building high-performance, responsive <strong className="text-white">Mobile Applications</strong>, autonomous <strong className="text-white">AI Agents</strong>, and scalable <strong className="text-white">Cloud Infrastructure</strong>.
                            </p>
                            <p>
                                With deep expertise across Python, Java, and TypeScript, I focus on turning complex logical architectures into fluid, recruiter-ready interfaces that load fast, feel responsive, and solve concrete business problems.
                            </p>
                            <p>
                                From designing agentic workflows using Semantic Kernel to implementing real-time vector search pipelines (pgvector) and mobile deployments, I build software that delivers absolute performance.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Capabilities Card HUD */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="glass-panel p-8 rounded-2xl border border-white/10 bg-black/40 shadow-2xl relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
                        
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 block mb-6">CORE CAPABILITIES</span>
                        
                        <div className="space-y-6 relative z-10">
                            {/* Cap 1 */}
                            <div className="flex gap-4 items-start group/item">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                    <Brain className="w-5 h-5" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <h4 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">Agentic AI & LLMs</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">Designing RAG pipelines (pgvector/Gemini), prompt templates, and custom autonomous agents.</p>
                                </div>
                            </div>

                            {/* Cap 2 */}
                            <div className="flex gap-4 items-start group/item">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <h4 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">Mobile & Fullstack Dev</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">Crafting high-fidelity cross-platform apps (React Native, Swift, Flutter) and reactive web frontends.</p>
                                </div>
                            </div>

                            {/* Cap 3 */}
                            <div className="flex gap-4 items-start group/item">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                    <Cloud className="w-5 h-5" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <h4 className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">Cloud & Infrastructure</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">AWS serverless architecture, Docker containerization, database optimizations, and secure API backends.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Skills Marquee Section (In Flow) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative border-t border-white/5 pt-12 overflow-hidden w-full"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-6 text-center">TECHNICAL TOOLKIT</span>
                    <SkillsMarquee />
                </motion.div>

            </div>
        </section>
    );
}
