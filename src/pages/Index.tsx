import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { InnovationShowcase } from "@/components/home/InnovationShowcase";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { LiveProjectsSection } from "@/components/home/LiveProjectsSection";
import { SmartHomeSection } from "@/components/home/SmartHomeSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AIAssistantSection } from "@/components/home/AIAssistantSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InnovationShowcase />
        <TrustIndicators />
        <LiveProjectsSection />
        <SmartHomeSection />
        <FeaturedProjects />
        <AIAssistantSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
