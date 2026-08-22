<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

definePageMeta({
  title: "Política de Cookies",
});

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
});
</script>

<template>
  <div class="min-h-screen py-24 lg:py-32">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <span
          class="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4"
        >
          {{ t("badge") }}
        </span>
        <h1
          class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          {{ t("title.lead") }} <span class="text-primary underline underline-offset-2">{{ t("title.highlight") }}</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400">
          {{ t("lastUpdated") }}
        </p>
      </div>

      <!-- Content -->
      <div
        class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-800"
      >
        <h2>{{ t("sections.what.title") }}</h2>
        <p>
          {{ t("sections.what.body") }}
        </p>

        <h2>{{ t("sections.types.title") }}</h2>

        <h3>{{ t("sections.types.essential.title") }}</h3>
        <p>
          {{ t("sections.types.essential.body") }}
        </p>

        <h3>{{ t("sections.types.preferences.title") }}</h3>
        <p>
          {{ t("sections.types.preferences.body") }}
        </p>

        <h3>{{ t("sections.types.analytics.title") }}</h3>
        <p>
          {{ t("sections.types.analytics.body") }}
        </p>

        <h2>{{ t("sections.management.title") }}</h2>
        <p>
          {{ t("sections.management.body") }}
        </p>

        <h2>{{ t("sections.contact.title") }}</h2>
        <p>
          {{ t("sections.contact.body") }}
          <a href="mailto:privacidad@codegahp.com" class="text-primary underline underline-offset-2">
            privacidad@codegahp.com
          </a>
        </p>
      </div>

      <!-- Back Link -->
      <div class="text-center mt-8">
        <NuxtLinkLocale
          to="/"
          class="inline-flex items-center gap-2 text-primary hover:underline"
        >
          {{ t("backHome") }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose h2 {
  @apply text-slate-900 dark:text-white text-xl font-bold mt-8 mb-4;
}

.prose h3 {
  @apply text-slate-800 dark:text-slate-200 text-lg font-semibold mt-6 mb-2;
}

.prose p {
  @apply text-slate-600 dark:text-slate-400 mb-4 leading-relaxed;
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Política de Cookies - CODEGAHP",
      "description": "Política de cookies de CODEGAHP: qué cookies usamos y cómo gestionarlas."
    },
    "badge": "Legal",
    "title": {
      "lead": "Política de",
      "highlight": "Cookies"
    },
    "lastUpdated": "Última actualización: Enero 2026",
    "sections": {
      "what": {
        "title": "¿Qué son las Cookies?",
        "body": "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de navegación."
      },
      "types": {
        "title": "Tipos de Cookies que Utilizamos",
        "essential": {
          "title": "Cookies Esenciales",
          "body": "Son necesarias para el funcionamiento básico del sitio. Sin ellas, algunas funciones no estarían disponibles."
        },
        "preferences": {
          "title": "Cookies de Preferencias",
          "body": "Nos permiten recordar tus preferencias, como el tema seleccionado (claro u oscuro) y tu idioma preferido."
        },
        "analytics": {
          "title": "Cookies Analíticas",
          "body": "Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio para poder mejorarlo continuamente."
        }
      },
      "management": {
        "title": "Gestión de Cookies",
        "body": "Puedes controlar y eliminar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar cookies puede afectar la funcionalidad del sitio."
      },
      "contact": {
        "title": "Contacto",
        "body": "Si tienes preguntas sobre nuestra política de cookies:"
      }
    },
    "backHome": "← Volver al inicio"
  },
  "en": {
    "seo": {
      "title": "Cookie Policy - CODEGAHP",
      "description": "CODEGAHP cookie policy: which cookies we use and how to manage them."
    },
    "badge": "Legal",
    "title": {
      "lead": "Cookie",
      "highlight": "Policy"
    },
    "lastUpdated": "Last updated: January 2026",
    "sections": {
      "what": {
        "title": "What Are Cookies?",
        "body": "Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences and improve your browsing experience."
      },
      "types": {
        "title": "Types of Cookies We Use",
        "essential": {
          "title": "Essential Cookies",
          "body": "These are necessary for the basic functioning of the site. Without them, some features would not be available."
        },
        "preferences": {
          "title": "Preference Cookies",
          "body": "These allow us to remember your preferences, such as the selected theme (light or dark) and your preferred language."
        },
        "analytics": {
          "title": "Analytics Cookies",
          "body": "These help us understand how visitors interact with our site so we can continuously improve it."
        }
      },
      "management": {
        "title": "Managing Cookies",
        "body": "You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of the site."
      },
      "contact": {
        "title": "Contact",
        "body": "If you have questions about our cookie policy:"
      }
    },
    "backHome": "← Back to home"
  }
}
</i18n>
