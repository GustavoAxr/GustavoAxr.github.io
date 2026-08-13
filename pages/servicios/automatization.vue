<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Zap,
  Workflow,
  Cpu,
  RefreshCcw,
  Blocks,
  Network,
  Rocket,
  Clock,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("automatization");

useSeoMeta({
  title: "Automatización de Procesos - CODEGAHP | Eficiencia Operativa con IA",
  description:
    "Optimice las operaciones de su empresa mediante la integración de sistemas y el despliegue de flujos de trabajo automatizados y agentes inteligentes.",
  ogTitle: "Automatización de Procesos de Negocio | CODEGAHP",
  ogDescription:
    "Incremente la productividad operativa. Conectamos sus herramientas críticas con N8N, Zapier, Make y agentes de IA.",
});

const benefits = [
  {
    icon: Clock,
    title: "Optimización del Tiempo Operativo",
    desc: "Elimine tareas repetitivas de bajo valor. Implementamos flujos automáticos continuos y autónomos.",
  },
  {
    icon: Network,
    title: "Integración de Ecosistemas",
    desc: "Conectamos de forma bidireccional sus plataformas de CRM, ERP, correos y herramientas comerciales.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes de IA",
    desc: "Implementamos asistentes de Inteligencia Artificial especializados en atención de primer contacto y pre-calificación de prospectos.",
  },
  {
    icon: RefreshCcw,
    title: "Precisión y Confiabilidad",
    desc: "Los flujos estructurados minimizan la tasa de error en la transferencia de datos y facturación.",
  },
  {
    icon: Workflow,
    title: "Flujos N8N, Make y Zapier",
    desc: "Arquitecturas de integración escalables, self-hosted o en la nube, especializadas en secuencias de multi-paso.",
  },
  {
    icon: Cpu,
    title: "Escalabilidad Estructural",
    desc: "Modifique y amplíe flujos operativos de forma ágil a medida que aumente el volumen de su empresa.",
  },
];

const processSteps = [
  "Auditoría profunda de cuellos de botella operativos y análisis de tareas",
  "Diseño y mapeo estratégico de los escenarios de flujos automatizados ideales",
  "Implementación e integración con Make, N8N, Zapier o scripts personalizados",
  "Pruebas de estrés para garantizar la integridad y seguridad de datos sensibles",
  "Despliegue, capacitación, monitoreo constante e iteración basada en métricas",
];

const visibleSections = ref<Set<string>>(new Set());

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.value.add(entry.target.id);
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll("[data-animate]")
    .forEach((el) => observer.observe(el));
  onUnmounted(() => observer.disconnect());
});
</script>

<template>
  <div v-if="service" class="min-h-screen">
    <!-- Hero -->
    <section class="py-20 lg:py-28 relative overflow-hidden">
      <!-- Glow background fuchsia/violet -->
      <div
        class="absolute inset-0 bg-primary/5 dark:bg-primary/10"
      ></div>
      <div
        class="container max-w-7xl mx-auto px-4 relative z-10 animate-fade-in-up"
      >
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center gap-3 mb-6">
            <div
              class="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full"
            >
              <component :is="service.icon" class="w-4 h-4" />
              Ingeniería de Flujos
            </div>
            <span
              class="inline-flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-bold px-4 py-1.5 rounded-full"
            >
              <Zap class="w-3.5 h-3.5 fill-current" />
              Productividad 10x
            </span>
          </div>

          <h1
            class="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Automatización de
            <span>Procesos</span>
            e
            <span>IA</span>
          </h1>
          <p
            class="text-xl text-slate-500 dark:text-slate-400 font-medium mb-4"
          >
            Optimización del tiempo operativo y reducción de errores de captura
          </p>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            {{ service.desc }} Integramos los sistemas clave de tu organización, desarrollamos conexiones a la medida e implementamos agentes inteligentes orientados a optimizar la productividad de tu negocio.
          </p>
          <NuxtLink to="/contacto">
            <Button
              size="lg"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-lg h-12 px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 rounded-[5px]"
            >
              Iniciar Proyecto de Automatización
              <Rocket class="w-5 h-5 ml-2" />
            </Button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Beneficios / Modulos -->
    <section
      id="auto-modules"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('auto-modules')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Un ecosistema que trabaja <br class="md:hidden" />
            <span class="text-emerald-600 dark:text-emerald-400"
              >exclusivamente por ti</span
            >
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Implementamos arquitecturas modernas que actúan como puente
            cognitivo entre sistemas y cerebros digitales al servicio de tu
            empresa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="mod in benefits"
            :key="mod.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 group shadow-sm hover:shadow-md hover:shadow-emerald-500/10"
          >
            <div
              class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
            >
              <component
                :is="mod.icon"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"
            >
              {{ mod.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ mod.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enfoque / Visión -->
    <section
      id="auto-vision"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700 border-t border-slate-100 dark:border-slate-800"
      :class="
        visibleSections.has('auto-vision')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container max-w-7xl mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Nuestra hoja de
            <span class="text-emerald-600 dark:text-emerald-400">Ruta</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10">
            No solo instalamos software. Analizamos tu empresa como un motor
            complejo para hacerla más eficiente, escalable y resistente al error
            humano desde el primer clic.
          </p>
          <div class="space-y-4 text-left">
            <div
              v-for="(step, index) in processSteps"
              :key="step"
              class="flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm hover:border-emerald-500/30 transition-colors"
            >
              <div
                class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border overflow-hidden border-slate-200 dark:border-slate-700 flex items-center shadow-inner justify-center flex-shrink-0 group relative text-emerald-600 dark:text-emerald-400"
              >
                <div
                  class="absolute inset-0 bg-primary/10"
                ></div>
                <span class="font-bold relative z-10">{{ index + 1 }}</span>
              </div>
              <span
                class="text-base font-medium text-slate-700 dark:text-slate-300"
              >
                {{ step }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
