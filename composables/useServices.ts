import {
  LayoutTemplate,
  Globe,
  ShoppingBag,
  Cloud,
  Mail,
  Server,
  Tractor,
  Laptop,
  Network,
  Workflow,
} from "lucide-vue-next";
import type { Service } from "~/types";

export const useServices = () => {
  const servicesMenu: Service[] = [
    {
      category: "Para tu Negocio",
      items: [
        {
          title: "Sitio Web Profesional",
          desc: "Desafío: Falta de visibilidad digital y pérdida de clientes potenciales. Solución: Diseño y desarrollo de sitios web corporativos de alta conversión y velocidad superior.",
          icon: LayoutTemplate,
          to: "/servicios/landing-page",
          slug: "landing-page",
        },
        {
          title: "Presencia Digital Corporativa",
          desc: "Desafío: Baja autoridad digital frente a competidores del sector. Solución: Posicionamiento web avanzado y diseño corporativo que proyecta solidez y liderazgo comercial.",
          icon: Globe,
          to: "/servicios/corporativo",
          slug: "corporativo",
        },
        {
          title: "Registro de Dominio",
          desc: "Desafío: Falta de identidad digital exclusiva y protección de marca. Solución: Registro y administración de dominios corporativos a la medida.",
          icon: ShoppingBag,
          to: "/servicios/dominio",
          slug: "dominio",
        },
      ],
    },
    {
      category: "Infraestructura",
      items: [
        {
          title: "Hospedaje Web Premium",
          desc: "Desafío: Inestabilidad en servidores y tiempos de carga lentos. Solución: Alojamiento web de alta disponibilidad, seguridad avanzada SSL y soporte continuo.",
          icon: Cloud,
          to: "/servicios/hosting",
          slug: "hosting",
        },
        {
          title: "Correo Corporativo",
          desc: "Desafío: Uso de correos genéricos que restan seriedad comercial. Solución: Cuentas de correo empresariales protegidas bajo dominio corporativo.",
          icon: Mail,
          to: "/servicios/email",
          slug: "email",
        },
        {
          title: "Servicios en la Nube (AWS)",
          desc: "Desafío: Infraestructura inestable o costos elevados en la nube. Solución: Configuración, migración y optimización de servicios en Amazon Web Services.",
          icon: Server,
          to: "/servicios/aws",
          slug: "aws",
        },
      ],
    },
    {
      category: "Software Especializado",
      items: [
        {
          title: "LIDIA",
          desc: "Desafío: Gestión ineficiente o manual en la trazabilidad ganadera. Solución: App móvil que funciona sin señal para inventario, sanidad, movilizaciones, compra-venta con QR y alertas de robo.",
          badge: "En vivo",
          badgeColor:
            "bg-primary/15 text-primary-dark dark:text-primary",
          icon: Tractor,
          to: "/servicios/lidia",
          slug: "lidia",
        },
      ],
    },
    {
      category: "Soporte Técnico",
      items: [
        {
          title: "Mantenimiento de Equipos",
          desc: "Desafío: Equipos informáticos lentos o dañados que frenan la productividad. Solución: Soporte técnico correctivo y preventivo para la continuidad operativa.",
          icon: Laptop,
          to: "/servicios/equipos",
          slug: "equipos",
        },
        {
          title: "Redes Empresariales",
          desc: "Desafío: Conectividad Wi-Fi deficiente o vulnerable. Solución: Diseño, instalación y seguridad en infraestructura de redes empresariales de alta velocidad.",
          icon: Network,
          to: "/servicios/redes",
          slug: "redes",
        },
        {
          title: "Automatización de procesos",
          desc: "Desafío: Tareas administrativas rutinarias que consumen tiempo operativo. Solución: Automatización de flujos de trabajo e integración de sistemas (con n8n y Zapier).",
          icon: Workflow,
          to: "/servicios/automatization",
          slug: "automatization",
        },
      ],
    },
  ];

  const getServiceBySlug = (slug: string) => {
    for (const category of servicesMenu) {
      const item = category.items.find((i) => i.slug === slug);
      if (item) return item;
    }
    return null;
  };

  return {
    servicesMenu,
    getServiceBySlug,
  };
};
