import Nav from '@/components/ui/Nav';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Toolkit from '@/components/sections/Toolkit';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Patents from '@/components/sections/Patents';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Toolkit />
        <Projects />
        <Experience />
        <Patents />
        <Education />
        <Contact />
      </main>
    </>
  );
}
