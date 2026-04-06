'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Location() {
  return (
    <section id="location" className="py-24 px-4 sm:px-8 bg-white border-t border-[#053E43]/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <RevealOnScroll effect="fade-up">
            <span className="font-['Oswald'] text-[10px] uppercase tracking-[0.25em] text-[#053E43]/60 block mb-3">
              Service Area
            </span>
          </RevealOnScroll>
          <RevealOnScroll effect="fade-up" delay={0.2}>
            <h2 className="font-['Oswald'] text-4xl sm:text-6xl uppercase tracking-tighter text-[#053E43] mb-4 leading-[0.9]">
              Serving <span className="font-bold text-[#0E5F66]">Mysore</span>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Address */}
            <RevealOnScroll effect="slide-right" delay={0.2} width="100%">
              <div className="border border-[#053E43]/10 rounded-2xl p-8 hover:bg-[#FAFAFA] transition-colors duration-300">
                <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-[#053E43] mb-4">
                  At your location At your convenience
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#053E43]/70 leading-relaxed mb-3">
                  We are a fully mobile detailing service without a fixed physical studio.
                </p>
                <p className="font-['DM_Sans'] text-sm text-[#053E43]/70 leading-relaxed">
                  We provide our services directly to your doorstep anywhere within an <strong>8km radius</strong> of Devegowda Circle, Mysore.
                </p>
              </div>
            </RevealOnScroll>

            {/* Working Hours */}
            <RevealOnScroll effect="slide-right" delay={0.3} width="100%">
              <div className="border border-[#053E43]/10 rounded-2xl p-8 hover:bg-[#FAFAFA] transition-colors duration-300">
                <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-[#053E43] mb-4">
                  Working Hours
                </h3>

                <div className="grid grid-cols-2 gap-y-3 text-sm text-[#053E43]/70 font-['DM_Sans']">
                  <span>Monday – Sunday</span>
                  <span className="text-right font-bold text-[#053E43]">
                    6:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact */}
            <RevealOnScroll effect="slide-right" delay={0.4} width="100%">
              <div className="border border-[#053E43]/10 rounded-2xl p-8 hover:bg-[#FAFAFA] transition-colors duration-300">
                <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-[#053E43] mb-2">
                  Contact Number
                </h3>
                <a
                  href="tel:8660010700"
                  className="font-['Oswald'] text-2xl font-bold text-[#053E43] hover:text-[#2DD4BF] transition-colors tracking-wide"
                >
                  +91 86600 10700
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* Map */}
            <RevealOnScroll effect="fade-in" delay={0.4} width="100%">
              <a
                href="https://maps.app.goo.gl/search/Devegowda+Circle,+Mysuru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Sheen Detailing Studio on Google Maps"
                className="group block border border-[#053E43]/10 rounded-2xl overflow-hidden relative shadow-lg"
              >
                <div className="absolute inset-0 z-10 bg-[#053E43]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps?q=Devegowda%20Circle,%20Mysuru&output=embed"
                  className="w-full h-[400px] grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20 pointer-events-none">
                  <span className="bg-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#053E43] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Open in Google Maps →
                  </span>
                </div>
              </a>
            </RevealOnScroll>

            {/* Mobile Service Note */}
            <RevealOnScroll effect="fade-up" delay={0.5} width="100%">
              <div className="border border-[#053E43]/10 rounded-2xl p-6 bg-[#F0FDFA]/50 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#053E43]/10 flex items-center justify-center text-[#053E43]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#053E43] font-bold uppercase tracking-wider text-sm mb-0.5 font-['Oswald']">
                    Fully Mobile Service
                  </p>
                  <p className="text-xs text-[#053E43]/60 font-medium font-['DM_Sans']">
                    We bring the detailing studio directly to your doorstep
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
