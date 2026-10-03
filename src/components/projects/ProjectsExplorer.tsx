"use client";

import { useState } from "react";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projectCategories, projects, type ProjectSummary } from "@/data/projects";

export default function ProjectsExplorer({
  initialCategory = projectCategories[0].value,
}: {
  initialCategory?: ProjectSummary["category"];
}) {
  const [category, setCategory] = useState<ProjectSummary["category"]>(initialCategory);

  const filtered = projects.filter((p) => p.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar projetos por categoria">
        {projectCategories.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setCategory(item.value)}
            aria-pressed={category === item.value}
            className={`rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
              category === item.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {item.label.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <ProjectGrid
          projects={filtered.map((project) => ({
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
  );
}
