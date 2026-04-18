'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'iconoir-react';
import { instagramReels } from '@/lib/content';

const sectionVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, staggerChildren: 0.08, delayChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

const spring = { type: 'spring' as const, stiffness: 240, damping: 24, mass: 0.9 };

function InstagramReelEmbed({ title, permalink, caption }: { title: string; permalink: string; caption: string }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={spring}
      className="rounded-[1.75rem] border border-violet-100 bg-white p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
          <Instagram className="h-4 w-4" /> Reel
        </span>
        <a href={permalink} target="_blank" rel="noreferrer" className="text-xs font-medium text-violet-700/70 transition hover:text-violet-900">
          View on Instagram
        </a>
      </div>

      <div className="mt-4 overflow-hidden rounded-[1.5rem]">
        <blockquote
          className="instagram-media h-full w-full"
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
          data-instgrm-captioned
          style={{ background: '#FFF', border: 0, margin: 0, minWidth: '100%', padding: 0, width: '100%' }}
        >
          <a href={permalink} target="_blank" rel="noreferrer">
            {title}
          </a>
        </blockquote>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-600">{caption}</p>
    </motion.article>
  );
}

export function InstagramSection() {
  useEffect(() => {
    const existing = document.querySelector('script[src="//www.instagram.com/embed.js"]') as HTMLScriptElement | null;
    if (!existing) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        (window as Window & { instgrm?: { Embeds?: { process?: () => void } } }).instgrm?.Embeds?.process?.();
      };
      document.body.appendChild(script);
    } else {
      (window as Window & { instgrm?: { Embeds?: { process?: () => void } } }).instgrm?.Embeds?.process?.();
    }
  }, []);

  return (
    <section id="from-our-kitchen" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-12% 0px' }} variants={sectionVariants} className="max-w-2xl">
          <motion.p variants={itemVariants} className="text-xs font-semibold uppercase tracking-[0.32em] text-violet-700/75">
            From Our Kitchen
          </motion.p>
          <motion.h2 variants={itemVariants} className="mt-4 text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl">
            A quiet, editorial reel gallery with room to breathe.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            Three Instagram reels, framed in a premium layout with subtle presence, organic spacing, and a 9:16 ratio
            that keeps the media feeling intentional.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {instagramReels.map((reel) => (
            <InstagramReelEmbed key={reel.title} {...reel} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
