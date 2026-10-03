import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Reveal from "@/components/ui/Reveal";

interface CaseSectionProps {
  heading: string;
  body: string;
}

export default function CaseSection({ heading, body }: CaseSectionProps) {
  const isMedia = body === "[ADICIONAR IMAGEM]";

  return (
    <Reveal>
      <section className=" py-12">
        <h2 className="font-display text-2xl text-foreground">{heading}</h2>
        {isMedia ? (
          <PlaceholderMedia ratio="wide" className="mt-6" />
        ) : (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{body}</p>
        )}
      </section>
    </Reveal>
  );
}
