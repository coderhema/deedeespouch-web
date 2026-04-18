import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { featuredImage, logoImage } from '@/lib/content';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: {
    default: 'Deedees Cooking Pouch',
    template: '%s | Deedees Cooking Pouch'
  },
  description:
    'Authentic Nigerian flavors, delivered to your door. Premium Moi Moi, Agidi, and Ekuru pouches with Australia-wide delivery.',
  openGraph: {
    title: 'Deedees Cooking Pouch',
    description:
      'Authentic Nigerian flavors, delivered to your door. Premium Moi Moi, Agidi, and Ekuru pouches with Australia-wide delivery.',
    type: 'website',
    images: [featuredImage.src]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deedees Cooking Pouch',
    description:
      'Authentic Nigerian flavors, delivered to your door. Premium Moi Moi, Agidi, and Ekuru pouches with Australia-wide delivery.',
    images: [featuredImage.src]
  },
  icons: {
    icon: [{ url: logoImage.src }]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
