"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About us", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="fixed top-10 right-6 md:top-12 md:right-12 lg:right-24 z-[100] overflow-hidden rounded-3xl border border-white/10 bg-[#121215]/95 backdrop-blur-md text-white shadow-2xl"
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="flex cursor-pointer items-center justify-between gap-12 px-8 py-4 transition-colors hover:bg-white/5"
          >
            <span className="text-base font-bold tracking-wide md:text-lg">{activeTab}</span>
            
            <motion.svg
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </motion.svg>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-w-[240px] flex-col p-8"
          >
            <div className="flex items-center justify-between pb-6">
              <span className="text-base font-bold tracking-wide md:text-lg text-white">
                {activeTab}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white transition-colors hover:text-white/70"
                aria-label="Close menu"
              >
                <motion.svg
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              </button>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.name);
                      setIsOpen(false); 
                    }}
                    className={`text-lg font-bold tracking-wide w-fit transition-all ${
                      isActive
                        ? "text-white underline underline-offset-8 decoration-2"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}