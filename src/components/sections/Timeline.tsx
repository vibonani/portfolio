import type { TimelineItem } from "@/data/about";
import Reveal from "@/components/ui/Reveal";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-8 pl-6">
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${index}`} delay={index * 60}>
          <li>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-lg text-foreground">{item.title}</h3>
            <p className="text-sm text-muted">{item.place}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
