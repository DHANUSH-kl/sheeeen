'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#053E43] flex items-center justify-center overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02282C] via-[#053E43] to-[#0A4A52]" />
      
      {/* Subtle radial gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-2/3 bg-[radial-gradient(ellipse_at_top,_#0E5F66_0%,_transparent_70%)] opacity-20" />
      
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="flex flex-col items-center space-y-10">
          
          {/* Minimal badge - Updated location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
            <span className="font-['Oswald'] text-xs font-medium tracking-[0.2em] text-white/90 uppercase">
              Mysore's Premier Studio
            </span>
          </motion.div>

          {/* Clean typography with reduced spacing */}
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="font-['Oswald'] text-7xl md:text-8xl lg:text-[7rem] font-medium tracking-tight text-white leading-[0.85]">
                <span className="block">DETAIL</span>
                <span className="block bg-gradient-to-b from-white via-white/95 to-white/80 bg-clip-text text-transparent">
                  DEFINED
                </span>
              </h1>
            </motion.div>

            {/* Clean subtitle with reduced spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-1"
            >
              <p className="font-['DM_Sans'] text-sm font-normal text-white/70 tracking-wider uppercase">
                Specialized automotive care.
              </p>
              <p className="font-['DM_Sans'] text-sm font-normal text-white/70 tracking-wider uppercase">
                Merging chemistry with craftsmanship.
              </p>
            </motion.div>
          </div>

          {/* Clean buttons with reduced top spacing */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#services"
              className="group relative rounded-full bg-white px-7 py-3 font-['Oswald'] text-xs font-medium uppercase tracking-[0.15em] text-[#053E43] hover:bg-[#2DD4BF] transition-all duration-300 flex items-center justify-center gap-2 min-w-[180px]"
            >
              <span>Our Services</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                className="transition-transform group-hover:translate-x-1"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            
            <a
              href="#pricing"
              className="group relative rounded-full border border-white/30 bg-transparent px-7 py-3 font-['Oswald'] text-xs font-medium uppercase tracking-[0.15em] text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300 min-w-[180px] text-center"
            >
              <span>Pricing Menu</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle bottom fade - reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}