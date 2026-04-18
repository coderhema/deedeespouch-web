import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { FeatureGrid } from '@/components/feature-grid';
import { MenuSection } from '@/components/menu-section';
import { InstagramSection } from '@/components/instagram-section';
import { EtsySection } from '@/components/etsy-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureGrid />
      <MenuSection />
      <InstagramSection />
      <EtsySection />
      <Footer />
    </main>
  );
}
