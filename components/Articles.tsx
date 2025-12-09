import React, { useEffect, useState } from 'react';
import { DEV_TO_USERNAME } from '../constants';
import { BookOpen, ExternalLink, Loader2, Calendar, Clock, Heart } from 'lucide-react';
import { Article } from '../types';

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${DEV_TO_USERNAME}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();
        
        // Configuration for filtering/ordering
        const unwantedUrlPart = '-5ecb'; 
        const featuredUrlPart = 'seo-og-analyzer-whit-ai-1724';

        // 1. Remove unwanted articles
        const filteredData = data.filter((article: Article) => 
          !article.url.includes(unwantedUrlPart)
        );

        // 2. Find featured article and move to top
        const featuredIndex = filteredData.findIndex((article: Article) => 
          article.url.includes(featuredUrlPart)
        );
        
        if (featuredIndex > -1) {
          const [featuredArticle] = filteredData.splice(featuredIndex, 1);
          filteredData.unshift(featuredArticle);
        }

        // 3. Take top 3
        setArticles(filteredData.slice(0, 3));
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch from Dev.to", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (error || (!loading && articles.length === 0)) return null;

  return (
    <section id="articles" className="py-24 bg-darker relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-400">
            <BookOpen size={12} />
            <span>Blog & Artigos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Últimas Publicações
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Compartilhando conhecimento e experiências sobre desenvolvimento, carreira e tecnologia.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-48">
            <Loader2 className="animate-spin text-primary mb-4" size={48} />
            <p className="text-slate-500">Carregando artigos...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="group flex flex-col bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-slate-800">
                   <img 
                    src={article.cover_image || article.social_image || `https://picsum.photos/seed/${article.id}/600/400`} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(article.published_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.reading_time_minutes} min de leitura
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                     <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Heart size={14} className="text-pink-500 fill-pink-500/20" />
                        <span>{article.public_reactions_count} reações</span>
                     </div>
                     
                     <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-white transition-colors"
                     >
                       Ler artigo <ExternalLink size={14} />
                     </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
            <a 
              href={`https://dev.to/${DEV_TO_USERNAME}`}
              target="_blank"
              rel="noreferrer" 
              className="text-sm text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-primary pb-0.5"
            >
              Ver todos os artigos no Dev.to
            </a>
        </div>
      </div>
    </section>
  );
};

export default Articles;