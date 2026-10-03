import Link from "next/link";
import { nav, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className=" bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg text-foreground">
              <Link href="/" className="transition-colors hover:text-accent">
                {siteConfig.name.toUpperCase()}
              </Link>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Projetos, soluções digitais e experiências para a web.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Navegação
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Redes
            </p>
            <a target="_blank" rel="noopener noreferrer" href={siteConfig.social.linkedin} className="text-sm text-foreground hover:text-accent">
              LinkedIn
            </a>
            <a target="_blank" rel="noopener noreferrer" href={siteConfig.social.behance} className="text-sm text-foreground hover:text-accent">
              Behance
            </a>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
