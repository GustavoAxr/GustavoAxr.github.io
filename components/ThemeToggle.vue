<script setup>
import { Sun, Moon } from "lucide-vue-next";

const { t } = useI18n({ useScope: "local" });

const colorMode = useColorMode();

// El servidor no conoce el tema del usuario y pinta la etiqueta como si fuera
// claro; al hidratar, Vue no corrige atributos, así que con el sistema en
// oscuro el botón anunciaba "modo oscuro". Se usa el tema real ya montado.
const mounted = ref(false);
onMounted(() => (mounted.value = true));
const isDark = computed(() => mounted.value && colorMode.value === "dark");

// Cambio de tema suave: toda la página se funde del tema anterior al nuevo con
// la API de View Transitions (estilos en main.css). Mientras dura, los
// elementos no animan sus propios colores (clase `theme-switching`), así el
// fundido es uno solo y parejo. Sin esa API, los colores se funden con CSS
// (`theme-fade`). Con "menos movimiento" activado, el cambio es directo.
const toggleColorMode = () => {
  const next = colorMode.value === "dark" ? "light" : "dark";
  // color-mode pone la clase en <html> en el siguiente ciclo de Vue
  const apply = async () => {
    colorMode.preference = next;
    await nextTick();
  };
  const root = document.documentElement;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply();
  } else if (document.startViewTransition) {
    root.classList.add("theme-switching");
    document
      .startViewTransition(apply)
      .finished.finally(() => root.classList.remove("theme-switching"));
  } else {
    root.classList.add("theme-fade");
    apply();
    setTimeout(() => root.classList.remove("theme-fade"), 600);
  }
};
</script>

<template>
  <Button
    variant="bare"
    size="free"
    type="button"
    @click="toggleColorMode"
    class="p-2 rounded-[5px] hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors [&_svg]:size-5"
    :aria-label="isDark ? t('toLight') : t('toDark')"
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
