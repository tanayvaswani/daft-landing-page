"use client";

import AboutSection from "@/components/about";
import Community from "@/components/community";
import GetStarted from "@/components/get-started";
import Integrations from "@/components/integrations";
import MoreResources from "@/components/more-resources";
import UseCases from "@/components/use-cases";

export default function RootPage() {
  return (
    <div className="lg:md:px-60 md:px-80 md:pt-20 px-8 pt-2">
      <AboutSection />
      <GetStarted />
      <Community />
      <MoreResources />
      <Integrations />
      <UseCases />
    </div>
  );
}
