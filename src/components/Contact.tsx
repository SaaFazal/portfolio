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
            // Replace with your Web3Forms access key from web3forms.com
            formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
            
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
        <section id="contact" className="py-24 px-4 relative bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Let&apos;s Work <span className="text-gradient-primary">Together</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Send me a message!
                    </p>
                </motion.div>

                <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-30 pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onSubmit={handleSubmit}
                                className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Name</label>
                                        <input 
                                            required
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Email</label>
                                        <input 
                                            required
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Message</label>
                                    <textarea 
                                        required
                                        id="message" 
                                        name="message"
                                        rows={4}
                                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none font-sans"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-4 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none shadow-lg shadow-primary/20"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
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
