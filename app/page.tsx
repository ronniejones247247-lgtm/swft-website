import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import Slideshow from '@/components/Slideshow/Slideshow';
import Services from '@/components/Services/Services';
import FoamVisualizer from '@/components/FoamVisualizer/FoamVisualizer';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Slideshow />
      <Services />
      <FoamVisualizer />
      <About />
      <Footer />
    </>
  );
}
