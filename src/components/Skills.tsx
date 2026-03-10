"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Business Skills",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30",
        skills: [
            "Technical Program Management", "SAP SDLC", "Order-to-Cash (O2C)",
            "Billing & Revenue Management", "Subscription Lifecycle", "Cross-Functional Delivery",
            "Stakeholder Management", "Agile Methodologies", "SAP Implementations",
            "SAP Configurations", "Enterprise Systems", "Project KPI Tracking"
        ]
    },
    {
        title: "Business Tools",
        color: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        skills: [
            "Keynote", "Tableau", "SharePoint", "Radar", "Power BI",
            "ServiceNow", "Jira", "Confluence", "Smartsheet", "iEval"
        ]
    },
    {
        title: "Technical Skills",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/30",
        skills: [
            "SAP BTP", "SAP Signavio", "SQL", "Python", "Java",
            "HTML", "C", "Azure Cloud", "AWS Cloud", "Macros", "RPA"
        ]
    }
];

// Physics-based floating skill bubble
function SkillBubble({ skill, index }: { skill: string, index: number }) {
    // Randomize initial float animation values for each bubble
    const randomY = Math.random() * 20 - 10;
    const randomX = Math.random() * 20 - 10;
    const duration = 3 + Math.random() * 2;
    const delay = Math.random() * 2;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring", stiffness: 100, damping: 10, mass: 1, delay: index * 0.05
            }}
            className="relative group cursor-pointer touch-none"
        >
            <motion.div
                animate={{
                    y: [0, randomY, 0],
                    x: [0, randomX, 0],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: delay
                }}
                whileHover={{ scale: 1.15, zIndex: 50 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center transition-colors group-hover:bg-white/10 group-hover:block group-hover:border-white/30"
            >
                <span className="text-sm md:text-base font-medium text-neutral-300 group-hover:text-white whitespace-nowrap select-none">
                    {skill}
                </span>
            </motion.div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section className="relative z-20 bg-[#121212] py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 text-center md:text-left"
                >
                    <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
                        Technical Arsenal
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Skills & Tools
                    </h2>
                </motion.div>

                <div className="space-y-16 md:space-y-24">
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`p-6 md:p-10 rounded-3xl bg-gradient-to-br ${category.color} border ${category.border} relative overflow-hidden`}
                        >
                            {/* Category Background Glow */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block tracking-tight">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4">
                                    {category.skills.map((skill, index) => (
                                        <SkillBubble key={skill} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
