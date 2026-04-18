'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'iconoir-react';
import { products, etsyLink } from '@/lib/content';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };
const spring = { type: 'spring' as const, stiffness: 240, damping: 24, mass: 0.9 };

export function MenuSection() {
  return (
    <section id="products" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} variants={reveal} transition={transition} className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">Products</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            Shop the collection of premium Nigerian pouches.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Every pouch is designed to feel trusted, memorable, and easy to buy again — the kind of product page that
            turns interest into action.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={reveal}
              transition={{ ...transition, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className="group rounded-[1.75rem] border border-violet-100 bg-white p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_70px_rgba(111,57,231,0.08)]"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-900 text-sm font-semibold text-white shadow-sm">
                    {product.number}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Signature pouch</p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl">{product.name}</h3>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600">{product.description}</p>
                  </div>
                </div>

                <motion.a
                  href={etsyLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-3 text-sm font-semibold text-violet-900"
                >
                  Get Yours Today <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.details.map((detail) => (
                  <span key={detail} className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-sm text-violet-800">
                    {detail}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
