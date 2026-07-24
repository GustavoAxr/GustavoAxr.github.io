<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ShieldCheck,
  Zap,
  RefreshCw,
  GitBranch,
  ArrowRight,
  Workflow,
  Globe,
  Server,
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

const pillars = [
  {
    letter: "S",
    name: "Simplicidad Absoluta",
    desc: "Cero complicaciones técnicas para ti. Interfaces intuitivas que tu equipo domina en minutos, sin capacitaciones eternas.",
  },
  {
    letter: "R",
    name: "Retorno de Inversión",
    desc: "No escribimos código por capricho. Cada desarrollo tiene una meta clara: reducir tus costos o aumentar tus ventas.",
  },
  {
    letter: "E",
    name: "Estabilidad Extrema",
    desc: "Sistemas robustos que no te dejan colgado frente a tus clientes: rápidos y sin caídas.",
  },
  {
    letter: "S",
    name: "Seguridad Corporativa",
    desc: "Protegemos tus datos sensibles con cifrado de nivel bancario y respaldos automáticos.",
  },
  {
    letter: "E",
    name: "Escalabilidad Futura",
    desc: "Soluciones que crecen al ritmo de tu empresa: añadir funciones sin rehacer todo desde cero.",
  },
];

const guarantees = [
  {
    icon: ShieldCheck,
    text: "Solución Definitiva",
    desc: "Código limpio sin deuda técnica",
  },
  {
    icon: RefreshCw,
    text: "Uptime de Alto Nivel",
    desc: "Sistemas disponibles 24/7",
  },
  {
    icon: Zap,
    text: "Retorno Medible",
    desc: "Proyectos que se pagan solos",
  },
  {
    icon: GitBranch,
    text: "Propiedad Absoluta",
    desc: "El código es 100% de tu empresa",
  },
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
        <span
          class="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-2 bg-primary/10 rounded-full"
        >
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          Desafíos Operativos y Tecnológicos
        </span>
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
      <div
        class="mb-16"
        :class="{
          'animate-fade-in-up delay-100': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <div class="grid lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
          <!-- Lista de pestañas -->
          <div class="lg:col-span-4 flex flex-col gap-3 justify-center">
            <h3
              class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2"
            >
              Desafíos de Negocio Comunes
            </h3>
            <button
              v-for="problem in problems"
              :key="problem.id"
              type="button"
              @click="activeProblemTab = problem.id"
              class="w-full text-left p-4 rounded-xl border transition-colors duration-300 flex items-center gap-4 group"
              :class="
                activeProblemTab === problem.id
                  ? 'bg-white dark:bg-slate-800 border-primary shadow-sm'
                  : 'bg-white/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              "
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                :class="
                  activeProblemTab === problem.id
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-primary'
                "
              >
                <component :is="problem.icon" class="w-5 h-5" />
              </div>
              <div class="flex-1">
                <span
                  class="font-bold text-sm block transition-colors"
                  :class="
                    activeProblemTab === problem.id
                      ? 'text-primary'
                      : 'text-slate-700 dark:text-slate-300'
                  "
                >
                  {{ problem.tabTitle }}
                </span>
                <span class="text-xs text-slate-400 block line-clamp-1">
                  {{ problem.symptom }}
                </span>
              </div>
              <ArrowRight
                class="w-4 h-4 text-primary transition-all duration-300"
                :class="
                  activeProblemTab === problem.id
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'
                "
              />
            </button>
          </div>

          <!-- Detalle de la solución -->
          <div class="lg:col-span-8 flex flex-col">
            <div
              v-for="problem in problems"
              :key="problem.id"
              v-show="activeProblemTab === problem.id"
              class="flex-1 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/50 p-6 md:p-10 shadow-xl flex flex-col justify-between"
            >
              <div class="space-y-6">
                <!-- Badge & Icono -->
                <div class="flex items-center justify-between">
                  <span
                    class="px-3 py-1 text-xs font-bold uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {{ problem.badge }}
                  </span>
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary"
                  >
                    <component :is="problem.icon" class="w-6 h-6" />
                  </div>
                </div>

                <!-- Dolor -->
                <div class="space-y-3">
                  <h4
                    class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight"
                  >
                    {{ problem.symptom }}
                  </h4>
                  <p
                    class="text-slate-600 dark:text-slate-400 text-base leading-relaxed"
                  >
                    {{ problem.painPoint }}
                  </p>
                </div>

                <!-- Solución & Impacto -->
                <div
                  class="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-700/50"
                >
                  <div class="space-y-2">
                    <span
                      class="text-xs font-bold text-primary uppercase tracking-wider block"
                    >
                      Nuestra Solución
                    </span>
                    <p
                      class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      {{ problem.solution }}
                    </p>
                  </div>
                  <div
                    class="space-y-2 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10"
                  >
                    <span
                      class="text-xs font-bold text-primary uppercase tracking-wider block"
                    >
                      Impacto y Retorno
                    </span>
                    <p
                      class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed"
                    >
                      {{ problem.roi }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div
                class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-end"
              >
                <NuxtLink
                  :to="problem.link"
                  class="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors duration-300 w-full sm:w-auto justify-center text-center text-sm"
                >
                  {{ problem.ctaText }}
                  <ArrowRight
                    class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Reglas de oro (pilares) -->
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
          class="text-center text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto"
        >
          No construimos software para lucirnos; lo hacemos bajo principios claros
          enfocados en el éxito de tu negocio.
        </p>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
        >
          <div
            v-for="pillar in pillars"
            :key="pillar.name"
            class="group relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
          >
            <div
              class="absolute top-0 left-0 right-0 h-1 bg-primary opacity-60 group-hover:opacity-100 transition-opacity"
            ></div>
            <div
              class="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-sm"
            >
              {{ pillar.letter }}
            </div>
            <h4 class="font-bold text-slate-900 dark:text-white text-base mb-2">
              {{ pillar.name }}
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {{ pillar.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Garantías -->
      <div
        :class="{
          'animate-fade-in-up delay-300': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <div
          class="max-w-7xl mx-auto p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/50 shadow-lg"
        >
          <h3
            class="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white text-center mb-8"
          >
            Lo que <span class="text-primary">garantizamos</span> en cada proyecto
          </h3>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="guarantee in guarantees"
              :key="guarantee.text"
              class="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
            >
              <div
                class="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors"
              >
                <component :is="guarantee.icon" class="w-6 h-6 text-primary" />
              </div>
              <div class="text-center">
                <span
                  class="font-bold text-slate-800 dark:text-white text-sm block"
                  >{{ guarantee.text }}</span
                >
                <span
                  class="text-xs text-slate-500 dark:text-slate-400 mt-1 block"
                  >{{ guarantee.desc }}</span
                >
              </div>
            </div>
          </div>
        </div>
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
