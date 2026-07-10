import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhySheen from "@/components/WhySheen";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <Services />
        <Pricing />
        {/* <WhySheen /> */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
