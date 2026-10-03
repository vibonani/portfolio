export interface TimelineItem {
  period: string;
  title: string;
  place: string;
  description: string;
}

export const experience: TimelineItem[] = [
  {
    period: "[ADICIONAR PERÍODO]",
    title: "[ADICIONAR CARGO]",
    place: "[ADICIONAR EMPRESA]",
    description: "[ADICIONAR DESCRIÇÃO]",
  },
];

export const education: TimelineItem[] = [
  {
    period: "[ADICIONAR PERÍODO]",
    title: "[ADICIONAR FORMAÇÃO]",
    place: "[ADICIONAR INSTITUIÇÃO]",
    description: "[ADICIONAR DESCRIÇÃO]",
  },
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Processos & Operação", items: ["[ADICIONAR ITEM]"] },
  { title: "Dados", items: ["[ADICIONAR ITEM]"] },
  { title: "Tecnologia", items: ["[ADICIONAR ITEM]"] },
  { title: "Web & Design", items: ["[ADICIONAR ITEM]"] },
  { title: "Customer Success", items: ["[ADICIONAR ITEM]"] },
];

export const howIWork = [
  {
    step: "Entender",
    description: "Entendo o cenário, as necessidades e o que precisa ser resolvido.",
  },
  {
    step: "Estruturar",
    description: "Organizo as informações e defino os próximos passos.",
  },
  {
    step: "Desenvolver",
    description: "Transformo ideias em soluções práticas.",
  },
  {
    step: "Feedback",
    description: "Coleto percepções, identifico pontos de melhoria e ajusto a direção.",
  },
  {
    step: "Testar",
    description: "Coloco a solução à prova e verifico se ela funciona como esperado.",
  },
  {
    step: "Melhorar",
    description: "Ajusto detalhes, resolvo problemas e aprimoro a solução.",
  },
  {
    step: "Entregar",
    description:
      "Finalizo a solução, organizo os resultados e deixo tudo pronto para uso.",
  },
  {
    step: "Evoluir",
    description: "Acompanho os resultados e identifico novas oportunidades de melhoria.",
  },
];
