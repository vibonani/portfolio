export interface WebProject {
  slug: string;
  title: string;
  client: string;
  description: string;
  objective: string;
  tools: string[];
  tags: string[];
  mainImage: string;
  gallery: string[];
  externalUrl?: string;
  ecosystem?: string;
}

export const webProjects: WebProject[] = [
  {
    slug: "maria-pacifico-trafego-pago",
    title: "Landing Page para Tráfego Pago",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description:
      "Criação de uma landing page desenvolvida para receber visitantes vindos de campanhas de tráfego pago, com uma estrutura visual e textual direcionada à apresentação da oferta e à geração de conversões.",
    objective:
      "Criar uma página objetiva e estratégica, com informações organizadas, chamadas para ação claras e uma experiência de navegação pensada para conduzir o visitante até o contato ou conversão.",
    tools: [],
    tags: ["Landing page", "Tráfego pago"],
    mainImage: "/projetos/landing-trafego-pago-v2.png",
    gallery: [],
    externalUrl: "https://mariapacifico.netlify.app/",
  },
  {
    slug: "maria-pacifico-portfolio",
    title: "Portfolio (Mídia Kit)",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description:
      "Criação de uma página digital para apresentar trabalhos, informações profissionais, serviços e projetos de forma visual, organizada e fácil de navegar.",
    objective:
      "Criar uma apresentação profissional que reúna os principais conteúdos em um único espaço, fortalecendo a presença digital e facilitando o acesso de potenciais clientes, parceiros e oportunidades aos trabalhos apresentados.",
    tools: [],
    tags: ["Site", "Portfólio"],
    mainImage: "/projetos/portfolio-midiakit-v2.png",
    gallery: [],
    externalUrl: "https://midiakitmariapacifico.netlify.app/",
  },
  {
    slug: "maria-pacifico-link-na-bio",
    title: "Link na Bio (Linktree Premium)",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description:
      "Desenvolvimento de uma página personalizada que reúne links, informações e canais de contato em um único lugar, facilitando o acesso do público aos principais conteúdos e serviços.",
    objective:
      "Centralizar as informações e os canais digitais em uma página simples, organizada e visualmente alinhada à identidade da marca, tornando a navegação mais prática e intuitiva.",
    tools: [],
    tags: ["Link na bio"],
    mainImage: "/projetos/link-na-bio-v2.png",
    gallery: [],
    externalUrl: "https://mariapacificolinks.netlify.app/",
  },
];

export const freelanceServices = [
  "Landing pages",
  "Sites institucionais",
  "Portfólios",
  "Páginas de links",
] as const;
