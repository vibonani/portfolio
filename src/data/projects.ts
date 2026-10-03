import { webProjects } from "@/data/webProjects";

export type ProjectCategory =
  | "sites-paginas"
  | "dados-processos"
  | "solucoes-internas";

export interface ProjectSummary {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  image: string;
  href: string;
}

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: "sites-paginas", label: "Sites & Páginas" },
  { value: "dados-processos", label: "Dados & Processos" },
  { value: "solucoes-internas", label: "Soluções internas" },
];

export const projects: ProjectSummary[] = [
  ...webProjects.map(
    (project): ProjectSummary => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      category: "sites-paginas",
      categoryLabel: "Sites & Páginas",
      tags: project.tags,
      image: project.mainImage,
      href: `/web/${project.slug}`,
    }),
  ),
  {
    slug: "validacao-leads",
    title: "Plataforma de validação de leads",
    description:
      "Ferramenta para identificar e tratar duplicidades de leads em uma operação real.",
    category: "solucoes-internas",
    categoryLabel: "Soluções internas",
    tags: ["Processos", "Automação", "[ADICIONAR TAG]"],
    image: "[ADICIONAR IMAGEM]",
    href: "/projetos/validacao-leads",
  },
  {
    slug: "avaliacao-candidatos",
    title: "Plataforma de avaliação de candidatos",
    description:
      "DISC, Fit Cultural e Raciocínio Lógico em uma experiência integrada de avaliação e gestão.",
    category: "solucoes-internas",
    categoryLabel: "Soluções internas",
    tags: ["Recrutamento", "Painel administrativo", "[ADICIONAR TAG]"],
    image: "[ADICIONAR IMAGEM]",
    href: "/projetos/avaliacao-candidatos",
  },
  {
    slug: "dados-processos",
    title: "Dados & Processos",
    description:
      "Organização e tratamento de bases de informação para melhoria de processos.",
    category: "dados-processos",
    categoryLabel: "Dados & Processos",
    tags: ["Organização de dados", "Processos", "[ADICIONAR TAG]"],
    image: "[ADICIONAR IMAGEM]",
    href: "/projetos/dados-processos",
  },
];

export interface CaseSectionContent {
  heading: string;
  body: string;
}

export interface PrivacyNoticeContent {
  title: string;
  body: string;
}

export interface ProjectCase {
  slug: string;
  title: string;
  subtitle: string;
  categoryLabel: string;
  tags: string[];
  isInternal: boolean;
  privacyNotice?: PrivacyNoticeContent;
  sections: CaseSectionContent[];
  tools: string[];
  relatedSlugs: string[];
}

export const validacaoLeadsCase: ProjectCase = {
  slug: "validacao-leads",
  title: "Plataforma de validação de leads",
  subtitle: "[ADICIONAR DESCRIÇÃO]",
  categoryLabel: "Soluções internas",
  tags: ["Processos", "Automação", "[ADICIONAR TAG]"],
  isInternal: true,
  privacyNotice: {
    title: "Projeto interno",
    body: "Por envolver dados utilizados em uma operação real, a demonstração pública utiliza dados fictícios.",
  },
  sections: [
    { heading: "Contexto", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Problema", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Objetivo", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Solução", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Como funciona", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Demonstração visual", body: "[ADICIONAR IMAGEM]" },
    { heading: "Resultado", body: "[ADICIONAR RESULTADO]" },
  ],
  tools: ["[ADICIONAR FERRAMENTA]"],
  relatedSlugs: ["avaliacao-candidatos", "dados-processos"],
};

export const avaliacaoCandidatosCase: ProjectCase = {
  slug: "avaliacao-candidatos",
  title: "Plataforma de avaliação de candidatos",
  subtitle:
    "DISC, Fit Cultural e Raciocínio Lógico em uma experiência integrada de avaliação e gestão.",
  categoryLabel: "Soluções internas",
  tags: ["Recrutamento", "Painel administrativo", "[ADICIONAR TAG]"],
  isInternal: true,
  privacyNotice: {
    title: "Projeto interno",
    body: "Por envolver dados utilizados em uma operação real, a demonstração pública utiliza dados fictícios.",
  },
  sections: [
    { heading: "Contexto", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Problema", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Solução", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Experiência do candidato", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Painel administrativo", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Funcionalidades", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Fluxo da plataforma", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Demonstração visual", body: "[ADICIONAR IMAGEM]" },
    { heading: "Desenvolvimento", body: "[ADICIONAR DESCRIÇÃO]" },
  ],
  tools: ["[ADICIONAR FERRAMENTA]"],
  relatedSlugs: ["validacao-leads", "dados-processos"],
};

export const dadosProcessosCase: ProjectCase = {
  slug: "dados-processos",
  title: "Dados & Processos",
  subtitle: "[ADICIONAR DESCRIÇÃO]",
  categoryLabel: "Dados & Processos",
  tags: ["Organização de dados", "Processos", "[ADICIONAR TAG]"],
  isInternal: false,
  sections: [
    { heading: "Contexto", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Problema", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Volume da informação", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "O que foi feito", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Organização", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Tratamento", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Validação", body: "[ADICIONAR DESCRIÇÃO]" },
    { heading: "Antes", body: "[ADICIONAR IMAGEM]" },
    { heading: "Depois", body: "[ADICIONAR IMAGEM]" },
    { heading: "Resultado", body: "[ADICIONAR RESULTADO]" },
  ],
  tools: ["[ADICIONAR FERRAMENTA]"],
  relatedSlugs: ["validacao-leads", "avaliacao-candidatos"],
};

export const projectCases: Record<string, ProjectCase> = {
  "validacao-leads": validacaoLeadsCase,
  "avaliacao-candidatos": avaliacaoCandidatosCase,
  "dados-processos": dadosProcessosCase,
};
