import type { Metadata } from 'next';
import { Geist, Fraunces } from 'next/font/google';
import type { ReactNode } from 'react';
import { featuredImage, logoImage } from '@/lib/content';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: {
    default: 'Deedees Cooking Pouch',
    template: '%s | Deedees Cooking Pouch'
  },
  description:
    'Premium traditional Nigerian meals presented in a polished purple-and-white editorial storefront with Etsy ordering.',
  openGraph: {
    title: 'Deedees Cooking Pouch',
    description:
      'Premium traditional Nigerian meals presented in a polished purple-and-white editorial storefront with Etsy ordering.',
    type: 'website',
    images: [featuredImage.src]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deedees Cooking Pouch',
    description:
      'Premium traditional Nigerian meals presented in a polished purple-and-white editorial storefront with Etsy ordering.',
    images: [featuredImage.src]
  },
  icons: {
    icon: [{ url: logoImage.src }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
