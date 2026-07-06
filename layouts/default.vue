<script setup>
import { defineAsyncComponent } from "vue";
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
import MouseGlowEffect from "~/components/MouseGlowEffect.vue";

// Color primario dinámico según la página de servicio activa
useServiceTheme();

// Lazy load del componente para optimizar la carga inicial
const CircuitLinesEffect = defineAsyncComponent(
  () => import("~/components/CircuitLinesEffect.vue"),
);
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-gray-900 dark:text-gray-100 relative transition-colors duration-300 pt-20 selection:bg-primary selection:text-white dark:selection:text-slate-950"
  >
    <!-- Acceso rápido para teclado y lectores de pantalla -->
    <a
      href="#contenido-principal"
      class="sr-only focus:not-sr-only focus:fixed focus:top-24 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white dark:focus:text-slate-950 focus:rounded-lg focus:shadow-lg"
    >
      Saltar al contenido
    </a>

    <!-- Efecto de glow del mouse -->
    <MouseGlowEffect />

    <!-- Efecto de líneas de circuito en el lado derecho -->
    <CircuitLinesEffect />

    <AppHeader />

    <main id="contenido-principal" class="relative z-10">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
