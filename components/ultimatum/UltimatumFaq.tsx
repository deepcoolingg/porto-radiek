"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData } from "@/lib/data";

export default function UltimatumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-20 w-full bg-black px-6 pt-24 pb-8 md:pt-32 md:pb-12 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 lg:flex-row lg:gap-24">
        
        <div className="flex flex-col lg:w-1/3">
          <h2 className="font-sans text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
            The Reality Check.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Before we partner up, let’s address the elephant in the room. Why precision in software engineering matters.
          </p>
        </div>

        <div className="flex flex-col lg:w-2/3">
          <div className="h-[1px] w-full bg-white/10" />
          
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="flex flex-col border-b border-white/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-white/80"
                >
                  <span className={`text-lg font-medium md:text-xl lg:text-2xl ${isOpen ? 'text-white' : 'text-white/70'}`}>
                    {faq.question}
                  </span>
                  <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <motion.svg
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-12 text-base leading-relaxed text-white/50 md:text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}