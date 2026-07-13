<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  HardDrive,
  Users,
  Smartphone,
  Star,
  Lock,
  Mail,
  Inbox,
  Send,
} from "lucide-vue-next";

const { getServiceBySlug } = useServices();
const service = getServiceBySlug("email");

useSeoMeta({
  title: "Correo Corporativo - CODEGAHP | Email Profesional con tu Dominio",
  description:
    "Correo electrónico corporativo con tu propio dominio. Proyecta profesionalismo, seguridad y confianza con tu@tuempresa.com.",
  ogTitle: "Correo Corporativo | CODEGAHP",
  ogDescription:
    "Email profesional con tu dominio. Seguridad, almacenamiento y acceso desde cualquier dispositivo.",
});

const benefits = [
  {
    icon: Star,
    title: "Imagen Profesional",
    desc: "Un correo como contacto@tuempresa.com genera más confianza que una cuenta genérica de Gmail o Hotmail.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    desc: "Antispam, antivirus y cifrado incluidos. Protege la comunicación sensible de tu empresa.",
  },
  {
    icon: HardDrive,
    title: "Almacenamiento Amplio",
    desc: "Espacio generoso para correos, archivos adjuntos y contactos. Sin preocuparte por el espacio.",
  },
  {
    icon: Smartphone,
    title: "Acceso Multiplataforma",
    desc: "Lee y responde desde tu celular, tablet, computadora o navegador web. Siempre conectado.",
  },
];

const features = [
  { icon: Lock, text: "Cifrado SSL/TLS en tránsito" },
  { icon: Shield, text: "Filtro antispam avanzado" },
  { icon: Users, text: "Cuentas ilimitadas disponibles" },
  { icon: HardDrive, text: "Almacenamiento escalable" },
  { icon: Smartphone, text: "Compatible con Outlook y Gmail" },
  { icon: Send, text: "Autoresponders y firmas HTML" },
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
              <span class="block text-emerald-500">tu@tuempresa.com</span>
            </h1>
            <p
              class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
            >
              {{ service.desc }} Comunica profesionalismo en cada mensaje que
              envías.
            </p>
            <NuxtLink to="/contacto">
              <Button
                size="lg"
                class="bg-emerald-500 hover:bg-emerald-600 text-white text-lg h-12 px-8 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5"
              >
                Activar Mi Correo
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>

          <!-- Mockup de bandeja de email -->
          <div class="hidden lg:block">
            <div
              class="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 overflow-hidden shadow-xl shadow-emerald-500/5"
            >
              <div
                class="bg-emerald-500/10 dark:bg-emerald-900/30 px-6 py-4 flex items-center gap-3"
              >
                <Inbox class="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span class="font-semibold text-slate-700 dark:text-slate-300"
                  >Bandeja de entrada</span
                >
                <span
                  class="ml-auto text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full"
                  >3 nuevos</span
                >
              </div>
              <div class="divide-y divide-slate-100 dark:divide-slate-800">
                <div
                  class="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div class="flex justify-between mb-1">
                    <span
                      class="font-semibold text-sm text-slate-800 dark:text-white"
                      >Cliente Nuevo</span
                    >
                    <span class="text-xs text-slate-400">10:30 AM</span>
                  </div>
                  <p class="text-sm text-slate-500 truncate">
                    Solicitud de cotización para proyecto web...
                  </p>
                </div>
                <div
                  class="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div class="flex justify-between mb-1">
                    <span
                      class="font-semibold text-sm text-slate-800 dark:text-white"
                      >Equipo de Ventas</span
                    >
                    <span class="text-xs text-slate-400">9:15 AM</span>
                  </div>
                  <p class="text-sm text-slate-500 truncate">
                    Reporte mensual de conversiones adjunto...
                  </p>
                </div>
                <div
                  class="px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <div class="flex justify-between mb-1">
                    <span
                      class="font-semibold text-sm text-slate-800 dark:text-white"
                      >Soporte Técnico</span
                    >
                    <span class="text-xs text-slate-400">Ayer</span>
                  </div>
                  <p class="text-sm text-slate-500 truncate">
                    Actualización de servidores completada...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Beneficios -->
    <section
      id="email-benefits"
      data-animate
      class="py-20 transition-all duration-700"
      :class="
        visibleSections.has('email-benefits')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Comunica
            <span class="text-emerald-500">profesionalismo</span>
          </h2>
          <p
            class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Cada email que envías es una oportunidad de reforzar la imagen de tu
            empresa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-500/50 transition-all duration-300 group"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
              >
                <component
                  :is="benefit.icon"
                  class="w-6 h-6 text-emerald-600 dark:text-emerald-400"
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

    <!-- Características -->
    <section
      id="email-features"
      data-animate
      class="py-20 bg-slate-50 dark:bg-slate-900/50 transition-all duration-700"
      :class="
        visibleSections.has('email-features')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      "
    >
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Todo lo que <span class="text-emerald-500">necesitas</span>
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10">
            Funcionalidades profesionales para la comunicación de tu empresa.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div
              v-for="feature in features"
              :key="feature.text"
              class="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <component
                :is="feature.icon"
                class="w-5 h-5 text-emerald-500 flex-shrink-0"
              />
              <span
                class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {{ feature.text }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <SharedCtaBanner
      title="Profesionaliza tu"
      subtitle="comunicación"
      description="Empieza a enviar correos desde tu@tuempresa.com hoy mismo."
      primary-label="Activar Mi Correo"
    />
  </div>
</template>
