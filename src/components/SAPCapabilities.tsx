"use client";

import { motion } from "framer-motion";

const sapItems = [
    {
        id: 1,
        title: "SAP on AWS Architecture",
        category: "Cloud Strategy",
        description: "Designing scalable and resilient SAP landscapes hosted on Amazon Web Services, optimizing for high availability, performance, and disaster recovery.",
    },
    {
        id: 2,
        title: "SAP AI for Sales Order Automation",
        category: "Generative AI",
        description: "Intelligent automation solutions using SAP Business AI to streamline Order-to-Cash processes, significantly reducing manual interventions and accelerating fulfillment.",
    },
    {
        id: 3,
        title: "SAP BRIM Implementation Strategy",
        category: "Ideation",
        description: "Architectural designs and strategy for implementing Billing and Revenue Innovation Management in high-volume environments, reducing integration complexity.",
    }
];

export default function SAPCapabilities() {
    return (
        <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-bold">
                        SAP Ecosystem
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        SAP Ideations & Capabilities
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Exploring innovative architectures, transformation strategies, and automation capabilities within the SAP landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sapItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 relative overflow-hidden"
                        >
                            {/* Subtle gradient background on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-xs text-blue-400 font-semibold mb-3 tracking-widest uppercase shadow-sm">
                                    {item.category}
                                </p>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                {/* Visual "Coming Soon" or Explore button cue */}
                                <div className="inline-flex items-center text-sm font-bold text-neutral-500 group-hover:text-blue-400 transition-colors">
                                    Details Coming Soon
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for future detailed PDF / Link additions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                        More SAP configurations, architectural whitepapers, and ideations will be published here.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
