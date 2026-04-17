import { logoImage } from '@/lib/content';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-sm">
            <img src={logoImage.src} alt={logoImage.alt} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-700/80">Deedees Cooking Pouch</p>
            <p className="mt-1 text-sm text-zinc-500">Premium traditional food, polished for modern delivery.</p>
          </div>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-800 transition hover:border-violet-300 hover:bg-violet-100"
        >
          Order / enquire
        </a>
      </div>
    </header>
  );
}
