'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Marquee() {
  return (
    <section className="relative overflow-hidden bg-[#F0FDFA] border-y border-[#053E43]/5">
      <RevealOnScroll effect="fade-in" width="100%">
        <div className="relative">
          {/* Gradient fades - more subtle and premium */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 md:w-64 bg-gradient-to-r from-[#F0FDFA] via-[#F0FDFA]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 md:w-64 bg-gradient-to-l from-[#F0FDFA] via-[#F0FDFA]/90 to-transparent z-10" />

          {/* Marquee Container */}
          <div className="flex whitespace-nowrap py-10 md:py-12 animate-marquee hover:[animation-play-state:paused] will-change-transform items-center">
            <MarqueeTrack />
            <MarqueeTrack />
            <MarqueeTrack />
            <MarqueeTrack />
          </div>

          {/* Subtle decorative lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#053E43]/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#053E43]/5 to-transparent" />
        </div>
      </RevealOnScroll>
    </section>
  );
}

function MarqueeTrack() {
  const items = [
    { text: "Ceramic Coating", color: "text-[#053E43]/20" },
    { text: "Paint Correction", color: "text-[#053E43]" },
    { text: "Interior Detailing", color: "text-[#053E43]/20" },
    { text: "Deep Clean", color: "text-[#053E43]" },
    { text: "Detailing", color: "text-[#053E43]/20" },
    { text: "Car Wash", color: "text-[#053E43]" },
  ];

  return (
    <div className="flex items-center gap-12 sm:gap-16 px-6 sm:px-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-12 sm:gap-16">
          <span className={`font-['Oswald'] text-4xl lg:text-5xl font-bold uppercase tracking-tighter ${item.color} transition-all duration-500 hover:text-[#2DD4BF] cursor-default`}>
            {item.text}
          </span>
          {/* Separator - only between items */}
          <div className="h-2 w-2 rounded-full bg-[#053E43]/20" />
        </div>
      ))}
    </div>
  );
}