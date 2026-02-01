'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Location", href: "#location" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Glass Container for Main Nav */}
        <div className={`flex flex-1 items-center justify-between rounded-full px-6 py-3 transition-all duration-500 border ${scrolled ? 'bg-[#053E43]/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative z-[110]">
            <img
              src="/logo.png"
              alt="SHEEEEN Logo"
              className={`transition-all duration-500 ${scrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'}`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-['Oswald'] text-[10px] uppercase tracking-[0.25em] text-white/70 hover:text-[#2DD4BF] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2DD4BF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call Button (Desktop Only) */}
          <div className="hidden lg:block">
            <a
              href="tel:9900447762"
              className="relative overflow-hidden rounded-full bg-white px-8 py-2.5 font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#053E43] transition-all duration-300 hover:scale-105 active:scale-95 group inline-flex items-center gap-2"
            >
              <span className="relative z-10">Call Now</span>
              <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all duration-300"
            />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] lg:hidden"
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-[#02282C]/95 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6">
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center gap-8 text-center"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-['Oswald'] text-4xl sm:text-5xl font-bold uppercase tracking-tighter text-white hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Call Button In Menu */}
                <motion.div variants={itemVariants} className="mt-8">
                  <a
                    href="tel:9900447762"
                    className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-12 py-5 font-['Oswald'] text-sm font-bold uppercase tracking-[0.2em] text-[#053E43] shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Phone Reservation
                    </span>
                    <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  </a>
                </motion.div>

                {/* Social/Location Info */}
                <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-2 opacity-40">
                  <p className="font-['Oswald'] text-[10px] tracking-[0.3em] uppercase text-white">Mysore's Premier Studio</p>
                  <div className="w-12 h-px bg-white/30" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}