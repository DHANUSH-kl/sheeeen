'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#053E43] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0E5F66_0%,_#053E43_40%,_#02282C_100%)] opacity-80" />

      {/* Noise Texture for Texture/Grit */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">

        {/* Top Badge */}
        <RevealOnScroll effect="fade-in" width="100%" className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/5 pl-2 pr-4 py-1.5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]"></span>
            </span>
            <span className="font-['Oswald'] text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
              Mysore's Premier Studio
            </span>
          </div>
        </RevealOnScroll>

        {/* Main Title */}
        <div className="text-center mb-8 relative">
          <h1 className="sr-only">SHEEEEN Detailing Mysore - Detail Defined</h1>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Oswald'] text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter text-white leading-[0.85] select-none"
              aria-hidden="true"
            >
              DETAIL
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Oswald'] text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent leading-[0.85] select-none"
              aria-hidden="true"
            >
              DEFINED
            </motion.div>
          </div>
        </div>

        {/* Subtitle */}
        <RevealOnScroll effect="fade-up" delay={0.4} width="100%" className="flex justify-center mb-10">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
            <p className="font-['DM_Sans'] text-base md:text-lg font-medium text-white/80 tracking-widest uppercase">
              Specialized Automotive Care
            </p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
            <p className="font-['DM_Sans'] text-base md:text-lg font-medium text-white/80 tracking-widest uppercase">
              Est. 2024
            </p>
          </div>
        </RevealOnScroll>

        {/* Action Buttons */}
        <RevealOnScroll effect="fade-up" delay={0.6} width="100%" className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#services"
              className="group relative overflow-hidden rounded-full bg-[#FAFAFA] px-8 py-4 font-['Oswald'] text-sm font-bold uppercase tracking-[0.15em] text-[#02282C] hover:text-[#02282C] transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">Our Services</span>
              <div className="relative z-10 overflow-hidden w-4 h-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="w-full h-full transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>

            <a
              href="#pricing"
              className="group relative overflow-hidden rounded-full border border-white/20 bg-transparent px-8 py-4 font-['Oswald'] text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 min-w-[200px] text-center hover:border-white/40 hover:bg-white/5"
            >
              <span>View Pricing</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#02282C] to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-['Oswald'] text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </motion.div>
    </section>
  );
}