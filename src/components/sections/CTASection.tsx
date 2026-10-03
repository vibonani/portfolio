import ScreenSection from "@/components/ui/ScreenSection";
import { ButtonLink } from "@/components/ui/Button";

interface CTAPath {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description?: string;
  paths: CTAPath[];
}

export default function CTASection({ title, description, paths }: CTASectionProps) {
  return (
    <ScreenSection>
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 sm:py-24">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {paths.map((path, index) => (
            <ButtonLink
              key={path.href}
              href={path.href}
              variant={index === 0 ? "primary" : "secondary"}
            >
              {path.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </ScreenSection>
  );
}
