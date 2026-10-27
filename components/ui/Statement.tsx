"use client";

import { useRef, memo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function Statement() {
  const text = "Systems built to scale. Architecture built to last.";
  const chars = text.split("");
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });

  return (
    <section ref={containerRef} className="relative z-20 h-[300vh] w-full bg-black">
      
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 md:px-12 lg:px-24">
        <h2 className="max-w-4xl text-center font-sans text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-5xl lg:text-7xl">
          
          {chars.map((char, index) => {
            const start = index / chars.length;
            const end = start + (1 / chars.length);
            
            return (
              <Character key={index} range={[start, end]} progress={scrollYProgress}>
                {char}
              </Character>
            );
          })}
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.4 }}
            className="ml-2 inline-block h-[0.8em] w-1 -translate-y-0.1em] bg-white md:w-1.5"
          />
        </h2>
      </div>
    </section>
  );
}

const Character = memo(({ 
  children, 
  progress, 
  range 
}: { 
  children: string, 
  progress: MotionValue<number>, 
  range: [number, number] 
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
});