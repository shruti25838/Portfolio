'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Stat } from '@/lib/content';

interface StatCounterProps {
  stat: Stat;
  index: number;
}

export default function StatCounter({ stat, index }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion.current || !stat.numericValue) {
      setDisplayValue(stat.value);
      return;
    }

    const target = stat.numericValue;
    const decimals = stat.decimals ?? 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * target;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(stat.value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-4xl md:text-5xl text-accent-coral mb-2">
        {displayValue}
      </div>
      <div className="font-mono text-xs text-ink-2 max-w-[180px] mx-auto">
        {stat.label}
      </div>
    </div>
  );
}
