<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Database,
  HardDrive,
  Shield,
  TrendingUp,
  Cog,
  Server,
  Globe,
  Lock,
  Zap,
  BarChart3,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("aws");

useSeoMeta({
  title: "Servicios en la Nube (AWS) - CODEGAHP | Cloud Computing Empresarial",
  description:
    "Infraestructura escalable en Amazon Web Services. Configuración, migración, optimización y soporte continuo para tu empresa en la nube.",
  ogTitle: "Servicios AWS | CODEGAHP",
  ogDescription:
    "Infraestructura cloud con Amazon Web Services. Escalabilidad, seguridad y rendimiento para tu negocio.",
});

const awsServices = [
  {
    icon: Server,
    name: "EC2",
    title: "Servidores Virtuales",
    desc: "Instancias escalables que se adaptan a la demanda de tu aplicación.",
  },
  {
    icon: HardDrive,
    name: "S3",
    title: "Almacenamiento",
    desc: "Almacenamiento ilimitado para archivos, backups y contenido estático.",
  },
  {
    icon: Database,
    name: "RDS",
    title: "Bases de Datos",
    desc: "Bases de datos administradas: MySQL, PostgreSQL, Aurora y más.",
  },
  {
    icon: Globe,
    name: "CloudFront",
    title: "CDN Global",
    desc: "Red de distribución que entrega tu contenido rápidamente en todo el mundo.",
  },
  {
    icon: Lock,
    name: "IAM",
    title: "Seguridad",
    desc: "Gestión de accesos y permisos para proteger tu infraestructura.",
  },
  {
    icon: Cog,
    name: "Lambda",
    title: "Serverless",
    desc: "Ejecuta código sin administrar servidores. Paga solo por lo que usas.",
  },
];

const cloudBenefits = [
  {
    icon: TrendingUp,
    title: "Escalabilidad Automática",
    desc: "Tu infraestructura crece y se reduce automáticamente según la demanda. Sin desperdiciar recursos.",
  },
  {
    icon: Shield,
    title: "Seguridad de Clase Mundial",
    desc: "La misma seguridad que usan Netflix, NASA y las empresas más grandes del mundo.",
  },
  {
    icon: Zap,
    title: "Rendimiento Global",
    desc: "Centros de datos en todo el mundo para que tu aplicación responda rápido desde cualquier lugar.",
  },
  {
    icon: BarChart3,
    title: "Paga por lo que Usas",
    desc: "Modelo de precios flexible. Sin inversiones iniciales en hardware. Solo pagas lo que consumes.",
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
        class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 dark:from-orange-500/10 dark:to-amber-500/10"
      ></div>
      <div class="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <component :is="service.icon" class="w-4 h-4" />
            Infraestructura
          </div>
          <h1
            class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            El Poder de
            <span class="text-orange-500">Amazon Web Services</span>
          </h1>
          <p
            class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
          >
            {{ service.desc }} Llevamos tu negocio a la nube con la plataforma
            cloud más grande del mundo.
          </p>

          <!-- Visual de nube -->
          <div class="flex justify-center gap-6 flex-wrap">
            <div
              v-for="item in awsServices.slice(0, 3)"
              :key="item.name"
              class="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              <component :is="item.icon" class="w-4 h-4 text-orange-500" />
              {{ item.name }}
            </div>
          </div>

          <div class="mt-8">
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-orange-500 hover:bg-orange-600 text-white text-lg h-12 px-8 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Migrar a la Nube
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios AWS -->
    <section
      id="aws-services"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('aws-services')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Servicios <span class="text-orange-500">AWS</span> que Administramos
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Configuramos, optimizamos y mantenemos tu infraestructura en la
            nube.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in awsServices"
            :key="item.name"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-orange-500/50 transition-all duration-300 group"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors"
              >
                <component
                  :is="item.icon"
                  class="w-5 h-5 text-orange-600 dark:text-orange-400"
                />
              </div>
              <div>
                <span class="text-xs font-bold text-orange-500 uppercase">{{
                  item.name
                }}</span>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ item.title }}
                </h3>
              </div>
            </div>
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
      id="aws-benefits"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('aws-benefits')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ¿Por qué <span class="text-orange-500">la nube</span>?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
            v-for="benefit in cloudBenefits"
            :key="benefit.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-orange-500/50 transition-all duration-300 group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors"
            >
              <component
                :is="benefit.icon"
                class="w-6 h-6 text-orange-600 dark:text-orange-400"
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

    <!-- CTA -->
    <SharedCtaBanner
      title="Lleva tu empresa"
      subtitle="a la nube"
      description="Consultoría gratuita para evaluar tu infraestructura y planificar tu migración a AWS."
      primary-label="Solicitar Consultoría"
    />
  </div>
</template>
