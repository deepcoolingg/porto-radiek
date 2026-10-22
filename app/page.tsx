import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";
import TextMarquee from "@/components/ui/TextMarquee";
import Works from "@/components/works/Works";
import Footer from "@/components/ui/Footer";
import Experience from "@/components/experience/Experience";
import UltimatumFAQ from "@/components/ultimatum/UltimatumFaq";
import Statement from "@/components/ui/Statement";

export default function Home() {
  return (
    <main className="bg-black">

      <div className="relative z-10 bg-black pb-10 rounded-b-[30px] md:rounded-b-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <Navbar />
        
        <Hero />
        
        <section className="relative w-full">
          <TextMarquee text="SELECTED WORK" />
        </section>
       
        <Works />
        <Statement />
        <TextMarquee text="EXPERIENCE" />
        <Experience />
        <UltimatumFAQ />
       
        <div className="h-[50vh] w-full bg-black"></div>
        
      </div>
      
      <Footer />
      
    </main>
  );
}