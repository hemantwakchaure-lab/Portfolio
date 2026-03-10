"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Ethereal Interactions",
    category: "WebGL / Creative Coding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Product Design / Frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Spatial Commerce",
    category: "React Three Fiber / Next.js",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "AI Chat Interface",
    category: "UX/UI / Prompt Engineering",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
  },
];

export default function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative block aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Dark Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Glassmorphism content block */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 text-white transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                 <p className="text-xs md:text-sm text-neutral-300 font-medium mb-1 tracking-wide uppercase">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                    {project.title}
                  </h4>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
