'use client';

import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tap & Book",
      desc: "Pick a slot that fits your day — morning, afternoon, or evening. Takes less than a minute, over a call or WhatsApp."
    },
    {
      number: "02",
      title: "We Show Up",
      desc: "Our trained detailer arrives at your doorstep, fully equipped. You don't lift a finger — you don't even need to step outside."
    },
    {
      number: "03",
      title: "Spotless Car",
      desc: "In 60–90 minutes, your car is professionally cleaned, inside and out. No queues, no token system, no hassle."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#F0FDFA] py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <RevealOnScroll effect="fade-up">
            <span className="font-['Oswald'] text-xs font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3 block">
              The Process
            </span>
          </RevealOnScroll>

          <RevealOnScroll effect="fade-up" delay={0.2}>
            <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#053E43] leading-[1]">
              Three steps.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E5F66] to-[#2DD4BF]">
                Zero hassle.
              </span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Steps Grid */}
        <RevealOnScroll effect="fade-up" delay={0.3} width="100%">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] p-8 lg:p-10 border border-[#053E43]/5 bg-white shadow-sm hover:shadow-xl hover:border-[#2DD4BF]/30 hover:bg-[#F0FDFA]/25 transition-all duration-500 flex flex-col items-center text-center h-full w-full group"
              >
                {/* Circular Number Badge */}
                <div className="w-16 h-16 rounded-full bg-[#053E43] flex items-center justify-center mb-6 shadow-md border border-[#2DD4BF]/20 relative">
                  <span className="font-['Oswald'] text-xl font-bold text-[#2DD4BF]">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#2DD4BF]/40 animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Step Title */}
                <h3 className="font-['Oswald'] text-2xl uppercase tracking-tight text-[#053E43] mb-4">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-['DM_Sans'] text-sm sm:text-base text-[#053E43]/70 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA Button */}
        <RevealOnScroll effect="fade-up" delay={0.4} width="100%" className="text-center">
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#053E43] px-10 py-4 font-['Oswald'] text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#02282C] shadow-xl hover:shadow-[#053E43]/20"
          >
            <span className="relative z-10">Book Your Wash</span>
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
