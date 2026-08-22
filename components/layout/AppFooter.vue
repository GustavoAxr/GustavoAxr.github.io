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

const { t } = useI18n({ useScope: "local" });

const currentYear = new Date().getFullYear();

const { servicesMenu } = useServices();

const footerLinks = {
  company: [
    { name: "companyAbout", to: "/#about" },
    { name: "companyLidia", to: "/servicios/lidia" },
    { name: "companyProjects", to: "/proyectos" },
  ],
  legal: [
    { name: "legalPrivacy", to: "/privacidad" },
    { name: "legalTerms", to: "/terminos" },
    { name: "legalCookies", to: "/cookies" },
  ],
  support: [
    { name: "supportContact", to: "/contacto" },
    { name: "supportBooking", to: "/#booking-section" },
    { name: "supportServices", to: "/servicios" },
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
          <NuxtLinkLocale to="/" class="flex items-center gap-3 mb-6">
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
          </NuxtLinkLocale>

          <p
            class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6"
          >
            {{ t("tagline") }}
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
              <span>{{ t("location") }}</span>
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
            {{ t("headingServices") }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="category in servicesMenu.slice(0, 2)"
              :key="category.category"
            >
              <NuxtLinkLocale
                v-for="item in category.items.slice(0, 2)"
                :key="item.title"
                :to="item.to"
                class="block text-slate-600 dark:text-slate-400 hover:text-primary text-sm py-1 transition-colors"
              >
                {{ item.title }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale
                to="/servicios"
                class="inline-flex items-center gap-1 text-primary-dark dark:text-primary text-sm hover:underline mt-2"
              >
                {{ t("viewAll") }}
                <ExternalLink class="w-3 h-3" />
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Company Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            {{ t("headingCompany") }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.name">
              <NuxtLinkLocale
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ t(link.name) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- Support Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            {{ t("headingSupport") }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.support" :key="link.name">
              <NuxtLinkLocale
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ t(link.name) }}
              </NuxtLinkLocale>
            </li>
          </ul>

          <h3 class="text-slate-800 dark:text-white font-semibold mb-4 mt-8">
            {{ t("headingLegal") }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.legal.slice(0, 2)" :key="link.name">
              <NuxtLinkLocale
                :to="link.to"
                class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {{ t(link.name) }}
              </NuxtLinkLocale>
            </li>
          </ul>
        </div>

        <!-- CTA Column -->
        <div>
          <h3 class="text-slate-800 dark:text-white font-semibold mb-4">
            {{ t("ctaHeading") }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm mb-4">
            {{ t("ctaText") }}
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
                {{ t("ctaWhatsapp") }}
              </a>
            </Button>
            <Button as-child variant="bare" size="free">
              <NuxtLinkLocale
                to="/#booking-section"
                class="flex items-center gap-2 px-4 py-2.5 rounded-[5px] border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <CalendarClock class="w-4 h-4" />
                {{ t("ctaBooking") }}
              </NuxtLinkLocale>
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
            © {{ currentYear }} CODEGAHP. {{ t("rights") }}
          </p>

          <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-sm">
            <span>{{ t("madeWith") }}</span>
            <Heart class="w-4 h-4 text-red-400 fill-red-400" aria-hidden="true" />
            <span class="sr-only">{{ t("love") }}</span>
            <span>{{ t("madeIn") }}</span>
            <code
              class="hidden sm:inline-block ml-2 px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px] font-mono text-primary-dark dark:text-primary"
              >{{ t("badge") }} 🏝️</code
            >
          </div>

          <div class="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-xs">
            <NuxtLinkLocale
              to="/privacidad"
              class="hover:text-primary transition-colors"
            >
              {{ t("bottomPrivacy") }}
            </NuxtLinkLocale>
            <span>•</span>
            <NuxtLinkLocale
              to="/terminos"
              class="hover:text-primary transition-colors"
            >
              {{ t("bottomTerms") }}
            </NuxtLinkLocale>
            <span>•</span>
            <NuxtLinkLocale
              to="/cookies"
              class="hover:text-primary transition-colors"
            >
              {{ t("bottomCookies") }}
            </NuxtLinkLocale>
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

<i18n lang="json">
{
  "es": {
    "tagline": "Software que aguanta el trabajo real. Construimos productos para el campo, los municipios y los negocios de México — desde Ciudad del Carmen, Campeche, para donde haga falta, haya o no señal.",
    "location": "Ciudad del Carmen, Campeche, México",
    "headingServices": "Servicios",
    "viewAll": "Ver todos",
    "headingCompany": "Empresa",
    "headingSupport": "Soporte",
    "headingLegal": "Legal",
    "companyAbout": "Sobre Nosotros",
    "companyLidia": "LIDIA",
    "companyProjects": "Proyectos",
    "legalPrivacy": "Política de Privacidad",
    "legalTerms": "Términos de Servicio",
    "legalCookies": "Política de Cookies",
    "supportContact": "Contacto",
    "supportBooking": "Agenda una Cita",
    "supportServices": "Servicios",
    "ctaHeading": "¿Traes un proyecto?",
    "ctaText": "Cuéntanoslo directo, sin formularios eternos. Respondemos en menos de 24 horas.",
    "ctaWhatsapp": "Escríbenos por WhatsApp",
    "ctaBooking": "Agenda una videollamada",
    "rights": "Todos los derechos reservados.",
    "madeWith": "Hecho con",
    "love": "amor",
    "madeIn": "en Ciudad del Carmen, Campeche",
    "badge": "GMT-6 · isla incluida",
    "bottomPrivacy": "Privacidad",
    "bottomTerms": "Términos",
    "bottomCookies": "Cookies"
  },
  "en": {
    "tagline": "Software that holds up to real work. We build products for the countryside, local governments, and businesses across Mexico — from Ciudad del Carmen, Campeche, to wherever they're needed, signal or no signal.",
    "location": "Ciudad del Carmen, Campeche, Mexico",
    "headingServices": "Services",
    "viewAll": "View all",
    "headingCompany": "Company",
    "headingSupport": "Support",
    "headingLegal": "Legal",
    "companyAbout": "About Us",
    "companyLidia": "LIDIA",
    "companyProjects": "Projects",
    "legalPrivacy": "Privacy Policy",
    "legalTerms": "Terms of Service",
    "legalCookies": "Cookie Policy",
    "supportContact": "Contact",
    "supportBooking": "Book an Appointment",
    "supportServices": "Services",
    "ctaHeading": "Got a project?",
    "ctaText": "Tell us directly, no endless forms. We reply in under 24 hours.",
    "ctaWhatsapp": "Message us on WhatsApp",
    "ctaBooking": "Book a video call",
    "rights": "All rights reserved.",
    "madeWith": "Made with",
    "love": "love",
    "madeIn": "in Ciudad del Carmen, Campeche",
    "badge": "GMT-6 · island included",
    "bottomPrivacy": "Privacy",
    "bottomTerms": "Terms",
    "bottomCookies": "Cookies"
  }
}
</i18n>
