'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-tight mb-12 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
