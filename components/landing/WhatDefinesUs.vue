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
    tabTitle: "Procesos y Tareas",
    icon: Workflow,
    badge: "Eficiencia Operativa",
    symptom: "¿Tu equipo pierde productividad en tareas manuales y repetitivas?",
    painPoint:
      "La ejecución manual de tareas rutinarias reduce el rendimiento del personal, introduce errores de captura y genera demoras en las entregas, afectando la rentabilidad de tu organización.",
    solution:
      "Diseñamos e integramos flujos de trabajo automatizados y agentes a la medida (con n8n y Zapier). Tus procesos se ejecutan de forma autónoma, continua y sin errores humanos.",
    roi: "Optimiza hasta un 90% el tiempo dedicado a tareas repetitivas y elimina los errores de captura.",
    ctaText: "Automatizar mis procesos",
    link: "/servicios/automatization",
  },
  {
    id: "visibility",
    tabTitle: "Presencia y Ventas",
    icon: Globe,
    badge: "Presencia Corporativa",
    symptom:
      "¿Tus competidores captan clientes en línea mientras tu empresa no tiene presencia web sólida?",
    painPoint:
      "No tener un sitio web rápido, responsivo y posicionado en buscadores limita tu alcance comercial y redirige clientes potenciales hacia competidores con mayor visibilidad digital.",
    solution:
      "Desarrollamos sitios web y landing pages de alto impacto, con técnicas de conversión, optimización SEO integral y cargas por debajo de un segundo.",
    roi: "Incrementa la captación de prospectos calificados y consolida la autoridad digital de tu marca.",
    ctaText: "Optimizar presencia digital",
    link: "/servicios/landing-page",
  },
  {
    id: "ranch",
    tabTitle: "Control Ganadero",
    icon: LidiaLogo,
    badge: "Sector Agropecuario",
    symptom:
      "¿Administras el inventario y la trazabilidad de tu ganado de forma manual o con registros difíciles de actualizar?",
    painPoint:
      "Sin un sistema centralizado de inventario, vacunación, genealogía y movilizaciones se complica el cumplimiento sanitario y sube el riesgo de pérdidas.",
    solution:
      "Desplegamos LIDIA: una plataforma pensada para el campo (con soporte offline) que consolida el historial de cada animal y ordena tus reportes.",
    roi: "Control del 100% de la trazabilidad y del inventario desde el celular, incluso sin internet.",
    ctaText: "Ver solución ganadera",
    link: "/servicios/lidia",
  },
  {
    id: "cloud-it",
    tabTitle: "Servidores y Nube",
    icon: Server,
    badge: "Infraestructura Cloud",
    symptom:
      "¿Tu plataforma se cae ante picos de tráfico o el costo de infraestructura se te dispara?",
    painPoint:
      "La inestabilidad o lentitud de los servidores interrumpe tu operación y ahuyenta usuarios, mientras que una nube mal optimizada genera sobrecostos innecesarios.",
    solution:
      "Aseguramos tu infraestructura en AWS con balanceo de carga automático, políticas de reducción de costos y monitoreo de alta disponibilidad.",
    roi: "Disponibilidad del 99.9% ante cualquier nivel de tráfico y hasta 45% menos en costos de nube.",
    ctaText: "Optimizar infraestructura",
    link: "/servicios/aws",
  },
];

// Reglas de oro: ahora cada una con su ícono (los antiguos recuadros con
// letras S-R-E-S-E no formaban palabra y se veían de plantilla).
const pillars = [
  {
    icon: Feather,
    name: "Simplicidad Absoluta",
    desc: "Cero complicaciones técnicas para ti. Interfaces intuitivas que tu equipo domina en minutos.",
  },
  {
    icon: TrendingUp,
    name: "Retorno de Inversión",
    desc: "No escribimos código por capricho. Cada desarrollo reduce tus costos o aumenta tus ventas.",
  },
  {
    icon: Activity,
    name: "Estabilidad Extrema",
    desc: "Sistemas robustos que no te dejan colgado frente a tus clientes: rápidos y sin caídas.",
  },
  {
    icon: Lock,
    name: "Seguridad Corporativa",
    desc: "Protegemos tus datos con cifrado de nivel bancario y respaldos automáticos.",
  },
  {
    icon: Expand,
    name: "Escalabilidad Futura",
    desc: "Soluciones que crecen contigo: añadir funciones sin rehacer todo desde cero.",
  },
];

const guarantees = [
  { text: "Solución Definitiva", desc: "Código limpio, sin deuda técnica" },
  { text: "Uptime de Alto Nivel", desc: "Sistemas disponibles 24/7" },
  { text: "Retorno Medible", desc: "Proyectos que se pagan solos" },
  { text: "Propiedad Absoluta", desc: "El código es 100% de tu empresa" },
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
          El Libro de <span class="text-primary">Soluciones</span> de tu Negocio
        </h2>
        <p
          class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Identifica las ineficiencias que frenan a tu empresa. Desarrollamos
          soluciones tecnológicas a la medida para optimizar procesos y potenciar
          la productividad.
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
          Las 5 Reglas de Oro de
          <span class="text-primary">Nuestras Soluciones</span>
        </h3>
        <p
          class="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto"
        >
          No construimos software para lucirnos; lo hacemos bajo principios claros
          enfocados en el éxito de tu negocio.
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
