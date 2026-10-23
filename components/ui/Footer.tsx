"use client";

import { animate } from "framer-motion";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      
      animate(window.scrollY, y, {
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <>
      <div className="h-[95vh] w-full pointer-events-none"></div>
      
      <footer className="fixed bottom-0 left-0 flex h-[95vh] w-full flex-col justify-between bg-white px-6 pb-6 pt-20 text-black z-0 sm:pb-8 sm:pt-24 md:px-12 md:pt-32 lg:px-24">
        
        <div className="mt-8 flex flex-col items-start gap-6 sm:mt-16 sm:gap-8">
          <h2 className="font-sans text-[1.75rem] font-medium leading-none tracking-tighter sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] break-all sm:break-normal">
            radikfidi20@gmail.com
          </h2>
          
          <button 
            onClick={() => window.open('https://wa.me/6285156057722', '_blank')}
            className="rounded-full bg-black px-6 py-3 text-sm tracking-wide text-white transition-transform hover:scale-105 hover:bg-zinc-800 sm:px-8 sm:py-4"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-auto flex w-full flex-col">
          <div className="mb-6 h-[1px] w-full bg-black/10 sm:mb-10"></div>

          <div className="flex flex-col justify-between gap-8 sm:gap-12 lg:flex-row lg:gap-0">
            <div className="flex flex-col gap-2">
              <span className="text-xl tracking-wide md:text-2xl">Muhammad Radiek Fidiyanto</span>
              <span className="text-base italic text-black/50 md:text-lg">Lets create something amazing together.</span>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-16">
              
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">Location</span>
                <div className="mt-2 flex flex-col gap-1">
                  <span className="text-sm font-semibold">Indonesia</span>
                  <span className="text-sm text-black/60">Jakarta</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">Services</span>
                <div className="flex flex-col gap-2">
                 <span className="text-sm text-black/60">Software Development</span>
                 <span className="text-sm text-black/60">Backend Architecture</span>
                 <span className="text-sm text-black/60">Full Stack System</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">Navigation</span>
                <div className="flex flex-col gap-2">
                  <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-sm text-black/80 transition-colors hover:text-black">Home</a>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm text-black/80 transition-colors hover:text-black">About</a>
                  <a href="#works" onClick={(e) => scrollToSection(e, 'works')} className="text-sm text-black/80 transition-colors hover:text-black">Works</a>
                  <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="text-sm text-black/80 transition-colors hover:text-black">Experience</a>
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm text-black/80 transition-colors hover:text-black">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">Social</span>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/deepcoolingg" target="_blank" rel="noopener noreferrer" className="text-sm text-black/80 transition-colors hover:text-black">GitHub</a>
                  <a href="https://linkedin.com/in/radiek" target="_blank" rel="noopener noreferrer" className="text-sm text-black/80 transition-colors hover:text-black">LinkedIn</a>
                  <a href="https://instagram.com/radiekusut" target="_blank" rel="noopener noreferrer" className="text-sm text-black/80 transition-colors hover:text-black">Instagram</a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-black/10 pt-4 text-xs text-black/50 gap-3 sm:mt-16 sm:pt-6 md:flex-row md:gap-0">
            <div className="flex gap-4">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="transition-colors hover:text-black">Home</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="transition-colors hover:text-black">About</a>
              <a href="#works" onClick={(e) => scrollToSection(e, 'works')} className="transition-colors hover:text-black">Works</a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="transition-colors hover:text-black">Experience</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="transition-colors hover:text-black">Contact</a>
            </div>
            <span className="md:mt-0">© 2026 Radiek Fidiyanto - All rights reserved</span>
          </div>
        </div>

      </footer>
    </>
  );
}