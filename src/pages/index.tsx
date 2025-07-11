import { CustomerStorySection } from "@/components/customer-story-section/customer-story-section";
import { FeatureSection } from "@/components/feature-section/feature-section";
import { Hero } from "@/components/hero-section/hero-section";
import { SupportSection } from "@/components/support-section/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <Hero />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
      </article>
    </>
  );
}
