"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScreenSectionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Seção em tela cheia que fica invisível enquanto não está em foco
 * e aparece com um efeito (fade + slide) ao entrar na tela.
 * `data-side` indica se ela saiu por cima ou por baixo, para a transição seguir a direção da rolagem.
 */
export default function ScreenSection({ children, className = "" }: ScreenSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  // De que lado a seção está em relação à tela: define a direção da transição (rolar para baixo ou para cima)
  const [side, setSide] = useState<"above" | "below">("below");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setSide(entry.boundingClientRect.top < 0 ? "above" : "below");
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`screen-section ${className}`}
      data-visible={visible}
      data-side={side}
    >
      {children}
    </section>
  );
}
