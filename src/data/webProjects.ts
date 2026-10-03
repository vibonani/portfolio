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
    title: "Maria Pacífico — Tráfego Pago",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description: "[ADICIONAR DESCRIÇÃO]",
    objective: "[ADICIONAR DESCRIÇÃO]",
    tools: ["[ADICIONAR FERRAMENTA]"],
    tags: ["Landing page", "Tráfego pago"],
    mainImage: "[ADICIONAR IMAGEM]",
    gallery: ["[ADICIONAR IMAGEM]"],
    externalUrl: "[ADICIONAR LINK]",
  },
  {
    slug: "maria-pacifico-portfolio",
    title: "Maria Pacífico — Portfólio",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description: "[ADICIONAR DESCRIÇÃO]",
    objective: "[ADICIONAR DESCRIÇÃO]",
    tools: ["[ADICIONAR FERRAMENTA]"],
    tags: ["Site", "Portfólio"],
    mainImage: "[ADICIONAR IMAGEM]",
    gallery: ["[ADICIONAR IMAGEM]"],
    externalUrl: "[ADICIONAR LINK]",
  },
  {
    slug: "maria-pacifico-link-na-bio",
    title: "Maria Pacífico — Link na Bio",
    client: "Maria Pacífico",
    ecosystem: "maria-pacifico",
    description: "[ADICIONAR DESCRIÇÃO]",
    objective: "[ADICIONAR DESCRIÇÃO]",
    tools: ["[ADICIONAR FERRAMENTA]"],
    tags: ["Link na bio"],
    mainImage: "[ADICIONAR IMAGEM]",
    gallery: ["[ADICIONAR IMAGEM]"],
    externalUrl: "[ADICIONAR LINK]",
  },
];

export const freelanceServices = [
  "Landing pages",
  "Sites institucionais",
  "Portfólios",
  "Páginas de links",
] as const;
