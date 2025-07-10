import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TeaCollection from '@/components/sections/TeaCollection';
import Ceremony from '@/components/sections/Ceremony';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TeaCollection />
      <Ceremony />
      <Testimonials />
      <Contact />
    </main>
  );
}
