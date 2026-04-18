import type { Metadata } from 'next';
import { Abril_Fatface, Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { featuredImage, faviconImage } from '@/lib/content';
import './globals.css';

const abrilFatface = Abril_Fatface({ subsets: ['latin'], variable: '--font-display', weight: '400', display: 'swap' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Deedees Cooking Pouch',
    template: '%s | Deedees Cooking Pouch'
  },
  description:
    'One versatile Nigerian food pouch for smooth pap, Moi Moi, Agidi, Ekuru, and everyday family cooking with Australia-wide delivery.',
  openGraph: {
    title: 'Deedees Cooking Pouch',
    description:
      'One versatile Nigerian food pouch for smooth pap, Moi Moi, Agidi, Ekuru, and everyday family cooking with Australia-wide delivery.',
    type: 'website',
    images: [featuredImage.src]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deedees Cooking Pouch',
    description:
      'One versatile Nigerian food pouch for smooth pap, Moi Moi, Agidi, Ekuru, and everyday family cooking with Australia-wide delivery.',
    images: [featuredImage.src]
  },
  icons: {
    icon: [{ url: faviconImage.src }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${abrilFatface.variable} ${plusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
