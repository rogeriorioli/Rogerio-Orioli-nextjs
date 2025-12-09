import React from 'react';
import { HERO_DATA } from '../constants';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 animate-pulse"></div>
             <img 
                 src="https://github.com/rogeriorioli.png" 
                 alt={HERO_DATA.name}
                 className="relative w-full h-full rounded-full border-4 border-darker/50 object-cover shadow-2xl"
             />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block text-slate-100 mb-2">{HERO_DATA.name}</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-pink-500">
            {HERO_DATA.role}
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO_DATA.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary/25 w-full sm:w-auto"
          >
            Ver Portfólio
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm w-full sm:w-auto"
          >
            Contato
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a href="https://github.com/rogeriorioli" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rogeriorioli/" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-600" size={24} />
      </div>
    </section>
  );
};

export default Hero;