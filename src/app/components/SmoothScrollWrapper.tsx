'use client';

import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useSmoothScroll } from '@/app/hooks/useSmoothScroll';

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    const smoothProgress = useSmoothScroll();

    return (
        <motion.div
            style={{ y: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
        >
            {children}
        </motion.div>
    );
}
