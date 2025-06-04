
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <SocialProofSection />
      <ContactSection />
    </div>
  );
};

export default Index;
