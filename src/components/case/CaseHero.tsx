import Tag from "@/components/ui/Tag";

interface CaseHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags: string[];
}

export default function CaseHero({ eyebrow, title, subtitle, tags }: CaseHeroProps) {
  return (
    <section className=" bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
