'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCounter from '@/components/ui/StatCounter';
import { ABOUT, STATS, getAssetPath } from '@/lib/content';

function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  const allLines = ABOUT.terminal.flatMap((item) => [
    item.prompt,
    ...item.response.split('\n'),
  ]);

  useEffect(() => {
    if (!isInView) return;
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleLines(allLines.length);
      setTypingComplete(true);
      return;
    }

    let lineIndex = 0;
    const interval = setInterval(() => {
      lineIndex++;
      setVisibleLines(lineIndex);
      if (lineIndex >= allLines.length) {
        clearInterval(interval);
        setTypingComplete(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isInView, allLines.length]);

  return (
    <div
      ref={ref}
      className="bg-ink rounded-lg p-4 font-mono text-xs leading-relaxed overflow-hidden"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-accent-coral" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent-amber" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
        <span className="ml-2 text-[10px] text-[#6B6256]">terminal</span>
      </div>
      <div className="space-y-0.5">
        {allLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-accent-green' : 'text-[#C9BFA8]'}>
            {line}
          </div>
        ))}
        {!typingComplete && isInView && (
          <span className="inline-block w-2 h-3.5 bg-accent-green terminal-cursor" />
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel label="about" accent="coral" />
        <SectionHeading>{ABOUT.heading}</SectionHeading>

        {/* Two-column: Left = Photo + Terminal, Right = Bio + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column: Photo then Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-coral via-accent-violet to-accent-blue p-[3px]">
                  <div className="w-full h-full rounded-full bg-bg" />
                </div>
                <div className="absolute inset-[6px] rounded-full overflow-hidden">
                  <Image
                    src={getAssetPath('/images/about-portrait.jpg')}
                    alt="Shruti Sridhar"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 60%' }}
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>
            </div>

            {/* Terminal */}
            <TerminalBlock />
          </motion.div>

          {/* Right column: Bio then Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Bio */}
            <div className="mb-6">
              {ABOUT.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base text-ink-2 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stats — below the text */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-lg border border-line p-4 text-center hover:border-accent-coral/30 transition-colors duration-300"
                >
                  <StatCounter stat={stat} index={i} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
