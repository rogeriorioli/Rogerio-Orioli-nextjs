import React, { useEffect, useState } from 'react';
import { PROJECTS_DATA, GITHUB_USERNAME } from '../constants';
import { ExternalLink, Github, Star, GitFork, Loader2 } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&direction=desc&per_page=6`
        );

        if (!response.ok) {
          throw new Error('GitHub API limit reached or network error');
        }

        const data = await response.json();
        
        // Filter out forks to show only original work
        const sourceRepos = data.filter((repo: any) => !repo.fork).slice(0, 6);

        const mappedProjects: Project[] = sourceRepos.map((repo: any) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "Projeto desenvolvido com foco em código limpo e performance.",
          tags: [repo.language, ...(repo.topics || [])].filter(Boolean),
          // Using GitHub Social Preview as the project image
          imageUrl: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
          link: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language
        }));

        setProjects(mappedProjects);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch from GitHub, falling back to static data", err);
        setProjects(PROJECTS_DATA);
        setError(true);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-400">
            <Github size={12} />
            <span>{error ? "Projetos em Destaque" : "Sincronizado com GitHub"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Estudos e ensaios
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explorando soluções através do código. Abaixo estão meus repositórios mais recentes.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="animate-spin text-primary mb-4" size={48} />
            <p className="text-slate-500">Carregando projetos do GitHub...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                      title="Ver código"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors truncate pr-2" title={project.title}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* GitHub Stats */}
                  {(project.stars !== undefined || project.forks !== undefined) && (
                    <div className="flex gap-4 mb-4 text-xs text-slate-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} className="text-blue-400" />
                        <span>{project.forks}</span>
                      </div>
                      {project.language && (
                         <div className="flex items-center gap-1 ml-auto">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            <span>{project.language}</span>
                         </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10"
          >
            Ver perfil completo no GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;