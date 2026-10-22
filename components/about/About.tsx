"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";

export default function About() {
  const words = aboutData.description.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, 
        delayChildren: 0.1,    
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      filter: "blur(4px)",
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.7, 
        ease: [0.2, 0.65, 0.3, 0.9] 
      },
    },
  };

  return (
    <section className="relative z-20 w-full overflow-hidden bg-black px-6 py-24 md:py-32 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:gap-24">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "10000px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-2 md:w-1/4"
        >
          <h2 className="text-xl font-bold uppercase tracking-widest text-white/40">
            {aboutData.heading}
          </h2>
          <div className="mt-6 h-[1px] w-12 bg-white/20" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "10000px 0px -100px 0px" }} 
          className="md:w-3/4"
        >
          <p className="flex flex-wrap font-sans text-2xl font-medium leading-relaxed tracking-tight text-white/90 md:text-4xl lg:text-5xl">
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                variants={wordVariants} 
                className="mr-[0.25em] mt-[0.1em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}