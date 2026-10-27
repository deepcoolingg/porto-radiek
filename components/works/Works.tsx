"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { projectsData } from "@/lib/data";

export default function SelectedWorks() {
  return (
    <section className="relative z-20 w-full bg-black px-6 py-16 sm:py-24 md:px-12 md:py-32 lg:px-24">

      <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px", amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`flex flex-col gap-6 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} sm:gap-8 lg:gap-20`}
            >
              
              <div className="group relative aspect-video w-full overflow-hidden rounded-3xl bg-[#121215] lg:w-3/5">
                {project.url ? (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block h-full w-full"
                >
                  <Image 
                    src={project.imagePlaceholder} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                    priority={index === 0}
                    quality={85}
                  />
                </a>
              ) : (
                <Image 
                  src={project.imagePlaceholder} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                  priority={index === 0}
                  quality={85}
                />
              )}

                <div className="absolute inset-0 bg-black/0 pointer-events-none transition-colors duration-500 group-hover:bg-black/20"></div>
              </div>

              <div className="flex w-full flex-col justify-center lg:w-2/5">
                
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-6">
                  <span className="text-sm font-medium text-white/50">{project.category}</span>
                  <span className="text-sm font-medium text-white/50">{project.year}</span>
                </div>

                <h3 className="mb-4 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
                  {project.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-white/70 sm:mb-8 sm:text-lg">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-col gap-2 sm:mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Role</span>
                  <span className="text-base font-medium text-white">{project.role}</span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((techItem, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/70"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}