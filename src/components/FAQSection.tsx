
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "¿Cómo se asegura la IA de mantener la calidad de mis respuestas en Mercado Libre, evitando respuestas robóticas?",
      answer: (
        <>
          Nuestra IA se entrena específicamente con el tono de voz y estilo de comunicación de tu marca. No utilizamos respuestas genéricas predefinidas, sino que la IA aprende de tus interacciones previas exitosas y se adapta al contexto específico de cada consulta. Implementamos un sistema de aprendizaje continuo que analiza la efectividad de las respuestas y las mejora constantemente. Además, ofrecemos supervisión humana opcional para casos complejos y una configuración inicial donde definimos juntos el tono, estilo y límites de respuesta que mejor representen a tu negocio.{' '}
          <button 
            onClick={() => scrollToSection('#soluciones')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver nuestras Soluciones de IA
          </button>
        </>
      )
    },
    {
      question: "¿La IA de gestión de stock puede predecir qué productos necesito reponer antes de que se agoten, basándose en tendencias estacionales y eventos especiales?",
      answer: (
        <>
          Absolutamente. Nuestro sistema de IA analiza múltiples variables: datos históricos de ventas, patrones estacionales, tendencias del mercado, promociones planificadas y eventos externos como días especiales o cambios económicos. La IA genera pronósticos precisos de demanda y puede automatizar alertas de reabastecimiento e incluso generar órdenes de compra automáticas cuando configures proveedores. El sistema aprende constantemente de los resultados reales vs. predicciones para mejorar su precisión, y te permite ajustar manualmente los parámetros según tu experiencia y conocimiento del negocio.{' '}
          <button 
            onClick={() => scrollToSection('#soluciones')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver nuestras Soluciones de IA
          </button>
        </>
      )
    },
    {
      question: "¿Mi equipo necesita conocimientos de programación para usar sus soluciones de IA?",
      answer: (
        <>
          Para nada. Nuestras soluciones están diseñadas con una filosofía 'plug-and-play' completamente amigable para usuarios sin conocimientos técnicos. Nosotros nos encargamos de toda la implementación, configuración inicial e integración con tus sistemas actuales. Tu equipo solo necesita usar interfaces intuitivas y dashboards simples. Proporcionamos capacitación completa durante la implementación y soporte continuo. La idea es que te enfoques en vender y hacer crecer tu negocio, mientras nosotros manejamos toda la complejidad técnica detrás de escena.{' '}
          <button 
            onClick={() => scrollToSection('#beneficios')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver todos los Beneficios
          </button>
        </>
      )
    },
    {
      question: "¿Qué medidas de seguridad implementan para proteger los datos de mis clientes y mi información de ventas?",
      answer: (
        <>
          La seguridad es nuestra máxima prioridad. Implementamos encriptación de datos de extremo a extremo, tanto en tránsito como en reposo. Cumplimos con estándares internacionales de seguridad como ISO 27001 y normativas locales de protección de datos. Utilizamos servidores seguros con acceso restringido y autenticación multifactor. Nunca vendemos, compartimos o utilizamos tus datos para otros propósitos que no sean brindar el servicio contratado. Realizamos auditorías de seguridad regulares y mantenemos backups encriptados. Además, firmamos acuerdos de confidencialidad y te proporcionamos un informe detallado de nuestras medidas de seguridad.{' '}
          <button 
            onClick={() => scrollToSection('#beneficios')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver todos los Beneficios
          </button>
        </>
      )
    },
    {
      question: "¿Cuál es el proceso de implementación típico de una solución de automatización IA para un Mercadolíder?",
      answer: (
        <>
          Nuestro proceso es estructurado y transparente: 1) Consulta y diagnóstico sin cargo (1-2 días) donde analizamos tu negocio actual, identificamos oportunidades y definimos objetivos. 2) Propuesta personalizada detallada con cronograma y métricas de éxito específicas. 3) Implementación y configuración técnica (1-4 semanas según complejidad) donde integramos la IA con tus sistemas sin interrumpir operaciones. 4) Capacitación completa de tu equipo y período de prueba supervisada. 5) Lanzamiento oficial con monitoreo intensivo las primeras semanas. 6) Optimización continua basada en resultados reales y feedback. Durante todo el proceso mantienes control total y visibilidad del progreso.{' '}
          <button 
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Solicitá una reunión sin cargo
          </button>
        </>
      )
    },
    {
      question: "¿Cuánto tiempo tarda la implementación de una solución de IA?",
      answer: (
        <>
          Los tiempos varían según la complejidad de tu operación actual: Para automatización básica (respuestas automáticas y gestión simple de stock): 2-3 semanas. Para integraciones intermedias (múltiples canales, sistemas de gestión existentes): 4-6 semanas. Para implementaciones complejas (múltiples sucursales, integraciones ERP avanzadas, personalización profunda): 6-8 semanas. Lo importante es que durante la implementación tu negocio sigue operando normalmente. Trabajamos en fases, priorizando las automatizaciones de mayor impacto primero, para que empieces a ver beneficios rápidamente mientras completamos el resto del sistema.{' '}
          <button 
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Solicitá una reunión sin cargo
          </button>
        </>
      )
    },
    {
      question: "¿Es seguro para mis datos el uso de IA?",
      answer: (
        <>
          Completamente seguro. Nuestros sistemas están diseñados con 'privacidad por diseño'. Tus datos permanecen siempre bajo tu control y propiedad. No entrenamos modelos globales con tu información, no la compartimos con terceros, y no la utilizamos para beneficio de otros clientes. Implementamos aislamiento de datos por cliente, encriptación avanzada y acceso basado en roles. Cumplimos con todas las normativas de protección de datos aplicables. Además, puedes solicitar la exportación o eliminación completa de tus datos en cualquier momento. La IA procesa tu información localmente dentro de tu entorno seguro, sin exponerla a riesgos externos.{' '}
          <button 
            onClick={() => scrollToSection('#beneficios')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver todos los Beneficios
          </button>
        </>
      )
    },
    {
      question: "¿Cuánto cuesta la automatización con IA vs. el ahorro que genera?",
      answer: (
        <>
          La automatización con IA es una inversión que se paga sola rápidamente. Típicamente vemos ROI positivo desde el primer mes debido a: reducción de 60-80% en tiempo dedicado a tareas repetitivas, disminución de errores costosos, aumento de 15-30% en tasa de conversión por respuestas más rápidas y precisas, y optimización de inventario que reduce costos de almacenamiento. El costo mensual suele representar menos del 5% del aumento en facturación que genera. Ofrecemos modelos flexibles: desde planes básicos para emprendedores hasta soluciones enterprise. Te invitamos a una reunión sin cargo donde calculamos el ROI específico para tu negocio basado en tus números reales.{' '}
          <button 
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Solicitá una reunión sin cargo
          </button>
        </>
      )
    },
    {
      question: "¿Cómo se integra la IA con mis sistemas actuales (ej. un ERP o gestor de ventas)?",
      answer: (
        <>
          Nuestras soluciones están diseñadas para integrarse seamlessly con los sistemas más populares del mercado: MercadoLibre, Shopify, WooCommerce, Magento, y ERPs como SAP, Odoo, Exact, y muchos otros. Utilizamos APIs estándar y conectores nativos que minimizan interrupciones. Si usas un sistema menos común, desarrollamos conectores personalizados. El proceso incluye: 1) Mapeo de tus sistemas actuales, 2) Desarrollo de integraciones específicas, 3) Pruebas exhaustivas en ambiente controlado, 4) Migración gradual sin downtime. Mantenemos tus workflows existentes y solo agregamos las automatizaciones donde generan valor, sin forzar cambios en procesos que ya funcionan bien.{' '}
          <button 
            onClick={() => scrollToSection('#soluciones')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver nuestras Soluciones de IA
          </button>
        </>
      )
    },
    {
      question: "¿Qué pasa si mi negocio crece o mis necesidades cambian?",
      answer: (
        <>
          Nuestras soluciones están diseñadas para escalar y evolucionar contigo. La arquitectura modular permite agregar nuevas funcionalidades, integrar nuevos canales de venta, manejar mayor volumen de transacciones y adaptarse a cambios en tu modelo de negocio. Si expandes a nuevas categorías de productos, países o canales, la IA se adapta y aprende los nuevos patrones. Ofrecemos planes de crecimiento que se ajustan automáticamente a tu volumen, y revisiones trimestrales donde evaluamos oportunidades de optimización y expansión. No te quedas 'atrapado' en una solución rígida - la IA evoluciona tan dinámicamente como tu negocio.{' '}
          <button 
            onClick={() => scrollToSection('#beneficios')}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Ver todos los Beneficios
          </button>
        </>
      )
    },
    {
      question: "¿La IA me reemplaza o me complementa como Mercadolíder?",
      answer: (
        <>
          La IA es tu aliada estratégica, no tu reemplazo. Su función es liberarte de las tareas repetitivas y operativas para que puedas enfocarte en lo que realmente agrega valor: estrategia de crecimiento, desarrollo de nuevos productos, negociación con proveedores, análisis de mercado y construcción de relaciones. La IA maneja las consultas rutinarias, actualiza inventarios y optimiza publicaciones, mientras tú tomas las decisiones importantes del negocio. Es como tener un asistente super eficiente 24/7 que nunca se cansa, pero que siempre necesita tu visión, creatividad y experiencia humana para dirigir el rumbo del negocio hacia el éxito.{' '}
          <button 
            onClick={scrollToContact}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Empezar a optimizar mi tiempo
          </button>
        </>
      )
    }
  ];

  return (
    <section id="faqs" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Preguntas Frecuentes sobre Automatización con IA para Mercadolíderes
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Resolvemos tus dudas más importantes sobre cómo la inteligencia artificial puede transformar tu negocio de e-commerce
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
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿Tenés alguna otra pregunta? Estamos acá para ayudarte.
          </p>
          <a 
            href="#contacto" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Consultanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
