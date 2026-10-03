import Image from "next/image";

interface PlaceholderMediaProps {
  label?: string;
  className?: string;
  ratio?: "landscape" | "portrait" | "square" | "wide";
}

const ratios: Record<Required<PlaceholderMediaProps>["ratio"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export default function PlaceholderMedia({
  label = "[ADICIONAR IMAGEM]",
  className = "",
  ratio = "landscape",
}: PlaceholderMediaProps) {
  // Caminho de arquivo em /public (ex.: "/projetos/foto.png"): mostra a imagem real
  if (label.startsWith("/")) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-border bg-surface ${ratios[ratio]} ${className}`}
      >
        <Image
          src={label}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-border bg-surface text-center ${ratios[ratio]} ${className}`}
    >
      <span className="px-4 text-xs font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}
