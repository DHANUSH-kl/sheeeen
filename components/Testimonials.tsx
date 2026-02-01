'use client';

import { useEffect, useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviews = [
    {
      text: "Paint looks better than new. Professional work that exceeded all expectations.",
      author: "Priya Sharma",
      car: "Mercedes GLE",
    },
    {
      text: "Worth every rupee. They transformed my 10-year-old car to look brand new.",
      author: "Arjun Patel",
      car: "BMW 3 Series",
    },
    {
      text: "Professional & precise work. The ceramic coating has held up perfectly.",
      author: "Sneha Rebecca",
      car: "Audi Q5",
    },
    {
      text: "Best detailing studio. Attention to detail is simply unmatched.",
      author: "Rohan Kumar",
      car: "Porsche 911",
    },
    {
      text: "Attention to detail is unreal. Every single millimeter was perfected.",
      author: "Vikram Singh",
      car: "Jaguar F-Type",
    },
  ];

  // Create enough duplicates for seamless infinite scroll
  const track = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-[#053E43]/5">
      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#053E43 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <RevealOnScroll effect="fade-up">
          <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3 block">
            Client Feedback
          </span>
        </RevealOnScroll>
        <RevealOnScroll effect="fade-up" delay={0.2}>
          <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#053E43] leading-[1] px-1">
            Trusted by <span className="italic font-bold text-[#0E5F66] pr-4">Enthusiasts</span>
          </h2>
        </RevealOnScroll>
        {/* <RevealOnScroll effect="fade-up" delay={0.3}>
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg key={s} width="20" height="20" className="text-[#053E43]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-[#053E43]/60 text-sm font-medium mt-2 uppercase tracking-widest">5.0 Star Rating</p>
        </RevealOnScroll> */}
      </div>

      {/* Marquee Container */}
      <RevealOnScroll effect="fade-in" width="100%" delay={0.4}>
        <div className="relative overflow-hidden group py-4">
          {/* fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Marquee with hover pause */}
          <div className="flex animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Cards */}
            {track.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] sm:w-[350px] mx-4"
              >
                <div className="h-[220px] rounded-2xl border border-[#053E43]/5 bg-[#FAFAFA] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#053E43]/5 transition-all duration-300 hover:-translate-y-1">
                  {/* stars */}
                  <div className="flex gap-1 text-[#2DD4BF] mb-4 opacity-80">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg
                        key={s}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* quote */}
                  <p className="font-['DM_Sans'] italic font-medium text-sm sm:text-base text-[#053E43]/80 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* author */}
                  <div className="pt-4 border-t border-[#053E43]/5 flex items-center justify-between">
                    <div>
                      <p className="font-['Oswald'] text-sm font-bold uppercase tracking-wider text-[#053E43]">
                        {review.author}
                      </p>
                      <p className="font-['DM_Sans'] text-xs font-medium text-[#053E43]/50 mt-0.5">
                        {review.car}
                      </p>
                    </div>
                    <div className="opacity-10 text-[#053E43]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}