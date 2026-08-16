import { Portfolio } from "./portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://rogeriorioli.vercel.app/#profile",
      url: "https://rogeriorioli.vercel.app/",
      name: "Carlos Rogério Orioli — Full Stack Developer",
      description:
        "Portfólio profissional de Carlos Rogério Orioli, desenvolvedor Full Stack especializado em React, Next.js, Node.js, e-commerce, automação e IA.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": "https://rogeriorioli.vercel.app/#website" },
      mainEntity: { "@id": "https://rogeriorioli.vercel.app/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://rogeriorioli.vercel.app/#person",
      name: "Carlos Rogério Orioli",
      url: "https://rogeriorioli.vercel.app/",
      jobTitle: "Full Stack Developer",
      description:
        "Desenvolvedor Full Stack com experiência em React, Next.js, Node.js, e-commerce, automação e inteligência artificial.",
      image: "https://rogeriorioli.vercel.app/carlos_orioli.png",
      email: "mailto:crorioli81@gmail.com",
      telephone: "+5548991775899",
      address: { "@type": "PostalAddress", addressLocality: "Florianópolis", addressCountry: "BR" },
      sameAs: [
        "https://www.linkedin.com/in/rogeriorioli/",
        "https://github.com/rogeriorioli",
        "https://dev.to/rogeriorioli",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "VTEX IO",
        "Shopify",
        "Automação com IA",
        "Inteligência artificial generativa",
      ],
      worksFor: { "@type": "Organization", name: "Celcoin" },
    },
    {
      "@type": "WebSite",
      "@id": "https://rogeriorioli.vercel.app/#website",
      url: "https://rogeriorioli.vercel.app/",
      name: "Carlos Rogério Orioli",
      description: "Portfólio profissional de Carlos Rogério Orioli.",
      publisher: { "@id": "https://rogeriorioli.vercel.app/#person" },
      inLanguage: "pt-BR",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Portfolio />
    </>
  );
}
