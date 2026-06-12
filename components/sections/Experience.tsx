'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCES } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="experience" accent="violet" />
        <SectionHeading>Where I&apos;ve worked</SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-line" aria-hidden="true" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[11px] md:left-[27px] top-2 w-3 h-3 rounded-full bg-accent-violet border-2 border-surface group-hover:scale-125 transition-transform"
                  aria-hidden="true"
                />

                {/* Card */}
                <div className="bg-bg rounded-xl p-6 border border-line hover:border-accent-violet/30 hover:shadow-md transition-all duration-300">
                  {/* Period */}
                  <p className="font-mono text-sm text-accent-violet mb-1">
                    {exp.period}
                  </p>

                  {/* Role & Org */}
                  <h3 className="font-display font-bold text-xl text-ink mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-body text-base text-ink-2 mb-4">
                    {exp.org}
                    {exp.location && ` · ${exp.location}`}
                  </p>

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-0.5 rounded-md bg-accent-violet/10 text-accent-violet"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
