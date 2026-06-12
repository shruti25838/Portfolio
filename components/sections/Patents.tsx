'use client';

import { motion } from 'framer-motion';
import { Award, FileText, ScrollText } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import { PATENTS, CERTIFICATIONS } from '@/lib/content';

const iconMap: Record<string, React.ElementType> = {
  'Design patent': ScrollText,
  'Paper': FileText,
};

export default function PatentsAndCerts() {
  return (
    <section id="patents" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="patents & certifications" accent="amber" />
        <SectionHeading>Research, IP & Credentials</SectionHeading>

        {/* Patents & Publications */}
        <h3 className="font-mono text-xs uppercase tracking-widest text-accent-amber mb-5">
          Patents & Publications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {PATENTS.map((item, i) => {
            const Icon = iconMap[item.type] || FileText;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
                className="bg-bg rounded-xl border border-line p-5 hover:border-accent-amber/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-amber/10 flex items-center justify-center mt-0.5">
                    <Icon size={18} className="text-accent-amber" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-base text-ink mb-1">
                      {item.title}
                    </h4>
                    <span className="font-mono text-xs text-ink-2">
                      {item.type} · {item.year}
                    </span>
                    <p className="font-body text-sm text-ink-2 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <h3 className="font-mono text-xs uppercase tracking-widest text-accent-violet mb-5">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 }}
              className="bg-bg rounded-xl border border-line p-5 hover:border-accent-violet/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-violet/10 flex items-center justify-center">
                  <Award size={18} className="text-accent-violet" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-semibold text-sm text-ink leading-snug mb-1">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs text-ink-2">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
