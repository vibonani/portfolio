import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem sou eu.",
  alternates: { canonical: "/sobre" },
  openGraph: { title: "Sobre", url: "/sobre" },
};

const intro = [
  "Nem todo problema precisa de uma solução complexa.",
  "Às vezes, o que falta é entender melhor o processo, organizar as informações ou encontrar uma forma mais inteligente de fazer algo que já faz parte da rotina.",
  "É justamente aí que eu gosto de entrar.",
];

const about = [
  "Sou apaixonada por tecnologia, pessoas e por encontrar maneiras melhores de fazer as coisas. Estudo Administração e Análise e Desenvolvimento de Sistemas porque gosto de enxergar os dois lados de um problema: o que o negócio realmente precisa e o que a tecnologia pode fazer para tornar isso possível.",
  "Na prática, já trabalhei com dados, processos, pesquisas, planilhas, CRM, atendimento e desenvolvimento de soluções internas. Também já criei páginas e experiências digitais para diferentes projetos, transformando ideias e necessidades em interfaces que podem ser utilizadas de verdade.",
  "Mais do que organizar informações, gosto de entender o que está por trás delas: onde o processo trava, o que está tomando tempo demais, o que pode ser automatizado e o que poderia funcionar de um jeito mais simples.",
  "Foi assim que comecei a transformar problemas do dia a dia em soluções práticas — desde estruturas de dados e planilhas mais inteligentes até ferramentas, automações, páginas, documentações e melhorias de processos.",
];

const people = [
  "Minha experiência com atendimento me ensinou que uma solução pode funcionar perfeitamente no papel e ainda assim não funcionar para quem precisa utilizá-la.",
  "Por isso, antes de pensar na ferramenta, procuro entender a pessoa, o contexto e o problema.",
];

const motivation = [
  "Pode ser um processo confuso, uma tarefa repetitiva, uma informação difícil de organizar, uma página que precisa sair do papel ou uma ideia que ainda não encontrou a ferramenta certa para acontecer.",
  "Gosto de investigar, organizar, testar e construir até encontrar uma solução que faça sentido de verdade.",
];

const bodyClass = "text-base leading-relaxed text-muted sm:text-lg";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text} className={bodyClass}>
          {text}
        </p>
      ))}
    </>
  );
}

export default function SobrePage() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-10 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
          Transformo problemas em caminhos mais simples.
        </h1>

        <div className="mt-10 space-y-6">
          <Paragraphs items={intro} />

          <h2 className="pt-6 font-display text-2xl text-foreground">Muito prazer, sou Victória.</h2>
          <Paragraphs items={about} />

          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            E existe uma coisa que considero essencial em tudo isso: as pessoas.
          </p>
          <Paragraphs items={people} />

          <h2 className="pt-6 font-display text-2xl text-foreground">O que me move?</h2>
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            A curiosidade de olhar para algo e pensar: “Será que existe uma forma melhor de fazer
            isso?”
          </p>
          <Paragraphs items={motivation} />

          <div className="border-l-2 border-accent pl-5">
            <p className={bodyClass}>
              No fim, meu trabalho não é simplesmente usar tecnologia.
            </p>
            <p className="mt-3 text-lg leading-relaxed text-foreground sm:text-xl">
              É entender o problema primeiro, e então usar dados, processos e tecnologia para
              tornar o caminho mais simples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
