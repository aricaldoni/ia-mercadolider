
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqsES = [
    {
      question: "¿Cómo se asegura la IA de mantener la calidad de mis respuestas en Mercado Libre, evitando respuestas robóticas?",
      answer: "Nuestra IA se entrena específicamente con el tono de voz y estilo de comunicación de tu marca. No utilizamos respuestas genéricas predefinidas, sino que la IA aprende de tus interacciones previas exitosas y se adapta al contexto específico de cada consulta. Implementamos un sistema de aprendizaje continuo que analiza la efectividad de las respuestas y las mejora constantemente. Además, ofrecemos supervisión humana opcional para casos complejos y una configuración inicial donde definimos juntos el tono, estilo y límites de respuesta que mejor representen a tu negocio."
    },
    {
      question: "¿La IA de gestión de stock puede predecir qué productos necesito reponer antes de que se agoten, basándose en tendencias estacionales y eventos especiales?",
      answer: "Absolutamente. Nuestro sistema de IA analiza múltiples variables: datos históricos de ventas, patrones estacionales, tendencias del mercado, promociones planificadas y eventos externos como días especiales o cambios económicos. La IA genera pronósticos precisos de demanda y puede automatizar alertas de reabastecimiento e incluso generar órdenes de compra automáticas cuando configures proveedores. El sistema aprende constantemente de los resultados reales vs. predicciones para mejorar su precisión, y te permite ajustar manualmente los parámetros según tu experiencia y conocimiento del negocio."
    },
    {
      question: "¿Mi equipo necesita conocimientos de programación para usar sus soluciones de IA?",
      answer: "Para nada. Nuestras soluciones están diseñadas con una filosofía 'plug-and-play' completamente amigable para usuarios sin conocimientos técnicos. Nosotros nos encargamos de toda la implementación, configuración inicial e integración con tus sistemas actuales. Tu equipo solo necesita usar interfaces intuitivas y dashboards simples. Proporcionamos capacitación completa durante la implementación y soporte continuo. La idea es que te enfoques en vender y hacer crecer tu negocio, mientras nosotros manejamos toda la complejidad técnica detrás de escena."
    },
    {
      question: "¿Qué medidas de seguridad implementan para proteger los datos de mis clientes y mi información de ventas?",
      answer: "La seguridad es nuestra máxima prioridad. Implementamos encriptación de datos de extremo a extremo, tanto en tránsito como en reposo. Cumplimos con estándares internacionales de seguridad como ISO 27001 y normativas locales de protección de datos. Utilizamos servidores seguros con acceso restringido y autenticación multifactor. Nunca vendemos, compartimos o utilizamos tus datos para otros propósitos que no sean brindar el servicio contratado. Realizamos auditorías de seguridad regulares y mantenemos backups encriptados. Además, firmamos acuerdos de confidencialidad y te proporcionamos un informe detallado de nuestras medidas de seguridad."
    },
    {
      question: "¿Cuál es el proceso de implementación típico de una solución de automatización IA para un Mercadolíder?",
      answer: "Nuestro proceso es estructurado y transparente: 1) Consulta y diagnóstico sin cargo (1-2 días) donde analizamos tu negocio actual, identificamos oportunidades y definimos objetivos. 2) Propuesta personalizada detallada con cronograma y métricas de éxito específicas. 3) Implementación y configuración técnica (1-4 semanas según complejidad) donde integramos la IA con tus sistemas sin interrumpir operaciones. 4) Capacitación completa de tu equipo y período de prueba supervisada. 5) Lanzamiento oficial con monitoreo intensivo las primeras semanas. 6) Optimización continua basada en resultados reales y feedback. Durante todo el proceso mantienes control total y visibilidad del progreso."
    },
    {
      question: "¿Cuánto tiempo tarda la implementación de una solución de IA?",
      answer: "Los tiempos varían según la complejidad de tu operación actual: Para automatización básica (respuestas automáticas y gestión simple de stock): 2-3 semanas. Para integraciones intermedias (múltiples canales, sistemas de gestión existentes): 4-6 semanas. Para implementaciones complejas (múltiples sucursales, integraciones ERP avanzadas, personalización profunda): 6-8 semanas. Lo importante es que durante la implementación tu negocio sigue operando normalmente. Trabajamos en fases, priorizando las automatizaciones de mayor impacto primero, para que empieces a ver beneficios rápidamente mientras completamos el resto del sistema."
    },
    {
      question: "¿Es seguro para mis datos el uso de IA?",
      answer: "Completamente seguro. Nuestros sistemas están diseñados con 'privacidad por diseño'. Tus datos permanecen siempre bajo tu control y propiedad. No entrenamos modelos globales con tu información, no la compartimos con terceros, y no la utilizamos para beneficio de otros clientes. Implementamos aislamiento de datos por cliente, encriptación avanzada y acceso basado en roles. Cumplimos con todas las normativas de protección de datos aplicables. Además, puedes solicitar la exportación o eliminación completa de tus datos en cualquier momento. La IA procesa tu información localmente dentro de tu entorno seguro, sin exponerla a riesgos externos."
    },
    {
      question: "¿Cuánto cuesta la automatización con IA vs. el ahorro que genera?",
      answer: "La automatización con IA es una inversión que se paga sola rápidamente. Típicamente vemos ROI positivo desde el primer mes debido a: reducción de 60-80% en tiempo dedicado a tareas repetitivas, disminución de errores costosos, aumento de 15-30% en tasa de conversión por respuestas más rápidas y precisas, y optimización de inventario que reduce costos de almacenamiento. El costo mensual suele representar menos del 5% del aumento en facturación que genera. Ofrecemos modelos flexibles: desde planes básicos para emprendedores hasta soluciones enterprise. Te invitamos a una reunión sin cargo donde calculamos el ROI específico para tu negocio basado en tus números reales."
    },
    {
      question: "¿Cómo se integra la IA con mis sistemas actuales (ej. un ERP o gestor de ventas)?",
      answer: "Nuestras soluciones están diseñadas para integrarse seamlessly con los sistemas más populares del mercado: MercadoLibre, Shopify, WooCommerce, Magento, y ERPs como SAP, Odoo, Exact, y muchos otros. Utilizamos APIs estándar y conectores nativos que minimizan interrupciones. Si usas un sistema menos común, desarrollamos conectores personalizados. El proceso incluye: 1) Mapeo de tus sistemas actuales, 2) Desarrollo de integraciones específicas, 3) Pruebas exhaustivas en ambiente controlado, 4) Migración gradual sin downtime. Mantenemos tus workflows existentes y solo agregamos las automatizaciones donde generan valor, sin forzar cambios en procesos que ya funcionan bien."
    },
    {
      question: "¿Qué pasa si mi negocio crece o mis necesidades cambian?",
      answer: "Nuestras soluciones están diseñadas para escalar y evolucionar contigo. La arquitectura modular permite agregar nuevas funcionalidades, integrar nuevos canales de venta, manejar mayor volumen de transacciones y adaptarse a cambios en tu modelo de negocio. Si expandes a nuevas categorías de productos, países o canales, la IA se adapta y aprende los nuevos patrones. Ofrecemos planes de crecimiento que se ajustan automáticamente a tu volumen, y revisiones trimestrales donde evaluamos oportunidades de optimización y expansión. No te quedas 'atrapado' en una solución rígida - la IA evoluciona tan dinámicamente como tu negocio."
    },
    {
      question: "¿La IA me reemplaza o me complementa como Mercadolíder?",
      answer: "La IA es tu aliada estratégica, no tu reemplazo. Su función es liberarte de las tareas repetitivas y operativas para que puedas enfocarte en lo que realmente agrega valor: estrategia de crecimiento, desarrollo de nuevos productos, negociación con proveedores, análisis de mercado y construcción de relaciones. La IA maneja las consultas rutinarias, actualiza inventarios y optimiza publicaciones, mientras tú tomas las decisiones importantes del negocio. Es como tener un asistente super eficiente 24/7 que nunca se cansa, pero que siempre necesita tu visión, creatividad y experiencia humana para dirigir el rumbo del negocio hacia el éxito."
    }
  ];

  const faqsEN = [
    {
      question: "How does Artificial Intelligence automation directly boost my ROI and justify the investment for a growing e-commerce business?",
      answer: "Our automation solutions significantly cut operational costs by eliminating repetitive tasks (e.g., manual stock checks, repetitive customer inquiries) and reducing human error. This leads to substantial time savings for your team, allowing them to focus on strategic growth activities like marketing and product development. You will typically see a clear return on investment from the first month through increased efficiency, higher conversion rates, and optimized resource allocation. We can provide a personalized ROI projection during a consultation."
    },
    {
      question: "What are the specific security protocols for customer data and sales information when using AI automation services?",
      answer: "Data security and privacy are paramount. We implement industry-standard encryption protocols (SSL/TLS for data in transit, AES-256 for data at rest), adhere to strict access controls, and ensure compliance with relevant data protection regulations. Our systems are regularly audited for vulnerabilities, and we never share or sell your customer data. Your information is used solely to enhance your e-commerce operations."
    },
    {
      question: "Can AI effectively manage my inventory across multiple sales channels (e.g., Shopify, Amazon, eBay) and predict demand to prevent stockouts?",
      answer: "Absolutely. Our AI-powered inventory management integrates seamlessly with all your sales channels and warehouses. It provides real-time stock synchronization, automates reorder points based on historical sales data, seasonal trends, and upcoming promotions, and even predicts future demand to minimize overstocking and prevent costly stockouts across all platforms, including Mercado Libre."
    },
    {
      question: "How can AI personalize customer interactions and provide instant, accurate responses on various e-commerce platforms without losing brand voice?",
      answer: "Our AI is designed to learn and adapt to your brand's unique tone and style. It analyzes your past customer interactions and product information to generate human-like, personalized responses. It can handle a vast array of common queries instantly, escalate complex issues to human agents when necessary, and ensure a consistent brand voice across all touchpoints, including Mercado Libre's Q&A section."
    },
    {
      question: "Is AI automation truly scalable for businesses experiencing rapid growth, and how does it adapt to evolving e-commerce needs?",
      answer: "Yes, our solutions are built for scalability. Whether you double your product catalog, expand to new markets, or experience seasonal sales surges, our AI systems seamlessly handle increased volumes without proportional increases in manual labor or operational costs. They are designed to adapt to new features and changing demands, ensuring your operations remain efficient as you grow."
    },
    {
      question: "What is the typical implementation timeline for an AI automation solution, and what resources do I need to prepare from my side?",
      answer: "Implementation times vary based on the complexity and scope of the desired automations. For core solutions like automated responses or basic stock sync, it can be as quick as 2-4 weeks. More comprehensive integrations with existing ERPs or custom systems might take 4-8 weeks. We handle most of the technical setup; your team primarily needs to provide access to relevant platforms and participate in initial training sessions."
    },
    {
      question: "How does our AI solution integrate with my existing ERP, CRM, or shipping software to streamline my entire e-commerce operation?",
      answer: "Our AI solutions are built with API-first architecture, enabling robust integrations with a wide range of popular e-commerce platforms (like Mercado Libre), ERPs (e.g., SAP, Odoo), CRMs (e.g., Salesforce), and local shipping software. We develop custom connectors when needed to ensure a seamless flow of data across all your operational systems, minimizing manual data entry and errors."
    },
    {
      question: "Beyond basic analytics, how does AI provide actionable insights from my sales data to identify new growth opportunities or pinpoint inefficiencies?",
      answer: "Our AI goes beyond simple reporting. It analyzes vast datasets to identify hidden trends, predict customer behavior, detect anomalies (like potential fraud or sudden drops in conversion), and pinpoint bottlenecks in your fulfillment or sales funnel. You'll receive personalized dashboards and proactive alerts that translate complex data into clear, actionable recommendations for optimizing pricing, marketing strategies, and operational efficiency."
    },
    {
      question: "Will implementing AI automation replace my existing staff, or will it enhance their productivity and allow them to focus on strategic tasks?",
      answer: "Our philosophy is augmentation, not replacement. AI automation handles repetitive, time-consuming, and error-prone tasks, freeing your human team to focus on high-value activities that require creativity, empathy, and strategic thinking – like building customer relationships, developing new products, or expanding market reach. It empowers your staff to be more efficient and impactful."
    },
    {
      question: "How does AI handle dynamic pricing strategies to maintain competitiveness and maximize profit margins in a highly fluctuating online marketplace?",
      answer: "Our AI continuously monitors competitor pricing, market demand fluctuations, inventory levels, and even external factors to automatically adjust your product prices in real-time. This ensures your offerings remain competitive while simultaneously optimizing for maximum profit margins, preventing unnecessary price wars, and reacting swiftly to market changes."
    },
    {
      question: "What kind of ongoing support, maintenance, and optimization can I expect from us after the initial AI automation setup?",
      answer: "We provide comprehensive post-implementation support, including regular performance monitoring, troubleshooting, and continuous optimization of your AI models. Our team offers dedicated technical assistance, user training, and proactive suggestions to adapt your automations to new market conditions or business goals, ensuring long-term success and maximal ROI."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById('soluciones');
    solutionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('beneficios');
    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // For now, we'll use Spanish content. In the next phase, we'll implement language switching
  const currentLang = 'es'; // This will be dynamic later
  const faqs = currentLang === 'es' ? faqsES : faqsEN;
  const title = currentLang === 'es' 
    ? "Preguntas Frecuentes sobre Automatización con IA para Mercadolíderes"
    : "Frequently Asked Questions about AI Automation for E-commerce Specialists";
  
  const subtitle = currentLang === 'es'
    ? "Resolvemos tus dudas más importantes sobre cómo la inteligencia artificial puede transformar tu negocio de e-commerce"
    : "We answer your most important questions about how artificial intelligence can transform your e-commerce business";

  const ctaText = currentLang === 'es'
    ? "¿Tenés alguna otra pregunta? Estamos acá para ayudarte."
    : "Do you have any other questions? We're here to help you.";

  const ctaButton = currentLang === 'es'
    ? "Consultanos Ahora"
    : "Contact Us Now";

  return (
    <section id="faqs" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          {title}
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-gray-700 leading-relaxed">
                  {faq.answer}
                  {/* Add internal links based on FAQ content */}
                  {index === 0 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Conocé más sobre nuestras Soluciones de IA
                      </button>
                    </>
                  )}
                  {index === 1 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Explorá nuestras Soluciones de IA
                      </button>
                    </>
                  )}
                  {index === 2 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Descubrí todos los Beneficios
                      </button>
                    </>
                  )}
                  {index === 3 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Conocé más sobre nuestros Beneficios
                      </button>
                    </>
                  )}
                  {index === 4 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Solicitá una reunión sin cargo
                      </button>
                    </>
                  )}
                  {index === 5 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Solicitá una reunión sin cargo
                      </button>
                    </>
                  )}
                  {index === 6 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Conocé más sobre nuestros Beneficios
                      </button>
                    </>
                  )}
                  {index === 7 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Solicitá una reunión sin cargo
                      </button>
                    </>
                  )}
                  {index === 8 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Explorá nuestras Soluciones de IA
                      </button>
                    </>
                  )}
                  {index === 9 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Descubrí todos los Beneficios
                      </button>
                    </>
                  )}
                  {index === 10 && currentLang === 'es' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Empezar a optimizar mi tiempo
                      </button>
                    </>
                  )}

                  {/* English links */}
                  {index === 0 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Request a free consultation
                      </button>
                    </>
                  )}
                  {index === 1 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Learn more about our Benefits
                      </button>
                    </>
                  )}
                  {index === 2 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Explore our AI Solutions
                      </button>
                    </>
                  )}
                  {index === 3 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Discover our AI Solutions
                      </button>
                    </>
                  )}
                  {index === 4 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToBenefits}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Learn more about our Benefits
                      </button>
                    </>
                  )}
                  {index === 5 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Request a free consultation
                      </button>
                    </>
                  )}
                  {index === 6 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Explore our AI Solutions
                      </button>
                    </>
                  )}
                  {index === 7 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Discover our AI Solutions
                      </button>
                    </>
                  )}
                  {index === 8 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Start optimizing my time
                      </button>
                    </>
                  )}
                  {index === 9 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToSolutions}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Explore our AI Solutions
                      </button>
                    </>
                  )}
                  {index === 10 && currentLang === 'en' && (
                    <>
                      {" "}
                      <button 
                        onClick={scrollToContact}
                        className="text-blue-600 hover:text-blue-700 underline font-medium"
                      >
                        Contact Us
                      </button>
                    </>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            {ctaText}
          </p>
          <button 
            onClick={scrollToContact}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
