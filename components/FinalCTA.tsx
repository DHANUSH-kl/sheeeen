'use client';

import RevealOnScroll from './RevealOnScroll';

export default function FinalCTA() {
  return (
    <section className="relative bg-[#02282C] py-24 sm:py-32 px-4 sm:px-8 overflow-hidden text-center text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0E5F66_0%,_#02282C_80%)] opacity-70" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E")' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll effect="fade-up" width="100%">
          <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#2DD4BF] mb-4 block">
            Get Started
          </span>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-up" delay={0.2} width="100%">
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            Ready to stay parked?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-up" delay={0.3} width="100%">
          <p className="font-['DM_Sans'] text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Book in under a minute — call or WhatsApp us, tell us when and where, and we'll take care of the rest.
          </p>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-up" delay={0.4} width="100%">
          <div className="flex justify-center w-full">
            {/* Primary CTA */}
            <a
              href="tel:8660010700"
              className="group relative overflow-hidden rounded-full bg-white px-10 py-4 font-['Oswald'] text-sm font-bold uppercase tracking-[0.15em] text-[#02282C] transition-all duration-300 hover:scale-105 active:scale-95 group inline-flex items-center gap-3"
            >
              <span className="relative z-10">Book Your Wash Now</span>
              <div className="relative z-10 w-4 h-4 overflow-hidden text-[#02282C]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
