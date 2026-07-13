<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Zap,
  HardDrive,
  Clock,
  Lock,
  Gauge,
  Headphones,
  Database,
  CheckCircle2,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("hosting");

useSeoMeta({
  title: "Hospedaje Web Premium - CODEGAHP | Hosting Rápido y Seguro",
  description:
    "Hosting premium con 99.9% de uptime, SSL gratuito y soporte técnico 24/7. Servidores rápidos y seguros para tu sitio web.",
  ogTitle: "Hospedaje Web Premium | CODEGAHP",
  ogDescription:
    "Servidores rápidos y seguros con SSL incluido. Tu sitio siempre en línea con 99.9% de disponibilidad.",
});

const heroStats = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "SSL", label: "Certificado incluido" },
  { value: "<1s", label: "Tiempo de carga" },
];

const features = [
  {
    icon: Zap,
    title: "Velocidad SSD",
    desc: "Discos de estado sólido para que tu sitio cargue en milisegundos. Mejor experiencia para tus visitantes.",
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    desc: "Firewall, protección DDoS y monitoreo 24/7. Tu sitio protegido contra amenazas.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    desc: "Infraestructura redundante que garantiza que tu sitio esté siempre disponible para tus clientes.",
  },
  {
    icon: Lock,
    title: "SSL Gratuito",
    desc: "Certificado SSL incluido sin costo. Conexión segura que mejora tu SEO y genera confianza.",
  },
  {
    icon: Database,
    title: "Backups Diarios",
    desc: "Copias de seguridad automáticas todos los días. Restauración con un clic ante cualquier problema.",
  },
  {
    icon: Headphones,
    title: "Soporte Técnico",
    desc: "Equipo de soporte especializado disponible para resolver cualquier incidencia rápidamente.",
  },
];

const technicalBenefits = [
  "Panel de control intuitivo cPanel",
  "Bases de datos MySQL ilimitadas",
  "Correos electrónicos incluidos",
  "PHP 8.x y Node.js disponibles",
  "Instalador automático WordPress",
  "Migración gratuita desde otro hosting",
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
              Infraestructura
            </div>
            <h1
              class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              {{ service.title }}
              <span class="block text-emerald-600 dark:text-emerald-400">Siempre en Línea</span>
            </h1>
            <p
              class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              {{ service.desc }} Infraestructura de alto rendimiento para que tu
              negocio nunca se detenga.
            </p>
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-emerald-700 hover:bg-emerald-800 text-white text-lg h-12 px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Ver Planes
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Stats del servidor -->
          <div class="hidden lg:block">
            <div
              class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-8 shadow-xl shadow-emerald-500/5"
            >
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-3 h-3 rounded-full bg-green-400 animate-pulse"
                ></div>
                <span class="text-sm font-mono text-slate-500"
                  >servidor activo</span
                >
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div
                  v-for="stat in heroStats"
                  :key="stat.label"
                  class="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800"
                >
                  <div
                    class="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1"
                  >
                    {{ stat.value }}
                  </div>
                  <p class="text-xs text-slate-500">{{ stat.label }}</p>
                </div>
              </div>
              <div class="mt-6 space-y-3">
                <div class="flex justify-between text-sm">
                  <span class="text-slate-500">CPU</span>
                  <span class="text-emerald-700 dark:text-emerald-400 font-mono"
                    >12%</span
                  >
                </div>
                <div
                  class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"
                >
                  <div
                    class="bg-emerald-500 h-2 rounded-full"
                    style="width: 12%"
                  ></div>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-slate-500">RAM</span>
                  <span class="text-emerald-700 dark:text-emerald-400 font-mono"
                    >34%</span
                  >
                </div>
                <div
                  class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"
                >
                  <div
                    class="bg-emerald-500 h-2 rounded-full"
                    style="width: 34%"
                  ></div>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-slate-500">SSD</span>
                  <span class="text-emerald-700 dark:text-emerald-400 font-mono"
                    >28%</span
                  >
                </div>
                <div
                  class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2"
                >
                  <div
                    class="bg-emerald-500 h-2 rounded-full"
                    style="width: 28%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Características -->
    <section
      id="host-features"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('host-features')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Hosting de
            <span class="text-emerald-600 dark:text-emerald-400">Alto Rendimiento</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Todo lo que necesitas para que tu sitio funcione perfecto, rápido y
            seguro.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
            >
              <component
                :is="feature.icon"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ feature.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios técnicos -->
    <section
      id="host-tech"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('host-tech')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Todo <span class="text-emerald-500">incluido</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10">
            Cada plan incluye las herramientas que necesitas sin costos ocultos.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div
              v-for="item in technicalBenefits"
              :key="item"
              class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <CheckCircle2 class="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <SharedCtaBanner
      title="Migra tu sitio"
      subtitle="hoy mismo"
      description="Migración gratuita y sin downtime. Tu sitio estará en nuestros servidores en menos de 24 horas."
      primary-label="Contratar Hosting"
    />
  </div>
</template>
