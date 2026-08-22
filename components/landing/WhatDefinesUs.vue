<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ArrowRight,
  Workflow,
  Globe,
  Server,
  Feather,
  TrendingUp,
  Activity,
  Lock,
  Expand,
  CheckCircle2,
} from "lucide-vue-next";
import LidiaLogo from "@/components/LidiaLogo.vue";

const { t } = useI18n({ useScope: "local" });

const isVisible = ref(false);

// Pestaña seleccionada en el Libro de Soluciones
const activeProblemTab = ref("processes");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    // threshold 0: en móvil la sección es alta y un umbral mayor nunca se
    // alcanzaba, dejando el contenido en opacity-0 (invisible).
    { threshold: 0 },
  );

  const section = document.getElementById("what-defines-us");
  if (section) observer.observe(section);
});

const problems = [
  {
    id: "processes",
    tabTitle: t("problems.processes.tabTitle"),
    icon: Workflow,
    badge: t("problems.processes.badge"),
    symptom: t("problems.processes.symptom"),
    painPoint: t("problems.processes.painPoint"),
    solution: t("problems.processes.solution"),
    roi: t("problems.processes.roi"),
    ctaText: t("problems.processes.ctaText"),
    link: "/servicios/automatization",
  },
  {
    id: "visibility",
    tabTitle: t("problems.visibility.tabTitle"),
    icon: Globe,
    badge: t("problems.visibility.badge"),
    symptom: t("problems.visibility.symptom"),
    painPoint: t("problems.visibility.painPoint"),
    solution: t("problems.visibility.solution"),
    roi: t("problems.visibility.roi"),
    ctaText: t("problems.visibility.ctaText"),
    link: "/servicios/landing-page",
  },
  {
    id: "ranch",
    tabTitle: t("problems.ranch.tabTitle"),
    icon: LidiaLogo,
    badge: t("problems.ranch.badge"),
    symptom: t("problems.ranch.symptom"),
    painPoint: t("problems.ranch.painPoint"),
    solution: t("problems.ranch.solution"),
    roi: t("problems.ranch.roi"),
    ctaText: t("problems.ranch.ctaText"),
    link: "/servicios/lidia",
  },
  {
    id: "cloud-it",
    tabTitle: t("problems.cloudIt.tabTitle"),
    icon: Server,
    badge: t("problems.cloudIt.badge"),
    symptom: t("problems.cloudIt.symptom"),
    painPoint: t("problems.cloudIt.painPoint"),
    solution: t("problems.cloudIt.solution"),
    roi: t("problems.cloudIt.roi"),
    ctaText: t("problems.cloudIt.ctaText"),
    link: "/servicios/aws",
  },
];

// Reglas de oro: ahora cada una con su ícono (los antiguos recuadros con
// letras S-R-E-S-E no formaban palabra y se veían de plantilla).
const pillars = [
  {
    icon: Feather,
    name: t("pillars.simplicity.name"),
    desc: t("pillars.simplicity.desc"),
  },
  {
    icon: TrendingUp,
    name: t("pillars.roi.name"),
    desc: t("pillars.roi.desc"),
  },
  {
    icon: Activity,
    name: t("pillars.stability.name"),
    desc: t("pillars.stability.desc"),
  },
  {
    icon: Lock,
    name: t("pillars.security.name"),
    desc: t("pillars.security.desc"),
  },
  {
    icon: Expand,
    name: t("pillars.scalability.name"),
    desc: t("pillars.scalability.desc"),
  },
];

const guarantees = [
  { text: t("guarantees.definitive.text"), desc: t("guarantees.definitive.desc") },
  { text: t("guarantees.uptime.text"), desc: t("guarantees.uptime.desc") },
  { text: t("guarantees.return.text"), desc: t("guarantees.return.desc") },
  { text: t("guarantees.ownership.text"), desc: t("guarantees.ownership.desc") },
];
</script>

<template>
  <section
    id="what-defines-us"
    class="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden"
  >
    <!-- Patrón de puntos sutil (ligero) -->
    <div
      class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            currentColor 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Encabezado -->
      <div
        class="text-center max-w-3xl mx-auto mb-14"
        :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
      >
    
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-6"
        >
          {{ t("headingBefore") }}
          <span class="text-primary">{{ t("headingHighlight") }}</span>
          {{ t("headingAfter") }}
        </h2>
        <p
          class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          {{ t("intro") }}
        </p>
      </div>

      <!-- Libro de Soluciones (pestañas interactivas) -->
     

      <!-- Reglas de oro: lista de principios (íconos + numeración, sin recuadros) -->
      <div
        class="mb-16"
        :class="{
          'animate-fade-in-up delay-200': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <h3
          class="text-2xl lg:text-3xl font-bold text-center text-slate-900 dark:text-white mb-4"
        >
          {{ t("rulesBefore") }}
          <span class="text-primary">{{ t("rulesHighlight") }}</span>
        </h3>
        <p
          class="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto"
        >
          {{ t("rulesIntro") }}
        </p>

        <ol
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 max-w-7xl mx-auto"
        >
          <li
            v-for="(pillar, i) in pillars"
            :key="pillar.name"
            class="relative text-center lg:text-left"
          >
            <div
              class="flex items-center justify-center lg:justify-start gap-3 mb-4"
            >
              <span
                class="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0"
              >
                <component :is="pillar.icon" class="w-6 h-6" />
              </span>
              <span
                class="text-4xl font-black leading-none text-slate-200 dark:text-slate-700 select-none"
              >
                {{ String(i + 1).padStart(2, "0") }}
              </span>
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1.5">
              {{ pillar.name }}
            </h4>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {{ pillar.desc }}
            </p>
          </li>
        </ol>
      </div>

      <!-- Garantías: cinta de compromiso (titular + checklist) -->
      <div
        :class="{
          'animate-fade-in-up delay-300': isVisible,
          'opacity-0': !isVisible,
        }"
      >
       
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "headingBefore": "El Libro de",
    "headingHighlight": "Soluciones",
    "headingAfter": "de tu Negocio",
    "intro": "Identifica las ineficiencias que frenan a tu empresa. Desarrollamos soluciones tecnológicas a la medida para optimizar procesos y potenciar la productividad.",
    "rulesBefore": "Las 5 Reglas de Oro de",
    "rulesHighlight": "Nuestras Soluciones",
    "rulesIntro": "No construimos software para lucirnos; lo hacemos bajo principios claros enfocados en el éxito de tu negocio.",
    "problems": {
      "processes": {
        "tabTitle": "Procesos y Tareas",
        "badge": "Eficiencia Operativa",
        "symptom": "¿Tu equipo pierde productividad en tareas manuales y repetitivas?",
        "painPoint": "La ejecución manual de tareas rutinarias reduce el rendimiento del personal, introduce errores de captura y genera demoras en las entregas, afectando la rentabilidad de tu organización.",
        "solution": "Diseñamos e integramos flujos de trabajo automatizados y agentes a la medida (con n8n y Zapier). Tus procesos se ejecutan de forma autónoma, continua y sin errores humanos.",
        "roi": "Optimiza hasta un 90% el tiempo dedicado a tareas repetitivas y elimina los errores de captura.",
        "ctaText": "Automatizar mis procesos"
      },
      "visibility": {
        "tabTitle": "Presencia y Ventas",
        "badge": "Presencia Corporativa",
        "symptom": "¿Tus competidores captan clientes en línea mientras tu empresa no tiene presencia web sólida?",
        "painPoint": "No tener un sitio web rápido, responsivo y posicionado en buscadores limita tu alcance comercial y redirige clientes potenciales hacia competidores con mayor visibilidad digital.",
        "solution": "Desarrollamos sitios web y landing pages de alto impacto, con técnicas de conversión, optimización SEO integral y cargas por debajo de un segundo.",
        "roi": "Incrementa la captación de prospectos calificados y consolida la autoridad digital de tu marca.",
        "ctaText": "Optimizar presencia digital"
      },
      "ranch": {
        "tabTitle": "Control Ganadero",
        "badge": "Sector Agropecuario",
        "symptom": "¿Administras el inventario y la trazabilidad de tu ganado de forma manual o con registros difíciles de actualizar?",
        "painPoint": "Sin un sistema centralizado de inventario, vacunación, genealogía y movilizaciones se complica el cumplimiento sanitario y sube el riesgo de pérdidas.",
        "solution": "Desplegamos LIDIA: una plataforma pensada para el campo (con soporte offline) que consolida el historial de cada animal y ordena tus reportes.",
        "roi": "Control del 100% de la trazabilidad y del inventario desde el celular, incluso sin internet.",
        "ctaText": "Ver solución ganadera"
      },
      "cloudIt": {
        "tabTitle": "Servidores y Nube",
        "badge": "Infraestructura Cloud",
        "symptom": "¿Tu plataforma se cae ante picos de tráfico o el costo de infraestructura se te dispara?",
        "painPoint": "La inestabilidad o lentitud de los servidores interrumpe tu operación y ahuyenta usuarios, mientras que una nube mal optimizada genera sobrecostos innecesarios.",
        "solution": "Aseguramos tu infraestructura en AWS con balanceo de carga automático, políticas de reducción de costos y monitoreo de alta disponibilidad.",
        "roi": "Disponibilidad del 99.9% ante cualquier nivel de tráfico y hasta 45% menos en costos de nube.",
        "ctaText": "Optimizar infraestructura"
      }
    },
    "pillars": {
      "simplicity": {
        "name": "Simplicidad Absoluta",
        "desc": "Cero complicaciones técnicas para ti. Interfaces intuitivas que tu equipo domina en minutos."
      },
      "roi": {
        "name": "Retorno de Inversión",
        "desc": "No escribimos código por capricho. Cada desarrollo reduce tus costos o aumenta tus ventas."
      },
      "stability": {
        "name": "Estabilidad Extrema",
        "desc": "Sistemas robustos que no te dejan colgado frente a tus clientes: rápidos y sin caídas."
      },
      "security": {
        "name": "Seguridad Corporativa",
        "desc": "Protegemos tus datos con cifrado de nivel bancario y respaldos automáticos."
      },
      "scalability": {
        "name": "Escalabilidad Futura",
        "desc": "Soluciones que crecen contigo: añadir funciones sin rehacer todo desde cero."
      }
    },
    "guarantees": {
      "definitive": { "text": "Solución Definitiva", "desc": "Código limpio, sin deuda técnica" },
      "uptime": { "text": "Uptime de Alto Nivel", "desc": "Sistemas disponibles 24/7" },
      "return": { "text": "Retorno Medible", "desc": "Proyectos que se pagan solos" },
      "ownership": { "text": "Propiedad Absoluta", "desc": "El código es 100% de tu empresa" }
    }
  },
  "en": {
    "headingBefore": "Your Business",
    "headingHighlight": "Solutions",
    "headingAfter": "Playbook",
    "intro": "Pinpoint the inefficiencies holding your company back. We build custom technology solutions to streamline processes and boost productivity.",
    "rulesBefore": "The 5 Golden Rules of",
    "rulesHighlight": "Our Solutions",
    "rulesIntro": "We don't build software to show off; we build it on clear principles focused on your business success.",
    "problems": {
      "processes": {
        "tabTitle": "Processes & Tasks",
        "badge": "Operational Efficiency",
        "symptom": "Is your team losing productivity on manual, repetitive tasks?",
        "painPoint": "Manually running routine tasks lowers staff performance, introduces data-entry errors and delays deliveries, hurting your organization's profitability.",
        "solution": "We design and integrate automated workflows and custom agents (with n8n and Zapier). Your processes run autonomously, continuously and free of human error.",
        "roi": "Optimize up to 90% of the time spent on repetitive tasks and eliminate data-entry errors.",
        "ctaText": "Automate my processes"
      },
      "visibility": {
        "tabTitle": "Presence & Sales",
        "badge": "Corporate Presence",
        "symptom": "Are your competitors winning clients online while your business lacks a solid web presence?",
        "painPoint": "Not having a fast, responsive, search-ranked website limits your commercial reach and sends potential clients to competitors with greater digital visibility.",
        "solution": "We build high-impact websites and landing pages with conversion techniques, comprehensive SEO optimization and sub-second load times.",
        "roi": "Increase qualified lead generation and strengthen your brand's digital authority.",
        "ctaText": "Optimize digital presence"
      },
      "ranch": {
        "tabTitle": "Livestock Control",
        "badge": "Agriculture & Livestock",
        "symptom": "Are you managing your livestock inventory and traceability by hand or with records that are hard to update?",
        "painPoint": "Without a centralized system for inventory, vaccination, genealogy and movements, health compliance gets harder and the risk of losses rises.",
        "solution": "We deploy LIDIA: a platform built for the field (with offline support) that consolidates each animal's history and organizes your reports.",
        "roi": "100% control of traceability and inventory from your phone, even without internet.",
        "ctaText": "See livestock solution"
      },
      "cloudIt": {
        "tabTitle": "Servers & Cloud",
        "badge": "Cloud Infrastructure",
        "symptom": "Does your platform crash under traffic spikes or your infrastructure costs keep climbing?",
        "painPoint": "Unstable or slow servers interrupt your operation and drive users away, while a poorly optimized cloud creates unnecessary overspending.",
        "solution": "We secure your infrastructure on AWS with automatic load balancing, cost-reduction policies and high-availability monitoring.",
        "roi": "99.9% availability at any traffic level and up to 45% lower cloud costs.",
        "ctaText": "Optimize infrastructure"
      }
    },
    "pillars": {
      "simplicity": {
        "name": "Absolute Simplicity",
        "desc": "Zero technical hassle for you. Intuitive interfaces your team masters in minutes."
      },
      "roi": {
        "name": "Return on Investment",
        "desc": "We don't write code on a whim. Every build cuts your costs or grows your sales."
      },
      "stability": {
        "name": "Extreme Stability",
        "desc": "Robust systems that won't leave you stranded in front of your clients: fast and crash-free."
      },
      "security": {
        "name": "Corporate Security",
        "desc": "We protect your data with bank-grade encryption and automatic backups."
      },
      "scalability": {
        "name": "Future Scalability",
        "desc": "Solutions that grow with you: add features without rebuilding everything from scratch."
      }
    },
    "guarantees": {
      "definitive": { "text": "Definitive Solution", "desc": "Clean code, no technical debt" },
      "uptime": { "text": "High-Level Uptime", "desc": "Systems available 24/7" },
      "return": { "text": "Measurable Return", "desc": "Projects that pay for themselves" },
      "ownership": { "text": "Full Ownership", "desc": "The code is 100% your company's" }
    }
  }
}
</i18n>
