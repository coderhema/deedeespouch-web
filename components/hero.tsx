'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'iconoir-react';
import { brand, etsyLink, featuredImage } from '@/lib/content';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
};

const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const spring = { type: 'spring' as const, stiffness: 260, damping: 24, mass: 0.85 };

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top,rgba(107,33,168,0.14),transparent_42%),linear-gradient(180deg,rgba(250,250,250,0.98)_0%,rgba(245,236,255,0.88)_56%,rgba(250,250,250,1)_100%)]" />

      <motion.div initial="hidden" animate="show" variants={container} className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="text-left">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/85 px-4 py-2 text-sm font-semibold text-violet-800 shadow-sm backdrop-blur">
              <Star className="h-4 w-4" />
              {brand.promise}
            </motion.div>

            <motion.h1 variants={item} className="mt-6 max-w-2xl text-balance text-5xl font-bold tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              One pouch for pap, Moi Moi, Agidi, Ekuru, and more.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
              {brand.description} The idea is simple: one elegant pouch, many traditional meals, less effort, and a
              kitchen that feels calm, premium, and intentional.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#one-pouch"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-800 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(107,33,168,0.24)]"
              >
                Explore the pouch <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={etsyLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-800"
              >
                Shop the collection <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-600">
              <span className="rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(111,57,231,0.06)]">Authentic</span>
              <span className="rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(111,57,231,0.06)]">All-in-one convenience</span>
              <span className="rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(111,57,231,0.06)]">Australia delivery</span>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="absolute inset-x-8 top-8 -z-10 h-full rounded-[2.5rem] bg-violet-200/30 blur-3xl" />
            <div className="overflow-hidden rounded-[2.25rem] border border-violet-100 bg-white shadow-[0_24px_80px_rgba(111,57,231,0.10)]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/70">Editorial food story</p>
                    <h2 className="max-w-md text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">
                      Tradition, made beautiful and practical.
                    </h2>
                    <p className="text-base leading-8 text-zinc-600">
                      A pouch designed to move easily from breakfast pap to family dishes, keeping the process simple
                      without losing the comfort of home cooking.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-[1.25rem] border border-violet-100 bg-violet-50/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/70">One pouch</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">Built for pap, Moi Moi, Agidi, Ekuru, and more.</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-violet-100 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-700/70">Premium feel</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">Clean, elegant, and designed to feel special at home.</p>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[26rem] lg:min-h-[34rem]">
                  <img src={featuredImage.src} alt={featuredImage.alt} className="h-full w-full object-cover" loading="eager" decoding="async" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,12,40,0.03)_0%,rgba(24,12,40,0.16)_55%,rgba(24,12,40,0.6)_100%)]" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-800 backdrop-blur">
                      DeedeesPouch
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
                      <span className="font-semibold text-violet-900">Deedees Cooking Pouch</span>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/80">Premium from the first glance</p>
                    <p className="mt-3 max-w-lg text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                      One pouch. Many ways to enjoy tradition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
