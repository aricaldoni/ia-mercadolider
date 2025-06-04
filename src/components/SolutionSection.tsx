
import { Button } from "@/components/ui/button";
import { Bot, Package, FileText, BarChart3, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Respuestas Automáticas",
      description: "Preguntas frecuentes de Mercado Libre: ¡que la IA las responda por vos, al toque!"
    },
    {
      icon: Package,
      title: "Gestión de Stock",
      description: "Control de inventario al día: que tu sistema hable solo con tus proveedores."
    },
    {
      icon: FileText,
      title: "Publicaciones Optimizadas",
      description: "Publicaciones que venden: la IA te ayuda a armar descripciones que atraen."
    },
    {
      icon: BarChart3,
      title: "Informes y Análisis",
      description: "Números claros: que la IA te muestre dónde estás ganando y dónde mejorar."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Así es como la IA te da una mano, <span className="text-green-600">sin complicaciones.</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No hablamos de robots de películas, sino de herramientas inteligentes que aprenden de tu forma de trabajar 
            para simplificar lo complejo. Te ayudamos a implementar soluciones de IA que se integran con tu operación actual, 
            <strong className="text-blue-700"> sin dolores de cabeza.</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quiero que mi e-commerce funcione en 'piloto automático'
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
