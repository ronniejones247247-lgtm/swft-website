import Hero from '@/components/Hero/Hero';
import Slideshow from '@/components/Slideshow/Slideshow';
import Services from '@/components/Services/Services';
import FoamVisualizer from '@/components/FoamVisualizer/FoamVisualizer';
import Cushions from '@/components/Cushions/Cushions';
import About from '@/components/About/About';

export default function Home() {
  return (
    <>
      <Hero />
      <Slideshow />
      <Services />
      <FoamVisualizer />
      <Cushions />
      <About />
    </>
  );
}
