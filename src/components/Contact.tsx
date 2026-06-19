'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            formData.append("access_key", "290deb64-2f69-46d0-a5d7-ae99b6f1ce7a"); 
            
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
                form.reset();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-[#040404]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-8 bg-white/20" />
                        <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px]">INQUIRY</span>
                        <div className="h-[1px] w-8 bg-white/20" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase leading-none italic">Let&apos;s Build</h2>
                </motion.div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSubmit}
                                className="relative z-10 flex flex-col gap-8 max-w-2xl mx-auto"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                     <div className="flex flex-col gap-3">
                                         <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Identity</label>
                                         <input 
                                             required
                                             suppressHydrationWarning
                                             type="text" 
                                             id="name" 
                                             name="name"
                                             className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all font-sans"
                                             placeholder="Your Name"
                                         />
                                     </div>
                                     <div className="flex flex-col gap-3">
                                         <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Channel</label>
                                         <input 
                                             required
                                             suppressHydrationWarning
                                             type="email" 
                                             id="email" 
                                             name="email"
                                             className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all font-sans"
                                             placeholder="Your Email"
                                         />
                                     </div>
                                 </div>
                                 
                                 <div className="flex flex-col gap-3">
                                     <label htmlFor="message" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-1">Directive</label>
                                     <textarea 
                                         required
                                         suppressHydrationWarning
                                         id="message" 
                                         name="message"
                                         rows={4}
                                         className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all resize-none font-sans"
                                         placeholder="What are we building?"
                                     />
                                 </div>

                                 <button 
                                     type="submit"
                                     disabled={isSubmitting}
                                     suppressHydrationWarning
                                     className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 shadow-xl"
                                 >
                                     {isSubmitting ? (
                                         <div className="w-5 h-5 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                                     ) : (
                                         <>
                                             Transmit
                                             <Send size={16} />
                                         </>
                                     )}
                                 </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-white/60">I&apos;ll get back to you as soon as possible.</p>
                                <button 
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-sm text-primary hover:underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
