import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Testimonials />
        <Pricing />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
