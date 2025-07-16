import { CallToAction } from "@/components/call-to-action/call-to-action";
import { CustomerStorySection } from "./sections/customer-story-section/customer-story-section";
import { FeatureSection } from "./sections/feature-section/feature-section";
import { Hero } from "./sections/hero-section/hero-section";
import { SupportSection } from "./sections/support-section/support-section";


export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
};