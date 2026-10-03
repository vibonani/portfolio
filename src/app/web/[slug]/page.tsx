import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseHero from "@/components/case/CaseHero";
import ImageGallery from "@/components/case/ImageGallery";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { ButtonLink } from "@/components/ui/Button";
import WebProjectCard from "@/components/web/WebProjectCard";
import { webProjects } from "@/data/webProjects";

export function generateStaticParams() {
  return webProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/web/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = webProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/web/${project.slug}` },
    openGraph: { title: project.title, url: `/web/${project.slug}` },
  };
}

export default async function WebProjectPage({ params }: PageProps<"/web/[slug]">) {
  const { slug } = await params;
  const project = webProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const ecosystemProjects = project.ecosystem
    ? webProjects.filter((p) => p.ecosystem === project.ecosystem && p.slug !== slug)
    : [];

  return (
    <>
      <CaseHero
        eyebrow="Web & Design"
        title={project.title}
        subtitle={project.description}
        tags={project.tags}
      />

      <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8">
        <PlaceholderMedia label={project.mainImage} ratio="wide" />

        <section className="mt-12 pb-12">
          <h2 className="font-display text-2xl text-foreground">Objetivo</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {project.objective}
          </p>
        </section>

        <section className="mt-12 pb-12">
          <h2 className="font-display text-2xl text-foreground">Ferramentas</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {project.tools.join(", ")}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-foreground">Galeria</h2>
          <div className="mt-6">
            <ImageGallery images={project.gallery} />
          </div>
        </section>

        {project.externalUrl && (
          <div className="mt-12">
            <ButtonLink href={project.externalUrl}>Visitar site</ButtonLink>
          </div>
        )}
      </div>

      {ecosystemProjects.length > 0 && (
        <section className=" bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
            <h2 className="font-display text-3xl text-foreground">
              Mais deste ecossistema
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
              {ecosystemProjects.map((p) => (
                <WebProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
