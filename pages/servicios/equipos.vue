<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Wrench,
  Zap,
  HardDrive,
  Monitor,
  Cpu,
  Settings,
  PhoneCall,
  ClipboardCheck,
  Truck,
  CheckCircle2,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("equipos");

useSeoMeta({
  title: "Mantenimiento de Equipos - CODEGAHP | Soporte Técnico Profesional",
  description:
    "Diagnóstico, reparación y optimización de computadoras y dispositivos empresariales. Soporte técnico profesional para tu empresa.",
  ogTitle: "Mantenimiento de Equipos | CODEGAHP",
  ogDescription:
    "Reparación, diagnóstico y optimización de equipos de cómputo. Servicio profesional para empresas.",
});

const services = [
  {
    icon: Search,
    title: "Diagnóstico Completo",
    desc: "Análisis exhaustivo de hardware y software para identificar problemas y oportunidades de mejora.",
  },
  {
    icon: Wrench,
    title: "Reparación de Hardware",
    desc: "Reparamos pantallas, teclados, discos duros, fuentes de poder y más. Equipos de escritorio y laptops.",
  },
  {
    icon: Zap,
    title: "Optimización de Rendimiento",
    desc: "Limpieza de software, actualización de drivers, optimización de inicio y mejora del rendimiento general.",
  },
  {
    icon: HardDrive,
    title: "Recuperación de Datos",
    desc: "Recuperamos archivos de discos dañados, formateados o corruptos. Tu información es lo más valioso.",
  },
  {
    icon: Monitor,
    title: "Mantenimiento Preventivo",
    desc: "Programas de mantenimiento periódico para evitar fallas y extender la vida útil de tus equipos.",
  },
  {
    icon: Cpu,
    title: "Upgrades de Hardware",
    desc: "Actualizamos RAM, discos SSD, procesadores y más. Dale nueva vida a tus equipos existentes.",
  },
];

const processSteps = [
  {
    icon: PhoneCall,
    title: "Contacto",
    desc: "Nos describes el problema o necesidad. Agendamos una visita o recibes tu equipo en nuestro taller.",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Evaluamos el equipo a fondo y te presentamos un reporte con el diagnóstico y cotización.",
  },
  {
    icon: Settings,
    title: "Reparación",
    desc: "Con tu aprobación, procedemos a la reparación o mantenimiento utilizando refacciones de calidad.",
  },
  {
    icon: Truck,
    title: "Entrega",
    desc: "Te entregamos tu equipo funcionando perfectamente con garantía en el servicio realizado.",
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
    <!-- Hero -->
    <section class="py-20 lg:py-28 relative overflow-hidden">
      <div
        class="absolute inset-0 bg-primary/5 dark:bg-primary/10"
      ></div>
      <div class="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <component :is="service.icon" class="w-4 h-4" />
              Soporte Técnico
            </div>
            <h1
              class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              {{ service.title }}
              <span class="block text-emerald-500">Experto y Confiable</span>
            </h1>
            <p
              class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              {{ service.desc }} Tu tecnología funcionando al máximo para que tú
              te enfoques en tu negocio.
            </p>
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-emerald-500 hover:bg-emerald-600 text-white text-lg h-12 px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Solicitar Servicio
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Visual de hardware -->
          <div class="hidden lg:block">
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="item in services.slice(0, 4)"
                :key="item.title"
                class="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-center"
              >
                <component
                  :is="item.icon"
                  class="w-8 h-8 text-emerald-500 mx-auto mb-2"
                />
                <p
                  class="text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section
      id="eq-services"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('eq-services')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Nuestros
            <span class="text-emerald-500">Servicios</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Soluciones completas para mantener tus equipos en óptimas
            condiciones.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in services"
            :key="item.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
            >
              <component
                :is="item.icon"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ item.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso -->
    <section
      id="eq-process"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('eq-process')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Proceso de <span class="text-emerald-500">Atención</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Un flujo simple y transparente para que siempre sepas el estado de
            tu equipo.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="flex gap-6 mb-8 last:mb-0"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0"
              >
                {{ index + 1 }}
              </div>
              <div
                v-if="index < processSteps.length - 1"
                class="w-px flex-1 bg-primary/40 mt-2"
              ></div>
            </div>
            <div class="pb-8">
              <div class="flex items-center gap-3 mb-2">
                <component :is="step.icon" class="w-5 h-5 text-emerald-500" />
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                  {{ step.title }}
                </h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <SharedCtaBanner
      title="¿Tu equipo necesita"
      subtitle="atención?"
      description="Diagnóstico gratuito para equipos empresariales. Contáctanos y agenda tu servicio."
      primary-label="Agendar Servicio"
    />
  </div>
</template>
