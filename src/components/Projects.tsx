"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Apple Strategy",
    category: "Case Study",
    image: "/Apple-cover.jpg",
    link: "/Apple-presentation.pdf",
  },
  {
    id: 2,
    title: "Netflix Product Strategy",
    category: "Case Study",
    image: "/Netflix-cover.jpg",
    link: "/Netflix-presentation.pdf",
  },
  {
    id: 3,
    title: "Nvidia Market Analysis",
    category: "Case Study",
    image: "/Nvidia-cover.jpg",
    link: "/Nvidia-presentation.pdf",
  },
  {
    id: 4,
    title: "Tinder Pricing Strategy",
    category: "Pricing Strategy",
    image: "/Tinder-Pricing-Strategy-cover.jpg",
    link: "/Tinder-Pricing-Strategy-presentation.pdf",
  },
  {
    id: 5,
    title: "Lyft Growth Strategy",
    category: "Case Study",
    image: "/Lyft-cover.jpg",
    link: "/Lyft-presentation.pdf",
  },
];

export default function Projects() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
            Selected Work
          </h3>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Recent Projects
          </h2>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-12 pt-4 px-4 gap-6 md:gap-8 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <motion.div
              onClick={() => setSelectedPdf(project.link)}
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex-none w-[280px] md:w-[360px] lg:w-[420px] aspect-[4/5] md:aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer snap-center shadow-xl hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Glassmorphism content block */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-5 md:p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-white transition-all duration-500 translate-y-2 md:translate-y-4 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] md:text-xs text-neutral-300 font-medium mb-1 md:mb-2 tracking-wider uppercase">
                  {project.category}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-snug">
                    {project.title}
                  </h4>
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPdf(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[85vh] md:h-[90vh] bg-[#1e1e1e] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-[#121212]">
                <h3 className="text-white font-medium pl-2">Case Study Viewer</h3>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-colors"
                  title="Close Viewer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 w-full bg-neutral-900 relative">
                <iframe
                  src={`${selectedPdf}#toolbar=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  title="PDF Document Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
