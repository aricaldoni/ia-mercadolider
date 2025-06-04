import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Por favor completá tu nombre y email.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('contact_leads').insert({
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone || null,
        mensaje: formData.message || null
      });
      if (error) {
        console.error('Error inserting contact lead:', error);
        toast({
          title: "Error",
          description: "Error al enviar el formulario. Por favor, intentá de nuevo más tarde.",
          variant: "destructive"
        });
        return;
      }

      // Mostrar mensaje de éxito
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto para programar tu reunión sin cargo."
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "Error al enviar el formulario. Por favor, intentá de nuevo más tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-green-900 text-white">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input name="name" placeholder="Tu nombre *" value={formData.name} onChange={handleInputChange} required disabled={isSubmitting} className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-slate-800" />
              </div>
              
              <div>
                <Input name="email" type="email" placeholder="Tu email *" value={formData.email} onChange={handleInputChange} required disabled={isSubmitting} className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-slate-800" />
              </div>
              
              <div>
                <Input name="phone" type="tel" placeholder="Tu teléfono (opcional)" value={formData.phone} onChange={handleInputChange} disabled={isSubmitting} className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-slate-800" />
              </div>
              
              <div>
                <Textarea name="message" placeholder="¿En qué te podemos ayudar? (opcional)" value={formData.message} onChange={handleInputChange} rows={4} disabled={isSubmitting} className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none min-h-[120px] bg-slate-800" />
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:hover:scale-100">
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-2xl font-bold text-yellow-400 mb-2">
            Automatizá, vendé más, disfrutá tu tiempo.
          </p>
          <p className="text-blue-100">© 2024 AutomataIA - Agencia Argentina de Automatizaciones para E-commerce</p>
        </div>
      </div>
    </section>;
};
export default ContactSection;