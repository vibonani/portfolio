import ScreenSection from "@/components/ui/ScreenSection";
import SectionHeader from "@/components/ui/SectionHeader";
import HowIWorkCarousel from "@/components/home/HowIWorkCarousel";
import { howIWork } from "@/data/about";

export default function HowIWork() {
  return (
    <ScreenSection>
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
        <SectionHeader
          align="center"
          eyebrow="Como eu trabalho"
          title="Gosto de entender como uma situação funciona antes de pensar na ferramenta."
        />
        <HowIWorkCarousel items={howIWork} />
      </div>
    </ScreenSection>
  );
}
