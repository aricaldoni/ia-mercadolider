
import StickyNavigation from "../components/StickyNavigation";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import SchemaMarkup from "../components/SchemaMarkup";

const Index = () => {
  return (
    <>
      <SchemaMarkup />
      <div className="min-h-screen bg-white">
        <StickyNavigation />
        
        {/* Add top padding to account for sticky navigation */}
        <div className="pt-20">
          <HeroSection />
          <ProblemSection />
          
          <section id="soluciones">
            <SolutionSection />
          </section>
          
          <section id="beneficios">
            <BenefitsSection />
          </section>
          
          <section id="casos-exito">
            <SocialProofSection />
          </section>
          
          <FAQSection />
          
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Index;
