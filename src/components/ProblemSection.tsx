
import { Clock, Package, MessageSquare, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    { icon: MessageSquare, text: "Responder preguntas" },
    { icon: Package, text: "Gestionar stock" },
    { icon: TrendingUp, text: "Actualizar publicaciones" },
    { icon: Clock, text: "Procesar pedidos" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Sabemos que ser <span className="text-yellow-600">Mercadolíder</span> es un laburo a toda máquina.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Gestionar stock, responder preguntas, procesar pedidos, actualizar publicaciones... el día a día te come 
            y no te deja tiempo para pensar estratégicamente. 
            <strong className="text-blue-700"> ¿Y si te dijéramos que muchas de esas tareas repetitivas se pueden hacer solas?</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <problem.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-2xl text-gray-700 font-semibold">
            Todo esto consume tu tiempo más valioso: <span className="text-red-600">el tiempo para vender</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
