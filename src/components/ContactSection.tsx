
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Zap } from "lucide-react";
import { validateContactForm, type ContactFormData, type ValidationError } from "@/utils/validation";
import { sanitizeHtml, rateLimiter } from "@/utils/security";

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Basic input length validation on change
    let sanitizedValue = value;
    
    if (name === 'name' && value.length > 100) {
      sanitizedValue = value.substring(0, 100);
    } else if (name === 'email' && value.length > 254) {
      sanitizedValue = value.substring(0, 254);
    } else if (name === 'phone' && value.length > 20) {
      sanitizedValue = value.substring(0, 20);
    } else if (name === 'message' && value.length > 2000) {
      sanitizedValue = value.substring(0, 2000);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    // Rate limiting check
    const clientId = 'contact_form'; // In a real app, you'd use IP or user ID
    if (!rateLimiter.isAllowed(clientId, 3, 300000)) { // 3 attempts per 5 minutes
      toast({
        title: "Demasiados intentos",
        description: "Por favor esperá unos minutos antes de enviar otro mensaje.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setFieldErrors({});
    
    try {
      // Validate form data
      const validation = validateContactForm(formData);
      
      if (!validation.isValid) {
        const errors: Record<string, string> = {};
        validation.errors.forEach((error: ValidationError) => {
          errors[error.field] = error.message;
        });
        setFieldErrors(errors);
        
        toast({
          title: "Error en el formulario",
          description: "Por favor corregí los errores indicados.",
          variant: "destructive",
        });
        return;
      }

      // Use sanitized data for logging/processing
      const sanitizedData = validation.sanitizedData!;
      
      console.log('Formulario validado y sanitizado:', {
        name: sanitizeHtml(sanitizedData.name),
        email: sanitizedData.email,
        phone: sanitizedData.phone ? sanitizeHtml(sanitizedData.phone) : undefined,
        message: sanitizedData.message ? sanitizeHtml(sanitizedData.message) : undefined,
        timestamp: new Date().toISOString()
      });
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto para programar tu reunión sin cargo.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor intentá nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-green-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para llevar tu e-commerce al <span className="text-yellow-400">próximo nivel</span>?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Completá el formulario y charlemos sobre cómo podemos automatizar tu negocio para que tengas más tiempo libre y vendas más.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Especialistas en e-commerce argentino y Mercado Libre</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Implementación rápida y sin complicaciones técnicas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>Soporte continuo y optimización constante</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>ROI comprobado desde el primer mes</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span>contacto@automataIA.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-yellow-400" />
                <span>+54 11 1234-5678</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <Input
                  name="name"
                  placeholder="Tu nombre *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-4 text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    fieldErrors.name 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                  required
                  maxLength={100}
                  aria-describedby={fieldErrors.name ? "name-error" : undefined}
                />
                {fieldErrors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Tu email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    fieldErrors.email 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                  required
                  maxLength={254}
                  aria-describedby={fieldErrors.email ? "email-error" : undefined}
                />
                {fieldErrors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Tu teléfono (opcional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-4 text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    fieldErrors.phone 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                  maxLength={20}
                  aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                />
                {fieldErrors.phone && (
                  <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="¿En qué te podemos ayudar? (opcional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full p-4 text-lg border-2 rounded-lg focus:outline-none transition-colors ${
                    fieldErrors.message 
                      ? 'border-red-500 focus:border-red-600' 
                      : 'border-gray-300 focus:border-blue-600'
                  }`}
                  rows={4}
                  maxLength={2000}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-2xl font-bold text-yellow-400 mb-2">
            Automatizá, vendé más, disfrutá tu tiempo.
          </p>
          <p className="text-blue-100">
            © {new Date().getFullYear()} AutomataIA - Agencia de Automatizaciones para E-commerce
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
