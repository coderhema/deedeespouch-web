'use client';

import { motion } from 'framer-motion';
import { storyBullets, whyBenefits } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function FeatureGrid() {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition}>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">Story</p>
          <h2 className="mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            A family tradition turned into a premium pouch brand.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Deedees Cooking Pouch brings Nigerian heritage into a convenient format that fits real life. The brand keeps
            the soul of home cooking while making it easier to enjoy, serve, and order again.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_60px_rgba(111,57,231,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/75">Why people love it</p>
            <ul className="mt-4 space-y-4">
              {storyBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-700 sm:text-base">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div id="why" className="grid gap-4">
          {whyBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={reveal}
              transition={{ ...transition, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-[1.5rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_50px_rgba(111,57,231,0.07)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Why Deedees</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-ink">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
