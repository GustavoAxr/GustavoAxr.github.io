<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  ShieldCheck,
  Zap,
  RefreshCw,
  GitBranch,
  ArrowRight,
  Target,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  Shield,
  Workflow,
  Globe,
  Tractor,
  Server,
  Activity,
  HeartHandshake
} from "lucide-vue-next";

const isVisible = ref(false);
const activeStep = ref(-1);
let stepInterval: ReturnType<typeof setInterval> | null = null;

// Selected tab in the Solution Book
const activeProblemTab = ref("processes");

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // Auto-cycle action plan steps
          stepInterval = setInterval(() => {
            activeStep.value = (activeStep.value + 1) % actionPlan.length;
          }, 2500);
        }
      });
    },
    { threshold: 0.15 },
  );

  const section = document.getElementById("what-defines-us");
  if (section) observer.observe(section);
});

onUnmounted(() => {
  if (stepInterval) clearInterval(stepInterval);
});

const problems = [
  {
    id: "processes",
    tabTitle: "Procesos y Tareas",
    icon: Workflow,
    colorClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    glowColor: "rgba(16, 185, 129, 0.15)",
    badge: "Eficiencia Operativa",
    symptom: "¿Tu equipo pierde productividad en tareas manuales y repetitivas?",
    painPoint: "La ejecución manual de tareas rutinarias reduce el rendimiento del personal, introduce errores de captura inevitables y genera demoras en las entregas, afectando la rentabilidad operativa de tu organización.",
    solution: "Diseñamos e integramos flujos de trabajo automatizados y agentes inteligentes a la medida (con n8n y Zapier). Tus procesos se ejecutan de manera autónoma, continua y libre de errores humanos.",
    roi: "Optimiza hasta un 90% el tiempo dedicado a tareas repetitivas y elimina los errores de captura por completo.",
    ctaText: "Automatizar mis procesos",
    link: "/servicios/automatization"
  },
  {
    id: "visibility",
    tabTitle: "Presencia y Ventas",
    icon: Globe,
    colorClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    glowColor: "rgba(59, 130, 246, 0.15)",
    badge: "Presencia Corporativa",
    symptom: "¿Tus competidores captan clientes en canales digitales mientras tu empresa carece de presencia web sólida?",
    painPoint: "Carecer de un sitio web rápido, responsivo y posicionado en motores de búsqueda limita el alcance comercial de tu empresa, redirigiendo clientes potenciales hacia competidores con mayor visibilidad digital.",
    solution: "Desarrollamos sitios web y landing pages corporativas de alto impacto, diseñadas con técnicas avanzadas de conversión, optimización SEO integral y velocidades de carga inferiores a un segundo.",
    roi: "Incrementa de forma medible la captación de prospectos calificados y consolida la autoridad digital de tu marca.",
    ctaText: "Optimizar presencia digital",
    link: "/servicios/landing-page"
  },
  {
    id: "ranch",
    tabTitle: "Control Ganadero",
    icon: Tractor,
    colorClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    glowColor: "rgba(245, 158, 11, 0.15)",
    badge: "Sector Agropecuario",
    symptom: "¿Administras el inventario y trazabilidad ganadera de forma manual o con registros difíciles de actualizar?",
    painPoint: "La ausencia de un sistema centralizado de inventario, ciclos de vacunación, genealogía y movilizaciones dificulta el cumplimiento de normativas sanitarias y eleva el riesgo de pérdidas financieras.",
    solution: "Desplegamos el sistema LIDIA Ganadero: una plataforma optimizada para operación en campo (con soporte offline) que consolida el historial individual del ganado y automatiza reportes normativos.",
    roi: "Control del 100% de la trazabilidad y del inventario de activos desde cualquier dispositivo móvil, incluso sin internet.",
    ctaText: "Ver solución ganadera",
    link: "/servicios/lidia"
  },
  {
    id: "cloud-it",
    tabTitle: "Servidores y Nube",
    icon: Server,
    colorClass: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    glowColor: "rgba(249, 115, 22, 0.15)",
    badge: "Infraestructura Cloud",
    symptom: "¿Tu plataforma web presenta inestabilidad ante picos de tráfico o el costo de infraestructura es excesivo?",
    painPoint: "La inestabilidad o lentitud en servidores interrumpe la continuidad del negocio y ahuyenta a usuarios calificados, mientras que una infraestructura en la nube mal optimizada genera sobrecostos innecesarios.",
    solution: "Aseguramos tu infraestructura en Amazon Web Services (AWS) mediante balanceo de carga automático, políticas avanzadas de reducción de costes y monitoreo de alta disponibilidad.",
    roi: "Disponibilidad del 99.9% garantizada ante cualquier nivel de tráfico y reducción de hasta un 45% en costos de facturación de nube.",
    ctaText: "Optimizar infraestructura cloud",
    link: "/servicios/aws"
  }
];

const pillars = [
  {
    letter: "S",
    name: "Simplicidad Absoluta",
    desc: "Cero complicaciones técnicas para ti. Diseñamos interfaces extremadamente intuitivas que tu equipo dominará en minutos sin necesitar capacitaciones eternas.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/25",
  },
  {
    letter: "R",
    name: "Retorno de Inversión",
    desc: "No escribimos código por capricho técnico. Cada sistema, desarrollo o flujo de automatización tiene la meta única de reducir tus costes o aumentar tus ventas.",
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/25",
  },
  {
    letter: "E",
    name: "Estabilidad Extrema",
    desc: "Sistemas robustos que nunca te dejan colgado frente a tus clientes. Tu plataforma responderá rápido y sin caídas, garantizando la reputación de tu marca.",
    color: "from-teal-500 to-green-500",
    shadow: "shadow-teal-500/25",
  },
  {
    letter: "S",
    name: "Seguridad Corporativa",
    desc: "Protegemos tus datos más sensibles de fugas y pérdidas mediante cifrado de nivel bancario y respaldos automáticos continuos.",
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-green-500/25",
  },
  {
    letter: "E",
    name: "Escalabilidad Futura",
    desc: "Soluciones que crecen al ritmo de tu empresa. Arquitectura bien construida para añadir nuevas funciones sin tener que rehacer todo desde cero.",
    color: "from-emerald-500 to-primary",
    shadow: "shadow-emerald-500/25",
  },
];

const actionPlan = [
  {
    icon: Target,
    title: "Diagnóstico",
    desc: "Analizamos tu dolor operativo exacto y definimos el impacto real que tendrá la solución sin ningún compromiso.",
  },
  {
    icon: PenTool,
    title: "Propuesta de Impacto",
    desc: "Diseñamos el flujo de la solución y proyectamos tu retorno de inversión para que todo esté claro antes de empezar.",
  },
  {
    icon: Code2,
    title: "Construcción Directa",
    desc: "Escribimos software limpio e integramos los conectores que resolverán la ineficiencia de raíz y de forma definitiva.",
  },
  {
    icon: TestTube2,
    title: "Pruebas Reales",
    desc: "Validamos el sistema bajo estrés y simulación de errores para asegurar que funcione perfectamente en producción.",
  },
  {
    icon: Rocket,
    title: "Lanzamiento Seguro",
    desc: "Desplegamos tu nueva herramienta de forma fluida y sin detener en ningún momento la operación actual de tu empresa.",
  },
  {
    icon: Shield,
    title: "Cuidado Proactivo",
    desc: "Monitoreamos la salud de tu sistema y te acompañamos de forma continua para asegurar que tu negocio nunca se detenga.",
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
  <!-- Gradient divider for smooth transition from AboutHero -->
  <div class="relative">
    <div
      class="h-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-50 dark:to-slate-900"
    ></div>
    <div
      class="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50"
    ></div>
  </div>

  <section
    id="what-defines-us"
    class="py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Dot grid pattern -->
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]">
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
      <!-- Floating glow orbs -->
      <div
        class="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float-slow"
      ></div>
      <div
        class="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-float-slow-reverse"
      ></div>
    </div>

    <div class="container max-w-7xl mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center max-w-3xl mx-auto mb-20"
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
          El Libro de
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-circuit-cyan"
            >Soluciones</span
          >
          de tu Negocio
        </h2>
        <p
          class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Identifica las ineficiencias que limitan el crecimiento de tu empresa. Desarrollamos soluciones tecnológicas a la medida para optimizar procesos y potenciar la productividad.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- INTERACTIVE SOLUTION BOOK (Replacing Hexagonal SVG)         -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <div
        class="mb-24"
        :class="{
          'animate-fade-in-up delay-100': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <div class="grid lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
          <!-- Left Tabs list (4 cols) -->
          <div class="lg:col-span-4 flex flex-col gap-3 justify-center">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-2">
              Desafíos de Negocio Comunes
            </h3>
            <button
              v-for="problem in problems"
              :key="problem.id"
              @click="activeProblemTab = problem.id"
              class="w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group"
              :class="
                activeProblemTab === problem.id
                  ? 'bg-white dark:bg-slate-800 border-primary shadow-lg shadow-primary/5 scale-[1.02]'
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
                class="w-4 h-4 text-primary transition-transform duration-300"
                :class="
                  activeProblemTab === problem.id
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'
                "
              />
            </button>
          </div>

          <!-- Right Solution Details (8 cols) -->
          <div class="lg:col-span-8 flex flex-col">
            <div
              v-for="problem in problems"
              :key="problem.id"
              v-show="activeProblemTab === problem.id"
              class="flex-1 bg-white dark:bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-slate-800/50 p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-500 animate-fade-in-up"
              :style="{
                'box-shadow': `0 20px 50px -10px ${problem.glowColor}`
              }"
            >
              <!-- Ambient background glow inside the card -->
              <div
                class="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                :style="{ background: problem.glowColor }"
              ></div>

              <div class="space-y-6 relative z-10">
                <!-- Badge & Icon -->
                <div class="flex items-center justify-between">
                  <span
                    class="px-3 py-1 text-xs font-bold uppercase rounded-full"
                    :class="problem.colorClass"
                  >
                    {{ problem.badge }}
                  </span>
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center text-primary"
                    :class="problem.colorClass"
                  >
                    <component :is="problem.icon" class="w-6 h-6" />
                  </div>
                </div>

                <!-- Pain point highlight -->
                <div class="space-y-3">
                  <h4 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {{ problem.symptom }}
                  </h4>
                  <p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {{ problem.painPoint }}
                  </p>
                </div>

                <!-- Solution & Impact -->
                <div class="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div class="space-y-2">
                    <span class="text-xs font-bold text-primary uppercase tracking-wider block">
                      Nuestra Solución:
                    </span>
                    <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {{ problem.solution }}
                    </p>
                  </div>
                  <div class="space-y-2 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10">
                    <span class="text-xs font-bold text-primary uppercase tracking-wider block">
                      Impacto y Retorno:
                    </span>
                    <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {{ problem.roi }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- CTA Area -->
              <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <span class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Activity class="w-4 h-4 text-primary animate-pulse" />
                  Solución de alto rendimiento garantizada
                </span>
                <NuxtLink
                  :to="problem.link"
                  class="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 w-full sm:w-auto justify-center text-center text-sm"
                >
                  {{ problem.ctaText }}
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- PILLARS - Strategic Advantages (Replacing SOLID)            -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <div
        class="mb-20"
        :class="{
          'animate-fade-in-up delay-200': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <h3
          class="text-2xl lg:text-3xl font-bold text-center text-slate-900 dark:text-white mb-4"
        >
          Las 5 Reglas de Oro de
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-primary"
            >Nuestras Soluciones</span
          >
        </h3>
        <p
          class="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto"
        >
          No diseñamos software para lucirnos técnicamente, lo construimos bajo principios rígidos enfocados en el éxito de tu negocio.
        </p>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
        >
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.letter"
            class="group relative"
            :style="{ animationDelay: `${index * 100 + 200}ms` }"
          >
            <div
              class="relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full"
              :class="[`hover:${pillar.shadow}`]"
            >
              <!-- Gradient accent bar -->
              <div
                class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity"
                :class="pillar.color"
              ></div>

              <!-- Letter Indicator representing standard layout -->
              <div
                class="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                :class="[pillar.color, pillar.shadow]"
              >
                {{ pillar.letter }}
              </div>

              <!-- Content -->
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-2">
                {{ pillar.name }}
              </h4>
              <p
                class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
              >
                {{ pillar.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- ACTION PLAN - Transforming your pain into solutions         -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <div
        class="mb-20"
        :class="{
          'animate-fade-in-up delay-300': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <h3
          class="text-2xl lg:text-3xl font-bold text-center text-slate-900 dark:text-white mb-4"
        >
          El Camino de la
          <span class="text-primary">Transformación</span>
        </h3>
        <p
          class="text-center text-slate-500 dark:text-slate-400 mb-14 max-w-xl mx-auto"
        >
          Cómo erradicamos tus ineficiencias operativas y garantizamos el éxito de la solución
        </p>

        <div class="relative max-w-7xl mx-auto">
          <!-- Connecting Line (desktop) -->
          <div
            class="hidden lg:block absolute top-[60px] left-[8%] right-[8%] h-[2px]"
          >
            <div
              class="w-full h-full bg-slate-200 dark:bg-slate-700 rounded-full"
            ></div>
            <div
              class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-circuit-cyan to-primary rounded-full transition-all duration-1000 pipeline-progress"
              :style="{
                width:
                  activeStep >= 0
                    ? `${((activeStep + 1) / actionPlan.length) * 100}%`
                    : '0%',
              }"
            ></div>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4"
          >
            <div
              v-for="(step, index) in actionPlan"
              :key="step.title"
              class="relative group"
            >
              <!-- Step Card -->
              <div
                class="relative rounded-2xl p-5 lg:p-4 xl:p-5 text-center transition-all duration-500 border"
                :class="
                  activeStep === index
                    ? 'bg-primary/10 dark:bg-primary/15 border-primary/40 shadow-lg shadow-primary/10 scale-[1.03]'
                    : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/50 shadow-sm hover:shadow-md'
                "
              >
                <!-- Step Number Indicator -->
                <div
                  class="w-[120px] h-[120px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] mx-auto mb-4 rounded-full flex items-center justify-center relative"
                >
                  <!-- Outer ring -->
                  <div
                    class="absolute inset-0 rounded-full transition-all duration-500"
                    :class="
                      activeStep === index
                        ? 'bg-primary/20 ring-2 ring-primary/40 ring-offset-2 ring-offset-white dark:ring-offset-slate-800'
                        : 'bg-slate-100 dark:bg-slate-700/50'
                    "
                  ></div>
                  <!-- Pulse ring when active -->
                  <div
                    v-if="activeStep === index"
                    class="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow"
                  ></div>
                  <!-- Icon -->
                  <component
                    :is="step.icon"
                    class="relative z-10 w-10 h-10 lg:w-7 lg:h-7 xl:w-8 xl:h-8 transition-all duration-300"
                    :class="
                      activeStep === index
                        ? 'text-primary scale-110'
                        : 'text-slate-400 dark:text-slate-500 group-hover:text-primary/70'
                    "
                  />
                </div>

                <!-- Step Number Badge -->
                <div
                  class="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-all duration-300 z-20"
                  :class="
                    activeStep === index
                      ? 'bg-primary text-white shadow-primary/30'
                      : activeStep > index
                        ? 'bg-primary/80 text-white'
                        : 'bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600'
                  "
                >
                  {{ index + 1 }}
                </div>

                <h4
                  class="font-bold text-sm mb-1 transition-colors"
                  :class="
                    activeStep === index
                      ? 'text-primary'
                      : 'text-slate-900 dark:text-white'
                  "
                >
                  {{ step.title }}
                </h4>
                <p
                  class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                >
                  {{ step.desc }}
                </p>
              </div>

              <!-- Arrow connector (mobile/tablet) -->
              <ArrowRight
                v-if="index < actionPlan.length - 1"
                class="hidden lg:block absolute top-[52px] -right-3 w-5 h-5 text-slate-300 dark:text-slate-600 z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════════════════ -->
      <!-- GUARANTEES - Visual Badges                                -->
      <!-- ═══════════════════════════════════════════════════════════ -->
      <div
        :class="{
          'animate-fade-in-up delay-400': isVisible,
          'opacity-0': !isVisible,
        }"
      >
        <div
          class="max-w-7xl mx-auto p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-2xl relative overflow-hidden"
        >
          <!-- Background circuit decoration -->
          <div class="absolute inset-0 opacity-5">
            <div
              class="absolute inset-0"
              style="
                background-image: radial-gradient(
                  circle at 2px 2px,
                  #2dce9a 1px,
                  transparent 0
                );
                background-size: 30px 30px;
              "
            ></div>
          </div>
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px]"
          ></div>

          <div class="relative z-10">
            <h3
              class="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white text-center mb-8"
            >
              Lo que <span class="text-primary">garantizamos</span> en cada proyecto
            </h3>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                v-for="guarantee in guarantees"
                :key="guarantee.text"
                class="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all"
                >
                  <component
                    :is="guarantee.icon"
                    class="w-6 h-6 text-primary"
                  />
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
    </div>
  </section>
</template>

<style scoped>
/* ── Animations ─────────────────────────────────────────── */
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
.delay-400 {
  animation-delay: 0.4s;
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

/* ── Floating Background Orbs ──────────────────────────── */
.animate-float-slow {
  animation: floatSlow 15s ease-in-out infinite;
}
.animate-float-slow-reverse {
  animation: floatSlow 18s ease-in-out infinite reverse;
}

@keyframes floatSlow {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-30px) translateX(20px);
  }
  66% {
    transform: translateY(15px) translateX(-15px);
  }
}

/* ── Pipeline Progress ─────────────────────────────────── */
.pipeline-progress {
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ── Ping Animation ────────────────────────────────────── */
.animate-ping-slow {
  animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pingSlow {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  75%,
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
