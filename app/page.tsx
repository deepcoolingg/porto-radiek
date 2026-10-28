import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";

const MobileProfileCard = dynamic(() => import("@/components/hero/MobileProfileCard"), {
  ssr: true,
});

const About = dynamic(() => import("@/components/about/About"), {
  ssr: true,
});

const TextMarquee = dynamic(() => import("@/components/ui/TextMarquee"), {
  ssr: true,
});

const Works = dynamic(() => import("@/components/works/Works"), {
  ssr: true,
});

const Statement = dynamic(() => import("@/components/ui/Statement"), {
  ssr: true,
});

const Experience = dynamic(() => import("@/components/experience/Experience"), {
  ssr: true,
});

const UltimatumFAQ = dynamic(() => import("@/components/ultimatum/UltimatumFaq"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/ui/Footer"), {
  ssr: true,
});

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