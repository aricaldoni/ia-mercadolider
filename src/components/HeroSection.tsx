
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          ¿Cansado de las tareas que te <span className="text-blue-600">quitan tiempo</span>?
          <br />
          <span className="text-green-600">AutomataIA</span> te ayuda a que tu e-commerce vuele.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Automatizá tu operación con Inteligencia Artificial y dedicá tu energía a lo que mejor sabés hacer: 
          <strong className="text-blue-700"> vender en Mercado Libre.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitá una reunión sin cargo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="mt-16">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Persona trabajando eficientemente con tecnología"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
