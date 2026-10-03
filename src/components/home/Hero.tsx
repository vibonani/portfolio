import ScreenSection from "@/components/ui/ScreenSection";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <ScreenSection className="hero-section">
      <div className="mx-auto max-w-4xl px-6 pb-6 pt-28 sm:px-8 sm:py-32">
        <h1 className="font-display text-[clamp(1rem,calc((100vw-3rem)/15),1.75rem)] leading-[1.2] text-foreground sm:text-5xl sm:leading-[1.15] md:text-6xl">
          <span className="block sm:inline">Gosto de entender</span>{" "}
          <span className="block sm:inline">problemas e transformar</span>{" "}
          <span className="block sm:inline">ideias em soluções.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/projetos">Ver projetos</ButtonLink>
          <ButtonLink href="/sobre" variant="secondary">
            Conheça meu trabalho
          </ButtonLink>
        </div>
      </div>
    </ScreenSection>
  );
}
