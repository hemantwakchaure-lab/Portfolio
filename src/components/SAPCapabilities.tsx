"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";

// The shape of our Sanity document
interface SAPCapability {
    _id: string;
    title: string;
    category: string;
    description: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    coverImage: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any[];
}

export default function SAPCapabilities() {
    const [sapItems, setSapItems] = useState<SAPCapability[]>([]);
    const [selectedItem, setSelectedItem] = useState<SAPCapability | null>(null);

    useEffect(() => {
        const fetchCapabilities = async () => {
            try {
                // Fetch all published SAP Capabilities from Sanity
                const data = await client.fetch<SAPCapability[]>(`
                    *[_type == "sapCapability"] | order(_createdAt asc) {
                        _id,
                        title,
                        category,
                        description,
                        coverImage,
                        content
                    }
                `);
                setSapItems(data);
            } catch (error) {
                console.error("Error fetching SAP capabilities:", error);
            }
        };

        fetchCapabilities();
    }, []);

    return (
        <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sapItems.map((item, index) => (
                        <motion.div
                            key={item._id}
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
                                        {selectedItem.coverImage ? (
                                            <Image
                                                src={urlFor(selectedItem.coverImage).url()}
                                                alt={selectedItem.title}
                                                fill
                                                className="object-cover opacity-60"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 opacity-60" />
                                        )}
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
                                        <div className="prose prose-invert prose-blue max-w-none prose-img:rounded-xl prose-img:shadow-lg prose-headings:font-bold prose-a:text-blue-400">
                                            {selectedItem.content ? (
                                                <PortableText value={selectedItem.content} />
                                            ) : (
                                                <p className="text-neutral-500 italic">No detailed content provided for this capability.</p>
                                            )}
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

            </div>
        </section>
    );
}
