<script setup lang="ts">
definePageMeta({
  title: "Términos de Servicio",
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
          Términos de <span class="text-primary underline underline-offset-2">Servicio</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400">
          Última actualización: Enero 2026
        </p>
      </div>

      <!-- Content -->
      <div
        class="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-200 dark:border-slate-800"
      >
        <h2>1. Aceptación de los Términos</h2>
        <p>
          Al acceder y utilizar los servicios de CODEGAHP, aceptas estos
          términos y condiciones en su totalidad. Si no estás de acuerdo con
          alguna parte de estos términos, no debes utilizar nuestros servicios.
        </p>

        <h2>2. Servicios</h2>
        <p>
          CODEGAHP proporciona servicios de desarrollo de software, consultoría
          tecnológica y soluciones digitales personalizadas. Los detalles
          específicos de cada proyecto se acuerdan mediante contrato individual.
        </p>

        <h2>3. Propiedad Intelectual</h2>
        <p>
          Una vez completado el pago total del proyecto, el cliente obtiene
          todos los derechos de propiedad intelectual del código desarrollado
          específicamente para su proyecto, salvo acuerdo en contrario.
        </p>

        <h2>4. Confidencialidad</h2>
        <p>
          Nos comprometemos a mantener la confidencialidad de toda la
          información del cliente que sea compartida durante el desarrollo del
          proyecto.
        </p>

        <h2>5. Pagos</h2>
        <p>
          Los términos de pago se especifican en cada contrato individual. Los
          pagos deben realizarse según el calendario acordado para garantizar la
          continuidad del proyecto.
        </p>

        <h2>6. Garantía</h2>
        <p>
          Ofrecemos un período de garantía de 30 días después de la entrega para
          corrección de errores relacionados con los requisitos acordados. Las
          nuevas funcionalidades o cambios adicionales se cotizan por separado.
        </p>

        <h2>7. Limitación de Responsabilidad</h2>
        <p>
          CODEGAHP no será responsable por daños indirectos, incidentales o
          consecuentes derivados del uso de nuestros servicios más allá del
          monto pagado por el servicio específico.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para consultas sobre estos términos:
          <a href="mailto:legal@codegahp.com" class="text-primary underline underline-offset-2">
            legal@codegahp.com
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
</style>
