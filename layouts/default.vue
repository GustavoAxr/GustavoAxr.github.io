<script setup>
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
import AIChatDrawer from "~/components/AIChatDrawer.vue";
import { MessageCircle } from "lucide-vue-next";

// Color primario dinámico según la página de servicio activa
useServiceTheme();

// Estado global del chat (compartido con el banner de /contacto vía useState).
const isChatOpen = useState("aiChatOpen", () => false);
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

    <AppHeader />

    <main id="contenido-principal" class="relative z-10">
      <slot />
    </main>

    <AppFooter />

    <!-- Globo de chat flotante — visible en todas las vistas -->
    <Transition name="fade">
      <button
        v-if="!isChatOpen"
        type="button"
        aria-label="Abrir el asistente de CODEGAHP"
        class="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#409028] py-3 pl-3 pr-4 text-white shadow-lg shadow-[#409028]/30 ring-1 ring-black/5 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
        @click="isChatOpen = true"
      >
        <span class="relative flex h-6 w-6 items-center justify-center">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-70"
          />
          <MessageCircle class="relative h-6 w-6" />
        </span>
        <span class="text-sm font-medium">¿Hablamos?</span>
      </button>
    </Transition>

    <AIChatDrawer :is-open="isChatOpen" @close="isChatOpen = false" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
