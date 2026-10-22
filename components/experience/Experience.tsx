"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Stacks from "@/components/ui/stacks"; 
import { experienceData } from "@/lib/data"; 

export default function Experience() {
  return (
    <section className="relative z-10 w-full bg-black px-6 py-24 md:px-12 lg:px-24">
      
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-sans text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          {experienceData.header.title}
        </h2>
        <a 
          href={experienceData.header.resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          download="Radiek_Fidiyanto_CV.pdf"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105"
        >
          View Resume
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,minmax(220px,1fr))]">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-8 transition-colors hover:bg-[#1a1a1e] md:col-span-2 lg:col-span-2 lg:row-span-2"
        >
          <div className="flex flex-col gap-8">
            <div className="relative h-16 w-40 opacity-80 transition-opacity group-hover:opacity-100">
                <Image src={experienceData.pusdatin.logoPath} alt="Pusdatin Logo" fill className="object-contain object-left" /> 
            </div>
            <p className="text-xl font-medium leading-relaxed text-white/90 md:text-2xl lg:text-3xl">
              {experienceData.pusdatin.description}
            </p>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">{experienceData.pusdatin.organization}</span>
              <span className="text-sm text-white/50">{experienceData.pusdatin.roleAndDate}</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white/10">
              <span className="text-white/70">↗</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-8 transition-colors hover:bg-[#1a1a1e] md:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <span className="text-6xl font-bold tracking-tighter text-white lg:text-7xl">{experienceData.stats.gpa.value}</span>
            <span className="text-base text-white/50">{experienceData.stats.gpa.label}</span>
          </div>
          <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <span className="text-xs text-white/70">↗</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-8 transition-colors hover:bg-[#1a1a1e] md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="mb-6 relative h-16 w-16 opacity-90 transition-opacity group-hover:opacity-100">
            <Image src={experienceData.education.logoPath} alt="UPN Logo" fill className="object-contain" /> 
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-bold tracking-tight text-white leading-tight">{experienceData.education.major}</span>
            <span className="text-sm text-white/50 leading-snug">
              Universitas Pembangunan Nasional Veteran Jakarta
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-8 transition-colors hover:bg-[#1a1a1e] md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold tracking-tighter text-white lg:text-5xl">{experienceData.stats.leadership.value}</span>
            <span className="text-sm text-white/50">{experienceData.stats.leadership.label}</span>
          </div>
          <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <span className="text-xs text-white/70">↗</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-[#121215] p-8 transition-colors hover:bg-[#1a1a1e] md:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium leading-relaxed text-white/90">
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
          <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <span className="text-white/70">↗</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative min-h-[220px] overflow-hidden rounded-3xl border border-white/5 bg-[#121215] transition-colors hover:bg-[#1a1a1e] md:col-span-2 lg:col-span-2 lg:row-span-1" 
        >
          <Stacks />
        </motion.div>

      </div>
    </section>
  );
}