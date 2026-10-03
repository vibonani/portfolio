import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import WebProjectCard from "@/components/web/WebProjectCard";
import CTASection from "@/components/sections/CTASection";
import { webProjects, freelanceServices } from "@/data/webProjects";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Web & Design",
  description: "Sites e landing pages para profissionais e negócios.",
  alternates: { canonical: "/web" },
  openGraph: { title: "Web & Design", url: "/web" },
};

export default function WebPage() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">
            Web &amp; Design
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            Sites e landing pages para profissionais e negócios.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-14 sm:grid-cols-2">
            {webProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <WebProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <h2 className="font-display text-3xl text-foreground">
            Também desenvolvo páginas para negócios.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Se você precisa apresentar seu serviço, divulgar seu trabalho ou criar uma
            página para captar contatos, posso desenvolver uma solução sob medida.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {freelanceServices.map((service) => (
              <Tag key={service}>{service}</Tag>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Falar sobre um projeto"
        paths={[{ label: "Falar sobre um projeto", href: "/contato" }]}
      />
    </>
  );
}
