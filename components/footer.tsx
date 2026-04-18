'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Mail } from 'iconoir-react';
import { brand, brandEmail, footerLinks, logoImage } from '@/lib/content';

const spring = { type: 'spring' as const, stiffness: 240, damping: 24, mass: 0.9 };

export function Footer() {
  return (
    <footer id="footer" className="border-t border-violet-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-violet-100 bg-[linear-gradient(180deg,#ffffff_0%,#faf5ff_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_70px_rgba(111,57,231,0.08)] sm:p-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-[11rem] items-center overflow-hidden rounded-full border border-violet-100 bg-white shadow-sm sm:w-[13rem]">
                <img src={logoImage.src} alt={logoImage.alt} className="h-full w-full object-contain object-left" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">Deedees Cooking Pouch</p>
                <p className="mt-1 text-sm text-zinc-500">{brand.promise}</p>
              </div>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">
              Authentic Nigerian flavors, delivered to your door.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-zinc-600">
              Premium pouches, family tradition, and Australia-wide delivery in one polished storefront.
            </p>

            <motion.a
              href={`mailto:${brandEmail}`}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-900"
            >
              <Mail className="h-4 w-4" /> {brandEmail}
            </motion.a>
          </div>

          <div className="flex flex-col gap-4">
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="inline-flex items-center justify-between gap-6 rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-900"
              >
                <span className="inline-flex items-center gap-2">
                  {link.label === 'Instagram' ? <Instagram className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-violet-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">Cook smart. Eat better. Tradition in every pouch.</p>
          <p className="text-sm text-zinc-500">Moi Moi • Agidi • Ekuru • Australia delivery</p>
        </div>
      </div>
    </footer>
  );
}
