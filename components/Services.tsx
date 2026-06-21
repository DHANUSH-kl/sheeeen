'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "SHEEN REFRESH",
      desc: "Your car's everyday refresh — a thorough wash and clean covering the dashboard, seats, mats, and a full exterior wash that leaves the paint looking sharp.",
      img: "https://res.cloudinary.com/di4nynvj6/image/upload/v1769380626/sheeeen/mintosko-V4b2j7f1dfc-unsplash_x8ufa9.jpg"
    },
    {
      title: "SHEEN SIGNATURE",
      desc: "A complete, hands-on detailing session for when your car needs more than a wash. Ideal every few months to keep it looking and feeling brand new.",
      img: "https://res.cloudinary.com/di4nynvj6/image/upload/v1769380614/sheeeen/deniz-demirci-4mUNFO4Kjyk-unsplash_pgc2fw.jpg"
    },
  ];

  // Check if description should be shown (always on mobile, on hover on desktop)
  const shouldShowDescription = (index: number) => {
    return isMobile || hoveredIndex === index;
  };

  return (
    <section id="services" className="bg-[#FAFAFA] px-4 py-24 sm:px-8 overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E")' }} />

      <div className="mx-auto max-w-7xl relative z-10 w-full">
        {/* Section Header with animation */}
        <div className="mb-20 flex flex-col items-center text-center">
          <RevealOnScroll effect="fade-up">
            <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3 block">
              Services
            </span>
          </RevealOnScroll>

          <RevealOnScroll effect="fade-up" delay={0.2}>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#053E43] leading-[1] px-1 max-w-3xl">
              Two ways to keep your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E5F66] to-[#2DD4BF]">car looking its best.</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href="#pricing"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative h-[550px] lg:h-[700px] w-full overflow-hidden rounded-[2.5rem] bg-[#02282C] cursor-pointer shadow-2xl shadow-[#053E43]/10 block"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              whileHover={{
                y: !isMobile ? -8 : 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              {/* Coming Soon Badge (only for CORRECTION & DETAILING at index 1) */}
              {index === 1 && (
                <div className="absolute top-8 left-8 lg:top-12 lg:left-12 z-20 bg-[#2DD4BF] text-[#02282C] font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                  Coming Soon
                </div>
              )}

              {/* Image Background with Alt Text for SEO */}
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: hoveredIndex === index && !isMobile ? 1.05 : 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={service.img}
                alt={`${service.title} - Sheen Detailing Mysore`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
              />

              {/* Enhanced Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#02282C] via-[#02282C]/50 to-transparent transition-all duration-700 ${(!isMobile && hoveredIndex === index) ? 'opacity-90 from-[#02282C] via-[#02282C]/80' : 'opacity-80'
                }`} />

              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                {/* Title */}
                <motion.h3
                  className="font-['Oswald'] text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white tracking-tighter mb-6 leading-[0.9]"
                  animate={{ y: shouldShowDescription(index) ? 0 : 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: shouldShowDescription(index) ? 'auto' : 0,
                    opacity: shouldShowDescription(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  {/* Accent Line */}
                  <div className="h-[2px] w-12 bg-[#2DD4BF] mb-6" />

                  {/* Description Text */}
                  <p className="font-['DM_Sans'] text-lg text-white/90 leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                </motion.div>
              </div>

              {/* Service Number */}
              <div className="absolute top-8 right-8 lg:top-12 lg:right-12 mix-blend-overlay">
                <span className="font-['Oswald'] text-6xl lg:text-8xl text-white/20 font-bold tracking-tighter">
                  0{index + 1}
                </span>
              </div>

              {/* Arrow Indicator (visible on hover) */}
              <motion.div
                className="absolute top-8 right-8 lg:top-12 lg:right-12 text-white bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 opacity-0 transform translate-x-4 -translate-y-4"
                animate={{
                  opacity: shouldShowDescription(index) ? 1 : 0,
                  x: shouldShowDescription(index) ? 0 : 20,
                  y: shouldShowDescription(index) ? 0 : -20
                }}
                transition={{ duration: 0.4 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>

            </motion.a>
          ))}
        </div>

        {/* CTA Below Services */}
        <RevealOnScroll effect="fade-up" delay={0.4} width="100%" className="mt-20 text-center">
          <a
            href="tel:8660010700"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#053E43] px-10 py-4 font-['Oswald'] text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#02282C] shadow-xl hover:shadow-[#053E43]/20"
          >
            <span className="relative z-10">Book an Appointment</span>
            <div className="relative z-10 w-4 h-4 overflow-hidden">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}