"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;
const FRAME_PREFIX = "frame_";
const FRAME_SUFFIX = "_delay-0.066s.png";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load all images on mount
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Pad to 3 digits (e.g., 000, 001, ..., 119)
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/${FRAME_PREFIX}${indexStr}${FRAME_SUFFIX}`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };

      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  // Framer Motion scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0 -> 1 scroll to 0 -> 119 frames
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Handle canvas drawing drawing when frame changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!loaded || images.length === 0 || !canvasRef.current) return;
    
    const currFrame = Math.round(latest);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[currFrame];
    if (!img) return;

    // Simulate object-fit: cover logic on the canvas
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let drawX = 0;
    let drawY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawHeight = canvas.width / imgRatio;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawWidth = canvas.height * imgRatio;
      drawX = (canvas.width - drawWidth) / 2;
    }

    // Clear and draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
      // Trigger a re-draw of the current frame
      frameIndex.set(frameIndex.get() + 0.0001); 
    };
    
    // Initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-20 bg-[#121212]">
            Loading Experience...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
