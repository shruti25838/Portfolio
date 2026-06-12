'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Code2, ChevronDown } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROJECTS, ACCENT_COLORS } from '@/lib/content';
import type { Project } from '@/lib/content';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const accent = ACCENT_COLORS[project.accent as keyof typeof ACCENT_COLORS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="group bg-surface rounded-2xl overflow-hidden border border-line hover:shadow-xl transition-shadow duration-500 cursor-hover"
      style={{ borderTopWidth: '3px', borderTopColor: accent }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">
              {project.title}
            </h3>
            <p className="font-body text-sm text-ink-2">{project.subtitle}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2 rounded-lg border border-line hover:border-current transition-colors"
            style={{ color: accent }}
            aria-label={`${project.linkLabel} for ${project.title}`}
          >
            {project.linkLabel === 'Live demo' ? (
              <ExternalLink size={18} />
            ) : (
              <Code2 size={18} />
            )}
          </a>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: `${accent}10`,
                color: accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand/collapse button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 font-mono text-sm text-ink-2 hover:text-ink transition-colors mb-2"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Less' : 'Details'}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Expandable bullets */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-3 pt-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink-2 leading-relaxed">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accent }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="projects" accent="green" />
        <SectionHeading>What I&apos;ve built</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* All repos link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/shruti25838"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink-2 hover:text-accent-green transition-colors group"
          >
            View more on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
