'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { brand, highlights } from '@/lib/content';

const spring = { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 };

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm text-violet-800 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            {brand.promise}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.08 }}
            className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.07em] text-ink sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Traditional food, framed like a premium editorial brand.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.16 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
          >
            {brand.description} The site strategy leans into quiet luxury, generous whitespace, and decisive calls to action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.22 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-700 px-6 py-3.5 text-sm font-medium text-white shadow-glow transition hover:bg-violet-800"
            >
              Explore the menu <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#strategy"
              className="inline-flex items-center justify-center rounded-full border border-violet-200 bg-white px-6 py-3.5 text-sm font-medium text-violet-800 transition hover:bg-violet-50"
            >
              View the strategy
            </a>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.25 + index * 0.06 }}
                className="rounded-3xl border border-violet-100 bg-white/85 p-5 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/70">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...spring, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-grain-radial blur-3xl" />
          <div className="rounded-[2rem] border border-violet-100 bg-white p-5 shadow-soft sm:p-7">
            <div className="rounded-[1.5rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8f3ff_100%)] p-5 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/70">Website direction</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">Purple, white, and unmistakably premium.</h2>
                </div>
                <div className="rounded-full border border-violet-100 bg-white px-4 py-2 text-xs font-medium text-violet-800 shadow-sm">
                  {brand.location}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {['Tight typography hierarchy', 'Heavy whitespace', 'Spring motion', 'Premium component architecture'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_12px_30px_rgba(111,57,231,0.06)]">
                    <p className="text-sm font-medium text-zinc-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.4rem] bg-violet-800 px-5 py-5 text-white shadow-[0_20px_60px_rgba(77,39,160,0.32)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/80">Design principle</p>
                <p className="mt-3 text-lg leading-8">
                  Make the food feel like a beautifully art-directed product, not just a menu item.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
