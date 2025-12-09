import React from 'react';
import { ABOUT_DATA, SKILLS_DATA } from '../constants';
import { Code2, Database, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              Sobre Mim
            </h2>
            <div className="text-slate-400 text-lg leading-relaxed whitespace-pre-line mb-8">
              {ABOUT_DATA.bio}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-panel p-4 rounded-xl">
                <Code2 className="text-primary mb-3" size={32} />
                <h3 className="font-semibold text-white mb-1">Frontend</h3>
                <p className="text-sm text-slate-500">React, Next.js, Tailwind</p>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <Database className="text-secondary mb-3" size={32} />
                <h3 className="font-semibold text-white mb-1">Backend</h3>
                <p className="text-sm text-slate-500">Node, SQL, API Design</p>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <Terminal className="text-pink-500 mb-3" size={32} />
                <h3 className="font-semibold text-white mb-1">DevOps</h3>
                <p className="text-sm text-slate-500">Docker, CI/CD, AWS</p>
              </div>
            </div>
          </div>

          {/* Skills Visualization */}
          <div className="relative">
             <div className="glass-panel p-8 rounded-2xl relative z-10">
               <h3 className="text-xl font-bold text-white mb-6">Skills Técnicas</h3>
               <div className="space-y-6">
                 {SKILLS_DATA.map((skill) => (
                   <div key={skill.name}>
                     <div className="flex justify-between mb-2">
                       <span className="text-slate-300 font-medium">{skill.name}</span>
                       <span className="text-slate-500">{skill.level}%</span>
                     </div>
                     <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                         style={{ width: `${skill.level}%` }}
                       ></div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Decorative Image/Box behind */}
             <div className="absolute -top-10 -right-10 w-full h-full border-2 border-white/5 rounded-2xl -z-0 hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;