<script setup lang="ts">
// Cómo borrar una cuenta de Lidia, también sin la app. Google Play pide este
// enlace en la ficha de la app; Apple pide que se pueda desde la app (Perfil →
// Borrar mi cuenta). Lo que dice aquí debe coincidir con la app (ADR-0039 de
// Lidia): 30 días para arrepentirse, y lo compartido con otros se conserva.
const { t } = useI18n({ useScope: "local" });

definePageMeta({
  title: "Eliminar tu cuenta de Lidia",
});

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
});

// Cuántos renglones tiene cada lista (los textos viven en el bloque <i18n>).
const pasos = [0, 1, 2, 3];
const seBorra = [0, 1, 2];
const seQueda = [0, 1, 2, 3];
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
        <p>{{ t("intro") }}</p>

        <h2>{{ t("sections.app.title") }}</h2>
        <ol>
          <li v-for="i in pasos" :key="i">
            {{ t(`sections.app.steps.${i}`) }}
          </li>
        </ol>
        <p>{{ t("sections.app.before") }}</p>

        <h2>{{ t("sections.email.title") }}</h2>
        <p>
          {{ t("sections.email.body") }}
          <a
            :href="`mailto:soporte@codegahp.com?subject=${encodeURIComponent(t('sections.email.subject'))}`"
            class="text-primary underline underline-offset-2"
          >
            soporte@codegahp.com
          </a>
        </p>
        <p>{{ t("sections.email.response") }}</p>

        <h2>{{ t("sections.grace.title") }}</h2>
        <p>{{ t("sections.grace.body") }}</p>

        <h2>{{ t("sections.deleted.title") }}</h2>
        <ul>
          <li v-for="i in seBorra" :key="i">
            {{ t(`sections.deleted.items.${i}`) }}
          </li>
        </ul>

        <h2>{{ t("sections.kept.title") }}</h2>
        <ul>
          <li v-for="i in seQueda" :key="i">
            {{ t(`sections.kept.items.${i}`) }}
          </li>
        </ul>

        <h2>{{ t("sections.contact.title") }}</h2>
        <p>
          {{ t("sections.contact.body") }}
          <a href="mailto:soporte@codegahp.com" class="text-primary underline underline-offset-2">
            soporte@codegahp.com
          </a>
        </p>
      </div>

      <!-- Back Link -->
      <div class="text-center mt-8">
        <NuxtLinkLocale
          to="/servicios/lidia"
          class="inline-flex items-center gap-2 text-primary hover:underline"
        >
          {{ t("back") }}
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

.prose ol {
  @apply list-decimal pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2;
}
</style>

<i18n lang="json">
{
  "es": {
    "seo": {
      "title": "Eliminar tu cuenta de Lidia - CODEGAHP",
      "description": "Cómo borrar tu cuenta de Lidia desde la app o por correo, y qué pasa con tus datos."
    },
    "badge": "Lidia",
    "title": {
      "lead": "Eliminar tu cuenta de",
      "highlight": "Lidia"
    },
    "lastUpdated": "Última actualización: 11 de noviembre de 2026",
    "intro": "Lidia es la app de trazabilidad ganadera de CODEGAHP. Aquí te explicamos cómo borrar tu cuenta y qué pasa con tus datos.",
    "sections": {
      "app": {
        "title": "1. Desde la app",
        "steps": [
          "Abre Lidia cuando tengas señal.",
          "Entra a tu Perfil (tu foto o tu nombre, arriba).",
          "Toca \"Borrar mi cuenta\".",
          "Escribe tu contraseña, marca \"Entiendo que mi cuenta y mis datos se borrarán\" y confirma."
        ],
        "before": "Antes sube tus cambios pendientes, y termina o cancela las compra-ventas y movilizaciones que tengas en curso con otras personas: la app te dice cuáles son."
      },
      "email": {
        "title": "2. Sin la app",
        "body": "Si ya no tienes la app o no puedes entrar, escribe desde el correo de tu cuenta, con el asunto \"Eliminar mi cuenta de Lidia\" y tu nombre completo, a:",
        "subject": "Eliminar mi cuenta de Lidia",
        "response": "Podemos pedirte confirmar tu identidad. Te respondemos en un máximo de 20 días hábiles."
      },
      "grace": {
        "title": "3. Tienes 30 días para arrepentirte",
        "body": "Al pedirlo, tu sesión se cierra en todos tus teléfonos y la cuenta se desactiva. Se borra 30 días después. Si cambias de opinión antes, entra con tu correo y contraseña y elige \"Recuperar mi cuenta\": el borrado se cancela."
      },
      "deleted": {
        "title": "4. Qué se borra",
        "items": [
          "Tu ganado y todo lo que registraste de él: pesos, vacunas, servicios, partos y fotos.",
          "Tus UPP, potreros, fierros, vehículos, choferes, veterinarios, inventarios, gastos y avisos.",
          "Tus datos: correo, teléfono, foto de perfil y datos oficiales."
        ]
      },
      "kept": {
        "title": "5. Qué se conserva",
        "items": [
          "Las compra-ventas y movilizaciones que hiciste con otras personas, con tu nombre: también son su historial y su comprobante de compra dice quién le vendió.",
          "El historial de los animales que, por una venta, ya pertenecen a otro productor.",
          "Lo que una ley nos obligue a conservar.",
          "Las copias de seguridad cifradas del servidor se reemplazan en un máximo de 30 días."
        ]
      },
      "contact": {
        "title": "6. Dudas",
        "body": "Si tienes preguntas sobre el borrado de tu cuenta, escríbenos a:"
      }
    },
    "back": "← Volver a Lidia"
  },
  "en": {
    "seo": {
      "title": "Delete your Lidia account - CODEGAHP",
      "description": "How to delete your Lidia account from the app or by email, and what happens to your data."
    },
    "badge": "Lidia",
    "title": {
      "lead": "Delete your",
      "highlight": "Lidia account"
    },
    "lastUpdated": "Last updated: November 11, 2026",
    "intro": "Lidia is CODEGAHP's livestock traceability app. Here is how to delete your account and what happens to your data.",
    "sections": {
      "app": {
        "title": "1. From the app",
        "steps": [
          "Open Lidia while you have a signal.",
          "Go to your Profile (your photo or name, at the top).",
          "Tap \"Borrar mi cuenta\" (Delete my account).",
          "Enter your password, check \"I understand my account and my data will be deleted\" and confirm."
        ],
        "before": "First upload any pending changes, and finish or cancel any sales or livestock movements in progress with other people: the app tells you which ones."
      },
      "email": {
        "title": "2. Without the app",
        "body": "If you no longer have the app or cannot sign in, write from your account's email address, with the subject \"Eliminar mi cuenta de Lidia\" and your full name, to:",
        "subject": "Eliminar mi cuenta de Lidia",
        "response": "We may ask you to confirm your identity. We reply within 20 business days."
      },
      "grace": {
        "title": "3. You have 30 days to change your mind",
        "body": "When you request it, you are signed out on all your phones and the account is deactivated. It is deleted 30 days later. If you change your mind before then, sign in with your email and password and choose \"Recuperar mi cuenta\" (Recover my account): the deletion is cancelled."
      },
      "deleted": {
        "title": "4. What is deleted",
        "items": [
          "Your livestock and everything you recorded about it: weights, vaccinations, breedings, calvings and photos.",
          "Your production units (UPP), paddocks, brands, vehicles, drivers, veterinarians, inventories, expenses and notifications.",
          "Your data: email, phone, profile photo and official identifiers."
        ]
      },
      "kept": {
        "title": "5. What is kept",
        "items": [
          "Sales and livestock movements you made with other people, with your name: they are also part of their records, and their purchase receipt shows who sold to them.",
          "The history of animals that, through a sale, already belong to another producer.",
          "Anything the law requires us to keep.",
          "Encrypted server backups are replaced within 30 days."
        ]
      },
      "contact": {
        "title": "6. Questions",
        "body": "If you have questions about deleting your account, write to us at:"
      }
    },
    "back": "← Back to Lidia"
  }
}
</i18n>
