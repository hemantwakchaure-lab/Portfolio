"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const sapItems = [
    {
        id: 1,
        title: "SAP on AWS Architecture",
        category: "Cloud Strategy",
        description: "Designing scalable and resilient SAP landscapes hosted on Amazon Web Services, optimizing for high availability, performance, and disaster recovery.",
        image: "/sap/aws-architecture.jpg", // Add your image to public/sap/aws-architecture.jpg
        details: [
            "Architected a robust and highly available SAP S/4HANA landscape deployment on AWS, utilizing multi-AZ configurations and AWS native services for disaster recovery and automated backups.",
            "Key achievements include reducing infrastructure costs by right-sizing EC2 instances using AWS Compute Optimizer and migrating legacy databases to Amazon HANA instances.",
        ]
    },
    {
        id: 2,
        title: "SAP AI for Sales Order Automation",
        category: "Generative AI",
        description: "Intelligent automation solutions using SAP Business AI to streamline Order-to-Cash processes, significantly reducing manual interventions and accelerating fulfillment.",
        image: "/sap/ai-sales-order.jpg", // Add your image to public/sap/ai-sales-order.jpg
        details: [
            "Leveraged SAP Business AI and Generative AI capabilities to automate data extraction from unstructured sales orders (PDFs, emails), reducing manual data entry by 40%.",
            "This initiative drastically improved order-to-cash (O2C) cycle times, enhanced data accuracy, and freed up customer service representatives to focus on high-value client interactions.",
        ]
    },
    {
        id: 3,
        title: "SAP BRIM Implementation Strategy",
        category: "Ideation",
        description: "Architectural designs and strategy for implementing Billing and Revenue Innovation Management in high-volume environments, reducing integration complexity.",
        image: "/sap/brim-strategy.jpg", // Add your image to public/sap/brim-strategy.jpg
        details: [
            "Devised a comprehensive roadmap for integrating SAP BRIM into a complex enterprise landscape composed of varied legacy billing systems.",
            "The strategy emphasizes decoupled architecture for Convergent Invoicing, minimizing synchronization touchpoints and enhancing the throughput capable of handling millions of subscription events per hour.",
        ]
    }
];

export default function SAPCapabilities() {
    const [selectedItem, setSelectedItem] = useState<(typeof sapItems)[0] | null>(null);

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
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                                    {item.description}
                                </p>

                                {/* Visual Explore button cue */}
                                <button
                                    onClick={() => setSelectedItem(item)}
                                    className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors focus:outline-none"
                                >
                                    Explore Details
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal for SAP Details */}
                <AnimatePresence>
                    {selectedItem && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-8">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedItem(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/10 backdrop-blur-sm"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>

                                {/* Scrollable Container */}
                                <div className="overflow-y-auto w-full h-full [scrollbar-width:thin] scrollbar-track-transparent scrollbar-thumb-white/10">

                                    {/* Image Header Area */}
                                    <div className="relative w-full h-64 md:h-80 bg-[#121212] flex items-center justify-center">
                                        <Image
                                            src={selectedItem.image}
                                            alt={selectedItem.title}
                                            fill
                                            className="object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />

                                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                                            <p className="text-sm text-blue-400 font-semibold mb-2 tracking-widest uppercase">
                                                {selectedItem.category}
                                            </p>
                                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                                {selectedItem.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Detailed Text Area */}
                                    <div className="p-8 md:p-12 space-y-8 bg-[#1a1a1a]">
                                        <div className="prose prose-invert prose-blue max-w-none">
                                            {selectedItem.details.map((paragraph, idx) => (
                                                <p key={idx} className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Optional Call to Action / Footer of Modal */}
                                        <div className="pt-8 border-t border-white/10 flex justify-end">
                                            <button
                                                onClick={() => setSelectedItem(null)}
                                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-full transition-colors border border-white/10"
                                            >
                                                Close Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

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
