"use client";

import { useState, useEffect, memo, useMemo, useCallback } from "react";  
import { motion, AnimatePresence, animate } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeItem = navItems.find(
            (item) => item.href.replace("#", "") === entry.target.id
          );
          if (activeItem) {
            setActiveTab(activeItem.name);
            // Check if we're in footer/contact section
            setIsInFooter(entry.target.id === "contact");
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-30% 0px -70% 0px", 
      threshold: 0,
    });

    // Delay observer initialization untuk performa awal lebih baik
    const timeoutId = setTimeout(() => {
      navItems.forEach((item) => {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      navItems.forEach((item) => {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string, name: string) => {
    e.preventDefault();
    setActiveTab(name);
    setIsOpen(false); 
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY;
        animate(window.scrollY, y, {
          duration: 1, 
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => window.scrollTo(0, latest),
        });
      }
    }, 150);
  }, []);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className={`fixed top-10 right-6 md:top-12 md:right-12 lg:right-24 z-[100] overflow-hidden rounded-3xl border shadow-2xl ${
        isInFooter 
          ? "border-white/10 bg-black/80 backdrop-blur-md text-white" 
          : "border-black/10 bg-white/95 backdrop-blur-md text-black"
      }`}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className={`flex cursor-pointer items-center justify-between gap-6 px-5 py-3 transition-colors sm:gap-12 sm:px-8 sm:py-4 ${
              isInFooter ? "hover:bg-white/10" : "hover:bg-black/5"
            }`}
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
            className="flex min-w-[200px] flex-col p-6 sm:min-w-[240px] sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 sm:pb-6">
              <span className={`text-base font-bold tracking-wide md:text-lg ${
                isInFooter ? "text-white" : "text-black"
              }`}>
                {activeTab}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer transition-colors ${
                  isInFooter ? "text-white hover:text-white/70" : "text-black hover:text-black/70"
                }`}
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

            <div className="flex flex-col gap-5 pt-2 sm:gap-6">
              {navItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href.replace('#', ''), item.name)}
                    className={`text-lg font-bold tracking-wide w-fit transition-all ${
                      isInFooter
                        ? isActive
                          ? "text-white underline underline-offset-8 decoration-2"
                          : "text-white/60 hover:text-white"
                        : isActive
                        ? "text-black underline underline-offset-8 decoration-2"
                        : "text-black/60 hover:text-black"
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

export default memo(Navbar);