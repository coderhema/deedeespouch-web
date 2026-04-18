'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'iconoir-react';
import { instagramCards } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function InstagramSection() {
  return (
    <section id="from-our-kitchen" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">From Our Kitchen</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            Social-ready Instagram content placeholders.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            These cards are ready for future Instagram images or iframe embeds and are styled to feel like a premium
            gallery, not a generic feed.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {instagramCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={reveal}
              transition={{ ...transition, delay: index * 0.06 }}
              style={{ rotate: card.tilt }}
              className="rounded-[1.75rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4ecff_100%)] p-4 shadow-[0_18px_50px_rgba(111,57,231,0.12)] transition hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-violet-200 bg-violet-50">
                <div className="flex h-full flex-col justify-between p-5 text-violet-900">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur">
                      <Instagram className="h-4 w-4" /> Instagram
                    </span>
                    <span className="text-xs font-medium text-violet-700/70">Placeholder</span>
                  </div>

                  <div className="rounded-[1.5rem] border border-dashed border-violet-300/80 bg-white/60 p-4 text-center backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-700/75">Drop in content here</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {card.caption}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-ink">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Designed to accept an image or an iframe embed later.
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
