"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { experienceData } from "@/lib/data";
import Stacks from "@/components/ui/stacks";

function Experience() {
  return (
    <section className="relative z-10 w-full bg-black px-6 py-16 sm:py-20 md:px-12 md:py-24 lg:px-24">
      
      <div className="mb-8 flex flex-col items-start justify-between gap-2 sm:mb-12 sm:gap-4 md:flex-row md:items-end">
        <h2 className="font-sans text-xl font-medium tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {experienceData.header.title}
        </h2>
        <a 
          href={experienceData.header.resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          download="CV_Muhammad-Radiek-Fidiyanto.pdf"
          className="rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105 md:px-6 md:py-3 md:text-base"
        >
          View Resume
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(220px,1fr))] will-change-transform">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-6 transition-colors hover:bg-[#1a1a1e] sm:p-8 md:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <div className="flex flex-col">
            <div className="relative mb-6 h-16 w-full object-center opacity-80 transition-opacity group-hover:opacity-100">
              <Image 
                src={experienceData.pusdatin.logoPath} 
                alt="Pusdatin Logo" 
                fill 
                className="object-contain object-left" 
                sizes="480px" 
                quality={75}
                loading="lazy"
              /> 
            </div>
            
            <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl lg:text-2xl">
              {experienceData.pusdatin.description}
            </p>

            <div className="mt-6 flex flex-col">
              <span className="text-sm font-bold text-white">{experienceData.pusdatin.organization}</span>
              <span className="text-sm text-white/50">{experienceData.pusdatin.roleAndDate}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-6 transition-colors hover:bg-[#1a1a1e] sm:p-8 md:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">{experienceData.stats.gpa.value}</span>
            <span className="text-base text-white/50">{experienceData.stats.gpa.label}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-6 transition-colors hover:bg-[#1a1a1e] sm:p-8 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="mb-6 relative h-16 w-16 opacity-90 transition-opacity group-hover:opacity-100">
            <Image src={experienceData.education.logoPath} alt="UPN Logo" fill className="object-contain object-center" sizes="64px" quality={75} loading="lazy" /> 
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold tracking-tight text-white leading-tight sm:text-xl">{experienceData.education.major}</span>
            <span className="text-sm text-white/50 leading-snug">
              Universitas Pembangunan Nasional Veteran Jakarta
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-6 transition-colors hover:bg-[#1a1a1e] sm:p-8 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">{experienceData.stats.certifications.value}</span>
            <span className="text-sm text-white/50">{experienceData.stats.certifications.label}</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-6 transition-colors hover:bg-[#1a1a1e] sm:p-8 md:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg">
              {experienceData.organization.description}
            </p>
            <div className="mt-4 flex flex-col">
              {experienceData.organization.roles.map((role, index) => (
                <div key={index} className={`flex flex-col ${index > 0 ? "mt-1" : ""}`}>
                  <span className="text-sm font-bold text-white">{role.title}</span>
                  <span className="text-sm text-white/50">{role.period}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="relative min-h-[180px] overflow-hidden rounded-3xl border border-white/5 bg-[#121215] transition-colors hover:bg-[#1a1a1e] sm:min-h-[220px] md:col-span-2 lg:col-span-2 lg:row-span-1" 
        >
          <Stacks />
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Experience);