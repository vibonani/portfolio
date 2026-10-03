import PlaceholderMedia from "@/components/ui/PlaceholderMedia";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {images.map((image, index) => (
        <PlaceholderMedia key={`${image}-${index}`} label={image} ratio="landscape" />
      ))}
    </div>
  );
}
