import ScreenSection from "@/components/ui/ScreenSection";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const highlights = [
  {
    title: "Projetos",
    description: [
      "Projetos que transformam problemas,",
      "ideias e necessidades",
      "em soluções funcionais.",
    ],
    href: "/projetos",
  },
  {
    title: "Sobre mim",
    description: [
      "Tecnologia, processos, experiências digitais",
      "e uma trajetória construída",
      "a partir da resolução de problemas.",
    ],
    href: "/sobre",
  },
];

export default function Highlights() {
  return (
    <ScreenSection>
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:-mt-5 sm:px-8 sm:pb-[11rem] sm:pt-4">
        <div className="grid grid-cols-1 gap-12">
          {highlights.map((item, index) => (
            <Reveal key={item.href} delay={index * 80}>
              <Link href={item.href} className="group block">
                <h3 className="font-display text-xl text-foreground group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {/* Texto corrido, igual no mobile e no desktop */}
                  {item.description.map((line) => (
                    <span key={line}>
                      {line}{" "}
                    </span>
                  ))}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Ver mais →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </ScreenSection>
  );
}
