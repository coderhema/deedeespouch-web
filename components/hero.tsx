'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { brand, etsyLink, featuredImage, logoImage, storyNotes } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top,rgba(107,33,168,0.16),transparent_42%),linear-gradient(180deg,rgba(250,250,250,0.98)_0%,rgba(248,243,255,0.96)_70%,rgba(250,250,250,1)_100%)]" />

      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={transition}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/85 px-4 py-2 text-sm font-medium text-violet-800 shadow-sm backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          {brand.promise}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ ...transition, delay: 0.06 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.03em] text-ink sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Cook smart. Eat better. Traditional food, presented like a premium brand.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ ...transition, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
        >
          {brand.description} Moi Moi, Agidi, and Ekuru are served with a calm editorial rhythm, clear delivery messaging,
          and a polished path to purchase.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ ...transition, delay: 0.22 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-violet-800 px-6 py-3.5 text-sm font-medium text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-900"
          >
            View products <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={etsyLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-6 py-3.5 text-sm font-medium text-violet-800 transition hover:-translate-y-0.5 hover:bg-violet-50"
          >
            Shop on Etsy <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-500">
          {storyNotes.map((item) => (
            <span key={item} className="rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-[0_10px_30px_rgba(111,57,231,0.06)]">
              {item}
            </span>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ ...transition, delay: 0.28 }}
          className="relative mx-auto mt-12 max-w-5xl"
        >
          <div className="absolute inset-x-6 top-8 -z-10 h-full rounded-[2rem] bg-violet-200/30 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-3 shadow-soft sm:p-4">
            <div className="overflow-hidden rounded-[1.6rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#f4ecff_100%)]">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
                <div className="relative order-2 flex flex-col justify-end p-6 text-left lg:order-1 lg:p-8">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700 shadow-sm backdrop-blur">
                    Featured image
                  </div>
                  <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                    The product should feel craveable, composed, and art-directed.
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                    Clean cooking. Less mess. Reusable, leak-proof, BPA-free. Built for the kind of brand presence that
                    feels premium from the first glance.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800">Australia delivery</span>
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800">Traditional food</span>
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800">Premium presentation</span>
                  </div>
                </div>

                <div className="relative order-1 min-h-[24rem] lg:order-2 lg:min-h-[36rem]">
                  <img
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,12,40,0.04)_0%,rgba(24,12,40,0.22)_55%,rgba(24,12,40,0.58)_100%)]" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-5 sm:right-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-800 backdrop-blur">
                      DeedeesPouch
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
                      <img src={logoImage.src} alt={logoImage.alt} className="h-4 w-4 rounded-full object-cover" />
                      {brand.location}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100/80">Instagram inspiration</p>
                    <p className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      Cooked for real life, styled for a premium storefront.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
