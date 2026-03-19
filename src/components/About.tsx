'use client';

import { motion } from 'framer-motion';
import { SkillsMarquee } from './SkillsMarquee';

const skills = [
    "Python", "Java", "C++", "JavaScript/TypeScript", "SQL",
    "React", "Django", "Flask", "Node.js", "Docker", "AWS",
    "TensorFlow", "PyTorch", "Scikit-learn", "Git"
];

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">About <span className="text-gradient-primary">Me</span></h2>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
                        Final-year BSc Computer Science student at Nottingham Trent University, on track for a 2:1.
                        I have hands-on experience in software engineering, AI/ML, and cloud computing.
                        Skilled in Python, Java, and full-stack development using React and Django.
                        I am passionate about applying data analytics, automation, and scalable cloud architectures to solve real-world problems.
                        Currently leading a team developing a mobile application for FF Smart Fridge.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="w-full absolute left-0 overflow-visible"
                >
                    <SkillsMarquee />
                </motion.div>
            </div>
            {/* Add extra padding at the bottom to account for the absolutely positioned marquee escaping normal doc flow if needed, but relative/absolute mix is tricky here. Actually, lets just put it back in flow! */}
        </section>
    );
}
