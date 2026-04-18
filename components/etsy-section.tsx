'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'iconoir-react';
import { etsyHighlights, etsyLink } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function EtsySection() {
  return (
    <section id="order-now" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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
              <Sparkles className="h-4 w-4" /> Order Now
            </p>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              Shop the collection today and bring authentic Nigerian flavors home.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-violet-100/85 sm:text-lg sm:leading-8">
              Deedees Cooking Pouch makes it easy to order premium Moi Moi, Agidi, and Ekuru for delivery across Australia.
              Convenience, quality, and tradition all meet here.
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
                <div key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm font-semibold text-violet-50/95">
                  {item}
                </div>
              ))}
            </div>

            <a
              href={etsyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-900 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Get Yours Today <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
