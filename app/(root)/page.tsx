import AboutSection from "@/components/about";
import Community from "@/components/community";
import GetStarted from "@/components/get-started";
import Card from "@/components/ui/card";

export default function RootPage() {
  return (
    <div className="md:px-40 md:pt-10 px-8 pt-2">
      <AboutSection />
      <GetStarted />
      <Community />
    </div>
  );
}
