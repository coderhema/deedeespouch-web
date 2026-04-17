'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './section-heading';
import { pillars } from '@/lib/content';

const spring = { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 };

export function FeatureGrid() {
  return (
    <section id="strategy" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stage 1 & 2: Audit + strategy"
          title="A premium social brand needs quiet confidence, not clutter."
          description="The brand reads as traditional, homemade, and culturally specific. The website should translate that into a modern experience with strong trust signals, clear delivery language, and a luxury visual rhythm."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ ...spring, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-violet-100 bg-white p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-ink">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{pillar.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
