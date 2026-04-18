'use client';

import { motion } from 'framer-motion';
import { audienceSections, enjoymentWays } from '@/lib/content';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.04 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const spring = { type: 'spring' as const, stiffness: 240, damping: 26, mass: 0.9 };

export function AudienceSection() {
  return (
    <section id="who-its-for" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-12% 0px' }}
          variants={container}
          className="max-w-3xl"
        >
          <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/75">
            Who It’s For
          </motion.p>
          <motion.h2 variants={item} className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            Thoughtfully made for homes that want nutrition, ease, and beautiful taste.
          </motion.h2>
          <motion.p variants={item} className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            A premium pouch format that supports everyday cooking, family care, and traditional meals without the fuss.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {audienceSections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] as const, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-[1.8rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbf8ff_100%)] p-6 shadow-[0_18px_60px_rgba(111,57,231,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Audience</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl">{section.title}</h3>
              <p className="mt-4 text-base leading-8 text-zinc-600">{section.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_60px_rgba(111,57,231,0.06)] sm:p-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={container}
          >
            <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/75">
              Ways to Enjoy
            </motion.p>
            <motion.h3 variants={item} className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
              Versatile enough for breakfast, lunch, and elegant family meals.
            </motion.h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={container}
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {enjoymentWays.map((way) => (
              <motion.article
                key={way.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={spring}
                className="rounded-[1.5rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8f1ff_100%)] p-5 shadow-[0_16px_45px_rgba(111,57,231,0.08)]"
              >
                <h4 className="text-lg font-extrabold tracking-[-0.03em] text-ink">{way.title}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{way.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
