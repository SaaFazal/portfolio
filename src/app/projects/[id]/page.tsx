'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Zap, Target, Code, Cpu, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white uppercase tracking-tighter">Module Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-4 text-white/40 hover:text-white transition-all font-bold uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft size={20} /> Back to Registry
          </button>
        </div>
      </div>
    );
  }

  const { details, theme } = project;
  const colors = theme || {
    background: '#0a0a0a',
    text: '#ffffff',
    accent: '#ffffff',
    secondary: '#1a1a1a'
  };

  return (
    <div 
      className="min-h-screen text-black selection:text-white"
      style={{ backgroundColor: colors.background, color: colors.text, '--accent': colors.accent } as any}
    >
      <style jsx global>{`
        ::selection {
          background-color: ${colors.accent};
          color: black;
        }
      `}</style>

      {/* Premium Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: `${colors.accent}10` }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: `${colors.accent}10` }} />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => router.push('/#projects')}
            className="group flex items-center gap-2 text-white/60 transition-all duration-300"
            style={{ color: `${colors.text}99` }}
          >
            <div className="p-2 rounded-full border border-white/10 group-hover:-translate-x-1 transition-all" style={{ borderColor: `${colors.accent}50` }}>
              <ArrowLeft size={18} style={{ color: colors.accent }} />
            </div>
            <span className="font-medium group-hover:text-white">Back to Projects</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <div 
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ backgroundColor: `${colors.accent}10`, border: `1px solid ${colors.accent}50`, color: colors.accent }}
          >
            Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl font-light">
            {details.vision}
          </p>
        </motion.div>

        {/* Media Gallery (Video + Photos) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 space-y-8"
        >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Video or Feature Image */}
                <div className="md:col-span-2 aspect-[21/9] relative overflow-hidden rounded-3xl border border-white/10 group">
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                  ) : project.images && project.images[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} feature`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Sub-Images */}
                {project.images && project.images.slice(project.video ? 0 : 1).map((img, i) => (
                  <div 
                    key={i} 
                    className="relative overflow-hidden rounded-3xl border border-white/10 group aspect-video"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
             </div>
        </motion.div>

        {/* Features & Core Stats */}
        <section className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold border-b border-white/5 pb-4 flex items-center gap-3" style={{ color: colors.accent }}>
              <Target size={24} /> Core Features
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {details.features.map((feature, i) => {
                const [title, desc] = feature.split(': ');
                return (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 transition-all" style={{ borderColor: `${colors.accent}10` }}>
                    <h3 className="font-bold mb-2 flex items-center gap-2" style={{ color: colors.accent }}>
                      <Zap size={16} /> {title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="space-y-12">
            <h2 className="text-3xl font-bold border-b border-white/5 pb-4 flex items-center gap-3" style={{ color: colors.accent }}>
              <Cpu size={24} /> Tech Stack
            </h2>
            <div className="space-y-8">
              {details.techStack.map((stack, i) => (
                <div key={i} className="group">
                  <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3 group-hover:text-[#d4af37] transition-colors">{stack.category}</h3>
                  <p className="text-white/90 font-medium">{stack.items}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3" style={{ color: colors.accent }}>
            <Code size={24} /> Technical Deep Dive
          </h2>
          <div className="space-y-20">
            {details.deepDive.map((dive, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-5xl font-black md:pt-2 opacity-10" style={{ color: colors.accent }}>0{i + 1}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white group cursor-default">
                    {dive.title}
                    <span className="block h-1 w-12 mt-2 group-hover:w-full transition-all duration-500" style={{ backgroundColor: colors.accent }} />
                  </h3>
                  <p className="text-white/60 leading-relaxed text-lg italic">
                    {dive.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recruiter Win */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2rem] border text-center relative overflow-hidden"
          style={{ background: `linear-gradient(to bottom right, ${colors.accent}20, ${colors.secondary})`, borderColor: `${colors.accent}30` }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10" style={{ color: colors.accent }}>
            <Globe size={120} />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] mb-8" style={{ color: colors.accent }}>Performance Benchmark</h2>
            <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 leading-normal max-w-4xl mx-auto">
              {details.recruiterWin}
            </blockquote>
          </div>
        </motion.section>

        {/* CTA */}
        <div className="mt-40 text-center">
          <h2 className="text-4xl font-bold mb-12">Next Project?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/#projects"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all"
              style={{ hoverBorderColor: `${colors.accent}50` } as any}
            >
              View All Work
            </Link>
            <Link 
              href="/#contact"
              className="px-8 py-4 rounded-full bg-white text-black font-bold transition-all hover:opacity-90"
              style={{ hoverBackgroundColor: colors.accent } as any}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

