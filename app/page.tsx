import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-16 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 md:gap-24 lg:gap-[110px] lg:px-[60px] lg:pt-[60px]">
        <Header />
        <main className="flex flex-col gap-16 md:gap-24 lg:gap-[110px]">
          <Hero />
          <About />
          <Projects />
          <div className="grid gap-16 md:gap-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
            <Experience />
            <Skills />
          </div>
          <Contact />
        </main>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
