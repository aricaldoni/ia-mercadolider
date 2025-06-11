
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-green-400">IA Mercadolíder</h3>
            <p className="text-gray-300">Automatización con IA para E-commerce</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-300 mr-4">Síguenos en:</p>
            
            <a 
              href="https://x.com/IaMercadolider" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Síguenos en X (anteriormente Twitter)"
              className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter size={30} />
            </a>
            
            <a 
              href="https://linkedin.com/company/ia-mercadolider" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Conéctate con nosotros en LinkedIn"
              className="hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 IA Mercadolíder. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
