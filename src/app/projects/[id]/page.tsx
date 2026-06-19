'use client';

import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Zap, Target, Code, Cpu, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import TimetableSimulator from '@/components/TimetableSimulator';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isScreenshotMode, setIsScreenshotMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setIsScreenshotMode(searchParams.get('screenshot') === 'true');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImg(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isScreenshotMode) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-8">
        <div className="w-full max-w-5xl">
          <TimetableSimulator />
        </div>
      </div>
    );
  }

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

  const isMobileApp = project.tags.some(tag => 
    ['React Native', 'Expo', 'Mobile Development', 'iOS', 'Mobile'].includes(tag)
  );

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
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl font-light mb-8">
            {details.vision}
          </p>
          {project.link && project.link !== '#' && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: colors.accent, color: '#000' }}
            >
              {project.linkLabel || 'View Live Site'} <ExternalLink size={20} />
            </a>
          )}
        </motion.div>

        {/* Media Gallery (Video + Photos) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 space-y-8"
        >
          {isMobileApp ? (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white/60 tracking-wider uppercase mb-2">Interface Gallery (Scroll & Click to Expand)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {project.images && project.images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImg(img)}
                    className="relative aspect-[9/16] rounded-[2.5rem] p-2.5 border-[3px] border-neutral-800 bg-[#0c0c0c] shadow-2xl overflow-hidden group cursor-pointer hover:border-neutral-700 transition-colors duration-300"
                  >
                    {/* Speaker / Notch Simulation */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20 opacity-90 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-neutral-800 ml-auto mr-2" />
                    </div>
                    
                    {/* Screenshot Container */}
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                      <img 
                        src={img} 
                        alt={`${project.title} screenshot ${i + 1}`} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Video or Feature Image */}
                <div 
                  className={`md:col-span-2 aspect-video relative overflow-hidden rounded-3xl border border-white/10 group ${!(project.youtubeId || project.video) && project.images && project.images[0] ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (!(project.youtubeId || project.video) && project.images && project.images[0]) {
                      setSelectedImg(project.images[0]);
                    }
                  }}
                >
                  {project.youtubeId ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0`}
                        className="w-full h-full scale-[1.03]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${project.title} demo`}
                      />
                      {/* Overlay to hide YouTube logo in corners */}
                      <div className="absolute bottom-0 right-0 w-24 h-10 bg-black/80 pointer-events-none" />
                      <div className="absolute top-0 left-0 w-24 h-10 bg-black/80 pointer-events-none" />
                    </div>
                  ) : project.video ? (
                    <video 
                      src={project.video} 
                      poster={project.image}
                      preload="auto"
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
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Sub-Images */}
                {project.images && project.images.slice(project.youtubeId || project.video ? 0 : 1).map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImg(img)}
                    className="relative overflow-hidden rounded-3xl border border-white/10 group aspect-video cursor-pointer"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${i + 1}`} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
             </div>
          )}
        </motion.div>

        {/* Interactive Desktop GUI Simulator (NTU Timetabling System only) */}
        {project.id === 'ntu-timetable' && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.accent }}>
              <Cpu size={24} /> Live Interactive Desktop GUI
            </h2>
            <p className="text-white/60 mb-8 max-w-3xl leading-relaxed">
              Experience the power of the high-performance C++ timetabling solver. Switch between tabs to see the Engine analytics, the dynamic weekly calendar grid, the relational databases parsed from CSVs, and trigger simulated scheduling conflicts to see the backtracking CSP solver in action!
            </p>
            <TimetableSimulator />
          </motion.section>
        )}

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

      {/* Interactive Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4 sm:p-6 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative max-h-[90vh] max-w-[95vw] sm:max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing
          >
            <img 
              src={selectedImg} 
              alt="Enlarged screenshot" 
              decoding="async"
              className="max-h-[80vh] sm:max-h-[85vh] w-auto max-w-full object-contain rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]" 
            />
            <button 
              className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur"
              onClick={() => setSelectedImg(null)}
            >
              Close [esc]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

