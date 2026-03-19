'use client';
import { motion } from 'framer-motion';

const skills = [
  "Python", "Java", "C++", "JavaScript", "TypeScript", "SQL",
  "React", "Next.js", "Django", "Flask", "Node.js", "Docker", "AWS",
  "TensorFlow", "PyTorch", "Scikit-learn", "Git", "Tailwind CSS"
];

// Duplicate 4 times to guarantee it fills ultrawide monitors
const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

export function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden flex py-12 bg-black/20 backdrop-blur-md border-y border-white/5 mt-16 shadow-2xl">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-6 px-4 whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {duplicatedSkills.map((skill, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white/90 font-bold tracking-widest text-sm hover:scale-110 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default shadow-lg"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
