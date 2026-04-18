'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'iconoir-react';
import { featuredImage, onePouchHighlights, etsyLink } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };
const spring = { type: 'spring' as const, stiffness: 240, damping: 24, mass: 0.9 };

export function MenuSection() {
  return (
    <section id="one-pouch" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/75">One Pouch</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
              The pouch that works across the meals people actually cook.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
              Instead of making the brand feel like a collection of separate products, this is presented as one
              flexible pouch with multiple uses — the practical, beautiful answer for everyday Nigerian cooking.
            </p>

            <motion.a
              href={etsyLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-violet-800 px-6 py-3.5 text-sm font-semibold text-white"
            >
              Shop now <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-8% 0px' }}
            variants={reveal}
            transition={{ ...transition, delay: 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white"
          >
            <img src={featuredImage.src} alt={featuredImage.alt} className="h-[18rem] w-full object-cover sm:h-[24rem]" loading="lazy" decoding="async" />
            <div className="border-t border-violet-100 p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                {onePouchHighlights.map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-violet-100 p-4">
                    <h3 className="text-lg font-bold tracking-[-0.03em] text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
