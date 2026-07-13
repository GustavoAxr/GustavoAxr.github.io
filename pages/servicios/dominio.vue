<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  RefreshCw,
  Globe2,
  AtSign,
  Search,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("dominio");

useSeoMeta({
  title: "Registro de Dominio - CODEGAHP | Tu Identidad Digital",
  description:
    "Registra tu dominio .com, .mx, .net y más. Asegura tu identidad en internet con un nombre único y memorable para tu marca.",
  ogTitle: "Registro de Dominio | CODEGAHP",
  ogDescription:
    "Encuentra y registra el dominio perfecto para tu negocio. Extensiones .com, .mx, .net y más.",
});

const tlds = [
  {
    ext: ".com",
    desc: "El más popular a nivel mundial",
    price: "Desde $250/año",
  },
  { ext: ".mx", desc: "Presencia mexicana oficial", price: "Desde $350/año" },
  { ext: ".com.mx", desc: "Comercio mexicano", price: "Desde $300/año" },
  { ext: ".net", desc: "Ideal para tecnología", price: "Desde $280/año" },
  { ext: ".org", desc: "Organizaciones y ONGs", price: "Desde $270/año" },
  { ext: ".io", desc: "Startups y tech", price: "Desde $500/año" },
];

const benefits = [
  {
    icon: Fingerprint,
    title: "Identidad Única",
    desc: "Tu dominio es tu dirección en internet. Un nombre memorable que tus clientes recordarán fácilmente.",
  },
  {
    icon: ShieldCheck,
    title: "Protección de Marca",
    desc: "Evita que otros registren tu nombre. Protege tu marca y evita suplantaciones.",
  },
  {
    icon: AtSign,
    title: "Correo Profesional",
    desc: "Con tu dominio propio puedes crear correos corporativos: contacto@tunegocio.com.",
  },
  {
    icon: RefreshCw,
    title: "Renovación Automática",
    desc: "Nos encargamos de la renovación para que nunca pierdas tu dominio por olvido.",
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
        <div class="max-w-3xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <component :is="service.icon" class="w-4 h-4" />
            Para tu Negocio
          </div>
          <h1
            class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Tu Nombre en
            <span class="text-emerald-500">Internet</span>
          </h1>
          <p
            class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
          >
            {{ service.desc }} El primer paso para construir tu presencia
            digital profesional.
          </p>

          <!-- Barra de búsqueda decorativa -->
          <div
            class="max-w-xl mx-auto flex items-center bg-white dark:bg-slate-800 rounded-2xl border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10 p-2"
          >
            <Search class="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
            <div class="flex-1 px-3 py-2 text-left text-slate-400 text-lg">
              tunegocio.com
            </div>
            <NuxtLink to="/contacto">
              <Button
                class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 rounded-xl"
              >
                Buscar
              </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Extensiones populares -->
    <section
      id="dom-tlds"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('dom-tlds')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Extensiones
            <span class="text-emerald-500">Disponibles</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Encuentra la extensión perfecta para tu negocio. Ofrecemos todas las
            extensiones populares.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="tld in tlds"
            :key="tld.ext"
            class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-center hover:border-emerald-500/50 transition-all duration-300 group hover:-translate-y-1"
          >
            <div class="text-2xl font-extrabold text-emerald-500 mb-1">
              {{ tld.ext }}
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">
              {{ tld.desc }}
            </p>
            <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {{ tld.price }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section
      id="dom-benefits"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('dom-benefits')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            ¿Por qué necesitas un
            <span class="text-emerald-500">dominio propio</span>?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
            v-for="benefit in benefits"
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

    <!-- CTA -->
    <SharedCtaBanner
      title="Asegura tu dominio"
      subtitle="hoy"
      description="Los buenos nombres se agotan rápido. Registra tu dominio antes de que alguien más lo tome."
      primary-label="Registrar Mi Dominio"
    />
  </div>
</template>
