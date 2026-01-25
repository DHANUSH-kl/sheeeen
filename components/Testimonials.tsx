'use client';

export default function Testimonials() {
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
  const track = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#053E43]/60 block mb-3">
          Client Feedback
        </span>
        <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter text-[#053E43]">
          Trusted by <span className="italic text-[#0E5F66]">Enthusiasts</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden group">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee with hover pause */}
        <div className="flex animate-[marquee_60s_linear_infinite] group-hover:animate-paused">
          {/* First set of cards */}
          {track.map((review, i) => (
            <div
              key={`set1-${i}`}
              className="flex-shrink-0 w-[360px] mx-4"
            >
              <div className="h-[220px] rounded-xl border border-[#053E43]/10 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                {/* stars */}
                <div className="flex gap-1 text-[#0E5F66] mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* quote */}
                <p className="italic text-sm text-[#053E43]/80 leading-relaxed">
                  "{review.text}"
                </p>

                {/* author */}
                <div className="pt-4 border-t border-[#053E43]/5">
                  <p className="text-sm uppercase tracking-widest text-[#053E43]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#053E43]/60">
                    {review.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Second identical set for seamless loop */}
          {track.map((review, i) => (
            <div
              key={`set2-${i}`}
              className="flex-shrink-0 w-[360px] mx-4"
              aria-hidden="true"
            >
              <div className="h-[220px] rounded-xl border border-[#053E43]/10 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 text-[#0E5F66] mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-sm text-[#053E43]/80 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="pt-4 border-t border-[#053E43]/5">
                  <p className="text-sm uppercase tracking-widest text-[#053E43]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#053E43]/60">
                    {review.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}