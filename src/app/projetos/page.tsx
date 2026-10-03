import type { Metadata } from "next";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Soluções digitais, ferramentas internas e projetos desenvolvidos para resolver problemas específicos.",
  alternates: { canonical: "/projetos" },
  openGraph: { title: "Projetos", url: "/projetos" },
};

export default async function ProjetosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { categoria } = await searchParams;
  const initialCategory =
    projectCategories.find((c) => c.value === categoria)?.value ?? projectCategories[0].value;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <h1 className="font-display text-4xl text-foreground sm:text-5xl">Projetos</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Soluções digitais, ferramentas internas e projetos desenvolvidos para resolver
        problemas específicos.
      </p>

      <div className="mt-12">
        <ProjectsExplorer key={initialCategory} initialCategory={initialCategory} />
      </div>
    </section>
  );
}
