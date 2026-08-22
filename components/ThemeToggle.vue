<script setup>
import { Sun, Moon } from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <Button
    variant="bare"
    size="free"
    type="button"
    @click="toggleColorMode"
    class="p-2 rounded-[5px] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors [&_svg]:size-5"
    :aria-label="
      colorMode.value === 'dark'
        ? t('toLight')
        : t('toDark')
    "
  >
    <ClientOnly>
      <Sun
        v-if="colorMode.value === 'dark'"
        class="w-5 h-5 text-slate-400 hover:text-yellow-500 transition-colors"
      />
      <Moon
        v-else
        class="w-5 h-5 text-slate-600 hover:text-primary transition-colors"
      />
      <template #fallback>
        <div
          class="w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse"
        />
      </template>
    </ClientOnly>
  </Button>
</template>

<i18n lang="json">
{
  "es": {
    "toLight": "Cambiar a modo claro",
    "toDark": "Cambiar a modo oscuro"
  },
  "en": {
    "toLight": "Switch to light mode",
    "toDark": "Switch to dark mode"
  }
}
</i18n>
