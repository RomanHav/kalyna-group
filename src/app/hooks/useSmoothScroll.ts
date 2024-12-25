'use client';
import { useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';

export function useSmoothScroll() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentScrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
        ) {
          section.style.opacity = '1';
        } else {
          section.style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return smoothProgress;
}
