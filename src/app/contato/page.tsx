import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale sobre oportunidades profissionais ou projetos freelance.",
  alternates: { canonical: "/contato" },
  openGraph: { title: "Contato", url: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-10 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl text-foreground sm:text-5xl">Contato</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Está procurando alguém para fazer parte do seu time ou tem um projeto em mente?
        Escolha o caminho que fizer mais sentido e me mande uma mensagem.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-14 sm:grid-cols-[1fr_1fr]">
        <ContactForm />

        <div className="space-y-6 pt-8 sm:pt-0 sm:pl-14">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              WhatsApp
            </p>
            <a target="_blank" rel="noopener noreferrer"
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappGreeting)}`}
              className="mt-1 block text-base text-foreground hover:text-accent"
            >
              (12) 99180-0450
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              LinkedIn
            </p>
            <a target="_blank" rel="noopener noreferrer"
              href={siteConfig.social.linkedin}
              className="mt-1 block text-base text-foreground hover:text-accent"
            >
              victoria-bonani
            </a>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Behance
            </p>
            <a target="_blank" rel="noopener noreferrer"
              href={siteConfig.social.behance}
              className="mt-1 block text-base text-foreground hover:text-accent"
            >
              victoriabonani
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
