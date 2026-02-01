'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setLoading(false);
                        // Unlock scroll
                        document.body.style.overflow = '';
                    }, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                    className="fixed inset-0 z-[200] bg-[#02282C] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Subtle dots background */}
                    <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2DD4BF 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />

                    {/* Center Content */}
                    <div className="relative flex flex-col items-center">
                        {/* Branding Text */}
                        <div className="overflow-hidden relative">
                            <motion.h1
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="font-['Oswald'] text-7xl md:text-9xl font-bold tracking-tighter text-white uppercase relative z-10"
                            >
                                SHEEEEN
                            </motion.h1>

                            {/* Sine effect sweep (Liquid Shine) */}
                            <motion.div
                                animate={{
                                    x: ['-150%', '150%'],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: [0.4, 0, 0.2, 1], // Smoother custom cubic bezier
                                    repeatDelay: 0.1
                                }}
                                className="absolute top-0 bottom-0 w-[50%] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent -skew-x-[25deg] z-20 pointer-events-none filter blur-[2px]"
                            />
                        </div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="font-['DM_Sans'] text-[#2DD4BF] text-xs uppercase tracking-[0.4em] mt-4 font-bold"
                        >
                            Mastering the Reflection
                        </motion.p>
                    </div>

                    {/* Bottom Progress Area */}
                    <div className="absolute bottom-20 left-10 right-10 flex flex-col items-center">
                        <div className="w-full max-w-xs h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="absolute inset-0 bg-[#2DD4BF]"
                            />
                        </div>

                        <div className="flex justify-between w-full max-w-xs mt-4">
                            <span className="font-['Oswald'] text-[10px] text-white/30 uppercase tracking-[0.2em]">Studio Syncing</span>
                            <span className="font-['Oswald'] text-[10px] text-white/80 tabular-nums">
                                {progress < 10 ? `0${progress}` : progress}%
                            </span>
                        </div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute top-10 left-10 text-white/10 font-['Oswald'] text-sm uppercase tracking-widest hidden md:block"
                    >
                        EST. 2024
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-10 right-10 text-white/10 font-['Oswald'] text-sm uppercase tracking-widest hidden md:block text-right"
                    >
                        PREMIUM DETAILING<br />
                        CURATED IN MYSORE
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
