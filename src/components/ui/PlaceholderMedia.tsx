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
