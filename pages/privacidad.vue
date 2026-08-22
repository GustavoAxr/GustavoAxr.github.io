<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

definePageMeta({
  title: "Política de Privacidad",
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
        <h2>{{ t("sections.collect.title") }}</h2>
        <p>
          {{ t("sections.collect.body") }}
        </p>

        <h2>{{ t("sections.use.title") }}</h2>
        <p>{{ t("sections.use.intro") }}</p>
        <ul>
          <li>{{ t("sections.use.items.0") }}</li>
          <li>{{ t("sections.use.items.1") }}</li>
          <li>{{ t("sections.use.items.2") }}</li>
          <li>{{ t("sections.use.items.3") }}</li>
        </ul>

        <h2>{{ t("sections.protection.title") }}</h2>
        <p>
          {{ t("sections.protection.body") }}
        </p>

        <h2>{{ t("sections.sharing.title") }}</h2>
        <p>
          {{ t("sections.sharing.body") }}
        </p>

        <h2>{{ t("sections.cookies.title") }}</h2>
        <p>
          {{ t("sections.cookies.body") }}
        </p>

        <h2>{{ t("sections.rights.title") }}</h2>
        <p>{{ t("sections.rights.intro") }}</p>
        <ul>
          <li>{{ t("sections.rights.items.0") }}</li>
          <li>{{ t("sections.rights.items.1") }}</li>
          <li>{{ t("sections.rights.items.2") }}</li>
          <li>{{ t("sections.rights.items.3") }}</li>
        </ul>

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

.prose p {
  @apply text-slate-600 dark:text-slate-400 mb-4 leading-relaxed;
}

.prose ul {
  @apply list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2;
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Política de Privacidad - CODEGAHP",
      "description": "Política de privacidad de CODEGAHP: cómo recopilamos, usamos y protegemos tus datos."
    },
    "badge": "Legal",
    "title": {
      "lead": "Política de",
      "highlight": "Privacidad"
    },
    "lastUpdated": "Última actualización: Enero 2026",
    "sections": {
      "collect": {
        "title": "1. Información que Recopilamos",
        "body": "En CODEGAHP, recopilamos información que nos proporcionas directamente cuando utilizas nuestros servicios, como tu nombre, correo electrónico y detalles del proyecto al agendar una cita o solicitar una cotización."
      },
      "use": {
        "title": "2. Uso de la Información",
        "intro": "Utilizamos la información recopilada para:",
        "items": [
          "Proporcionar, mantener y mejorar nuestros servicios",
          "Comunicarnos contigo sobre proyectos y actualizaciones",
          "Responder a tus consultas y solicitudes",
          "Enviar información técnica y de soporte"
        ]
      },
      "protection": {
        "title": "3. Protección de Datos",
        "body": "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción."
      },
      "sharing": {
        "title": "4. Compartir Información",
        "body": "No vendemos, comercializamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o cumplir con obligaciones legales."
      },
      "cookies": {
        "title": "5. Cookies",
        "body": "Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio."
      },
      "rights": {
        "title": "6. Tus Derechos",
        "intro": "Tienes derecho a:",
        "items": [
          "Acceder a tu información personal",
          "Rectificar datos inexactos",
          "Solicitar la eliminación de tus datos",
          "Oponerte al procesamiento de tu información"
        ]
      },
      "contact": {
        "title": "7. Contacto",
        "body": "Si tienes preguntas sobre esta política de privacidad, contáctanos en:"
      }
    },
    "backHome": "← Volver al inicio"
  },
  "en": {
    "seo": {
      "title": "Privacy Policy - CODEGAHP",
      "description": "CODEGAHP privacy policy: how we collect, use and protect your data."
    },
    "badge": "Legal",
    "title": {
      "lead": "Privacy",
      "highlight": "Policy"
    },
    "lastUpdated": "Last updated: January 2026",
    "sections": {
      "collect": {
        "title": "1. Information We Collect",
        "body": "At CODEGAHP, we collect information you provide directly to us when you use our services, such as your name, email address, and project details when scheduling an appointment or requesting a quote."
      },
      "use": {
        "title": "2. Use of Information",
        "intro": "We use the information collected to:",
        "items": [
          "Provide, maintain, and improve our services",
          "Communicate with you about projects and updates",
          "Respond to your inquiries and requests",
          "Send technical and support information"
        ]
      },
      "protection": {
        "title": "3. Data Protection",
        "body": "We implement technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
      },
      "sharing": {
        "title": "4. Sharing Information",
        "body": "We do not sell, trade, or transfer your personal information to third parties without your consent, except when necessary to provide our services or comply with legal obligations."
      },
      "cookies": {
        "title": "5. Cookies",
        "body": "We use cookies to enhance your experience on our website. You can configure your browser to reject cookies, although this may affect some site functionality."
      },
      "rights": {
        "title": "6. Your Rights",
        "intro": "You have the right to:",
        "items": [
          "Access your personal information",
          "Rectify inaccurate data",
          "Request the deletion of your data",
          "Object to the processing of your information"
        ]
      },
      "contact": {
        "title": "7. Contact",
        "body": "If you have questions about this privacy policy, contact us at:"
      }
    },
    "backHome": "← Back to home"
  }
}
</i18n>
