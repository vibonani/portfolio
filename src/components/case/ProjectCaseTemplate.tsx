import CaseHero from "@/components/case/CaseHero";
import CaseSection from "@/components/case/CaseSection";
import PrivacyNotice from "@/components/case/PrivacyNotice";
import RelatedProjects from "@/components/case/RelatedProjects";
import Tag from "@/components/ui/Tag";
import type { ProjectCase } from "@/data/projects";

export default function ProjectCaseTemplate({ projectCase }: { projectCase: ProjectCase }) {
  return (
    <>
      <CaseHero
        eyebrow={projectCase.categoryLabel}
        title={projectCase.title}
        subtitle={projectCase.subtitle}
        tags={projectCase.tags}
      />

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        {projectCase.isInternal && projectCase.privacyNotice && (
          <div className="py-12">
            <PrivacyNotice {...projectCase.privacyNotice} />
          </div>
        )}

        {projectCase.sections.map((section) => (
          <CaseSection key={section.heading} {...section} />
        ))}

        <section className="py-12">
          <h2 className="font-display text-2xl text-foreground">
            Tecnologias/ferramentas
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {projectCase.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        </section>

        {projectCase.isInternal && projectCase.privacyNotice && (
          <section className="py-12">
            <h2 className="font-display text-2xl text-foreground">Privacidade</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {projectCase.privacyNotice.body}
            </p>
          </section>
        )}
      </div>

      <RelatedProjects slugs={projectCase.relatedSlugs} />
    </>
  );
}
