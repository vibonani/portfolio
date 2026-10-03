"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Item {
  step: string;
  description: string;
}

// Distância entre cards vizinhos (corda do anel), mantida igual à do layout original de 5 cards
const CARD_SPACING = 2 * 280 * Math.sin(Math.PI / 5);
// Mobile: cards menores, com os vizinhos aparecendo dos lados
const MOBILE_QUERY = "(max-width: 639px)";
const MOBILE_CARD_SPACING = 220;
// Tempo, em segundos, para passar um card enquanto o anel gira sozinho
const SECONDS_PER_CARD = 10;
// Quantos pixels de arrasto equivalem a passar um card
const DRAG_PX_PER_CARD = 320;

export default function HowIWorkCarousel({ items }: { items: Item[] }) {
  const count = items.length;
  const step = 360 / count;
  const [compact, setCompact] = useState(false);
  const RADIUS =
    (compact ? MOBILE_CARD_SPACING : CARD_SPACING) / (2 * Math.sin(Math.PI / count));

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  // A rotação vive em refs e é aplicada direto no DOM (sem re-render do React a cada frame),
  // para a rolagem da página não travar enquanto o anel gira.
  const rotationRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const draggingRef = useRef(false);
  const inViewRef = useRef(false);
  const dragStart = useRef({ x: 0, rotation: 0 });
  const [dragging, setDragging] = useState(false);

  const apply = useCallback(
    (rotation: number) => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const angle = (index - rotation) * step;
        const front = (Math.cos((angle * Math.PI) / 180) + 1) / 2; // 1 = frente, 0 = atrás
        card.style.transform = `translate(-50%, -50%) translateZ(${-RADIUS}px) rotateY(${angle}deg) translateZ(${RADIUS}px)`;
        card.style.opacity = String(Math.pow(front, 1.2));
        card.style.zIndex = String(Math.round(front * 10));
        card.style.pointerEvents = front < 0.3 ? "none" : "auto";
        if (front < 0.5) card.setAttribute("aria-hidden", "true");
        else card.removeAttribute("aria-hidden");
      });
    },
    [step, RADIUS],
  );

  useEffect(() => {
    apply(rotationRef.current);

    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    observer.observe(container);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000;
      last = now;
      // Só anima quando o anel está na tela e ninguém está arrastando
      if (inViewRef.current && !draggingRef.current && !reduceMotion) {
        rotationRef.current += dt / SECONDS_PER_CARD;
        apply(rotationRef.current);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [apply]);

  // Segurar e arrastar com o mouse (ou dedo) gira o anel manualmente; ao soltar, ele volta a girar
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragStart.current = { x: e.clientX, rotation: rotationRef.current };
    draggingRef.current = true;
    setDragging(true);

    const onMove = (ev: PointerEvent) => {
      const dx = ev.clientX - dragStart.current.x;
      rotationRef.current =
        dragStart.current.rotation - dx / (compact ? DRAG_PX_PER_CARD * 0.6 : DRAG_PX_PER_CARD);
      apply(rotationRef.current);
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      draggingRef.current = false;
      setDragging(false);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  return (
    <div className="mt-11 sm:mt-8">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        className={`relative mx-auto w-full select-none overflow-hidden ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ perspective: "1400px", height: compact ? "17rem" : "25rem", touchAction: "pan-y" }}
      >
        {items.map((item, index) => (
          <div
            key={item.step}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="absolute left-1/2 top-1/2 flex flex-col rounded-2xl border border-border bg-surface/95 p-4 text-left shadow-xl will-change-transform sm:p-6"
            style={
              compact
                ? { width: "min(11.5rem, 52vw)", height: "14.5rem" }
                : { width: "min(20rem, 70vw)", height: "22rem" }
            }
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-base text-accent-foreground sm:h-11 sm:w-11 sm:text-lg">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl text-foreground sm:mt-6 sm:text-2xl">
              {item.step}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
