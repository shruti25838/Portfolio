'use client';

import { motion } from 'framer-motion';
import { ACCENT_COLORS } from '@/lib/content';

interface ChipProps {
  label: string;
  accent: keyof typeof ACCENT_COLORS;
  index?: number;
}

export default function Chip({ label, accent, index = 0 }: ChipProps) {
  const color = ACCENT_COLORS[accent];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.03,
      }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-mono border transition-all duration-200 hover:scale-105 cursor-default"
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}08`,
        color: color,
      }}
    >
      {label}
    </motion.span>
  );
}
