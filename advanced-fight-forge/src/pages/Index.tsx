import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModalitiesSection from "@/components/ModalitiesSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import TeachersSection from "@/components/TeachersSection";
import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ModalitiesSection />
      <SocialProofSection />
      <BenefitsSection />
      <TeachersSection />
      <ScheduleSection />
      <PricingSection />
      <FinalCTASection />
      <footer className="py-6 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © 2026 C.T. Advanced Fighting - Maceió, AL. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;