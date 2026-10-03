import ProjectCard, { type ProjectCardProps } from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";

export default function ProjectGrid({ projects }: { projects: ProjectCardProps[] }) {
  if (projects.length === 0) {
    return (
      <p className="text-sm text-muted">Nenhum projeto encontrado nesta categoria.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.href} delay={index * 80}>
          <ProjectCard {...project} />
        </Reveal>
      ))}
    </div>
  );
}
