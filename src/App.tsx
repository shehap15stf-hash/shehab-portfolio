import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Process from './components/Process';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import './index.css';

export default function App() {
  useScrollAnimations();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Metrics />
        <Process />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
