'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import RevealOnScroll from '@/components/RevealOnScroll';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does doorstep detailing work?",
      answer: "We bring our professional mobile setup directly to your home, apartment, or office. All we need is access to a standard electrical outlet and a water source. You stay parked, and our detailers handle the rest right in your driveway or parking space."
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer: "Yes, we operate strictly by appointment to ensure dedicated time and premium attention for your vehicle. You can book a slot in under a minute via a direct phone call or WhatsApp message."
    },
    {
      question: "How long does a typical detailing service take?",
      answer: "A Sheen Refresh interior + exterior wash takes about 45 to 90 minutes. A deep-detailing package like Sheen Signature takes 4 to 6 hours depending on the condition and size of your vehicle."
    },
    {
      question: "Do you offer pick-up and drop service?",
      answer: "No need! Since we are a doorstep-first mobile detailing service, we do the work right at your location. You don't have to waste time driving, fighting traffic, or waiting at a studio."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, cash, credit/debit cards, and bank transfers. Payment is only due upon the successful completion of the service."
    },
    {
      question: "What are the spacing and utility requirements?",
      answer: "We need enough room to safely work around your car (like a standard driveway or open garage space). We also require access to a power socket (within 15-20 meters) and a water tap to hook up our machines."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const socials = [
    {
      name: 'YouTube',
      handle: 'sheendetailing',
      url: 'https://youtube.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      handle: 'sheen.co.in_',
      url: 'https://www.instagram.com/sheen.co.in_?igsh=MTNsZGFyaXFkdzlrZw==',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      handle: 'sheendetailing',
      url: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      handle: 'sheendetailing',
      url: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Preloader />
      <Navigation />

      <main className="bg-[#F5F2EB] pt-32 sm:pt-40 pb-20">
        
        {/* Contact Info Section */}
        <section className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left side text */}
            <RevealOnScroll effect="fade-up" width="100%">
              <div className="space-y-4">
                <h1 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[#02282C] leading-none">
                  You Know Where <br />
                  <span className="italic font-light text-[#0E5F66]">To Find Us!</span>
                </h1>
                <p className="font-['DM_Sans'] text-[#053E43]/70 max-w-md text-sm sm:text-base font-medium leading-relaxed pt-2">
                  Have questions about our detailing packages, schedule availability, or monthly subscription plans? Get in touch, we are here to help.
                </p>
              </div>
            </RevealOnScroll>

            {/* Right side contact cards */}
            <RevealOnScroll effect="fade-up" delay={0.2} width="100%">
              <div className="space-y-8 font-['DM_Sans'] text-[#02282C]">
                
                {/* Doorstep Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl border border-[#053E43]/10 shadow-sm text-[#053E43] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#053E43]/50 mb-1">Service Area</h3>
                    <p className="text-base sm:text-lg font-bold">
                      Doorstep Detailing
                    </p>
                    <p className="text-sm font-medium text-[#053E43]/70">
                      We come directly to your location anywhere in Mysore, Karnataka.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl border border-[#053E43]/10 shadow-sm text-[#053E43] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#053E43]/50 mb-1">Email Support</h3>
                    <a href="mailto:support@sheen.co.in" className="text-base sm:text-lg font-bold hover:text-[#0E5F66] transition-colors block">
                      support@sheen.co.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl border border-[#053E43]/10 shadow-sm text-[#053E43] mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-widest text-[#053E43]/50 mb-1">Phone & WhatsApp</h3>
                    <a href="tel:8660010700" className="text-base sm:text-lg font-bold hover:text-[#0E5F66] transition-colors block">
                      +91 86600 10700
                    </a>
                    <p className="text-xs font-medium text-[#053E43]/60 mt-0.5">
                      Mon-Sun: 6:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Social Capsules Grid */}
                <div className="pt-4">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-[#053E43]/50 mb-4">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-4 max-w-md">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 bg-[#9ED5CF]/70 hover:bg-[#8CD0C9] transition-all duration-300 rounded-xl font-['DM_Sans'] text-xs font-bold uppercase tracking-wider text-[#02282C] border border-transparent hover:border-[#0E5F66]/10 hover:shadow-sm"
                      >
                        <div className="flex-shrink-0 text-[#02282C]">
                          {social.icon}
                        </div>
                        <span className="truncate">{social.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </RevealOnScroll>

          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="border-t border-[#053E43]/10" />
        </div>

        {/* FAQ Section */}
        <section className="px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto py-24">
          <RevealOnScroll effect="fade-up" width="100%">
            <div className="text-center mb-16">
              <h2 className="font-['Oswald'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#02282C] leading-none mb-4">
                Got Questions? <span className="italic font-light text-[#0E5F66]">We Get It!</span>
              </h2>
              <p className="font-['DM_Sans'] text-sm sm:text-base font-medium text-[#053E43]/60 max-w-lg mx-auto">
                Find clear answers to how doorstep detailing works and how we make keeping your car clean completely effortless.
              </p>
            </div>
          </RevealOnScroll>

          {/* Accordion Layout */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <RevealOnScroll key={index} effect="fade-up" delay={index * 0.05} width="100%">
                  <div className="border border-[#053E43]/10 bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#053E43]/20">
                    
                    {/* Header Button */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-['DM_Sans'] text-base sm:text-lg font-bold text-[#02282C] pr-6 transition-colors duration-300 group-hover:text-[#0E5F66]">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-6 h-6 text-[#0E5F66]">
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="w-full h-full"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    </button>

                    {/* Content body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                          <div className="px-6 pb-6 pt-0 border-t border-[#053E43]/5 text-sm sm:text-base font-medium text-[#053E43]/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
