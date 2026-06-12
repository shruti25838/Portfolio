'use client';

import { motion } from 'framer-motion';
import { ACCENT_COLORS } from '@/lib/content';

interface SectionLabelProps {
  label: string;
  accent: keyof typeof ACCENT_COLORS;
}

export default function SectionLabel({ label, accent }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-4"
    >
      <span
        className="font-mono text-sm tracking-wider"
        style={{ color: ACCENT_COLORS[accent] }}
      >
        // {label}
      </span>
    </motion.div>
  );
}
