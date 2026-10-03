import type { SkillGroup as SkillGroupData } from "@/data/about";
import Tag from "@/components/ui/Tag";

export default function SkillGroup({ title, items }: SkillGroupData) {
  return (
    <div>
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}
