'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { etsyHighlights, etsyLink } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function EtsySection() {
  return (
    <section id="etsy" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-violet-100 bg-violet-900 px-6 py-8 text-white shadow-[0_30px_90px_rgba(46,22,95,0.32)] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={reveal}
            transition={transition}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-violet-100/90 backdrop-blur">
              <Sparkles className="h-4 w-4" /> Etsy store
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Shop Deedees Cooking Pouch on Etsy with a clean, premium checkout path.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100/85 sm:text-lg sm:leading-8">
              The product is positioned for fast ordering and reliable delivery, with the same calm confidence that runs
              through the rest of the site.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={reveal}
            transition={{ ...transition, delay: 0.08 }}
            className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur"
          >
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {etsyHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-violet-50/90">
                  {item}
                </div>
              ))}
            </div>

            <a
              href={etsyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-violet-900 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Visit the Etsy shop <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
