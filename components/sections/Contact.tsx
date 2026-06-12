'use client';

import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import Link from 'next/link';
import GitHubIcon from '@/components/ui/GitHubIcon';
import LinkedInIcon from '@/components/ui/LinkedInIcon';
import SectionLabel from '@/components/ui/SectionLabel';
import { SOCIAL_LINKS } from '@/lib/content';

const iconMap: Record<string, React.ElementType> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail,
  FileText,
};

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-coral via-accent-violet to-accent-blue" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <SectionLabel label="contact" accent="coral" />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-8"
          >
            Looking for AI/ML, research{' '}
            <br className="hidden sm:block" />
            and MLOps roles.{' '}
            <span className="text-white/80">Say hi.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-10"
          >
            <a
              href="mailto:shrutisridhar4@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink font-display font-semibold text-lg rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 ease-out-expo shadow-lg"
            >
              <Mail size={20} />
              shrutisridhar4@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-mono text-sm"
                  aria-label={link.label}
                >
                  {IconComponent && <IconComponent size={18} />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm text-[#6B6256]">
            © 2026 Shruti Sridhar · New York, NY
          </p>
        </div>
      </footer>
    </>
  );
}
