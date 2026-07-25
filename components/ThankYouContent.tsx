'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ThankYouContent() {
  return (
    <>
      <Navigation />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-[#02282C] bg-[radial-gradient(circle_at_center,_#0E5F66_0%,_#02282C_100%)] py-28 px-4 sm:px-8 flex items-center justify-center min-h-screen"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-['Oswald'] text-5xl sm:text-6xl font-bold uppercase tracking-tighter text-white mb-6"
          >
            Thank You!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-['DM_Sans'] text-lg text-white/80 mb-8"
          >
            Your booking has been confirmed. We look forward to providing you with premium detailing service.
          </motion.p>
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-[#053E43] to-[#0E5F66] text-white font-['Oswald'] uppercase tracking-widest py-3 px-8 rounded-lg hover:shadow-lg transition-shadow"
          >
            Return Home
          </motion.a>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}
