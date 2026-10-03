"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, projetosMenu, siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let lastY = window.scrollY;
    // Distância acumulada na direção atual: no celular a rolagem chega em passos de poucos px,
    // então comparar só com o evento anterior nunca atingia o limite e o menu não sumia.
    let travel = 0;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      lastY = y;
      if (y < 80) {
        travel = 0;
        setHidden(false);
        return;
      }
      if (delta === 0) return;
      // Mudou de direção: recomeça a contagem
      if ((delta > 0) !== (travel > 0)) travel = 0;
      travel += delta;
      if (travel > 12) setHidden(true);
      else if (travel < -12) setHidden(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/90 backdrop-blur transition-transform duration-300 ${
        hidden && !open ? "-translate-y-[101%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
            setMobileSubOpen(false);
            // Já na página inicial: o link não navega, então volta ao topo
            if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-lg font-medium tracking-wide text-foreground"
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (item.href === "/projetos") {
              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseLeave={() => setSubOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={subOpen}
                    aria-haspopup="true"
                    onClick={() => setSubOpen((v) => !v)}
                    onMouseEnter={() => setSubOpen(true)}
                    className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent ${
                      active || subOpen ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {item.label.toUpperCase()}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${subOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4.5 6 8.5 10 4.5" />
                    </svg>
                  </button>
                  {subOpen && (
                    <div className="absolute left-0 top-full z-50 pt-3">
                      <ul className="min-w-56 border border-border bg-background py-1 shadow-lg">
                        {projetosMenu.map((sub, i) => (
                          <li key={sub.href} className={i > 0 ? "border-t border-border" : ""}>
                            <Link
                              href={sub.href}
                              onClick={() => setSubOpen(false)}
                              className="block px-4 py-3 text-sm text-muted transition-colors hover:text-accent"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent ${
                  active ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-200 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-200 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação mobile"
        className={`overflow-hidden bg-background transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item) => {
            if (item.href === "/projetos") {
              return (
                <div key={item.href}>
                  <button
                    type="button"
                    aria-expanded={mobileSubOpen}
                    aria-controls="submenu-mobile-projetos"
                    onClick={() => setMobileSubOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-md px-2 py-3 text-base font-medium text-foreground hover:text-accent"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${mobileSubOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 4.5 6 8.5 10 4.5" />
                    </svg>
                  </button>
                  {mobileSubOpen && (
                    <ul id="submenu-mobile-projetos" className="mb-1 ml-2 border-l border-border">
                      {projetosMenu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileSubOpen(false);
                            }}
                            className="block px-4 py-2.5 text-sm text-muted transition-colors hover:text-accent"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
