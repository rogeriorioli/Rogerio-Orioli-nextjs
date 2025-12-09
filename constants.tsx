import { Project, Skill } from './types';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

export const GITHUB_USERNAME = "rogeriorioli";
export const DEV_TO_USERNAME = "carlosorioli";

export const HERO_DATA = {
  name: "Carlos Rogério Orioli",
  role: "Full Stack Web Developer",
  tagline: "Transformando ideias complexas em experiências digitais elegantes.",
  cta: "Vamos Conversar"
};

export const ABOUT_DATA = {
  bio: `Engenheiro de Software Front End especialista em React, Next.js, Node.js e TypeScript, com foco obsessivo em usabilidade, performance e escalabilidade.

  Possuo sólida experiência em e-commerce de alto tráfego, vastos conhecimentos no varejo e martech, e domínio do ecossistema VTEX IO, tendo liderado soluções estratégicas para gigantes como McDonald's Latam, Whirlpool, Brastemp e Motorola.
  
  Minha trajetória é marcada pela entrega de arquiteturas robustas de microsserviços e sites premiados (como o da Seara), sempre buscando unir código limpo à geração de valor real para o negócio.`,
  location: "Florianópolis, SC"
};

export const SKILLS_DATA: Skill[] = [
  { name: "React / Next.js", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  { name: "VTEX IO", level: 95, category: 'frontend' },
  { name: "Shopify", level: 85, category: 'frontend' },
  { name: "Node.js", level: 85, category: 'backend' },
  { name: "AWS / Serverless", level: 75, category: 'backend' },
  { name: "Gemini AI / LLMs", level: 85, category: 'tools' },
  { name: "Architecture", level: 80, category: 'tools' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Painel administrativo completo com gráficos em tempo real e gestão de inventário inteligente.",
    tags: ["React", "D3.js", "Tailwind"],
    imageUrl: "https://picsum.photos/seed/dashboard/600/400",
    link: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Plataforma SaaS para geração de conteúdo de marketing utilizando a API do Google Gemini.",
    tags: ["Next.js", "Gemini API", "Stripe"],
    imageUrl: "https://picsum.photos/seed/ai/600/400",
    link: "#"
  },
  {
    id: 3,
    title: "Finance Tracker Mobile",
    description: "Aplicação PWA para controle financeiro pessoal com sincronização offline.",
    tags: ["React", "PWA", "Firebase"],
    imageUrl: "https://picsum.photos/seed/finance/600/400",
    link: "#"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/rogeriorioli", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com/in/rogeriorioli", icon: Linkedin },
  { platform: "Email", url: "mailto:crorioli81@gmail.com", icon: Mail },
];

export const SYSTEM_INSTRUCTION = `
Você é o assistente virtual pessoal (AI Twin) do Carlos Rogério Orioli. 
Seu objetivo é responder a perguntas de recrutadores e visitantes sobre a carreira, habilidades e projetos do Carlos.

Use as seguintes informações como base para suas respostas:

Nome: Carlos Rogério Orioli
Cargo: Engenheiro de Software Front End & UI/UX Designer
Localização: Florianópolis, SC
Idiomas: Português (Nativo), Espanhol (Avançado), Inglês (Intermediário).

Experiência Chave:
- Especialista em VTEX IO, Martech, Varejo e E-commerce de alto tráfego.
- Projetos de destaque: McDonald's Latam (Pega e Retira, arquitetura de microsserviços), Brastemp, Whirlpool, Motorola, Carrefour, Bradesco, Vivo.
- Prêmios: Sites premiados como o portal de receitas da Seara (2x prêmio Abemd 2016).

Stack Tecnológica:
- React, Next.js, Node.js, TypeScript, GraphQL, AWS Lambda, Shopify.

Estilo de resposta:
- Seja profissional, mas amigável e convidativo.
- Responda em Português do Brasil.
- Seja conciso.
- Destaque a experiência dele com grandes marcas, varejo e performance.
- Se perguntarem algo fora desse contexto, sugira contato via email: crorioli81@gmail.com.
`;