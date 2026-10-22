"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function Statement() {
  const text = "I engineer systems that scale. Architectures that endure.";
  const chars = text.split("");
  const containerRef = useRef<HTMLElement>(null);

  // Mantau seberapa jauh kita nge-scroll container raksasa di bawah
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start start" = mulai pas ujung atas container nyentuh ujung atas layar
    // "end end" = selesai pas ujung bawah container nyentuh ujung bawah layar
    offset: ["start start", "end end"], 
  });

  return (
    // 1. Container dibikin super tinggi (300vh) ngasih "waktu/ruang" buat nge-scroll
    <section ref={containerRef} className="relative z-20 h-[300vh] w-full bg-black">
      
      {/* 2. STICKY WRAPPER: Ngunci elemen di layar selama scroll ada di area 300vh tadi */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 md:px-12 lg:px-24">
        <h2 className="max-w-4xl text-center font-sans text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
          
          {chars.map((char, index) => {
            const start = index / chars.length;
            const end = start + (1 / chars.length);
            
            return (
              <Character key={index} range={[start, end]} progress={scrollYProgress}>
                {char}
              </Character>
            );
          })}
          
          {/* Kursor Kedap-Kedip */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
            className="ml-2 inline-block h-[0.8em] w-[4px] -translate-y-[-0.1em] bg-white md:w-[6px]"
          />
        </h2>
      </div>
    </section>
  );
}

function Character({ 
  children, 
  progress, 
  range 
}: { 
  children: string, 
  progress: MotionValue<number>, 
  range: [number, number] 
}) {
  // Gua kasih base opacity 0.15 biar ada efek "ghost text" (samar-samar).
  // Kalau mau bener-bener ilang pas belum di-scroll, ganti 0.15 jadi 0
  const opacity = useTransform(progress, range, [0.15, 1]);
  
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
}