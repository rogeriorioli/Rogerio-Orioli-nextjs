"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Code2, Heart, Mail, Menu, Rss, X } from "lucide-react";
import { motion, MotionConfig, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type Experience = {
  period: string;
  role: string;
  company: string;
  contract: string;
  location: string;
  description: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    period: "jun 2026 — o momento",
    role: "Analista de Automação com IA pleno",
    company: "Celcoin",
    contract: "Tempo integral",
    location: "São Paulo · Remoto",
    description: "Atuação com automação inteligente e aplicação prática de IA para otimizar processos e operações.",
    highlights: ["Automação de fluxos operacionais", "Integração de IA generativa e agentes de software"],
  },
  {
    period: "abr 2026 — o momento",
    role: "Instrutor Auxiliar de Brazilian Jiu Jitsu",
    company: "Gracie Barra Association",
    contract: "Autônomo",
    location: "Brasil · Presencial",
    description: "Suporte ao professor faixa-preta na introdução técnica, segura e disciplinada de alunos iniciantes.",
    highlights: ["Fundamentos técnicos, defesa pessoal e mobilidade", "Gestão de turma, regras e prevenção de lesões"],
  },
  {
    period: "jan 2026 — jun 2026",
    role: "Desenvolvedor Full Stack & AI Consultant",
    company: "Freelancer",
    contract: "Freelance",
    location: "São Paulo · Remoto",
    description: "Desenvolvimento de MVPs, plataformas de e-commerce e soluções com IA para startups e operações digitais.",
    highlights: ["React, Next.js, Node.js, VTEX e Shopify", "Vibe coding, agentes de software e fluxos baseados em MCP"],
  },
  {
    period: "ago 2025 — jan 2026",
    role: "Desenvolvedor Full Stack",
    company: "Check Commerce (Shopify)",
    contract: "Tempo integral",
    location: "Florianópolis · Híbrido",
    description: "Atuação estratégica na squad de suporte e sustentação para operações complexas de e-commerce.",
    highlights: ["Diagnóstico de bugs críticos e code reviews", "Clientes: Stanley, Boca Rosa, PatBo, Efizi e Sextante"],
  },
  {
    period: "jan 2025 — ago 2025",
    role: "Desenvolvedor Full Stack",
    company: "Freelancer",
    contract: "Freelance",
    location: "Florianópolis",
    description: "Criação ágil de produtos mínimos viáveis para startups e negócios digitais.",
    highlights: ["React, Next.js, Node.js e WordPress", "Arquitetura e entrega rápida de MVPs"],
  },
  {
    period: "set 2023 — dez 2024",
    role: "Senior Frontend Developer",
    company: "Dark Media Group",
    contract: "Tempo integral",
    location: "São Paulo · Remoto",
    description: "Liderança da migração de frontend legado em PHP para uma arquitetura moderna em React.",
    highlights: ["Escalabilidade, performance e Core Web Vitals", "Interface estratégica com Produto, Marketing e UX"],
  },
  {
    period: "fev 2023 — jul 2023",
    role: "Full Stack VTEX Developer",
    company: "Visie (Brastemp)",
    contract: "Tempo integral",
    location: "São Paulo · Remoto",
    description: "Suporte e sustentação da vertical de assinaturas e purificadores da Brastemp.",
    highlights: ["VTEX IO, React, Node.js e GraphQL", "Desenvolvimento de fluxos e manutenção de e-commerce"],
  },
  {
    period: "out 2022 — fev 2023",
    role: "React Native Developer",
    company: "Instivo",
    contract: "Terceirizado",
    location: "Florianópolis · Remoto",
    description: "Desenvolvimento de MVP para varejo com foco em qualidade, testes e colaboração com stakeholders.",
    highlights: ["React Native, TypeScript e Jest", "Componentes, testes unitários e esteira Jenkins"],
  },
  {
    period: "set 2020 — out 2022",
    role: "Full-stack Developer (SSR)",
    company: "Globant",
    contract: "Tempo integral",
    location: "São Paulo · Remoto",
    description: "Atuação em projetos de grande escala para McDonald's LATAM e Estadão.",
    highlights: ["Node.js, React, AWS e VTEX IO", "Projetos internacionais em inglês e espanhol"],
  },
  {
    period: "ago 2019 — jul 2020",
    role: "Front End Developer",
    company: "Linx",
    contract: "Tempo integral",
    location: "São Paulo e região",
    description: "Desenvolvimento de experiências personalizadas para e-commerces, com foco em retenção e conversão.",
    highlights: ["React, Vue.js e experiências orientadas por dados", "Big Data, engajamento e remarketing"],
  },
  {
    period: "mar 2018 — ago 2019",
    role: "Frontend Web Developer",
    company: "Keyrus",
    contract: "Tempo integral",
    location: "São Paulo",
    description: "Construção de interfaces conversacionais, dashboards e entregas críticas para grandes contas.",
    highlights: ["IBM Watson, Qlik Sense e QlikView", "Projetos para Carrefour, Bradesco e Vivo"],
  },
  {
    period: "out 2017 — mar 2018",
    role: "Full Stack VTEX Developer",
    company: "Jüssi",
    contract: "Tempo integral",
    location: "São Paulo e região",
    description: "Suporte, sustentação e customização de dados para operações VTEX de Motorola e Whirlpool.",
    highlights: ["VTEX Legacy, JavaScript, CSS e HTML", "Master Data, performance e escalabilidade"],
  },
  {
    period: "abr 2016 — out 2017",
    role: "Front-end Developer",
    company: "SunsetDDB",
    contract: "Tempo integral",
    location: "São Paulo · Presencial",
    description: "Desenvolvimento de campanhas digitais para marcas como Seara, Fiat e Jeep.",
    highlights: ["WordPress, AngularJS e tecnologias web", "Acessibilidade e interfaces orientadas a resultados"],
  },
];

const navLinks = [
  { label: "Experiência", href: "#experiencia" },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -56]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -28]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -24]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, prefersReducedMotion ? 1 : 0.2]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-hidden bg-[#f4f1eb] text-[#171717] selection:bg-[#f5c542] selection:text-[#171717]">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-40 [background-image:radial-gradient(#171717_0.5px,transparent_0.5px)] [background-size:6px_6px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        <header className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <a href="#top" className="text-xl font-bold tracking-[-0.08em]" aria-label="Voltar ao topo">
            ORIOLI<span className="text-[#d39b00]">.</span>
          </a>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium tracking-wide text-black/55 transition-colors hover:text-black">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="mailto:crorioli81@gmail.com" className="hidden items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-medium transition-colors hover:border-black hover:bg-black hover:text-white md:flex">
            Vamos conversar <ArrowUpRight className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-full border border-black/15 p-2 md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </header>

        {menuOpen && (
          <nav className="relative z-30 mx-6 flex flex-col gap-4 border-y border-black/10 py-5 md:hidden" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium">
                {link.label}
              </a>
            ))}
            <a href="mailto:crorioli81@gmail.com" className="text-lg font-medium text-[#bd8500]">Contato →</a>
          </nav>
        )}

        <main id="top" className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
          <section ref={heroRef} className="grid min-h-[calc(100svh-90px)] items-center gap-6 pb-16 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:pb-28 lg:pt-0">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="order-3 lg:order-1">
              <motion.div style={{ y: contentY, opacity: contentOpacity }}>
                <div className="mb-8 flex items-center gap-3 text-sm font-medium text-black/55">
                  <span className="h-2 w-2 rounded-full bg-[#d7a400] shadow-[0_0_0_5px_rgba(215,164,0,0.15)]" />
                  disponível para projetos selecionados
                </div>
                <ul className="max-w-md space-y-4 text-sm leading-6 text-black/65 md:text-base">
                  <li><strong className="font-semibold text-black">Experiência prática:</strong> mais de 10 anos desenvolvendo e sustentando sistemas de grande escala, com alta volumetria de dados.</li>
                  <li><strong className="font-semibold text-black">Stack técnico:</strong> atuação full-stack com React, Next.js e Node.js para construir aplicações robustas, escaláveis e performáticas.</li>
                  <li><strong className="font-semibold text-black">IA e automação:</strong> integração de IA generativa e desenvolvimento de sistemas agênticos para otimizar fluxos operacionais.</li>
                  <li><strong className="font-semibold text-black">Perfil executor:</strong> foco em qualidade de código, performance, segurança e entrega rápida de soluções para problemas complexos.</li>
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium">
                  <a href="https://www.linkedin.com/in/rogeriorioli/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Carlos Rogério Orioli" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-2 transition-colors hover:border-black hover:bg-black hover:text-white"><BriefcaseBusiness className="h-4 w-4" />LinkedIn</a>
                  <a href="https://github.com/rogeriorioli" target="_blank" rel="noreferrer" aria-label="GitHub de Carlos Rogério Orioli" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-2 transition-colors hover:border-black hover:bg-black hover:text-white"><Code2 className="h-4 w-4" />GitHub</a>
                  <a href="https://dev.to/rogeriorioli" target="_blank" rel="noreferrer" aria-label="DEV.to de Carlos Rogério Orioli" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-2 transition-colors hover:border-black hover:bg-black hover:text-white"><Rss className="h-4 w-4" />DEV.to</a>
                </div>
                <a href="#experiencia" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-semibold transition-colors hover:border-[#c99300] hover:text-[#c99300]">
                  Ver experiência <ArrowDownRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ y: imageY }} className="relative order-1 flex min-h-[330px] items-center justify-center lg:order-2 lg:min-h-[620px]">
              <motion.div style={{ y: circleY }} className="absolute h-[290px] w-[290px] rounded-full bg-[#f4c63d] md:h-[450px] md:w-[450px] lg:h-[530px] lg:w-[530px]" />
              <div className="relative z-10 h-[330px] w-[240px] -translate-y-5 md:h-[480px] md:w-[340px] lg:h-[570px] lg:w-[400px]" role="img" aria-label="Retrato de Carlos Rogério Orioli">
                <div className="absolute inset-0 [clip-path:inset(0_0_43%_0)]">
                  <Image
                    src="/carlos_nobg.png"
                    alt="Carlos Rogério Orioli"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 400px"
                  />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-bl-[37%] rounded-br-[39%]">
                  <div className="absolute inset-0 [clip-path:inset(43%_0_0_0)]">
                    <Image
                      src="/carlos_nobg.png"
                      alt=""
                      fill
                      aria-hidden="true"
                      loading="eager"
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 240px, (max-width: 1024px) 340px, 400px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="order-2 lg:order-3 lg:col-span-2 lg:-mt-24 lg:ml-auto lg:w-[53%]">
              <motion.div style={{ y: contentY, opacity: contentOpacity }}>
                <h1 className="text-[clamp(4.2rem,12vw,10.5rem)] font-bold leading-[0.78] tracking-[-0.09em] text-[#171717]">Carlos<br /><span className="ml-[14%] text-[#d39b00]">Rogério</span><br />Orioli<span className="text-[#d39b00]">.</span></h1>
              </motion.div>
            </motion.div>
          </section>

          <section id="experiencia" className="border-t border-black/15 py-24 md:py-32">
            <div className="mb-16 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
              <div className="flex items-start gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/50"><span>02</span><span className="mt-2 h-px w-10 bg-black/30" />Experiência</div>
              <div><h2 className="text-5xl font-bold leading-[0.88] tracking-[-0.07em] md:text-8xl">Uma década<br /><span className="text-[#d39b00]">em movimento.</span></h2><p className="mt-8 max-w-xl text-base leading-7 text-black/60">Da publicidade ao e-commerce, de produtos mobile à automação com IA: uma trajetória construída entre código, produto e impacto real.</p></div>
            </div>
            <div className="relative ml-2 border-l border-black/15 md:ml-[29%]">
              {experiences.map((experience, index) => (
                <motion.article key={`${experience.company}-${experience.role}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.2) }} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#d39b00] ring-4 ring-[#f4f1eb]" />
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#b47e00]">{experience.period}</div>
                  <div className="rounded-[1.5rem] border border-black/10 bg-[#e9e3d8]/60 p-6 transition-colors hover:border-black/25 md:p-8">
                    <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start"><div><h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{experience.role}</h3><p className="mt-1 font-medium text-black/65">{experience.company}</p></div><div className="text-xs leading-5 text-black/50 md:text-right">{experience.contract}<br />{experience.location}</div></div>
                    <p className="mt-6 max-w-2xl text-sm leading-6 text-black/65">{experience.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm leading-6 text-black/60 md:grid-cols-2">{experience.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[#d39b00]" />{highlight}</li>)}</ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="grid gap-10 border-t border-black/15 py-24 md:grid-cols-[0.7fr_1.3fr] md:py-32"><div className="flex items-start gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/50"><span>03</span><span className="mt-2 h-px w-10 bg-black/30" />Contato</div><div><h2 className="max-w-3xl text-5xl font-bold leading-[0.9] tracking-[-0.07em] md:text-8xl">Vamos criar<br /><span className="text-[#d39b00]">algo bom.</span></h2><div className="mt-10 flex flex-col items-start gap-4"><a href="mailto:crorioli81@gmail.com" className="inline-flex items-center gap-3 border-b-2 border-black pb-2 text-lg font-semibold transition-colors hover:border-[#c99300] hover:text-[#c99300]">crorioli81@gmail.com <Mail className="h-5 w-5" /></a><a href="https://wa.me/5548991775899" target="_blank" rel="noreferrer" aria-label="Conversar com Carlos Rogério Orioli pelo WhatsApp" className="inline-flex items-center gap-3 border-b-2 border-black pb-2 text-lg font-semibold transition-colors hover:border-[#c99300] hover:text-[#c99300]">WhatsApp +55 48 99177-5899 <span aria-hidden="true">↗</span></a></div></div></section>
        </main>

        <footer className="relative z-10 border-t border-black/15"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-black/55 md:flex-row md:items-center md:justify-between md:px-10"><span>© {new Date().getFullYear()} Carlos Rogério Orioli</span><div className="flex items-center gap-5"><a href="https://github.com/rogeriorioli" target="_blank" rel="noreferrer" className="transition-colors hover:text-black"><Code2 className="h-5 w-5" /></a><a href="https://www.linkedin.com/in/rogeriorioli/" target="_blank" rel="noreferrer" className="transition-colors hover:text-black"><BriefcaseBusiness className="h-5 w-5" /></a><a href="https://dev.to/rogeriorioli" target="_blank" rel="noreferrer" className="transition-colors hover:text-black"><Rss className="h-5 w-5" /></a></div><span className="inline-flex items-center gap-1.5">Feito com <Heart className="h-3.5 w-3.5 fill-[#d39b00] text-[#d39b00]" aria-label="amor" /> em Floripa</span></div></footer>
      </div>
    </MotionConfig>
  );
}
