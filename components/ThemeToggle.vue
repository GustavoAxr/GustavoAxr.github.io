<script setup>
import { Sun, Moon } from "lucide-vue-next";

const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
    :aria-label="
      colorMode.value === 'dark'
        ? 'Cambiar a modo claro'
        : 'Cambiar a modo oscuro'
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
  </button>
</template>
