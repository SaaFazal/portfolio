'use client';

import { motion } from 'framer-motion';

const experience = [
    {
        role: "AI Engineer (Freelance)",
        company: "TRUKBK",
        period: "January 2026 – June 2026",
        desc: "Architected and deployed an autonomous AI Sales Concierge powered by a custom RAG pipeline (Supabase pgvector, Google Gemini) to automate vehicle quoting. Engineered a high-performance interactive configurator, seamlessly integrating the AI reasoning layer with the frontend client platform."
    },
    {
        role: "Software Engineer (Remote)",
        company: "Arasan Travels London",
        period: "August 2025 – Jan 2026",
        desc: "Architected and deployed a custom travel-booking platform using HTML/CSS/JS and Google Apps Script integrations. Automated 50+ monthly booking approvals and Stripe payment reconciliations, reducing manual administration time by 15%."
    },
    {
        role: "Application Developer & Store Assistant",
        company: "PHAT Buns UK",
        period: "Dec 2024 - Dec 2025",
        desc: "Engineered 'PhatOps', a cross-platform mobile application launched on the App Store to digitize restaurant operations. Currently powering workforce and order-tracking operations across 4 active PHAT Buns branches, with scheduled rollouts for 16 additional branches. Reduced rendering latency by 20% through optimized Supabase real-time subscriptions."
    }
];

const education = [
    {
        degree: "BSc (Hons) Computer Science",
        school: "Nottingham Trent University",
        period: "Sep 2023 – June 2026",
        details: "Grade: Upper Second Class (2:1). Selected modules: Artificial Intelligence, Cloud Computing, Mobile Application Development, and Advanced Software Analysis & Design."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 bg-black/20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Work History */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
                        Work <span className="text-gradient-primary">History</span>
                    </h3>
                    <div className="space-y-8">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                                <h4 className="text-xl font-bold">{job.role}</h4>
                                <p className="text-sm text-primary/80 mb-2">{job.company} | {job.period}</p>
                                <p className="text-muted-foreground">{job.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
                        Education <span className="text-gradient-primary">& Certifications</span>
                    </h3>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary" />
                                <h4 className="text-xl font-bold">{edu.degree}</h4>
                                <p className="text-sm text-primary/80 mb-2">{edu.school} | {edu.period}</p>
                                <p className="text-muted-foreground">{edu.details}</p>
                            </div>
                        ))}

                        {/* Certifications Block */}
                        <div className="relative pl-8 border-l border-white/10">
                            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent" />
                            <h4 className="text-xl font-bold">Certifications</h4>
                            <ul className="text-muted-foreground list-disc list-outside ml-4 mt-2 space-y-1">
                                <li>Google Machine Learning Crash Course</li>
                                <li>AWS Educate Cloud Foundations</li>
                                <li>Microsoft PyTorch Fundamentals</li>
                                <li>Data Analysis with Python (freeCodeCamp)</li>
                                <li>Docker Essentials (IBM SkillsBuild)</li>
                            </ul>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
