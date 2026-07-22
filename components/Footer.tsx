'use client';

import RevealOnScroll from './RevealOnScroll';

export default function Footer() {
  return (
    <footer className="bg-[#02282C] text-white py-20 px-4 sm:px-8 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2DD4BF] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-6">
            <RevealOnScroll effect="fade-up" delay={0.1}>
              <h2 className="font-['Oswald'] text-3xl font-bold tracking-tighter text-white mb-2">SHEEN</h2>
            </RevealOnScroll>
            <RevealOnScroll effect="fade-up" delay={0.2}>
              <p className="font-['DM_Sans'] text-white/60 font-medium text-base leading-relaxed max-w-sm">
                Premium automotive mobile detailing.
                Transforming vehicles with precision, chemistry, and craftsmanship.
              </p>
            </RevealOnScroll>
            <RevealOnScroll effect="fade-up" delay={0.3}>
              <div className="flex items-center gap-3 mt-6" aria-label="Find Sheen Detailing Studio on Google Maps">
                <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                  <svg className="w-5 h-5 text-[#2DD4BF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <span className="text-sm text-white/80 font-medium tracking-wide">Mysore, Karnataka</span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Quick Links */}
          <div>
            <RevealOnScroll effect="fade-up" delay={0.2}>
              <h3 className="font-['Oswald'] text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Quick Links</h3>
            </RevealOnScroll>
            <ul className="space-y-4 text-sm font-['DM_Sans']">
              {[
                { name: 'Services', href: '/#services' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'About Us', href: '/#about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link, i) => (
                <RevealOnScroll key={i} effect="slide-right" delay={0.2 + (i * 0.05)} width="100%">
                  <li>
                    <a href={link.href} className="text-white/60 hover:text-[#2DD4BF] transition-colors duration-300 font-medium block">
                      {link.name}
                    </a>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <RevealOnScroll effect="fade-up" delay={0.3}>
              <h3 className="font-['Oswald'] text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h3>
            </RevealOnScroll>
            <div className="space-y-6 text-sm font-['DM_Sans']">
              <RevealOnScroll effect="fade-up" delay={0.4} width="100%">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 text-white/40 group-hover:text-[#2DD4BF] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:8660010700" className="text-white/90 hover:text-white transition-colors text-lg font-medium">
                      86600 10700
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll effect="fade-up" delay={0.5} width="100%">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 text-white/40 group-hover:text-[#2DD4BF] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hours</p>
                    <span className="text-white/80 block">Mon-Sun: 7AM — 5PM</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 font-['DM_Sans']">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <p>
              © 2025 Sheen • Premium Automotive Detailing
            </p>
            <a
              href="https://www.instagram.com/sheen.co.in_?igsh=MTNsZGFyaXFkdzlrZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2DD4BF] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]/50" />
            Designed & Crafted in Mysore
          </p>
        </div>

      </div>
    </footer>
  );
}