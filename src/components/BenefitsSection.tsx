
import { Button } from "@/components/ui/button";
import { Clock, Users, Target, TrendingUp, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorrar tiempo valioso",
      description: "Liberate de lo repetitivo y dedicá tu energía a crecer."
    },
    {
      icon: Users,
      title: "Mejorar la atención al cliente",
      description: "Respuestas rápidas y precisas, 24/7."
    },
    {
      icon: Target,
      title: "Reducir errores humanos",
      description: "Menos equivocaciones, más eficiencia en cada proceso."
    },
    {
      icon: TrendingUp,
      title: "Escalar sin sumar personal",
      description: "Preparate para el crecimiento sin que te explote la cabeza."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Menos tareas, más ventas. <span className="text-blue-600">La ecuación es simple.</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Al automatizar con Inteligencia Artificial, vas a...
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-green-600 p-3 rounded-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Empezar a optimizar mi tiempo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
