import { FeatureSection } from "@/components/feature-section/feature-section";
import { Hero } from "@/components/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <Hero />
        <FeatureSection />
      </article>
    </>
  );
}
