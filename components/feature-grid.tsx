'use client';

import { motion } from 'framer-motion';
import { storyBullets, whyBenefits, featuredImage } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function FeatureGrid() {
  return (
    <section id="story" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition}>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/75">Story</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
              A family recipe turned into a more versatile everyday ritual.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg">
              Deedees Cooking Pouch is built around the idea that one thoughtfully made pouch can carry several
              traditional meals. It keeps the cooking experience calm, elevated, and grounded in the comfort of home.
            </p>

            <div className="mt-8 rounded-[2rem] border border-violet-100 bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Why people love it</p>
              <ul className="mt-5 space-y-4">
                {storyBullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-700 sm:text-base">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-8% 0px' }}
            variants={reveal}
            transition={{ ...transition, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-x-10 top-10 -z-10 h-full rounded-[2.5rem] bg-violet-200/20 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white">
              <img src={featuredImage.src} alt={featuredImage.alt} className="h-[22rem] w-full object-cover sm:h-[26rem]" loading="lazy" decoding="async" />
              <div className="border-t border-violet-100 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">All-in-one convenience</p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-ink">
                  One pouch, multiple traditional uses.
                </h3>
                <p className="mt-4 text-base leading-8 text-zinc-600">
                  Built for the people who want faster prep without sacrificing the taste or the ritual.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div id="why" className="mt-10 grid gap-4 lg:grid-cols-3">
          {whyBenefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8% 0px' }}
              variants={reveal}
              transition={{ ...transition, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border border-violet-100 bg-white p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Why Deedees</p>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-ink">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
