'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, ShoppingBag, Xmark } from 'iconoir-react';
import { navigation, etsyLink } from '@/lib/content';

const navLinkClass = 'rounded-full px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-950';
const mobileNavLinkClass = 'rounded-2xl px-4 py-4 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 hover:text-zinc-950';
const ctaClass = 'inline-flex items-center justify-center gap-2 rounded-full bg-violet-800 px-4 py-3.5 text-sm font-medium text-white transition hover:bg-violet-700';
const iconClass = 'h-4 w-4 shrink-0';
const menuIconClass = 'h-5 w-5 shrink-0';

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
    <header className="sticky top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-zinc-200 bg-white px-3 py-3 shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:px-4">
        <a href="#hero" className="flex min-w-0 items-center rounded-full px-2 py-1 transition hover:bg-zinc-50">
          <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2 py-1 shadow-sm">
            <img
              src="/Deedee%27s%20Bespoke%20horizontal.png"
              alt="Deedee's Bespokes horizontal logo"
              className="h-10 w-[9.5rem] object-contain object-left sm:w-[12.5rem] lg:w-[14rem]"
            />
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
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
            className={`${ctaClass} hidden lg:inline-flex`}
          >
            Order Now <ShoppingBag className={iconClass} />
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-violet-900 shadow-sm lg:hidden"
          >
            {open ? <Xmark className={menuIconClass} /> : <Menu className={menuIconClass} />}
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
          className={`fixed left-4 right-4 top-20 z-50 overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(17,24,39,0.12)] transition-all duration-300 ease-out ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
            <p className="text-sm font-semibold text-zinc-900">Menu</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900"
            >
              <Xmark className={menuIconClass} />
            </button>
          </div>
          <nav aria-label="Mobile primary" className="grid gap-1 p-3">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={mobileNavLinkClass}>
                {item.label}
              </a>
            ))}
            <a href={etsyLink} target="_blank" rel="noreferrer" className={`${ctaClass} mt-2 w-full`}>
              Order Now <ShoppingBag className={iconClass} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
