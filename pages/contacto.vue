<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  Sparkles,
  Zap,
  Clock,
  Code2,
  Users,
  Wrench,
  HelpCircle,
} from "lucide-vue-next";
import AIChatDrawer from "@/components/AIChatDrawer.vue";

// SEO Meta Tags
useSeoMeta({
  title: "Contacto - CODEGAHP | Habla con Nosotros",
  description:
    "¿Tienes un proyecto en mente? Contáctanos y desarrollemos juntos la solución digital perfecta para tu negocio.",
  ogTitle: "Contacto | CODEGAHP - Desarrollo de Software",
  ogDescription:
    "Escríbenos y comienza tu proyecto de desarrollo de software con nosotros.",
});

const isVisible = ref(false);
const isAIChatOpen = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      });
    },
    { threshold: 0.1 },
  );

  const section = document.getElementById("contact-section");
  if (section) observer.observe(section);
});

// FAQ data
const faqs = ref([
  {
    icon: Clock,
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "Depende del alcance. Proyectos pequeños: 2-4 semanas. Sistemas empresariales: 2-6 meses. Siempre con cronogramas claros desde el inicio.",
    isOpen: false,
  },
  {
    icon: Code2,
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Vue.js, Nuxt, React, Node.js, PHP/Laravel, Java, Python, PostgreSQL y más. Elegimos la mejor stack según tu proyecto.",
    isOpen: false,
  },
  {
    icon: Wrench,
    question: "¿Ofrecen mantenimiento post-lanzamiento?",
    answer:
      "¡Sí! Planes de mantenimiento con actualizaciones de seguridad, corrección de bugs y mejoras continuas.",
    isOpen: false,
  },
  {
    icon: Users,
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer:
      "Startups, PyMEs y grandes empresas. Adaptamos metodología y soluciones a cada cliente.",
    isOpen: false,
  },
]);

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

// Social channels with brand colors
const channels = [
  {
    name: "WhatsApp",
    desc: "Respuesta en minutos",
    href: "https://wa.me/+529381065606",
    color: "from-green-500 to-emerald-600",
    icon: `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>`,
  },
  {
    name: "LinkedIn",
    desc: "Conecta profesional",
    href: "https://linkedin.com/company/codegahp",
    color: "from-blue-600 to-blue-700",
    icon: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
  },
  {
    name: "Instagram",
    desc: "Síguenos",
    href: "https://instagram.com/codegahp",
    color: "from-pink-500 to-purple-600",
    icon: `<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>`,
  },
  {
    name: "Facebook",
    desc: "Comunidad",
    href: "https://facebook.com/codegahp",
    color: "from-blue-500 to-blue-600",
    icon: `<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>`,
  },
  {
    name: "X",
    desc: "Novedades",
    href: "https://x.com/codegahp",
    color: "from-slate-700 to-slate-900",
    icon: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
  },
];

// Form state — sin backend: arma el mensaje y lo abre en el correo
// o en WhatsApp del visitante, listo para enviarse.
const form = ref({
  name: "",
  email: "",
  message: "",
});

const buildBody = () =>
  `Hola CODEGAHP, soy ${form.value.name}.\n\n${form.value.message}\n\nMi correo: ${form.value.email}`;

const submitByEmail = () => {
  const subject = encodeURIComponent(
    `Nuevo proyecto — ${form.value.name || "contacto web"}`,
  );
  const body = encodeURIComponent(buildBody());
  window.location.href = `mailto:contacto@codegahp.com?subject=${subject}&body=${body}`;
};

const submitByWhatsApp = () => {
  const text = encodeURIComponent(buildBody());
  window.open(`https://wa.me/529381065606?text=${text}`, "_blank", "noopener");
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
    <!-- Circuit Pattern Background -->
    <div
      class="absolute inset-0 opacity-5 dark:opacity-10 circuit-pattern"
    ></div>

    <!-- Gradient Orbs -->
    <div
      class="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
    ></div>

    <section id="contact-section" class="relative z-10 py-24 lg:py-32">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div
          class="text-center max-w-3xl mx-auto mb-16"
          :class="{ 'animate-fade-in-up': isVisible, 'opacity-0': !isVisible }"
        >
          <span
            class="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Contáctanos
          </span>
          <h1
            class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Transformemos tu
            <span class="text-primary">idea</span>
            en código
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400">
            Estamos listos para escuchar tu proyecto. Elige cómo prefieres
            comunicarte con nosotros.
          </p>
        </div>

        <!-- Main Grid: 3 columns on desktop -->
        <div
          class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          :class="{
            'animate-fade-in-up delay-100': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <!-- Column 1: Contact Form with Hexagonal accent -->
          <div class="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
            <div
              class="relative bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex-1 flex flex-col justify-center"
            >
              <!-- Hexagon decoration -->
              <svg
                class="absolute -top-6 -right-6 w-24 h-24 text-primary/10"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  fill="currentColor"
                />
              </svg>

              <div class="flex items-center gap-3 mb-8">
                <div
                  class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                >
                  <Send class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                    Envíanos un mensaje
                  </h2>
                  <p class="text-sm text-slate-500">Te respondemos en 24h</p>
                </div>
              </div>

              <form class="space-y-5" @submit.prevent="submitByEmail">
                <div class="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      for="contacto-nombre"
                      class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="contacto-nombre"
                      v-model="form.name"
                      type="text"
                      required
                      autocomplete="name"
                      placeholder="Tu nombre"
                      class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      for="contacto-email"
                      class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contacto-email"
                      v-model="form.email"
                      type="email"
                      required
                      autocomplete="email"
                      placeholder="tu@email.com"
                      class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="contacto-mensaje"
                    class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    v-model="form.message"
                    rows="5"
                    required
                    placeholder="Describe brevemente tu idea, el problema que quieres resolver, o las tecnologías que te interesan..."
                    class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div class="grid sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    class="py-4 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send class="w-5 h-5" aria-hidden="true" />
                    Enviar por correo
                  </button>
                  <button
                    type="button"
                    @click="submitByWhatsApp"
                    class="py-4 rounded-xl font-semibold border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageSquare class="w-5 h-5" aria-hidden="true" />
                    Mandar por WhatsApp
                  </button>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 text-center">
                  Se abre tu correo o tu WhatsApp con el mensaje ya escrito —
                  tú decides desde dónde enviarlo.
                </p>
              </form>
            </div>
            <button
              type="button"
              @click="isAIChatOpen = true"
              aria-haspopup="dialog"
              class="group cursor-pointer relative overflow-hidden rounded-3xl border border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/15 text-left w-full"
            >
              <!-- Animated gradient background -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-primary/10 via-emerald-400/10 to-teal-400/10 dark:from-primary/20 dark:via-emerald-500/15 dark:to-teal-500/15"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>

              <!-- Pulsing glow dot -->
              <div class="absolute top-4 right-4">
                <span class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-primary"
                  ></span>
                </span>
              </div>

              <div class="relative p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                  >
                    <Sparkles class="w-8 h-8 text-white" />
                  </div>
                  <div class="flex-1">
                    <h3
                      class="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors"
                    >
                      Asistente instantáneo
                    </h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400">
                      Precios, tiempos y proceso — al momento, 24/7
                    </p>
                    <p class="text-xs text-primary font-medium mt-1">
                      ✨ Pregúntale ahora — sin registro
                    </p>
                  </div>
                  <div
                    class="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    <svg
                      class="w-5 h-5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <!-- Column 2: Contact Channels -->
          <div class="flex flex-col gap-6 lg:gap-8 h-full">
            <!-- Quick Contact Info -->
            <div
              class="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800"
            >
              <h3
                class="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
              >
                <Zap class="w-5 h-5 text-primary" />
                Contacto Directo
              </h3>
              <div class="space-y-3">
                <a
                  href="mailto:contacto@codegahp.com"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <Mail class="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      class="text-sm font-medium text-slate-900 dark:text-white"
                    >
                      contacto@codegahp.com
                    </p>
                    <p class="text-xs text-slate-500">Email</p>
                  </div>
                </a>
                <a
                  href="tel:+529381065606"
                  class="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors group"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <Phone class="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      class="text-sm font-medium text-slate-900 dark:text-white"
                    >
                      +52 938 106 5606
                    </p>
                    <p class="text-xs text-slate-500">Teléfono</p>
                  </div>
                </a>
                <div class="flex items-center gap-3 p-3">
                  <div
                    class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  >
                    <MapPin class="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p
                      class="text-sm font-medium text-slate-900 dark:text-white"
                    >
                      Ciudad del Carmen, Campeche
                    </p>
                    <p class="text-xs text-slate-500">México</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- AI Agent Card - Premium, positioned prominently -->

            <!-- Social Channels Grid -->
            <div
              class="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 flex-1 flex flex-col"
            >
              <h3
                class="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"
              >
                <MessageSquare class="w-5 h-5 text-primary" />
                Redes Sociales
              </h3>
              <div class="grid grid-cols-2 gap-3">
                <a
                  v-for="channel in channels"
                  :key="channel.name"
                  :href="channel.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative overflow-hidden p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300"
                >
                  <!-- Gradient background on hover -->
                  <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
                    :class="channel.color"
                  ></div>

                  <div class="relative z-10 flex flex-col items-center gap-2">
                    <svg
                      class="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      v-html="channel.icon"
                    ></svg>
                    <span
                      class="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors"
                    >
                      {{ channel.name }}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section with SOLID-style cards -->
        <div
          class="mt-24 max-w-4xl mx-auto"
          :class="{
            'animate-fade-in-up delay-200': isVisible,
            'opacity-0': !isVisible,
          }"
        >
          <div class="text-center mb-12">
            <span
              class="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-4"
            >
              <HelpCircle class="w-4 h-4" />
              FAQ
            </span>
            <h2
              class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white"
            >
              Preguntas Frecuentes
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="group"
              :style="{ transitionDelay: `${index * 100}ms` }"
            >
              <div
                class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <button
                  @click="toggleFaq(index)"
                  class="w-full p-5 flex items-center gap-4 text-left"
                  :aria-expanded="faq.isOpen"
                >
                  <div
                    class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <component :is="faq.icon" class="w-5 h-5 text-primary" />
                  </div>
                  <span
                    class="flex-1 font-medium text-slate-900 dark:text-white text-sm"
                  >
                    {{ faq.question }}
                  </span>
                  <ChevronDown
                    class="w-5 h-5 text-primary shrink-0 transition-transform duration-300"
                    :class="{ 'rotate-180': faq.isOpen }"
                  />
                </button>
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-40 opacity-100"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="max-h-40 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div v-if="faq.isOpen" class="overflow-hidden">
                    <p
                      class="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400"
                    >
                      {{ faq.answer }}
                    </p>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Chat Drawer -->
    <AIChatDrawer :is-open="isAIChatOpen" @close="isAIChatOpen = false" />
  </div>
</template>

<style scoped>
.circuit-pattern {
  background-image:
    radial-gradient(
      circle at 20% 30%,
      rgba(45, 206, 154, 0.3) 1px,
      transparent 1px
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(45, 206, 154, 0.3) 1px,
      transparent 1px
    );
  background-size: 50px 50px;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
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
</style>
