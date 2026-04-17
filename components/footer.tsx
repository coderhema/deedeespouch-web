export function Footer() {
  return (
    <footer id="contact" className="border-t border-violet-100 bg-white px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-700/70">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink">Launch the premium storefront.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
            This initial build is designed to become the home for product storytelling, delivery trust, and clean conversion.
          </p>
        </div>
        <a
          href="https://www.instagram.com/deedeespouch"
          className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-violet-800"
        >
          Back to Instagram
        </a>
      </div>
    </footer>
  );
}
