'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      title: "WASH",
      desc: "A meticulous multi-stage cleansing process. Using pH-neutral snow foams, two-bucket methods, and filtered air drying to ensure a scratch-free finish.",
      img: "https://res.cloudinary.com/di4nynvj6/image/upload/v1769380626/sheeeen/mintosko-V4b2j7f1dfc-unsplash_x8ufa9.jpg"
    },
    {
      title: "CORRECTION & DETAILING",
      desc: "Restorative treatments for your vehicle's paintwork. We remove swirl marks, scratches, and oxidation, followed by ceramic protection for enduring gloss.",
      img: "https://res.cloudinary.com/di4nynvj6/image/upload/v1769380614/sheeeen/deniz-demirci-4mUNFO4Kjyk-unsplash_pgc2fw.jpg"
    },
  ];

  // Check if description should be shown (always on mobile, on hover on desktop)
  const shouldShowDescription = (index: number) => {
    return isMobile || hoveredIndex === index;
  };

  return (
    <section id="services" className="bg-[#F0FDFA] px-4 py-24 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.25em] text-[#053E43]/60"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 font-['Oswald'] text-5xl sm:text-6xl font-medium uppercase tracking-tighter text-[#053E43]"
          >
            Core <span className="italic font-normal text-[#0E5F66]">Services</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[2rem] bg-[#02282C] cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              whileHover={{ 
                y: !isMobile ? -5 : 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Image Background with animation */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out lg:group-hover:scale-105"
                style={{ backgroundImage: `url(${service.img})` }}
              />
              
              {/* Dark Overlay - Darkens on hover (desktop only) */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#02282C] via-[#02282C]/60 to-transparent transition-all duration-500 ${
                (!isMobile && hoveredIndex === index) ? 'from-[#02282C]/90 via-[#02282C]/80' : ''
              }`} />
              
              {/* Content - Using flex-col justify-end to push everything to bottom */}
              <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                {/* Title with animation - All titles at same level */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                  className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-white tracking-tight mb-4"
                >
                  {service.title}
                </motion.h3>
                
                {/* Description - Always shown on mobile, on hover for desktop */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : undefined }}
                  className="overflow-hidden"
                >
                  {/* Accent Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.4, delay: isMobile ? 0 : (shouldShowDescription(index) ? 0.1 : 0) }}
                    className="h-px bg-[#2DD4BF] mb-4"
                  />
                  
                  {/* Description Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1,
                      y: 0
                    }}
                    transition={{ duration: 0.4, delay: isMobile ? 0 : (shouldShowDescription(index) ? 0.2 : 0) }}
                    className="font-['DM_Sans'] text-sm text-white/80 leading-relaxed"
                  >
                    {service.desc}
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Service Number - Moved to top right corner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="absolute top-6 lg:top-10 right-6 lg:right-10"
              >
                <span className="font-['Oswald'] text-5xl lg:text-6xl text-white/10 font-bold">
                  0{index + 1}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Services with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="tel:9900447762" 
            className="inline-flex items-center gap-2 rounded-full bg-[#053E43] px-8 py-3 font-['Oswald'] text-xs font-bold uppercase tracking-widest text-white shadow-lg"
          >
            <span>Call Now</span>
           
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}