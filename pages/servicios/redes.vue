<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Network,
  Wifi,
  Shield,
  Settings,
  Cable,
  Server,
  Eye,
  Lock,
  Zap,
  BarChart3,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("redes");

useSeoMeta({
  title: "Redes Empresariales - CODEGAHP | Conectividad Segura y Eficiente",
  description:
    "Diseño, instalación y mantenimiento de redes empresariales. Conectividad segura, rápida y confiable para tu empresa.",
  ogTitle: "Redes Empresariales | CODEGAHP",
  ogDescription:
    "Soluciones de conectividad empresarial. Diseño, instalación y mantenimiento de redes LAN, WLAN y VPN.",
});

const networkServices = [
  {
    icon: Cable,
    title: "Diseño de Red",
    desc: "Planificamos la topología ideal para tu empresa: switches, routers, cableado estructurado y puntos de acceso.",
  },
  {
    icon: Settings,
    title: "Instalación Profesional",
    desc: "Implementación completa con cableado certificado, configuración de equipos y puesta en marcha.",
  },
  {
    icon: Eye,
    title: "Monitoreo y Mantenimiento",
    desc: "Supervisión continua del rendimiento de tu red. Detección y resolución proactiva de problemas.",
  },
  {
    icon: Shield,
    title: "Seguridad de Red",
    desc: "Firewalls, VPNs, segmentación de red y políticas de acceso para proteger tu información.",
  },
  {
    icon: Wifi,
    title: "Redes Inalámbricas",
    desc: "Diseño e instalación de redes WiFi empresariales con cobertura completa y alto rendimiento.",
  },
  {
    icon: Server,
    title: "Servidores y NAS",
    desc: "Configuración de servidores locales, almacenamiento en red y sistemas de respaldo empresarial.",
  },
];

const networkBenefits = [
  {
    icon: Zap,
    title: "Máximo Rendimiento",
    desc: "Redes optimizadas para velocidad. Sin cuellos de botella que frenen la productividad de tu equipo.",
  },
  {
    icon: Shield,
    title: "Seguridad Integral",
    desc: "Protección en múltiples capas: desde el perímetro hasta cada dispositivo conectado.",
  },
  {
    icon: BarChart3,
    title: "Escalabilidad",
    desc: "Infraestructura que crece contigo. Añade usuarios y dispositivos sin rediseñar toda la red.",
  },
  {
    icon: Eye,
    title: "Visibilidad Total",
    desc: "Monitoreo en tiempo real de todos los dispositivos, tráfico y estado de la red.",
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
              <span class="block"
                >Conectividad sin Límites</span
              >
            </h1>
            <p
              class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              {{ service.desc }} La base tecnológica que mantiene a tu equipo
              conectado y productivo.
            </p>
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-emerald-600 hover:bg-emerald-700 text-white text-lg h-12 px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Diseñar Mi Red
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Visual de nodos de red -->
          <div class="hidden lg:block">
            <div class="relative w-full h-80">
              <!-- Nodos conectados SVG -->
              <svg class="w-full h-full" viewBox="0 0 400 300">
                <!-- Líneas de conexión -->
                <line
                  x1="200"
                  y1="50"
                  x2="80"
                  y2="150"
                  class="stroke-emerald-300 dark:stroke-emerald-700"
                  stroke-width="2"
                />
                <line
                  x1="200"
                  y1="50"
                  x2="320"
                  y2="150"
                  class="stroke-emerald-300 dark:stroke-emerald-700"
                  stroke-width="2"
                />
                <line
                  x1="80"
                  y1="150"
                  x2="140"
                  y2="250"
                  class="stroke-emerald-300 dark:stroke-emerald-700"
                  stroke-width="2"
                />
                <line
                  x1="320"
                  y1="150"
                  x2="260"
                  y2="250"
                  class="stroke-emerald-300 dark:stroke-emerald-700"
                  stroke-width="2"
                />
                <line
                  x1="80"
                  y1="150"
                  x2="320"
                  y2="150"
                  class="stroke-emerald-200 dark:stroke-emerald-800"
                  stroke-width="1"
                  stroke-dasharray="4"
                />
                <line
                  x1="140"
                  y1="250"
                  x2="260"
                  y2="250"
                  class="stroke-emerald-200 dark:stroke-emerald-800"
                  stroke-width="1"
                  stroke-dasharray="4"
                />

                <!-- Nodos -->
                <circle
                  cx="200"
                  cy="50"
                  r="24"
                  class="fill-emerald-500"
                  opacity="0.9"
                />
                <circle
                  cx="80"
                  cy="150"
                  r="20"
                  class="fill-emerald-400"
                  opacity="0.8"
                />
                <circle
                  cx="320"
                  cy="150"
                  r="20"
                  class="fill-emerald-400"
                  opacity="0.8"
                />
                <circle
                  cx="140"
                  cy="250"
                  r="16"
                  class="fill-emerald-300"
                  opacity="0.7"
                />
                <circle
                  cx="260"
                  cy="250"
                  r="16"
                  class="fill-emerald-300"
                  opacity="0.7"
                />

                <!-- Labels -->
                <text
                  x="200"
                  y="55"
                  text-anchor="middle"
                  class="fill-white text-xs font-bold"
                >
                  Router
                </text>
                <text
                  x="80"
                  y="155"
                  text-anchor="middle"
                  class="fill-white text-xs font-bold"
                >
                  SW1
                </text>
                <text
                  x="320"
                  y="155"
                  text-anchor="middle"
                  class="fill-white text-xs font-bold"
                >
                  SW2
                </text>
                <text
                  x="140"
                  y="255"
                  text-anchor="middle"
                  class="fill-white text-xs font-bold"
                >
                  AP
                </text>
                <text
                  x="260"
                  y="255"
                  text-anchor="middle"
                  class="fill-white text-xs font-bold"
                >
                  NAS
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section
      id="net-services"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('net-services')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Servicios de
            <span class="text-emerald-500">Redes</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Soluciones integrales de conectividad para empresas de cualquier
            tamaño.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in networkServices"
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

    <!-- Beneficios -->
    <section
      id="net-benefits"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('net-benefits')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ¿Por qué una red
            <span class="text-emerald-500">profesional</span>?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
            v-for="benefit in networkBenefits"
            :key="benefit.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
            >
              <component
                :is="benefit.icon"
                class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
              />
            </div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {{ benefit.title }}
            </h3>
            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {{ benefit.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
