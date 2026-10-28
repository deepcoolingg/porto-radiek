"use client";

import { useRef, memo, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ColorBends from "@/components/ui/ColorBends";
import { aboutData } from "@/lib/data";

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = useMemo(() => aboutData.description.split(" "), []);

  return (
    <section 
      ref={containerRef} 
      className="relative z-20 w-full h-[200vh]"
    >
      <div className="absolute inset-0 z-0">
        <ColorBends />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="sticky top-0 flex h-screen w-full items-center px-6 md:px-12 lg:px-24 z-20">
        
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:gap-24">
        
          <div className="md:w-1/4">
            <h2 className="text-lg font-bold uppercase tracking-widest text-white/40 sm:text-xl">
              {aboutData.heading}
            </h2>
            <div className="mt-6 h-[1px] w-12 bg-white/20" />
          </div>

          <div className="md:w-3/4">
            <p className="flex flex-wrap font-sans text-xl font-medium leading-relaxed tracking-tight sm:text-2xl md:text-4xl lg:text-5xl">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                
                return (
                  <Word 
                    key={i} 
                    word={word} 
                    progress={scrollYProgress} 
                    range={[start, end]} 
                  />
                );
              })}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

const Word = memo(({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);

  return (
    <span className="mr-[0.25em] mt-[0.1em] inline-block relative">
      <motion.span 
        style={{ opacity, filter }} 
        className="text-white/90"
      >
        {word}
      </motion.span>
    </span>
  );
});

Word.displayName = "Word";

export default memo(About);