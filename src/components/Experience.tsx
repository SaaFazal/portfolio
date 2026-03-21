'use client';

import { motion } from 'framer-motion';

const experience = [
    {
        role: "Data Analyst and Admin Manager",
        company: "U-shop international store",
        period: "Sep 2023 - July 2025",
        desc: "Managed stock inventory and ensured product availability. Implemented data analysis techniques to optimize stock management processes. Collaborated with cross-functional teams to improve supply chain efficiency and developed data-driven strategies to enhance product distribution."
    },
    {
        role: "Full Stack Developer (Freelance)",
        company: "Self-Employed / Independent Projects",
        period: "2023 - Present",
        desc: "Designed and deployed custom EPOS (Electronic Point of Sale) systems and management dashboards for local businesses. Engineered high-performance mobile ordering apps using Firebase for real-time synchronization and React/Next.js for administrative control panels."
    },
    {
        role: "Website Designer (Remote)",
        company: "Arasan Travels, London",
        period: "July 2025 – Present",
        desc: "Built and launched a travel-booking website using Squarespace with custom HTML/CSS/JavaScript and Google Apps Script integrations. Automated booking approvals and Stripe payment reconciliation for 50+ monthly transactions via Apps Script + Google Sheets workflows."
    }
];

const education = [
    {
        degree: "BSc: Computer Science (Hons)",
        school: "Nottingham Trent University",
        period: "Sep 2023 – June 2026",
        details: "On track for Exceptional First. Modules include Advanced Analysis & Design, Final Year Project, Mobile Application Development, Artificial Intelligence, and Service-Centric & Cloud Computing."
    },
    {
        degree: "AISSCE: Information Technology and Science",
        school: "KV International School (CBSE)",
        period: "06/2011 – 05/2023",
        details: "CBSE 12th"
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
