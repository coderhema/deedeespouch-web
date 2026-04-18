import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import type { ReactNode } from 'react';
import { featuredImage, logoImage } from '@/lib/content';
import './globals.css';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

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
    icon: [{ url: logoImage.src }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
