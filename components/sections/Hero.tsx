'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HERO, SOCIAL_LINKS } from '@/lib/content';
import { Mail, FileText, ChevronDown } from 'lucide-react';
import GitHubIcon from '@/components/ui/GitHubIcon';
import LinkedInIcon from '@/components/ui/LinkedInIcon';

const iconMap: Record<string, React.ElementType> = {
  Github: GitHubIcon,
  Linkedin: LinkedInIcon,
  Mail,
  FileText,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with ken-burns */}
      <div className="absolute inset-0 z-0">
        {/* // TODO: replace with your own hero background image */}
        <Image
          src="/images/hero-bg.png"
          alt="Abstract neural network visualization with glowing data connections — AI/ML themed background"
          fill
          className="object-cover ken-burns"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Light gradient overlay for readability on warm palette */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg/95" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32"
      >
        {/* Availability badge */}
        <motion.div variants={childVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-line font-mono text-sm text-ink-2">
            <span className="w-2 h-2 rounded-full bg-accent-green pulse-dot" />
            {HERO.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={childVariants}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink mb-4 leading-[1.05]"
        >
          {HERO.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={childVariants}
          className="font-body text-lg sm:text-xl text-ink-2 mb-6"
        >
          {HERO.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={childVariants}
          className="font-body text-base sm:text-lg text-ink-2 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {HERO.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={childVariants} className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="inline-flex items-center px-8 py-3.5 bg-ink text-bg font-display font-semibold text-base rounded-full hover:bg-accent-coral hover:text-white transition-all duration-300 ease-out-expo hover:scale-105 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="mailto:shrutisridhar4@gmail.com"
            className="inline-flex items-center px-8 py-3.5 bg-transparent text-ink font-display font-semibold text-base rounded-full border-2 border-ink hover:border-accent-coral hover:text-accent-coral transition-all duration-300 ease-out-expo hover:scale-105"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={childVariants} className="flex flex-wrap gap-6 justify-center">
          {SOCIAL_LINKS.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-ink-2 hover:text-accent-coral transition-colors font-mono text-sm group"
                aria-label={link.label}
              >
                {IconComponent && <IconComponent size={18} className="group-hover:scale-110 transition-transform" />}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-cue"
      >
        <a
          href="#about"
          onClick={(e) => handleScroll(e, '#about')}
          className="flex flex-col items-center gap-2 text-ink-2 hover:text-accent-coral transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-xs">scroll</span>
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
