export default function Marquee() {
  return (
    <section className="relative overflow-hidden bg-[#F0FDFA] border-y border-[#053E43]/10">

      {/* Gradient fades - more subtle */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F0FDFA] via-[#F0FDFA]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F0FDFA] via-[#F0FDFA]/90 to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap py-8 animate-marquee hover:[animation-play-state:paused] will-change-transform">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>

      {/* Subtle decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#053E43]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#053E43]/10 to-transparent" />
    </section>
  );
}

function MarqueeTrack() {
  const items = [
    { text: "Ceramic Coating", color: "text-[#053E43]/15" },
    { text: "Paint Correction", color: "text-[#053E43]" },
    { text: "Interior Detailing", color: "text-[#053E43]/15" },
    { text: "Deep Clean", color: "text-[#053E43]" },
    { text: "Detailing", color: "text-[#053E43]/15" },
    { text: "Car Wash", color: "text-[#053E43]" },
  ];

  return (
    <div className="flex items-center gap-12 px-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-12">
          <span className={`font-['Oswald'] text-4xl lg:text-5xl uppercase tracking-tighter ${item.color} transition-colors duration-300 hover:text-[#2DD4BF]`}>
            {item.text}
          </span>
          {/* Separator - only between items */}
          {index < items.length - 1 && (
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-[#053E43]/20 to-transparent" />
          )}
        </div>
      ))}
    </div>
  );
}