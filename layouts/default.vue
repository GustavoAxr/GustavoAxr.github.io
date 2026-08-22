<script setup>
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
import AIChatDrawer from "~/components/AIChatDrawer.vue";
import { MessageCircle } from "lucide-vue-next";

// Color primario dinámico según la página de servicio activa
useServiceTheme();

const { t } = useI18n({ useScope: "local" });

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
      {{ t("skip") }}
    </a>

    <AppHeader />

    <main id="contenido-principal" class="relative z-10">
      <slot />
    </main>

    <AppFooter />

    <!-- Globo de chat flotante — visible en todas las vistas -->
    <Transition name="fade">
      <Button
        v-if="!isChatOpen"
        variant="bare"
        size="free"
        type="button"
        :aria-label="t('openChat')"
        class="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-[5px] bg-primary py-3 pl-3 pr-4 text-white shadow-lg shadow-[#409028]/30 ring-1 ring-black/5 transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 [&_svg]:size-6"
        @click="isChatOpen = true"
      >
        <span class="relative flex h-6 w-6 items-center justify-center">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-70"
          />
          <MessageCircle class="relative h-6 w-6" />
        </span>
        <span class="text-sm font-medium">{{ t("chatBubble") }}</span>
      </Button>
    </Transition>

    <AIChatDrawer :is-open="isChatOpen" @close="isChatOpen = false" />
  </div>
</template>

<i18n lang="json">
{
  "es": {
    "skip": "Saltar al contenido",
    "openChat": "Abrir el asistente de CODEGAHP",
    "chatBubble": "¿Hablamos?"
  },
  "en": {
    "skip": "Skip to content",
    "openChat": "Open the CODEGAHP assistant",
    "chatBubble": "Let's chat"
  }
}
</i18n>

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
