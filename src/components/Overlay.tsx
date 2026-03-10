"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: "My Name. Creative Developer." (0% -> 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-20vh"]);

  // Section 2: "I build digital experiences." (30% -> 50%)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], ["20vh", "-20vh"]);

  // Section 3: "Bridging design and engineering." (60% -> 80%)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], ["20vh", "-20vh"]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        {/* Section 1 - Center */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Hemant Wakchaure
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/80 font-light tracking-wide drop-shadow-md">
            Program/Project Manager.
          </p>
        </motion.div>

        {/* Section 2 - Left */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-y-0 left-8 md:left-24 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl drop-shadow-lg leading-tight">
            I like to solve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              complex problems
            </span>
            <br />
            and drive business value.
          </h2>
        </motion.div>

        {/* Section 3 - Right */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-y-0 right-8 md:right-24 flex flex-col justify-center text-right"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white max-w-2xl drop-shadow-lg leading-tight ml-auto">
            Delivering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-cyan-400">
              results through leadership.
            </span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
