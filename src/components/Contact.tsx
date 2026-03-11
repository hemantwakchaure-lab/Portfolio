"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-8 md:p-16 rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative"
                >
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4 relative z-10">
                        What&apos;s Next?
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 relative z-10">
                        Get In Touch
                    </h2>

                    <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
                        I enjoy working at the intersection of technology, strategy, and execution. If you&apos;re building something exciting, I&apos;d love to connect.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                        {/* Email Button */}
                        <a
                            href="mailto:hemant.wakchaure29@gmail.com"
                            className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            Say Hello
                        </a>

                        {/* Phone Button */}
                        <a
                            href="tel:+19194237382"
                            className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-neutral-800 text-white rounded-full font-bold text-lg border border-white/10 transition-colors hover:bg-neutral-700 hover:border-white/20"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +1 (919) 423-7382
                        </a>
                    </div>
                </motion.div>

                <p className="mt-16 text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Hemant Wakchaure. Built with Next.js & Framer Motion.
                </p>
            </div>
        </section>
    );
}
