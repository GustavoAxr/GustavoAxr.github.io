<script setup lang="ts">
definePageMeta({
  title: "Política de Privacidad",
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
          Política de <span class="text-primary underline underline-offset-2">Privacidad</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400">
          Última actualización: Enero 2026
        </p>
      </div>

      <!-- Content -->
      <div
        class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-800"
      >
        <h2>1. Información que Recopilamos</h2>
        <p>
          En CODEGAHP, recopilamos información que nos proporcionas directamente
          cuando utilizas nuestros servicios, como tu nombre, correo electrónico
          y detalles del proyecto al agendar una cita o solicitar una
          cotización.
        </p>

        <h2>2. Uso de la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Proporcionar, mantener y mejorar nuestros servicios</li>
          <li>Comunicarnos contigo sobre proyectos y actualizaciones</li>
          <li>Responder a tus consultas y solicitudes</li>
          <li>Enviar información técnica y de soporte</li>
        </ul>

        <h2>3. Protección de Datos</h2>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger tu información personal contra acceso no autorizado,
          alteración, divulgación o destrucción.
        </p>

        <h2>4. Compartir Información</h2>
        <p>
          No vendemos, comercializamos ni transferimos tu información personal a
          terceros sin tu consentimiento, excepto cuando sea necesario para
          proporcionar nuestros servicios o cumplir con obligaciones legales.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
          Puedes configurar tu navegador para rechazar cookies, aunque esto
          puede afectar algunas funcionalidades del sitio.
        </p>

        <h2>6. Tus Derechos</h2>
        <p>Tienes derecho a:</p>
        <ul>
          <li>Acceder a tu información personal</li>
          <li>Rectificar datos inexactos</li>
          <li>Solicitar la eliminación de tus datos</li>
          <li>Oponerte al procesamiento de tu información</li>
        </ul>

        <h2>7. Contacto</h2>
        <p>
          Si tienes preguntas sobre esta política de privacidad, contáctanos en:
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

.prose p {
  @apply text-slate-600 dark:text-slate-400 mb-4 leading-relaxed;
}

.prose ul {
  @apply list-disc pl-6 text-slate-600 dark:text-slate-400 mb-4 space-y-2;
}
</style>
