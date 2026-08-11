<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MousePointerClick,
  Search,
  Smartphone,
  Zap,
  Palette,
  Code2,
  Rocket,
  MessageSquare,
  Sparkles,
  Eye,
  Target,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("landing-page");

useSeoMeta({
  title: "Sitio Web Profesional - CODEGAHP | Diseño Web que Convierte",
  description:
    "Diseñamos sitios web profesionales que convierten visitantes en clientes. Diseño responsive, optimización SEO y velocidad de carga superior.",
  ogTitle: "Sitio Web Profesional | CODEGAHP",
  ogDescription:
    "Páginas web modernas, rápidas y optimizadas para convertir. Diseño a medida para tu negocio.",
});

const benefits = [
  {
    icon: MousePointerClick,
    title: "Alta Conversión",
    value: "+320%",
    desc: "Más leads vs un sitio genérico",
  },
  {
    icon: Search,
    title: "SEO Integrado",
    value: "Top 10",
    desc: "Posicionamiento orgánico en Google",
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    value: "3 en 1",
    desc: "Móvil, tablet y escritorio perfecto",
  },
  {
    icon: Zap,
    title: "Ultra Rápido",
    value: "<1s",
    desc: "Tiempo de carga optimizado",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Diagnóstico Inicial",
    desc: "Analizamos los objetivos comerciales y el público objetivo de tu empresa.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    desc: "Modelamos interfaces de usuario bajo estándares de usabilidad.",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    desc: "Implementamos código optimizado bajo metodologías ágiles.",
  },
  {
    icon: Eye,
    title: "Pruebas de Calidad",
    desc: "Evaluamos rendimiento, SEO y usabilidad multidispositivo.",
  },
  {
    icon: Rocket,
    title: "Despliegue y Soporte",
    desc: "Lanzamiento de la plataforma y acompañamiento post-producción.",
  },
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
    <!-- Hero — fullscreen centered con floating UI elements -->
    <section class="min-h-[85vh] flex items-center relative overflow-hidden">
      <div
        class="absolute inset-0 bg-primary/5 dark:bg-primary/10"
      ></div>

      <!-- Floating UI mockup elements -->
      <div
        class="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block"
      >
        <div
          class="floating-el absolute top-[15%] right-[8%] w-48 h-12 rounded-lg bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center px-4 gap-2 opacity-60"
        >
          <div class="w-6 h-6 rounded bg-emerald-500"></div>
          <div class="flex-1 space-y-1.5">
            <div
              class="h-2 bg-slate-200 dark:bg-slate-600 rounded w-full"
            ></div>
            <div class="h-2 bg-slate-100 dark:bg-slate-700 rounded w-2/3"></div>
          </div>
        </div>
        <div
          class="floating-el-delay absolute top-[30%] left-[5%] w-36 h-36 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 p-4 opacity-50"
        >
          <div
            class="w-full h-12 rounded bg-gradient-to-r from-emerald-400 to-emerald-400 mb-3"
          ></div>
          <div class="space-y-2">
            <div class="h-2 bg-slate-200 dark:bg-slate-600 rounded"></div>
            <div class="h-2 bg-slate-200 dark:bg-slate-600 rounded w-2/3"></div>
          </div>
        </div>
        <div
          class="floating-el absolute bottom-[20%] right-[12%] w-40 h-10 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center opacity-50"
        >
          <span class="text-white text-xs font-bold tracking-wide"
            >COMPRAR AHORA</span
          >
        </div>
        <div
          class="floating-el-delay absolute bottom-[15%] left-[10%] w-28 h-28 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 p-3 opacity-40"
        >
          <div
            class="w-full h-full rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/40 flex items-center justify-center"
          >
            <Target class="w-8 h-8 text-emerald-500" />
          </div>
        </div>
      </div>

      <div
        class="container mx-auto px-4 relative z-10 animate-fade-in-up text-center"
      >
        <div
          class="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles class="w-4 h-4" />
          Diseño Web Profesional
        </div>
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          Sitios web que
          <span class="relative inline-block">
            <span>convierten</span>
            <svg
              class="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
            >
              <path
                d="M0 6 Q50 0 100 6 T200 6"
                stroke="url(#emerald-grad)"
                stroke-width="3"
                fill="none"
                class="squiggle"
              />
              <defs>
                <linearGradient id="emerald-grad">
                  <stop offset="0%" stop-color="#409028" />
                  <stop offset="100%" stop-color="#409028" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <br />visitantes en clientes
        </h1>
        <p
          class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Estructuramos canales de captación digital de alto rendimiento, optimizados para conversión, SEO y velocidades de carga superiores.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contacto">
            <Button
              size="lg"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-lg h-14 px-10 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 rounded-xl"
            >
              Solicitar Presupuesto
              <ArrowRight class="w-5 h-5 ml-2" />
            </Button>
          </NuxtLink>
          <NuxtLink to="/proyectos">
            <Button
              variant="outline"
              size="lg"
              class="border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-lg h-14 px-10 rounded-xl"
            >
              Ver Portafolio
            </Button>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats — Números grandes con bento grid -->
    <section
      id="lp-stats"
      data-animate
      class="py-24 transition-all duration-700"
      :class="
        visibleSections.has('lp-stats')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(b, i) in benefits"
            :key="b.title"
            class="relative overflow-hidden rounded-2xl p-6 md:p-8 group"
            :class="
              i === 0
                ? 'bg-emerald-600 text-white col-span-2 lg:col-span-1'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'
            "
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
              :class="
                i === 0
                  ? 'bg-emerald-400/30'
                  : 'bg-emerald-500/10 dark:bg-emerald-500/5'
              "
            ></div>
            <component
              :is="b.icon"
              class="w-6 h-6 mb-4"
              :class="i === 0 ? 'text-emerald-200' : 'text-emerald-500'"
            />
            <div
              class="text-4xl md:text-5xl font-black mb-1"
              :class="i === 0 ? '' : 'text-slate-900 dark:text-white'"
            >
              {{ b.value }}
            </div>
            <div
              class="font-bold mb-1"
              :class="
                i === 0 ? 'text-emerald-100' : 'text-slate-900 dark:text-white'
              "
            >
              {{ b.title }}
            </div>
            <p
              class="text-sm"
              :class="
                i === 0
                  ? 'text-emerald-200'
                  : 'text-slate-500 dark:text-slate-400'
              "
            >
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso — Horizontal connected steps -->
    <section
      id="lp-process"
      data-animate
      class="py-24 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('lp-process')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            De la idea al <span class="text-emerald-500">lanzamiento</span>
          </h2>
          <p class="text-lg text-slate-500 dark:text-slate-400">
            5 pasos. Un resultado extraordinario.
          </p>
        </div>

        <!-- Desktop: horizontal -->
        <div class="hidden md:flex items-start gap-0 relative">
          <div
            class="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 dark:from-emerald-800 dark:via-emerald-500 dark:to-emerald-800"
          ></div>
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            class="flex-1 text-center relative z-10 px-2"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-emerald-500 shadow-lg shadow-emerald-500/20 flex items-center justify-center mx-auto mb-4 rotate-45"
            >
              <component
                :is="step.icon"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400 -rotate-45"
              />
            </div>
            <span
              class="text-xs font-bold text-emerald-500 uppercase tracking-wider"
              >Paso {{ i + 1 }}</span
            >
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2"
            >
              {{ step.title }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              {{ step.desc }}
            </p>
          </div>
        </div>

        <!-- Mobile: vertical -->
        <div class="md:hidden space-y-6">
          <div v-for="(step, i) in steps" :key="step.title" class="flex gap-4">
            <div class="flex flex-col items-center">
              <div
                class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0"
              >
                {{ i + 1 }}
              </div>
              <div
                v-if="i < steps.length - 1"
                class="w-px flex-1 bg-emerald-300 dark:bg-emerald-700 mt-2"
              ></div>
            </div>
            <div class="pb-6">
              <h3 class="font-bold text-slate-900 dark:text-white">
                {{ step.title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Browser mockup -->
    <section
      id="lp-preview"
      data-animate
      class="py-24 transition-all duration-700"
      :class="
        visibleSections.has('lp-preview')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
            >
              Prototipo de Interfaz de
              <span class="text-emerald-500">Alto Rendimiento</span>
            </h2>
          </div>
          <div
            class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl shadow-emerald-500/10 browser-glow"
          >
            <div
              class="bg-slate-100 dark:bg-slate-800 px-4 py-3 flex items-center gap-3"
            >
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div
                class="flex-1 bg-white dark:bg-slate-900 rounded-lg px-4 py-1.5 text-xs text-slate-400 font-mono"
              >
                https://tunegocio.com
              </div>
            </div>
            <div class="bg-white dark:bg-slate-900 p-8 md:p-12">
              <!-- Fake hero -->
              <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="flex-1">
                  <div class="h-3 bg-emerald-500/80 rounded w-24 mb-4"></div>
                  <div class="space-y-2 mb-6">
                    <div
                      class="h-5 bg-slate-800 dark:bg-white/80 rounded w-full"
                    ></div>
                    <div
                      class="h-5 bg-slate-800 dark:bg-white/80 rounded w-4/5"
                    ></div>
                  </div>
                  <div class="space-y-1.5 mb-6">
                    <div
                      class="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-full"
                    ></div>
                    <div
                      class="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-3/4"
                    ></div>
                  </div>
                  <div
                    class="h-10 w-36 bg-gradient-to-r from-emerald-500 to-emerald-500 rounded-lg"
                  ></div>
                </div>
                <div
                  class="w-48 h-36 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-900/30 flex items-center justify-center"
                >
                  <Sparkles class="w-12 h-12 text-emerald-400" />
                </div>
              </div>
              <!-- Fake cards -->
              <div class="mt-8 grid grid-cols-3 gap-4">
                <div
                  v-for="n in 3"
                  :key="n"
                  class="h-24 rounded-xl border border-slate-100 dark:border-slate-800 p-4"
                >
                  <div
                    class="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-900/30 mb-2"
                  ></div>
                  <div
                    class="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA — full width gradient -->
  </div>
</template>

<style scoped>
.floating-el {
  animation: floatUp 6s ease-in-out infinite;
}
.floating-el-delay {
  animation: floatUp 7s ease-in-out 1s infinite;
}
@keyframes floatUp {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(1deg);
  }
}
.squiggle {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawSquiggle 1.5s ease-out 0.5s forwards;
}
@keyframes drawSquiggle {
  to {
    stroke-dashoffset: 0;
  }
}
.browser-glow {
  transition: box-shadow 0.5s;
}
.browser-glow:hover {
  box-shadow: 0 25px 80px -20px rgba(147, 51, 234, 0.25);
}
</style>
