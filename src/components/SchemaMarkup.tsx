
import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cómo se asegura la IA de mantener la calidad de mis respuestas en Mercado Libre, evitando respuestas robóticas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nuestra IA se entrena específicamente con el tono de voz y estilo de comunicación de tu marca. No utilizamos respuestas genéricas predefinidas, sino que la IA aprende de tus interacciones previas exitosas y se adapta al contexto específico de cada consulta. Implementamos un sistema de aprendizaje continuo que analiza la efectividad de las respuestas y las mejora constantemente."
          }
        },
        {
          "@type": "Question",
          "name": "¿La IA de gestión de stock puede predecir qué productos necesito reponer antes de que se agoten, basándose en tendencias estacionales y eventos especiales?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Absolutamente. Nuestro sistema de IA analiza múltiples variables: datos históricos de ventas, patrones estacionales, tendencias del mercado, promociones planificadas y eventos externos. La IA genera pronósticos precisos de demanda y puede automatizar alertas de reabastecimiento e incluso generar órdenes de compra automáticas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Mi equipo necesita conocimientos de programación para usar sus soluciones de IA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para nada. Nuestras soluciones están diseñadas con una filosofía 'plug-and-play' completamente amigable para usuarios sin conocimientos técnicos. Nosotros nos encargamos de toda la implementación, configuración inicial e integración con tus sistemas actuales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué medidas de seguridad implementan para proteger los datos de mis clientes y mi información de ventas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La seguridad es nuestra máxima prioridad. Implementamos encriptación de datos de extremo a extremo, cumplimos con estándares internacionales de seguridad como ISO 27001 y normativas locales de protección de datos. Nunca vendemos, compartimos o utilizamos tus datos para otros propósitos."
          }
        }
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IA Mercadolíder",
      "alternateName": "GasAgus - Agencia Argentina de Automatizaciones para E-commerce",
      "description": "Agencia especializada en automatización con IA para vendedores de Mercado Libre y e-commerce. Automatizamos respuestas, gestión de stock, publicaciones y análisis para que vendas más y tengas más tiempo libre.",
      "url": "https://www.iamercadolider.com.ar",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+54 11 1234-5678",
        "email": "contacto@automataIA.com.ar",
        "contactType": "customer service",
        "areaServed": "AR",
        "availableLanguage": "Spanish"
      },
      "areaServed": "Argentina",
      "serviceType": "AI Automation for E-commerce"
    };

    // Service Schema for each main service
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Automatización con IA para Mercadolíderes",
      "description": "Servicios completos de automatización con inteligencia artificial para vendedores de Mercado Libre y e-commerce",
      "provider": {
        "@type": "Organization",
        "name": "IA Mercadolíder"
      },
      "serviceType": "AI Automation",
      "areaServed": "Argentina",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Automatización IA",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Respuestas Automáticas",
              "description": "IA que responde preguntas de clientes en Mercado Libre 24/7 con el tono de tu marca"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Gestión Inteligente de Stock",
              "description": "Automatización de inventario con predicciones de demanda y alertas de reabastecimiento"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Optimización de Publicaciones",
              "description": "IA que optimiza títulos, descripciones y precios para mejorar el ranking en Mercado Libre"
            }
          }
        ]
      }
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(faqSchema, 'faq-schema');
    addSchema(organizationSchema, 'organization-schema');
    addSchema(servicesSchema, 'services-schema');

    return () => {
      // Cleanup schemas on unmount
      document.getElementById('faq-schema')?.remove();
      document.getElementById('organization-schema')?.remove();
      document.getElementById('services-schema')?.remove();
    };
  }, []);

  return null;
};

export default SchemaMarkup;
