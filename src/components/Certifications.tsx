"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
    {
        title: "Project Management Professional (PMP)",
        issuer: "Project Management Institute",
        short: "PMP®",
        image: "/pmp-logo.png",
        link: "https://www.credly.com/your-pmp-link", // Update with your actual link
        color: "from-amber-400 to-orange-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        title: "SAP Certified Associate - Design Thinking",
        issuer: "SAP",
        short: "SAP GenAI", // representing SAP innovation/GenAI focus as requested
        image: "/sap-genai-logo.png",
        link: "https://www.credly.com/your-sap-genai-link", // Update with your actual link
        color: "from-blue-400 to-indigo-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "SAP Certified Associate - SAP S/4HANA",
        issuer: "SAP",
        short: "S/4HANA",
        image: "/sap-s4hana-logo.png",
        link: "https://www.credly.com/your-s4hana-link", // Update with your actual link
        color: "from-sky-400 to-cyan-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    },
    {
        title: "SAP Certified Associate - SAP BRIM",
        issuer: "SAP",
        short: "SAP BRIM",
        image: "/sap-brim-logo.png",
        link: "https://www.credly.com/your-sap-brim-link", // Update with your actual link
        color: "from-emerald-400 to-teal-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        title: "SAP Certified Development Associate - ABAP",
        issuer: "SAP",
        short: "SAP ABAP",
        image: "/sap-abap-logo.png",
        link: "https://www.credly.com/your-sap-abap-link", // Update with your actual link
        color: "from-purple-400 to-pink-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    }
];

export default function Certifications() {
    return (
        <section className="relative z-20 bg-[#121212] pt-24 pb-8 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
                        Qualifications
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Certifications
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center w-full focus:outline-none"
                            >
                                {/* The Circle */}
                                <div className={`w-36 h-36 md:w-44 md:h-44 rounded-full ${cert.bg} border ${cert.border} flex items-center justify-center p-6 relative overflow-hidden backdrop-blur-sm transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]`}>

                                    {/* Inner Glow */}
                                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${cert.color} group-hover:opacity-40 transition-opacity duration-500`} />

                                    {/* Spinning border effect on hover */}
                                    <div className={`absolute inset-[-2px] bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-clip:padding-box,border-box] [mask-composite:exclude] border-[2px] border-transparent rounded-full`} />

                                    {/* Short Name or Image inside circle */}
                                    {cert.image ? (
                                        <div className="absolute inset-0 z-10 rounded-full overflow-hidden flex items-center justify-center p-1">
                                            <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                                        </div>
                                    ) : (
                                        <h4 className="relative z-10 text-xl md:text-2xl font-bold text-center text-white drop-shadow-md">
                                            {cert.short}
                                        </h4>
                                    )}
                                </div>

                                {/* Full Title below circle */}
                                <div className="mt-6 text-center max-w-[180px]">
                                    <p className="text-sm md:text-base font-medium text-neutral-200 leading-snug group-hover:text-white transition-colors">
                                        {cert.title}
                                    </p>
                                    <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">
                                        {cert.issuer}
                                    </p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
