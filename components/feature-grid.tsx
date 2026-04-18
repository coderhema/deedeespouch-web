'use client';

import { motion } from 'framer-motion';
import { storyBullets } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function FeatureGrid() {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition}>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">Story</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            A traditional food brand translated into a polished editorial experience.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            The visual system leans into deep violet, soft lavender, and clean white, with a warm, luxury feel that keeps
            the product and the promise at the center. Every section should feel calm, intentional, and easy to trust.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_60px_rgba(111,57,231,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/75">Brand voice</p>
            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Cook smart. Eat better. Moi Moi | Agidi | Ekuru. Tradition in every pouch. Australia delivery.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {storyBullets.map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={reveal}
              transition={{ ...transition, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_50px_rgba(111,57,231,0.07)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50 text-sm font-semibold text-violet-800">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-base font-medium text-ink">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Built to feel premium while still staying practical for everyday use.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
