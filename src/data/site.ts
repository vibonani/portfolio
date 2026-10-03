export const siteConfig = {
  name: "Victória Bonani",
  role: "Gosto de entender problemas e transformar ideias em soluções.",
  tagline: "Entre processos, dados, tecnologia e experiências digitais.",
  // [ADICIONAR LINK] — substituir pela URL definitiva quando o domínio estiver definido
  url: "https://www.victoriabonani.com.br",
  description:
    "Portfólio profissional de Victória Bonani: projetos, soluções digitais, processos e experiências para a web.",
  // WhatsApp com DDI + DDD, só dígitos
  whatsapp: "5512991800450",
  whatsappGreeting: "Oi Vic, gostaria de agendar uma call.",
  social: {
    linkedin: "https://www.linkedin.com/in/victoria-bonani/?isSelfProfile=true&locale=pt",
    behance: "https://www.behance.net/victoriabonani",
  },
  // [ADICIONAR LINK] — link do PDF do currículo
  resumeUrl: "[ADICIONAR LINK DO CURRÍCULO]",
} as const;

export const nav = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

// Itens do submenu de "Projetos" — adicionar aqui o que ficará dentro
export const projetosMenu: readonly { label: string; href: string }[] = [
  { label: "Sites & Páginas", href: "/projetos?categoria=sites-paginas" },
  { label: "Dados & Processos", href: "/projetos?categoria=dados-processos" },
  { label: "Soluções internas", href: "/projetos?categoria=solucoes-internas" },
];
