"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { aboutData } from "@/lib/data";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Baca scroll untuk keseluruhan section (dari mulai nempel atas, sampai beres)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = aboutData.description.split(" ");

  return (
    // Kontainer tinggi (200vh) buat ngasih ruang scroll sementara layar ditahan
    <section 
      ref={containerRef} 
      className="relative z-20 w-full h-[200vh] bg-black"
    >
      {/* Pembungkus sticky biar layarnya "berhenti" di tempat */}
      <div className="sticky top-0 flex h-screen w-full items-center px-6 md:px-12 lg:px-24">
        
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:gap-24">
          
          {/* Label Kiri */}
          <div className="md:w-1/4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-white/40">
              {aboutData.heading}
            </h2>
            <div className="mt-6 h-[1px] w-12 bg-white/20" />
          </div>

          {/* Deskripsi Kanan (Reveal per kata) */}
          <div className="md:w-3/4">
            <p className="flex flex-wrap font-sans text-2xl font-medium leading-relaxed tracking-tight md:text-4xl lg:text-5xl">
              {words.map((word, i) => {
                // Bagi porsi scroll secara merata ke setiap kata
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

// Komponen per kata biar gampang diatur animasinya
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // Dari redup (0.15) jadi terang benderang (1)
  const opacity = useTransform(progress, range, [0.15, 1]);
  // Dari ngeblur jadi tajam
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
}