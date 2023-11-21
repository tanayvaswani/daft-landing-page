"use client";

import AboutSection from "@/components/about";
import Community from "@/components/community";
import GetStarted from "@/components/get-started";
import MoreResources from "@/components/more-resources";

export default function RootPage() {
  return (
    <div className="md:px-80 md:pt-20 px-8 pt-2">
      <AboutSection />
      <GetStarted />
      <Community />
      <MoreResources />
    </div>
  );
}
