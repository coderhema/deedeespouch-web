import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { FeatureGrid } from '@/components/feature-grid';
import { MenuSection } from '@/components/menu-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureGrid />
      <MenuSection />
      <Footer />
    </main>
  );
}
