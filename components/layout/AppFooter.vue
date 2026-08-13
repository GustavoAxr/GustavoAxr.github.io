<script setup lang="ts">
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Heart,
  CalendarClock,
} from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const { servicesMenu } = useServices();

const footerLinks = {
  company: [
    { name: "Sobre Nosotros", to: "/#about" },
    { name: "LIDIA", to: "/servicios/lidia" },
    { name: "Proyectos", to: "/proyectos" },
  ],
  legal: [
    { name: "Política de Privacidad", to: "/privacidad" },
    { name: "Términos de Servicio", to: "/terminos" },
    { name: "Política de Cookies", to: "/cookies" },
  ],
  support: [
    { name: "Contacto", to: "/contacto" },
    { name: "Agenda una Cita", to: "/#booking-section" },
    { name: "Servicios", to: "/servicios" },
  ],
};

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/529381065606",
    color: "hover:text-green-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/codegahp",
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/codegahp",
    color: "hover:text-pink-500",
  },
];

const technologies = ["Vue.js", "Nuxt", "TypeScript", "Laravel", "Java", "AWS"];
</script>

<template>
  <footer
    id="main-footer"
    class="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white relative overflow-hidden transition-colors duration-300"
  >
    <!-- Top Gradient Line -->
    <div
      class="h-1 bg-gradient-to-r from-primary/70 via-primary to-primary/70"
    ></div>

    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 flex items-center justify-center">
              <img
                src="~/assets/img/codegahp2-03.png"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
            <span class="text-xl font-bold">
              <span class="text-slate-600 dark:text-slate-300">CODE</span>
              <span class="text-primary">GAHP</span>
            </span>
          </NuxtLink>

          <p
            class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6"
          >
            Software que aguanta el trabajo real. Construimos productos para el
            campo, los municipios y los negocios de México — desde Ciudad del
            Carmen, Campeche, para donde haga falta, haya o no señal.
          </p>

          <!-- Contact Info -->
          <div class="space-y-3 text-sm">
            <a
              href="mailto:contacto@codegahp.com"
              class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Mail class="w-4 h-4" />
              contacto@codegahp.com
            </a>
            <a
              href="tel:+529381065606"
              class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Phone class="w-4 h-4" />
              +52 938 106 5606
            </a>
            <div
              class="flex items-start gap-3 text-slate-600 dark:text-slate-400"
            >
              <MapPin class="w-4 h-4 mt-0.5 shrink-0" />
              <span>Ciudad del Carmen, Campeche, México</span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex gap-3 mt-6">
            <Button
              as-child
              variant="bare"
              size="free"
              v-for="social in socialLinks"
              :key="social.name"
              class="[&_svg]:size-5"
            >
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-[5px] bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all"
                :class="social.color"
                :aria-label="social.name"
                :title="social.name"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <!-- Services Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            Servicios
          </h3>
          <ul class="space-y-2">
            <li
              v-for="category in servicesMenu.slice(0, 2)"
              :key="category.category"
            >
              <NuxtLink
                v-for="item in category.items.slice(0, 2)"
                :key="item.title"
                :to="item.to"
                class="block text-slate-600 dark:text-slate-400 hover:text-primary text-sm py-1 transition-colors"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/servicios"
                class="inline-flex items-center gap-1 text-primary-dark dark:text-primary text-sm hover:underline mt-2"
              >
                Ver todos
                <ExternalLink class="w-3 h-3" />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            Empresa
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.name">
              <NuxtLink
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            Soporte
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.support" :key="link.name">
              <NuxtLink
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>

          <h3 class="text-slate-800 dark:text-white font-semibold mb-4 mt-8">
            Legal
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.legal.slice(0, 2)" :key="link.name">
              <NuxtLink
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            ¿Traes un proyecto?
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">
            Cuéntanoslo directo, sin formularios eternos. Respondemos en menos
            de 24 horas.
          </p>
          <div class="space-y-2">
            <Button as-child variant="bare" size="free">
              <a
                href="https://wa.me/529381065606?text=Hola%20CODEGAHP%2C%20quiero%20platicarles%20de%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-2.5 rounded-[5px] bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                <MessageCircle class="w-4 h-4" />
                Escríbenos por WhatsApp
              </a>
            </Button>
            <Button as-child variant="bare" size="free">
              <NuxtLink
                to="/#booking-section"
                class="flex items-center gap-2 px-4 py-2.5 rounded-[5px] border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <CalendarClock class="w-4 h-4" />
                Agenda una videollamada
              </NuxtLink>
            </Button>
          </div>

          <!-- Technologies -->
          <div class="mt-8">
         
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 py-6">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p class="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
            © {{ currentYear }} CODEGAHP. Todos los derechos reservados.
          </p>

          <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-sm">
            <span>Hecho con</span>
            <Heart class="w-4 h-4 text-red-400 fill-red-400" aria-hidden="true" />
            <span class="sr-only">amor</span>
            <span>en Ciudad del Carmen, Campeche</span>
            <code
              class="hidden sm:inline-block ml-2 px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono text-primary-dark dark:text-primary"
              >GMT-6 · isla incluida 🏝️</code
            >
          </div>

          <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-xs">
            <NuxtLink
              to="/privacidad"
              class="hover:text-primary transition-colors"
            >
              Privacidad
            </NuxtLink>
            <span>•</span>
            <NuxtLink
              to="/terminos"
              class="hover:text-primary transition-colors"
            >
              Términos
            </NuxtLink>
            <span>•</span>
            <NuxtLink
              to="/cookies"
              class="hover:text-primary transition-colors"
            >
              Cookies
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div
      class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"
    ></div>
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
    ></div>
  </footer>
</template>
