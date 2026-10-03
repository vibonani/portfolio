import Link from "next/link";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Tag from "@/components/ui/Tag";
import type { WebProject } from "@/data/webProjects";

export default function WebProjectCard({ project }: { project: WebProject }) {
  return (
    <Link href={`/web/${project.slug}`} className="group block">
      <PlaceholderMedia
        label={project.mainImage}
        ratio="wide"
        className="transition-transform duration-500 group-hover:-translate-y-1"
      />
      <h3 className="mt-5 font-display text-xl text-foreground group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
