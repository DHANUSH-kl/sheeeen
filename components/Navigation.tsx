'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect (disabled when menu is open)
  useEffect(() => {
    if (isOpen) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // 🔒 Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#location' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
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
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'
          }`}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div
            className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 border ${scrolled
              ? 'bg-[#053E43]/80 backdrop-blur-xl border-white/10 shadow-2xl'
              : 'bg-transparent border-transparent'
              }`}
          >
            {/* Logo */}
            <a href="#" className="relative z-[120]">
              <img
                src="/logo.png"
                alt="Sheen Logo"
                className={`transition-all duration-500 ${scrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'
                  }`}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex gap-10 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 hover:text-[#2DD4BF] transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2DD4BF] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Call Button */}
            <div className="hidden lg:block">
              <a
                href="tel:7795469375"
                className="relative overflow-hidden rounded-full bg-white px-8 py-2.5 font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#053E43] transition-all duration-300 hover:scale-105 active:scale-95 group inline-flex items-center"
              >
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </a>
            </div>

            {/* Mobile Hamburger / X */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-[120] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white rounded-full"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[105] lg:hidden bg-[#02282C]/95 backdrop-blur-2xl"
          >
            <div className="h-full flex flex-col items-center justify-center px-6">
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col items-center gap-8 text-center"
              >
                {/* Nav Links */}
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={itemVariants}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-['Oswald'] text-4xl sm:text-5xl font-bold uppercase text-white hover:text-[#2DD4BF]"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* SAME Call Button (Mobile) */}
                <motion.div variants={itemVariants} className="mt-10">
                  <a
                    href="tel:7795469375"
                    className="relative overflow-hidden rounded-full bg-white px-10 py-4 font-['Oswald'] text-[12px] font-bold uppercase tracking-[0.15em] text-[#053E43] transition-all duration-300 active:scale-95 group inline-flex items-center"
                  >
                    <span className="relative z-10">Call Now</span>
                    <div className="absolute inset-0 bg-[#2DD4BF] transform translate-y-full transition-transform duration-300 group-active:translate-y-0" />
                  </a>
                </motion.div>

                {/* Footer Text */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 flex flex-col items-center gap-2 opacity-40"
                >
                  <p className="font-['Oswald'] text-[10px] tracking-[0.3em] uppercase text-white">
                    Mysore’s Premium Studio
                  </p>
                  <div className="w-12 h-px bg-white/30" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
