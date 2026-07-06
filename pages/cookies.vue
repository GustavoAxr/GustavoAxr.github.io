<script setup lang="ts">
definePageMeta({
  title: "Política de Cookies",
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
          Legal
        </span>
        <h1
          class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6"
        >
          Política de <span class="text-primary underline underline-offset-2">Cookies</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400">
          Última actualización: Enero 2026
        </p>
      </div>

      <!-- Content -->
      <div
        class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-800"
      >
        <h2>¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas nuestro sitio web. Nos ayudan a recordar
          tus preferencias y mejorar tu experiencia de navegación.
        </p>

        <h2>Tipos de Cookies que Utilizamos</h2>

        <h3>Cookies Esenciales</h3>
        <p>
          Son necesarias para el funcionamiento básico del sitio. Sin ellas,
          algunas funciones no estarían disponibles.
        </p>

        <h3>Cookies de Preferencias</h3>
        <p>
          Nos permiten recordar tus preferencias, como el tema seleccionado
          (claro u oscuro) y tu idioma preferido.
        </p>

        <h3>Cookies Analíticas</h3>
        <p>
          Nos ayudan a entender cómo los visitantes interactúan con nuestro
          sitio para poder mejorarlo continuamente.
        </p>

        <h2>Gestión de Cookies</h2>
        <p>
          Puedes controlar y eliminar las cookies a través de la configuración
          de tu navegador. Ten en cuenta que deshabilitar cookies puede afectar
          la funcionalidad del sitio.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de cookies:
          <a href="mailto:privacidad@codegahp.com" class="text-primary underline underline-offset-2">
            privacidad@codegahp.com
          </a>
        </p>
      </div>

      <!-- Back Link -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-primary hover:underline"
        >
          ← Volver al inicio
        </NuxtLink>
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
