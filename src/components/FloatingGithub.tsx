'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export function FloatingGithub() {
    return (
        <motion.a
            href="https://github.com/SaaFazal"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[120] p-4 rounded-full bg-white text-black shadow-2xl hover:bg-primary hover:text-white transition-colors group"
            title="View my GitHub"
        >
            <Github size={24} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                Check out my projects!
            </span>
        </motion.a>
    );
}
