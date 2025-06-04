
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import BenefitsSection from "../components/BenefitsSection";
import SocialProofSection from "../components/SocialProofSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Security headers via meta tags */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://images.unsplash.com data:; font-src 'self'; connect-src 'self';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="AutomataIA - Automatizaciones para e-commerce con Inteligencia Artificial. Optimizá tu tiempo y mejorá tus ventas en Mercado Libre." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <SocialProofSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
