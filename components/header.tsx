import { ArrowRight } from 'lucide-react';
import { logoImage, navigation, etsyLink } from '@/lib/content';

export function Header() {
  return (
    <div className="pointer-events-none sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-3 py-3 shadow-soft backdrop-blur-xl pointer-events-auto">
        <a href="#hero" className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-violet-50">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-violet-100 bg-white">
            <img src={logoImage.src} alt={logoImage.alt} className="h-full w-full object-cover" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-violet-700/75">
              Deedees Cooking Pouch
            </span>
            <span className="block text-sm text-zinc-500">Premium traditional food, polished for modern delivery.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
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

        <a
          href={etsyLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-violet-800 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-900"
        >
          Shop Etsy <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
