'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './section-heading';
import { menu, process, trust } from '@/lib/content';

const spring = { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 };

export function MenuSection() {
  return (
    <section id="menu" className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Stage 3 & 4: Build direction"
          title="A homepage that sells the feeling before it sells the cart."
          description="The structure should lead with appetite, then move into product confidence, delivery ease, and social proof. Every module should feel deliberate and component-first."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {menu.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: index * 0.08 }}
                className="rounded-[1.6rem] border border-violet-100 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Signature pouch</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-ink">{item.name}</h3>
                  </div>
                  <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-800">Purple-ready UI</span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">{item.note}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
              className="rounded-[1.6rem] border border-violet-100 bg-violet-900 p-7 text-white shadow-[0_24px_80px_rgba(46,22,95,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-100/75">Delivery narrative</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">Australia delivery, told with clarity.</h3>
              <p className="mt-4 text-sm leading-7 text-violet-100/85">
                The site should make delivery feel reliable and premium, not transactional. Use concise copy, visible location messaging, and a calm CTA path.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.05 }}
              className="rounded-[1.6rem] border border-violet-100 bg-white p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Trust architecture</p>
              <ul className="mt-5 space-y-4">
                {trust.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: 0.1 }}
              className="rounded-[1.6rem] border border-violet-100 bg-white p-6 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">User flow</p>
              <ol className="mt-5 space-y-4">
                {process.map((item, index) => (
                  <li key={item} className="flex gap-4 text-sm leading-7 text-zinc-600">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-50 text-xs font-semibold text-violet-800">0{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
