'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Problem() {
  const comparison = {
    traditional: {
      title: "Traditional Wash",
      points: [
        "Drive to service station through traffic",
        "Wait in line for 2–4 hours of your day",
        "Rushed labor using harsh, cheap chemicals",
        "Average, swirl-prone final results"
      ]
    },
    sheen: {
      title: "Sheen Doorstep Wash",
      points: [
        "Stay parked at home, office, anywhere",
        "Completed in 60–90 minutes flat",
        "Trained detailers using proper pH-neutral products",
        "Flawless, scratch-free showroom gloss"
      ]
    }
  };

  return (
    <section className="bg-white py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#053E43]/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll effect="fade-up" width="100%">
            <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-4 block">
              The Traditional Way
            </span>
          </RevealOnScroll>

          <RevealOnScroll effect="fade-up" delay={0.1} width="100%">
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#053E43] leading-[1.1] max-w-3xl mx-auto">
              Why drive somewhere just to wash your car?
            </h2>
          </RevealOnScroll>
        </div>

        {/* Comparison Cards Layout */}
        <RevealOnScroll effect="fade-up" delay={0.2} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
            {/* Card 1: Traditional Wash */}
            <div className="rounded-[2rem] p-8 lg:p-10 border border-black/10 bg-[#FAFAFA] flex flex-col justify-between shadow-sm h-full w-full">
              <div>
                <h3 className="font-['Oswald'] text-2xl uppercase tracking-wider text-black/60 mb-8 pb-4 border-b border-black/5 flex items-center gap-3">
                  <svg className="w-5 h-5 text-black/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {comparison.traditional.title}
                </h3>
                <ul className="space-y-5">
                  {comparison.traditional.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 font-['DM_Sans'] text-sm sm:text-base text-black/50 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 text-xs font-['Oswald'] tracking-widest text-black/30 uppercase">
                Wastes your free time
              </div>
            </div>

            {/* Card 2: Sheen Doorstep Wash */}
            <div className="rounded-[2rem] p-8 lg:p-10 border border-[#2DD4BF]/20 bg-[#02282C] text-white flex flex-col justify-between shadow-xl relative overflow-hidden h-full w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2DD4BF] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
              <div>
                <h3 className="font-['Oswald'] text-2xl uppercase tracking-wider text-[#2DD4BF] mb-8 pb-4 border-b border-white/10 flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {comparison.sheen.title}
                </h3>
                <ul className="space-y-5">
                  {comparison.sheen.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 font-['DM_Sans'] text-sm sm:text-base text-white/80 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 text-xs font-['Oswald'] tracking-widest text-[#2DD4BF]/60 uppercase">
                Stay Parked, We Come To You
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Conclusion Callout */}
        <RevealOnScroll effect="fade-up" delay={0.4} width="100%">
          <div className="flex justify-center w-full">
            <div className="inline-block rounded-2xl bg-[#F0FDFA] border border-[#2DD4BF]/20 p-8 sm:p-10 shadow-sm max-w-2xl text-center">
              <p className="font-['Oswald'] text-lg sm:text-2xl uppercase tracking-wider text-[#053E43] font-bold">
                There's a simpler way.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E5F66] to-[#2DD4BF]">
                  Stay parked — let us come to you.
                </span>
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
