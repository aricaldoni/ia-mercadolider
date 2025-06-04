
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const SocialProofSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ya estamos ayudando a otros <span className="text-yellow-600">Mercadolíderes</span> como vos.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestras soluciones ya están haciendo la diferencia en e-commerce de la región. 
            Te contamos cómo logramos que reduzcan sus tareas repetitivas y se enfoquen en vender más.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-2xl shadow-xl mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">80%</h3>
                <p className="text-gray-600">Reducción en tiempo de respuesta a consultas</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">3x</h3>
                <p className="text-gray-600">Más tiempo libre para estrategias de venta</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">95%</h3>
                <p className="text-gray-600">De precisión en gestión automatizada de stock</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Dejanos tus datos para que te contemos cómo ayudamos a otros Mercadolíderes a optimizar sus tiempos 
            y dedicarse a lo que mejor saben hacer: vender.</strong>
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitar una reunión sin cargo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
