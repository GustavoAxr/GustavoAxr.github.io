<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

definePageMeta({
  title: "Términos de Servicio",
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
        <h2>{{ t("sections.acceptance.title") }}</h2>
        <p>
          {{ t("sections.acceptance.body") }}
        </p>

        <h2>{{ t("sections.services.title") }}</h2>
        <p>
          {{ t("sections.services.body") }}
        </p>

        <h2>{{ t("sections.ip.title") }}</h2>
        <p>
          {{ t("sections.ip.body") }}
        </p>

        <h2>{{ t("sections.confidentiality.title") }}</h2>
        <p>
          {{ t("sections.confidentiality.body") }}
        </p>

        <h2>{{ t("sections.payments.title") }}</h2>
        <p>
          {{ t("sections.payments.body") }}
        </p>

        <h2>{{ t("sections.warranty.title") }}</h2>
        <p>
          {{ t("sections.warranty.body") }}
        </p>

        <h2>{{ t("sections.liability.title") }}</h2>
        <p>
          {{ t("sections.liability.body") }}
        </p>

        <h2>{{ t("sections.contact.title") }}</h2>
        <p>
          {{ t("sections.contact.body") }}
          <a href="mailto:legal@codegahp.com" class="text-primary underline underline-offset-2">
            legal@codegahp.com
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
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Términos de Servicio - CODEGAHP",
      "description": "Términos y condiciones de servicio de CODEGAHP."
    },
    "badge": "Legal",
    "title": {
      "lead": "Términos de",
      "highlight": "Servicio"
    },
    "lastUpdated": "Última actualización: Enero 2026",
    "sections": {
      "acceptance": {
        "title": "1. Aceptación de los Términos",
        "body": "Al acceder y utilizar los servicios de CODEGAHP, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios."
      },
      "services": {
        "title": "2. Servicios",
        "body": "CODEGAHP proporciona servicios de desarrollo de software, consultoría tecnológica y soluciones digitales personalizadas. Los detalles específicos de cada proyecto se acuerdan mediante contrato individual."
      },
      "ip": {
        "title": "3. Propiedad Intelectual",
        "body": "Una vez completado el pago total del proyecto, el cliente obtiene todos los derechos de propiedad intelectual del código desarrollado específicamente para su proyecto, salvo acuerdo en contrario."
      },
      "confidentiality": {
        "title": "4. Confidencialidad",
        "body": "Nos comprometemos a mantener la confidencialidad de toda la información del cliente que sea compartida durante el desarrollo del proyecto."
      },
      "payments": {
        "title": "5. Pagos",
        "body": "Los términos de pago se especifican en cada contrato individual. Los pagos deben realizarse según el calendario acordado para garantizar la continuidad del proyecto."
      },
      "warranty": {
        "title": "6. Garantía",
        "body": "Ofrecemos un período de garantía de 30 días después de la entrega para corrección de errores relacionados con los requisitos acordados. Las nuevas funcionalidades o cambios adicionales se cotizan por separado."
      },
      "liability": {
        "title": "7. Limitación de Responsabilidad",
        "body": "CODEGAHP no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios más allá del monto pagado por el servicio específico."
      },
      "contact": {
        "title": "8. Contacto",
        "body": "Para consultas sobre estos términos:"
      }
    },
    "backHome": "← Volver al inicio"
  },
  "en": {
    "seo": {
      "title": "Terms of Service - CODEGAHP",
      "description": "CODEGAHP terms and conditions of service."
    },
    "badge": "Legal",
    "title": {
      "lead": "Terms of",
      "highlight": "Service"
    },
    "lastUpdated": "Last updated: January 2026",
    "sections": {
      "acceptance": {
        "title": "1. Acceptance of Terms",
        "body": "By accessing and using CODEGAHP's services, you accept these terms and conditions in their entirety. If you do not agree with any part of these terms, you must not use our services."
      },
      "services": {
        "title": "2. Services",
        "body": "CODEGAHP provides software development services, technology consulting, and custom digital solutions. The specific details of each project are agreed upon through an individual contract."
      },
      "ip": {
        "title": "3. Intellectual Property",
        "body": "Once full payment for the project has been completed, the client obtains all intellectual property rights to the code developed specifically for their project, unless otherwise agreed."
      },
      "confidentiality": {
        "title": "4. Confidentiality",
        "body": "We are committed to maintaining the confidentiality of all client information shared during the development of the project."
      },
      "payments": {
        "title": "5. Payments",
        "body": "Payment terms are specified in each individual contract. Payments must be made according to the agreed schedule to ensure the continuity of the project."
      },
      "warranty": {
        "title": "6. Warranty",
        "body": "We offer a 30-day warranty period after delivery for the correction of errors related to the agreed requirements. New features or additional changes are quoted separately."
      },
      "liability": {
        "title": "7. Limitation of Liability",
        "body": "CODEGAHP shall not be liable for indirect, incidental, or consequential damages arising from the use of our services beyond the amount paid for the specific service."
      },
      "contact": {
        "title": "8. Contact",
        "body": "For inquiries about these terms:"
      }
    },
    "backHome": "← Back to home"
  }
}
</i18n>
