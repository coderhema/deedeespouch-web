import { cn } from '@/lib/utils';

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : '')}>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-700/80">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>
    </div>
  );
}
