"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-8 px-8 md:px-24">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
                        Academic Background
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Education
                    </h2>
                </motion.div>

                <div className="relative border-l border-white/10 pl-8 md:pl-12 ml-4">
                    {/* Duke University Entry */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-12 relative group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-[#121212] border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        Master of Engineering Management
                                    </h3>
                                    <h4 className="text-lg text-blue-400 font-medium tracking-wide">
                                        Duke University
                                    </h4>
                                    <p className="text-neutral-300 font-medium text-sm mt-1">
                                        Specialization: Program and Project Management
                                    </p>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl max-w-2xl mt-4">
                                    <p className="text-xs text-neutral-400 font-semibold mb-2 uppercase tracking-widest">
                                        Relevant Coursework
                                    </p>
                                    <p className="text-neutral-300 text-sm leading-relaxed">
                                        Finance • Software Business Management • Managing Product Design • Design Thinking & Innovation • Marketing
                                    </p>
                                </div>
                            </div>

                            <div className="shrink-0 mt-2 md:mt-0">
                                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs rounded-full uppercase tracking-wider font-medium">
                                    Aug 2023 — Dec 2024
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
