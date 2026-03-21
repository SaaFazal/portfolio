'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export function FloatingLinkedin() {
    return (
        <motion.a
            href="https://www.linkedin.com/in/sahadh-fazal-mohamed-770267337/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-40 right-6 md:bottom-24 md:right-8 z-[120] p-4 rounded-full bg-[#0077B5] text-white shadow-2xl hover:brightness-110 transition-all group"
            title="Connect on LinkedIn"
        >
            <Linkedin size={24} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                Let's connect!
            </span>
        </motion.a>
    );
}
