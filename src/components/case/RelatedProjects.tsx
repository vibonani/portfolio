import { projects } from "@/data/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeader from "@/components/ui/SectionHeader";

export default function RelatedProjects({ slugs }: { slugs: string[] }) {
  const related = projects.filter((project) => slugs.includes(project.slug));

  if (related.length === 0) return null;

  return (
    <section className=" bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <SectionHeader title="Projetos relacionados" />
        <div className="mt-10">
          <ProjectGrid
            projects={related.map((project) => ({
              title: project.title,
              description: project.description,
              categoryLabel: project.categoryLabel,
              image: project.image,
              tags: project.tags,
              href: project.href,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
