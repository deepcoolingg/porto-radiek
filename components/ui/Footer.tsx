"use client";

export default function Footer() {
  return (
    <>
      <div className="h-[80vh] w-full pointer-events-none"></div>
      <footer className="fixed bottom-0 left-0 flex h-[80vh] w-full flex-col justify-between bg-white px-6 pb-8 pt-20 text-black z-0 md:px-12 lg:px-24">
        
        <div className="mt-10 flex flex-col items-start gap-8">
          <h2 className="font-sans text-[2.5rem] font-medium leading-none tracking-tighter sm:text-[4rem] md:text-[5rem] lg:text-[7rem]">
            radikfidi20@gmail.com
          </h2>
          
          <button 
            onClick={() => window.open('https://wa.me/6285156057722', '_blank')}
            className="rounded-full bg-black px-8 py-4 tracking-wide text-white transition-transform hover:scale-105 hover:bg-zinc-800"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-auto flex w-full flex-col">
          <div className="mb-10 h-[1px] w-full bg-black/10"></div>

          <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-0">
            <div className="flex flex-col gap-2">
              <span className="text-xl tracking-wide md:text-2xl">Muhammad Radiek Fidiyanto</span>
              <span className="text-base font-italic text-black/50 md:text-lg">Lets create something amazing together.</span>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
              
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
                  <a href="#home" className="text-sm text-black/80 transition-colors hover:text-black">Home</a>
                  <a href="#about" className="text-sm text-black/80 transition-colors hover:text-black">About</a>
                  <a href="#works" className="text-sm text-black/80 transition-colors hover:text-black">Works</a>
                  <a href="#experience" className="text-sm text-black/80 transition-colors hover:text-black">Experience</a>
                  <a href="#contact" className="text-sm text-black/80 transition-colors hover:text-black">Contact</a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-black/40">Social</span>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://github.com/deepcoolingg" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-black/80 transition-colors hover:text-black"
                  >
                    GitHub
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/radiek" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-black/80 transition-colors hover:text-black"
                  >
                    LinkedIn
                  </a>
                  
                  <a 
                    href="https://instagram.com/radiekusut" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-black/80 transition-colors hover:text-black"
                  >
                    Instagram
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between border-t border-black/10 pt-6 text-xs text-black/50 md:flex-row">
            <div className="flex gap-4">
              <a href="#home" className="transition-colors hover:text-black">Home</a>
              <a href="#about" className="transition-colors hover:text-black">About</a>
              <a href="#works" className="transition-colors hover:text-black">Works</a>
              <a href="#experience" className="transition-colors hover:text-black">Experience</a>
              <a href="#contact" className="transition-colors hover:text-black">Contact</a>
            </div>
            <span className="mt-4 md:mt-0">© 2026 Radiek Fidiyanto - All rights reserved</span>
          </div>
        </div>

      </footer>
    </>
  );
}