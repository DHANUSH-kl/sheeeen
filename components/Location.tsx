'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Location() {
  return (
    <section id="location" className="py-24 px-4 sm:px-8 bg-white border-t border-[#053E43]/5">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <RevealOnScroll effect="fade-up">
            <span className="font-['Oswald'] text-sm uppercase tracking-[0.25em] text-[#053E43]/60 block mb-3">
              Doorstep Service
            </span>
          </RevealOnScroll>
          <RevealOnScroll effect="fade-up" delay={0.2}>
            <h2 className="font-['Oswald'] text-4xl sm:text-6xl uppercase tracking-tighter text-[#053E43] mb-4 leading-[0.9]">
              We Come To <span className="font-bold text-[#0E5F66]">You</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll effect="fade-up" delay={0.3}>
            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#053E43]/70 leading-relaxed max-w-2xl mx-auto mt-6">
              We are a fully mobile detailing service without a fixed physical studio. We provide our detailing services directly to your doorstep <strong>across entire Mysore</strong>.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
           {/* Working Hours */}
           <RevealOnScroll effect="fade-up" delay={0.4} width="100%">
             <div className="border border-[#053E43]/10 rounded-2xl p-8 bg-[#FAFAFA] hover:bg-white hover:shadow-xl hover:shadow-[#053E43]/5 transition-all duration-300 h-full flex flex-col justify-center">
               <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-[#053E43] mb-4">
                 Working Hours
               </h3>
                <div className="space-y-3 text-base text-[#053E43]/70 font-['DM_Sans']">
                  <div className="flex justify-between">
                    <span>Mon – Tue</span>
                    <span className="text-right font-bold text-[#053E43]">7:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thu – Sun</span>
                    <span className="text-right font-bold text-[#053E43]">7:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t border-[#053E43]/10 pt-2 text-[#0E5F66] font-semibold">
                    <span>Wednesday</span>
                    <span className="text-right">Closed</span>
                  </div>
                </div>
             </div>
           </RevealOnScroll>

           {/* Contact */}
           <RevealOnScroll effect="fade-up" delay={0.5} width="100%">
             <div className="border border-[#053E43]/10 rounded-2xl p-8 bg-[#FAFAFA] hover:bg-white hover:shadow-xl hover:shadow-[#053E43]/5 transition-all duration-300 h-full flex flex-col justify-center">
               <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-[#053E43] mb-2">
                 Contact Number
               </h3>
               <p className="font-['DM_Sans'] text-[#053E43]/70 mb-4 text-sm mt-1">Call us to schedule your next detailing session.</p>
               <a
                 href="tel:8660010700"
                 className="font-['Oswald'] text-3xl font-bold text-[#053E43] hover:text-[#2DD4BF] transition-colors tracking-wide"
               >
                 +91 86600 10700
               </a>
             </div>
           </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
