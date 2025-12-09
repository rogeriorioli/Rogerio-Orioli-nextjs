import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-darker min-h-screen text-slate-200 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;