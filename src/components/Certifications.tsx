'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink, ShieldCheck, Calendar, BookOpen, Maximize2 } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  description: string;
  logoColor: string;
  image: string;
  verificationUrl?: string;
}

function renderProviderLogo(issuer: string) {
  switch (issuer) {
    case 'IBM':
      return <span className="font-sans font-black tracking-tight text-[11px] text-blue-400 select-none">IBM</span>;
    case 'Google':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      );
    case 'Microsoft':
      return (
        <svg viewBox="0 0 23 23" className="w-4 h-4 flex-shrink-0">
          <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022"/>
          <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7fba00"/>
          <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00a4ef"/>
          <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#ffb900"/>
        </svg>
      );
    case 'PayPal & Anthropic':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" />
        </svg>
      );
    case 'Amazon Web Services (AWS)':
      return (
        <div className="flex flex-col items-center justify-center -space-y-1">
          <span className="font-sans font-black tracking-tight text-[10px] text-orange-400 select-none">aws</span>
          <svg viewBox="0 0 24 6" className="w-6 h-1.5 text-orange-400" fill="currentColor">
            <path d="M2 1 C 8 5, 16 5, 22 1 C 18 3, 10 3, 2 1 Z" />
          </svg>
        </div>
      );
    case 'freeCodeCamp':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-purple-400" fill="currentColor">
          <path d="M18.86 11.2c-.44-.66-1-1.26-1.63-1.77a11 11 0 0 0-4.42-2.14 7.6 7.6 0 0 1 1.83 4.29 4.34 4.34 0 0 1-.95 3.09 5.37 5.37 0 0 0-1.79-3.79c-.19.89-.15 2 .33 2.92a4.4 4.4 0 0 0 3.32 2.23 4.8 4.8 0 0 1-2.91-.49 4.49 4.49 0 0 1-2.35-3.32c-.37-.89-.35-2.08.15-3.08a6.32 6.32 0 0 0-2.19 4.67c-.08 1.84.77 3.59 2.25 4.66a6.76 6.76 0 0 0 5.43.91 7.15 7.15 0 0 0 4.93-8.13z"/>
        </svg>
      );
    default:
      return <Award className="w-4 h-4" />;
  }
}

const certificationsList: Certification[] = [
  {
    id: 'ibm-mobile',
    title: 'iOS and Android Mobile App Developer',
    issuer: 'IBM',
    date: 'Jun 17, 2026',
    credentialId: 'GMUWS9IPDWOV',
    skills: ['Mobile UI/UX', 'Cross-Platform Dev', 'Database Integration', 'React Native', 'Swift & Flutter'],
    description: 'Completed an intensive 14-course professional program covering native and cross-platform mobile architecture, state management, and production deployments.',
    logoColor: 'from-blue-600/20 to-blue-400/20 border-blue-500/30 text-blue-400',
    image: '/projects/certificates/Certificate IBM.png',
    verificationUrl: 'https://coursera.org/verify/professional-cert/GMUWS9IPDWOV'
  },
  {
    id: 'google-ai',
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    date: 'Jun 11, 2026',
    credentialId: 'DQR3CAHB447K',
    skills: ['Generative AI', 'Hyperparameter Tuning', 'Neural Networks', 'Google Cloud AI', 'Prompt Engineering'],
    description: 'Mastered foundational and advanced Generative AI architectures, neural network tuning, and implementing Google Cloud-based AI workflows.',
    logoColor: 'from-red-600/20 to-yellow-500/20 border-red-500/30 text-red-400',
    image: '/projects/certificates/Certificate Google.png',
    verificationUrl: 'https://coursera.org/verify/professional-cert/DQR3CAHB447K'
  },
  {
    id: 'ms-applied',
    title: 'Applied Skills: Enhance agents with autonomous capabilities',
    issuer: 'Microsoft',
    date: 'June 7, 2026',
    credentialId: '8AF67E2318386FC4',
    skills: ['Semantic Kernel', 'Autonomous Agents', 'Custom Plugins', 'Agentic Workflows'],
    description: 'Verified credentials in building autonomous AI agents, Copilots, custom tool calling, and multi-agent orchestration patterns using the Semantic Kernel SDK.',
    logoColor: 'from-cyan-600/20 to-teal-500/20 border-cyan-500/30 text-cyan-400',
    image: '/projects/certificates/Microsoft.png',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/sahadhfazal/credentials/8af67e2318386fc4'
  },
  {
    id: 'paypal-anthropic-claude',
    title: 'AI Fluency for Small Businesses',
    issuer: 'PayPal & Anthropic',
    date: 'June 2026',
    credentialId: 'PayPal-Anthropic-Claude',
    skills: ['Large Language Models', 'Claude LLM', 'Prompt Design', 'Workflow Automation', 'Text Processing'],
    description: 'Trained on utilizing Large Language Models (LLMs) like Claude to automate operational workflows, design smart prompt templates, and build simple text-processing pipelines to optimise business efficiency.',
    logoColor: 'from-orange-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
    image: '/projects/certificates/Claude.png',
    verificationUrl: 'https://www.anthropic.com/claude'
  },
  {
    id: 'google-ml',
    title: 'Machine Learning Crash Course',
    issuer: 'Google',
    date: 'Feb 9, 2026',
    credentialId: 'Google-MLCC-2026',
    skills: ['Supervised Learning', 'Linear Regression', 'Neural Networks', 'TensorFlow', 'Model Tuning'],
    description: 'Mastered key machine learning concepts including neural networks, loss functions, gradient descent, validation strategies, and multi-class classification.',
    logoColor: 'from-green-600/20 to-emerald-400/20 border-green-500/30 text-green-400',
    image: '/projects/certificates/Machine Learning Crash Course.png',
    verificationUrl: 'https://developers.google.com/machine-learning/crash-course'
  },
  {
    id: 'aws-foundations',
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2026',
    credentialId: 'AWS-ED-FOUNDATIONS-2026',
    skills: ['Cloud Computing', 'Generative AI', 'AWS Storage & S3', 'Serverless Architecture'],
    description: 'Mastered global cloud infrastructure, serverless architectures, storage configuration, database optimization, and cloud security frameworks on AWS.',
    logoColor: 'from-orange-600/20 to-yellow-600/20 border-orange-500/30 text-orange-400',
    image: '/projects/certificates/AWS Certificate.png',
    verificationUrl: 'https://aws.amazon.com/education/aws-educate/'
  },
  {
    id: 'fcc-python',
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    date: 'June 8, 2026',
    credentialId: 'saadf-dawp',
    skills: ['Pandas & NumPy', 'Matplotlib & Seaborn', 'Exploratory Data Analysis', 'Statistical Prediction'],
    description: 'Engineered complex data processing pipelines, cleaned tabular datasets, performed exploratory data analysis (EDA), and built statistical prediction models.',
    logoColor: 'from-purple-600/20 to-pink-500/20 border-purple-500/30 text-purple-400',
    image: '/projects/certificates/Data Analysis with Python Certificate.png',
    verificationUrl: 'https://freecodecamp.org/certification/saadf/data-analysis-with-python-v7'
  }
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
      {/* Ambient section boundary glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 flex flex-col gap-2">
          <span className="text-xs font-black tracking-[0.4em] text-primary/60 uppercase">CREDENTIALS</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase italic">
            Verified <span className="text-gradient-primary">Expertise</span>
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel p-5 rounded-2xl glow-border cursor-pointer group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex flex-col justify-between h-72 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex-shrink-0 bg-gradient-to-br flex items-center justify-center border ${cert.logoColor}`}>
                    {renderProviderLogo(cert.issuer)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-xs md:text-sm text-white line-clamp-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>

                {/* Certificate Thumbnail Preview */}
                <div className="w-full h-24 rounded-lg overflow-hidden border border-white/5 bg-white/5 mb-3 relative group-hover:border-primary/30 transition-all">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <p className="text-[11px] text-white/60 leading-relaxed line-clamp-2">{cert.description}</p>
              </div>

              <div className="flex items-center justify-between text-[10px] text-white/40 font-bold border-t border-white/5 pt-2.5 mt-2.5">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-primary/60" /> {cert.date}</span>
                <span className="group-hover:text-primary transition-colors flex items-center gap-1">Verify <ExternalLink className="w-2.5 h-2.5" /></span>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Layout Spring Expansion Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              {/* Dark blur overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => {
                  setSelectedCert(null);
                  setIsLightboxOpen(false);
                }}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-3xl w-full glass-panel border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl z-10 overflow-y-auto max-h-[90vh] custom-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    setIsLightboxOpen(false);
                  }}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-90 z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center border flex-shrink-0 ${selectedCert.logoColor}`}>
                    {renderProviderLogo(selectedCert.issuer)}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{selectedCert.issuer} Certification</span>
                    <h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight pr-6">{selectedCert.title}</h3>
                  </div>
                </div>

                {/* Image Preview Showcase */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative group/img overflow-hidden rounded-xl border border-white/10 bg-white/5 cursor-zoom-in shadow-lg mb-6 max-w-full flex justify-center"
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    decoding="async"
                    className="w-full h-auto max-h-[280px] object-contain transition-transform duration-500 group-hover/img:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                    <Maximize2 className="w-4 h-4 text-primary" /> Click to view full screen
                  </div>
                </div>

                <div className="h-[1px] bg-white/10 my-4" />

                {/* Modal Body Info */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary" /> Certificate Overview
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed text-justify">{selectedCert.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/5">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Verified Core Skills
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedCert.skills.map((skill, idx) => (
                          <span key={idx} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded text-white/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> Verification Details
                      </h4>
                      <p className="text-[11px] text-white/60">Credential ID: <span className="font-mono text-white/80">{selectedCert.credentialId}</span></p>
                      <p className="text-[11px] text-white/60 mt-1">Issued Date: <span className="text-white/80">{selectedCert.date}</span></p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-end gap-2 border-t border-white/5 mt-4">
                    {selectedCert.verificationUrl && (
                      <a
                        href={selectedCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-primary hover:bg-primary/95 text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest flex items-center justify-center gap-1.5"
                      >
                        Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button 
                      onClick={() => {
                        setSelectedCert(null);
                        setIsLightboxOpen(false);
                      }}
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-black rounded-full hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Fullscreen Lightbox Overlay */}
        <AnimatePresence>
          {selectedCert && isLightboxOpen && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              {/* Dark backdrop blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setIsLightboxOpen(false)}
              />
              {/* Fullscreen Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-[95vw] max-h-[90vh] z-10 flex flex-col items-center justify-center"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute -top-12 right-0 p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all z-30"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  decoding="async"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-4 text-center">
                  {selectedCert.title} — {selectedCert.issuer}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
