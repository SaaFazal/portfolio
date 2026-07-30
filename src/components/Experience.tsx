'use client';

import { motion } from 'framer-motion';

const experience = [
    {
        role: "Co-Founder and Lead Developer",
        company: "Artim Labs",
        period: "Jan 2026 – Present",
        desc: (
            <div className="space-y-3">
                <p>Co-founded a UK studio building websites, apps, bespoke software, third-party integrations, HR and operations systems for growing businesses. I lead engineering; my co-founder leads design and brand.</p>
                <ul className="list-disc pl-4 space-y-1.5 opacity-90">
                    <li>Built and shipped a multi-site franchise operations platform covering sales, labour, expenses and compliance.</li>
                    <li>Delivered an HR mobile application with one structured record per employee, tracking right-to-work, visas and document expiries.</li>
                    <li>Client project (TRUKBK): engineered a hallucination-resistant AI sales concierge on a custom RAG pipeline with vector embeddings and cosine similarity search (Supabase pgvector) and Google Gemini for generation, with a 2-layer fallback preventing customer-facing errors.</li>
                    <li>Connected existing point-of-sale systems to mobile apps and reporting, so businesses keep the till they already use while data flows into one place.</li>
                </ul>
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mt-2">Stack: Python, TypeScript, React, React Native, Flask, PostgreSQL, Docker, plus LLM and vector database integration.</p>
            </div>
        ),
        logo: "/ARTIMLabs-Logo.png"
    },
    {
        role: "Software Engineer (Freelance)",
        company: "Arasan Travels",
        period: "Aug 2025 – Jan 2026",
        desc: (
            <div className="space-y-3">
                <p>Engaged as a freelance software engineer to build a booking platform from scratch for a UK community travel operator, replacing a manual booking and reconciliation process.</p>
                <ul className="list-disc pl-4 space-y-1.5 opacity-90">
                    <li>Architected a full-stack platform on a serverless pnpm monorepo (React 19, Vite 7, Express v5), choosing serverless specifically to keep hosting costs low for an early-stage business.</li>
                    <li>Built a type-safe, end-to-end automated booking pipeline, so a booking made on the site required no manual intervention to process.</li>
                    <li>Integrated Stripe with automated payment reconciliation, cutting administrative overhead by 15% by removing manual end-of-period checking.</li>
                    <li>Built an interactive trip discovery carousel and custom search widgets, and modelled the data layer in PostgreSQL with Drizzle ORM.</li>
                </ul>
                <p>The reconciliation work mattered most commercially: a booking system nobody trusts financially doesn't get used, however good the front end looks.</p>
            </div>
        ),
        logo: "/arasan-travels.png"
    },
    {
        role: "Application Developer & Store Assistant",
        company: "PHAT Buns UK",
        period: "Apr 2024 – Dec 2025",
        desc: (
            <div className="space-y-3">
                <p>Started on the shop floor managing daily store operations and high-volume customer service, which is where I first noticed the gap this role was built to close.</p>
                <ul className="list-disc pl-4 space-y-1.5 opacity-90">
                    <li>Worked the kitchen-to-counter workflow directly and identified where orders were getting lost, delayed or mismatched between kitchen and till, rather than assuming what the problem was from outside.</li>
                    <li>Engineered PhatOps, a custom operations app handling real-time order tracking and staff authentication, built to solve those specific bottlenecks rather than as a generic dashboard.</li>
                    <li>Architected the full-stack solution in React, TypeScript, Tailwind CSS and Supabase, with real-time sync so a change made at one station is reflected everywhere immediately.</li>
                    <li>Reduced rendering latency by 20% through optimised reusable components and tuned Supabase real-time subscriptions, which mattered directly on the shop floor: a slow screen at the counter during a rush is a queue forming behind it.</li>
                    <li>Now used daily by 20 staff across 4 branches, with rollout planned for 16 further sites.</li>
                </ul>
                <p>Being on the floor first was the useful part. I wasn't guessing at requirements from a spec document; I was watching the actual failure happen and building the fix for it.</p>
            </div>
        ),
        logo: "/Phatbuns.png"
    },
    {
        role: "Student Representative",
        company: "Nottingham Trent University",
        period: "Sep 2023 – Sep 2024",
        desc: (
            <div className="space-y-3">
                <p>Elected by my cohort to represent their interests to course leaders and academic staff, gathering feedback on teaching, module content and course delivery and raising it through formal university channels.</p>
                <ul className="list-disc pl-4 space-y-1.5 opacity-90">
                    <li>Ran regular feedback sessions with students and consolidated concerns into clear, prioritised points for staff meetings, rather than passing on complaints unfiltered.</li>
                    <li>Acted as the first point of contact for coursemates settling into university life, helping new students navigate deadlines, module choices and where to get support.</li>
                    <li>Followed up on raised issues to confirm they were actually addressed, rather than treating the meeting itself as the outcome.</li>
                </ul>
                <p>This was the first role where I had to turn what a group of people vaguely wanted into something specific a decision-maker could act on, which turned out to be most of what requirements gathering actually is.</p>
            </div>
        ),
        logo: "/NTU.png"
    },
    {
        role: "Retail Assistant and Administrative Support",
        company: "U-Shop International Store",
        period: "Sep 2023 – Mar 2024",
        desc: (
            <div className="space-y-3">
                <p>My first role in the UK, split between the shop floor and the back office of an international supermarket.</p>
                <ul className="list-disc pl-4 space-y-1.5 opacity-90">
                    <li>Processed 16-20 supplier invoices a week in Excel: data entry, validation and reconciliation against incoming deliveries.</li>
                    <li>Flagged discrepancies between what was ordered and what arrived before payment went out, protecting payment dates and preventing suppliers being paid incorrectly.</li>
                    <li>Produced routine stock and invoice summaries for management from the reconciled data.</li>
                    <li>Provided front-of-house customer support during trading hours alongside the admin work.</li>
                </ul>
                <p>This is where I first saw how much of a business runs on spreadsheets nobody has time to check properly, which is a straight line to the data and BI work I do now. U-Shop later became an Artim Labs client, and I built their ERP system.</p>
            </div>
        ),
        logo: "/Ushop.png"
    }
];

const education = [
    {
        degree: "BSc (Hons) Computer Science",
        school: "Nottingham Trent University",
        period: "Sep 2023 – June 2026",
        details: "Grade: Upper Second Class (2:1). Selected modules: Information & Database Engineering, Foundations of AI & Machine Learning, Artificial Intelligence, Cloud Computing, Advanced Analysis & Design.",
        logo: "/NTU.png"
    },
    {
        degree: "Introduction to UK Financial Regulation & Professional Integrity (In Progress)",
        school: "Certified Institute for Further Accreditation (CIFA)",
        period: "June 2026 – Present",
        details: "Currently undertaking this 160-hour certification course covering UK Capital Markets, FCA & PRA regulatory frameworks, Risk Management, Conduct of Business Sourcebook (COBS), and Financial Crime compliance.",
        logo: "/CIFA.png"
    },
    {
        degree: "All India Senior School Certificate Examination (AISSCE), Business/Office Automation/Technology/Data Entry",
        school: "Central Board of Secondary Education — KVIS, Ramanathapuram",
        period: "Jun 2016 – Jul 2023",
        details: "Grade: 391/500",
        logo: "/CBSE.png"
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
                                            <div className="text-xs md:text-sm text-white/60 leading-relaxed">{job.desc}</div>
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
