<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Award,
  Search,
  Paintbrush,
  FileText,
  BarChart3,
  Globe,
  Lock,
  Headphones,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("corporativo");

useSeoMeta({
  title: "Presencia Digital Corporativa - CODEGAHP | SEO y Diseño Profesional",
  description:
    "Posiciona tu empresa en internet con un sitio web corporativo profesional. SEO, branding digital y diseño que transmite confianza y autoridad.",
  ogTitle: "Presencia Digital Corporativa | CODEGAHP",
  ogDescription:
    "Sitios web corporativos con SEO integrado. Posiciona tu marca y genera confianza en tu industria.",
});

const stats = [
  { value: "93%", label: "de experiencias online empiezan en un buscador" },
  { value: "75%", label: "juzga la credibilidad por el diseño web" },
  { value: "3x", label: "más leads con SEO vs publicidad pagada" },
];

const benefits = [
  {
    icon: Paintbrush,
    title: "Branding Profesional",
    desc: "Diseño alineado a tu identidad corporativa que refleja los valores y profesionalismo de tu empresa.",
  },
  {
    icon: Search,
    title: "SEO Estratégico",
    desc: "Posicionamiento orgánico para que tu empresa aparezca cuando tus clientes potenciales te busquen.",
  },
  {
    icon: Shield,
    title: "Confianza Digital",
    desc: "Un sitio web profesional genera credibilidad inmediata ante clientes, socios e inversionistas.",
  },
  {
    icon: Award,
    title: "Autoridad de Marca",
    desc: "Contenido estratégico que posiciona a tu empresa como líder y referente en tu industria.",
  },
];

const includes = [
  { icon: Globe, text: "Diseño web corporativo personalizado" },
  { icon: Search, text: "Optimización SEO on-page completa" },
  { icon: BarChart3, text: "Integración con Google Analytics" },
  { icon: Lock, text: "Certificado SSL y seguridad avanzada" },
  { icon: FileText, text: "Estrategia de contenido inicial" },
  { icon: Headphones, text: "Soporte técnico post-lanzamiento" },
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
        class="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-500/5 dark:from-blue-600/10 dark:to-indigo-500/10"
      ></div>
      <div class="container mx-auto px-4 relative z-10 animate-fade-in-up">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              class="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <component :is="service.icon" class="w-4 h-4" />
              Para tu Negocio
            </div>
            <h1
              class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              {{ service.title }}
              <span class="block text-blue-600 dark:text-blue-400"
                >con Impacto Real</span
              >
            </h1>
            <p
              class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              {{ service.desc }} Construimos tu presencia digital con estrategia
              SEO y diseño que genera resultados.
            </p>
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-blue-600 hover:bg-blue-700 text-white text-lg h-12 px-8 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Potenciar Mi Empresa
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Stats decorativos -->
          <div class="hidden lg:block">
            <div class="space-y-4">
              <div
                v-for="stat in stats"
                :key="stat.value"
                class="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 flex items-center gap-6"
              >
                <div
                  class="text-4xl font-extrabold text-blue-600 dark:text-blue-400 min-w-[80px]"
                >
                  {{ stat.value }}
                </div>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section
      id="corp-benefits"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('corp-benefits')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            El poder de una
            <span class="text-blue-600 dark:text-blue-400"
              >presencia digital</span
            >
            sólida
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Tu sitio web corporativo es el centro de tu estrategia digital y la
            primera impresión para miles de clientes potenciales.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors"
              >
                <component
                  :is="benefit.icon"
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white mb-2"
                >
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
        </div>
      </div>
    </section>

    <!-- Qué incluye -->
    <section
      id="corp-includes"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('corp-includes')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ¿Qué <span class="text-blue-600 dark:text-blue-400">incluye</span>?
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Todo lo que necesitas para establecer una presencia digital
            corporativa efectiva.
          </p>
        </div>

        <div class="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="item in includes"
            :key="item.text"
            class="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
          >
            <component
              :is="item.icon"
              class="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
            />
            <span
              class="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              {{ item.text }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <SharedCtaBanner
      title="Lleva tu empresa"
      subtitle="al siguiente nivel"
      description="Solicita una consultoría gratuita y descubre cómo potenciar tu presencia digital corporativa."
      primary-label="Agendar Consultoría"
    />
  </div>
</template>
