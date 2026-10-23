import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";
import MobileProfileCard from "@/components/hero/MobileProfileCard";
import About from "@/components/about/About";
import TextMarquee from "@/components/ui/TextMarquee";
import Works from "@/components/works/Works";
import Footer from "@/components/ui/Footer";
import Experience from "@/components/experience/Experience";
import UltimatumFAQ from "@/components/ultimatum/UltimatumFaq";
import Statement from "@/components/ui/Statement";

export default function Home() {
  return (
    <main className="bg-black">

      <div className="relative z-10 bg-black pb-0 mb-0 rounded-b-[20px] sm:rounded-b-[30px] md:rounded-b-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <Navbar />
        
        <section id="home">
          <Hero />
        </section>

        <MobileProfileCard />

        <section id="about">
          <About />
        </section>
        
        <section className="relative w-full">
          <TextMarquee text="SELECTED WORK" />
        </section>
       
        <section id="works">
          <Works />
        </section>

        <section id="statement">
          <Statement />
        </section>

        <TextMarquee text="EXPERIENCE" />
        
        <section id="experience">
          <Experience />
        </section>

        <UltimatumFAQ />
       
        <div className="h-[30vh] w-full bg-black sm:h-[50vh]"></div>
        
      </div>
      
      <section id="contact">
        <Footer />
      </section>
      
    </main>
  );
}