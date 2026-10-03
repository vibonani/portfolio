import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import HowIWork from "@/components/home/HowIWork";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <HowIWork />
      <CTASection
        title="Tem um projeto em mente?"
        paths={[{ label: "Entrar em contato", href: "/contato" }]}
      />
    </>
  );
}
