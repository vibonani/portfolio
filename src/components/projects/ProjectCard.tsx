import Link from "next/link";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Tag from "@/components/ui/Tag";

export interface ProjectCardProps {
  title: string;
  description: string;
  categoryLabel: string;
  image: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({
  title,
  description,
  categoryLabel,
  image,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <PlaceholderMedia
        label={image}
        className="transition-transform duration-500 group-hover:-translate-y-1"
      />
      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-accent">
        {categoryLabel}
      </p>
      <h3 className="mt-2 font-display text-xl text-foreground group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
