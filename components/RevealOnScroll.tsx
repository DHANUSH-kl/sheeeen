'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    duration?: number;
    delay?: number;
    effect?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
    className?: string;
    once?: boolean;
}

export const RevealOnScroll = ({
    children,
    width = 'fit-content',
    duration = 0.6,
    delay = 0,
    effect = 'fade-up',
    className = '',
    once = true,
}: RevealOnScrollProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const getVariants = () => {
        const base = {
            visible: { opacity: 1, x: 0, y: 0, scale: 1 },
        };

        switch (effect) {
            case 'fade-up':
                return {
                    hidden: { opacity: 0, y: 30, scale: 1 },
                    visible: base.visible,
                };
            case 'fade-in':
                return {
                    hidden: { opacity: 0, y: 0, scale: 1 },
                    visible: base.visible,
                };
            case 'slide-left':
                return {
                    hidden: { opacity: 0, x: -50, scale: 1 },
                    visible: base.visible,
                };
            case 'slide-right':
                return {
                    hidden: { opacity: 0, x: 50, scale: 1 },
                    visible: base.visible,
                };
            case 'scale-up':
                return {
                    hidden: { opacity: 0, y: 0, scale: 0.95 },
                    visible: base.visible,
                };
            default:
                return {
                    hidden: { opacity: 0, y: 30 },
                    visible: base.visible,
                };
        }
    };

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }} // Custom easing for premium feel
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealOnScroll;
