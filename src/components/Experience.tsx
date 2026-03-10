"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Consultant",
    company: "Infosys",
    location: "Sunnyvale, USA",
    period: "Feb 2025 - Present",
    points: [
      "Designed and simplified SAP BRIM (FI-CA/RMCA, Convergent Invoicing) architecture by minimizing cross-system dependencies, reducing integration complexity by 25%, improving system reliability, and enabling scalable, high-volume subscription billing systems",
      "Streamlined BRD, GAP, and design phases by driving prioritization and closure of critical items, reducing downstream defects by 20%",
      "Led IT & UAT readiness across SAP landscapes, improving test cycle efficiency by 25% and ensuring zero critical defects at go-live",
      "Accelerated revenue recognition by enabling direct postings in SAP FI-CA/RMCA, reducing processing time by 30%, accelerating financial close cycles, and strengthening billing accuracy across high-volume subscription systems",
      "Optimized SAP BRIM Convergent Invoicing (CI) design to reduce data footprint and improve reconciliation accuracy by 25%",
      "Orchestrated cross-functional execution across Finance and SAP teams, driving RAID governance, CR tracking, and dependency management to improve issue resolution by 35% and ensure zero impact to go-live with 100% on-time project delivery"
    ],
  },
  {
    role: "Engineering Project Manager Intern",
    company: "Visteon",
    location: "Michigan, USA",
    period: "May 2024 - Dec 2024",
    points: [
      "Spearheaded the end-to-end implementation of the SAP S/4HANA transformation project, resulting in a 35% increase in operational efficiency and a 45% reduction in application maintenance costs across global sites",
      "Designed and implemented an intelligent automation solution for SAP SD Order-to-Cash (O2C) workflows using Generative AI, improving processing efficiency by 40%, reducing manual errors, and enhancing the scalability of enterprise sales operations",
      "Owned program RAID management by identifying risks, assumptions, issues, and dependencies across engineering, data, and business teams, enabling early mitigation and protecting delivery timelines across global stakeholders",
      "Optimized SAP workflows using SAP Signavio by identifying process gaps, resulting in a 25% improvement in efficiency"
    ],
  },
  {
    role: "SAP Consultant",
    company: "Accenture",
    location: "Mumbai, India",
    period: "Jan 2021 - Jun 2023",
    points: [
      "Delivered software features by managing the complete project lifecycle from ideation to launch, establishing Minimum Viable Product (MVP), success metrics, and KPIs to automate mass SAP SD contract renewals within 5 weeks for a $1M contract",
      "Increased Customer Satisfaction (CSAT) by 35% by adopting agile methodologies to develop 50+ software product features",
      "Evangelized project roadmap, ensuring stakeholder alignment and driving project adoption, resulting in on-time project delivery",
      "Achieved a 30% increase in client operational efficiency by optimizing SAP FICO-driven billing cycle process to mitigate risks and ensure compliance with software audits, thereby safeguarding clients from penalties of up to $3M"
    ],
  },
  {
    role: "Software Engineering Analyst",
    company: "Accenture",
    location: "Mumbai, India",
    period: "Oct 2019 - Dec 2020",
    points: [
      "Engineered market-oriented SAP ABAP enhancements, slashing program processing time by 65% through business logic changes",
      "Pioneered error tracking feature adopting agile processes, enhancing system reliability by 90%, improving turnaround times by 10%",
      "Enhanced team productivity and turnaround time by 40% by implementing agile processes with ServiceNow, JIRA, and Confluence; Diminished product backlog tickets by 30% by assisting end users in solving 400+ software issues",
      "Developed Tableau & Power BI dashboards to analyze product backlog and track 1K+ user stories, increasing throughput by 25%"
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
            Career Journey
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative pl-8 md:pl-0"
            >
              {/* Desktop Layout timeline connector conceptual (can enhance later if desired) */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
                
                {/* Left side: Role & Company Info */}
                <div className="md:w-1/3 flex-shrink-0">
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-medium text-lg mb-1">
                    {exp.company}
                  </p>
                  <div className="flex flex-col gap-1 mt-3">
                    <span className="text-sm text-neutral-400 font-medium tracking-wide">
                      {exp.period}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Right side: Points */}
                <div className="md:w-2/3 mt-4 md:mt-0">
                  <ul className="space-y-4">
                    {exp.points.map((point, ptIdx) => (
                      <li key={ptIdx} className="text-neutral-300 md:text-lg font-light leading-relaxed flex items-start group">
                        <span className="text-blue-500 mr-3 mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              
              {/* Separator Line */}
              {index < experiences.length - 1 && (
                <div className="absolute -bottom-8 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 md:mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
