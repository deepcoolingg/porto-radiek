"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ColorBends from "@/components/ui/ColorBends";
import { heroData } from "@/lib/data";

const ProfileCard = dynamic(() => import("@/components/ui/ProfileCard"), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[400px] bg-white/5 rounded-xl animate-pulse" />
});

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden will-change-transform">
      
      <div className="absolute inset-0 z-0">
        <ColorBends />
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </div>
      
      <div className="relative z-20 flex h-full w-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-10 left-6 md:top-12 md:left-12 lg:left-24 z-50 inline-flex w-fit cursor-pointer items-center rounded-xl border border-white/10 bg-[#121215]/90 px-3 py-2 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 sm:px-4 sm:py-2"
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold tracking-wide text-white md:text-sm">
              {heroData.badge.title}
            </span>
            <span className="text-[10px] text-white/70 md:text-xs">
              {heroData.badge.subtitle}
            </span>
          </div>
        </motion.div>

        <div className="z-10 flex w-full items-center justify-between gap-4 pointer-events-none mt-20 md:mt-0">
          
          <div className="flex w-full max-w-4xl flex-col pointer-events-auto relative">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <h1 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-[#f8fafc] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem]">
                {heroData.heading.line1} <br />
                {heroData.heading.line2} <br />
                <span className="font-serif italic text-white">{heroData.heading.highlight}</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[32rem]"
            >
              <p className="text-xs leading-relaxed text-[#a1a1aa] sm:text-sm md:text-base lg:text-[1rem]">
                {heroData.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden shrink-0 ml-auto pointer-events-auto lg:block"
          >
            <ProfileCard
              name={heroData.profile.name} 
              title={heroData.profile.title}
              image={heroData.profile.image} 
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(168, 85, 247, 0.4)" 
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </motion.div>

        </div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-10 left-6 z-10 md:bottom-12 md:left-12 lg:left-24 pointer-events-none"
        />
       </div>
    </section>
  );
}

export default memo(Hero);