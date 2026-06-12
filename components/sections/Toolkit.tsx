'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import Chip from '@/components/ui/Chip';
import { TOOLKIT, ACCENT_COLORS } from '@/lib/content';

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="toolkit" accent="blue" />
        <SectionHeading>Tech stack</SectionHeading>

        <div className="space-y-12">
          {TOOLKIT.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: catIndex * 0.1,
              }}
            >
              <h3
                className="font-display font-semibold text-xl mb-4 flex items-center gap-3"
                style={{ color: ACCENT_COLORS[category.accent as keyof typeof ACCENT_COLORS] }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: ACCENT_COLORS[category.accent as keyof typeof ACCENT_COLORS] }}
                />
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item, itemIndex) => (
                  <Chip
                    key={item}
                    label={item}
                    accent={category.accent as keyof typeof ACCENT_COLORS}
                    index={itemIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
