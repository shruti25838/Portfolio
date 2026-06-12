'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import { EDUCATION_DATA } from '@/lib/content';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="education" accent="blue" />
        <SectionHeading>Education</SectionHeading>

        <div className="space-y-6">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
              className="bg-bg rounded-xl p-6 md:p-8 border border-line hover:border-accent-blue/30 hover:shadow-md transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-accent-blue" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-ink mb-1">
                  {edu.degree}
                </h3>
                <p className="font-body text-base text-ink-2 mb-2">
                  {edu.school}
                </p>
                <div className="flex flex-wrap gap-4 font-mono text-sm text-ink-2">
                  <span>{edu.period}</span>
                  <span className="text-accent-blue">GPA {edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
