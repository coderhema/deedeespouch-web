import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { FeatureGrid } from '@/components/feature-grid';
import { MenuSection } from '@/components/menu-section';
import { AudienceSection } from '@/components/audience-section';
import { InstagramSection } from '@/components/instagram-section';
import { EtsySection } from '@/components/etsy-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureGrid />
      <MenuSection />
      <AudienceSection />
      <InstagramSection />
      <EtsySection />
      <Footer />
    </main>
  );
}
