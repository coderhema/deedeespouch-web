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

function InstagramReelEmbed({ title, permalink, caption, tilt }: { title: string; permalink: string; caption: string; tilt: number }) {
  return (
    <motion.article
      variants={itemVariants}
      style={{ rotate: tilt }}
      whileHover={{ y: -6, rotate: 0 }}
      transition={spring}
      className="rounded-[1.75rem] border border-violet-200 bg-[linear-gradient(180deg,#ffffff_0%,#f4ecff_100%)] p-4 shadow-[0_18px_50px_rgba(111,57,231,0.12)]"
    >
      <div className="rounded-[1.25rem] border border-violet-200 bg-white p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-700">
            <Instagram className="h-4 w-4" /> Reel
          </span>
          <a href={permalink} target="_blank" rel="noreferrer" className="text-xs font-medium text-violet-700/70 transition hover:text-violet-900">
            View on Instagram
          </a>
        </div>

        <div className="mt-4 aspect-[9/16] overflow-hidden rounded-[1.1rem] border border-violet-200 bg-[linear-gradient(180deg,#fbf8ff_0%,#ffffff_100%)]">
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
      </div>
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
          <motion.h2 variants={itemVariants} className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
            A polished reel gallery that feels editorial, not crowded.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            Three Instagram reels, framed in a premium layout with subtle tilt, clean spacing, and a 9:16 ratio that keeps the media feeling intentional.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={sectionVariants}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {instagramReels.map((reel, index) => (
            <InstagramReelEmbed key={reel.title} {...reel} tilt={index === 0 ? -1 : index === 1 ? 1 : -0.5} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
