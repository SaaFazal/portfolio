'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Lets Work <span className="text-gradient-primary">Together</span></h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10">
                        Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and ideas.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
                        <Link
                            href="mailto:work.sahadh@gmail.com"
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 justify-center"
                        >
                            <Mail size={20} />
                            Email Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
