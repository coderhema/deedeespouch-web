'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, Xmark } from 'iconoir-react';
import { navigation, etsyLink } from '@/lib/content';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/88 px-3 py-3 shadow-[0_14px_40px_rgba(107,33,168,0.08)] backdrop-blur-xl sm:px-4">
        <a href="#hero" className="flex min-w-0 items-center rounded-full px-2 py-1 transition hover:bg-violet-50">
          <img
            src="/Deedee%27s%20Bespoke%20horizontal.png"
            alt="Deedee's Bespokes horizontal logo"
            className="h-10 w-[9.5rem] object-contain object-left sm:w-[12.5rem] lg:w-[14rem]"
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-violet-50 hover:text-violet-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href={etsyLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24, mass: 0.9 }}
            className="hidden items-center gap-2 rounded-full bg-violet-800 px-4 py-2 text-sm font-medium text-white lg:inline-flex"
          >
            Order Now <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.85 }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-100 bg-white text-violet-900 shadow-sm lg:hidden"
          >
            {open ? <Xmark className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close mobile navigation overlay"
          onClick={() => setOpen(false)}
          className={`fixed inset-0 z-40 bg-black/20 transition duration-300 ${open ? 'visible' : 'invisible'}`}
        />

        <div
          className={`fixed left-4 right-4 top-20 z-50 overflow-hidden rounded-[1.75rem] border border-violet-100 bg-white shadow-[0_24px_70px_rgba(107,33,168,0.16)] transition-all duration-300 ease-out ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        >
          <div className="flex items-center justify-between border-b border-violet-100 px-5 py-4">
            <p className="text-sm font-semibold text-violet-900">Menu</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-violet-50 text-violet-900"
            >
              <Xmark className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile primary" className="grid gap-1 p-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 text-base font-medium text-zinc-700 transition hover:bg-violet-50 hover:text-violet-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href={etsyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-violet-800 px-4 py-3.5 text-sm font-semibold text-white"
            >
              Order Now <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
