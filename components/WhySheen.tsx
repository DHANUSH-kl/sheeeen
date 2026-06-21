'use client';

import RevealOnScroll from './RevealOnScroll';

export default function WhySheen() {
  const reasons = [
    {
      icon: "🚐",
      title: "We come to you",
      desc: "No driving in, no waiting around. We work around your schedule, not the other way around."
    },
    {
      icon: "🧽",
      title: "Trained hands, done right",
      desc: "Every wash is done by a trained detailer using the right method and the right products — not rushed, not guesswork."
    },
    {
      icon: "⏱",
      title: "Time, actually saved",
      desc: "What used to cost you an afternoon now takes under 90 minutes — and you don't even need to be there for it."
    },
    {
      icon: "📍",
      title: "Built for Mysore",
      desc: "Sheen is local — and it shows, in how we treat every car and every customer."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#053E43]/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <RevealOnScroll effect="fade-up">
            <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3 block">
              Our Value
            </span>
          </RevealOnScroll>

          <RevealOnScroll effect="fade-up" delay={0.2}>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#053E43] leading-[1]">
              Why Mysore is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E5F66] to-[#2DD4BF]">
                choosing Sheen
              </span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <RevealOnScroll
              key={index}
              effect="fade-up"
              delay={index * 0.1}
              width="100%"
            >
              <div className="relative rounded-3xl p-8 border border-[#053E43]/10 bg-[#FAFAFA] hover:bg-[#F0FDFA] hover:border-[#2DD4BF]/30 transition-all duration-300 shadow-sm flex gap-6 items-start h-full group">
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#053E43]/5 flex items-center justify-center text-2xl shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Oswald'] text-xl uppercase tracking-tight text-[#053E43]">
                    {reason.title}
                  </h3>
                  <p className="font-['DM_Sans'] text-sm sm:text-base text-[#053E43]/70 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
