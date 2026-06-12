'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import { CERTIFICATIONS } from '@/lib/content';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-amber via-accent-blue to-accent-violet" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <SectionLabel label="certifications" accent="amber" />
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-4xl text-white mb-12"
        >
          Certifications
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {CERTIFICATIONS.map((c, i) => (
            <li key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <h3 className="font-display text-xl text-white mb-2">{c.title}</h3>
              <p className="text-white/80 mb-1"><strong>Issuer:</strong> {c.issuer}</p>
              <p className="text-white/80"><strong>Year:</strong> {c.year}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
