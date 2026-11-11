<script setup lang="ts">
// Un carril horizontal de teléfonos: con el dedo se desliza, y en escritorio
// tiene flechas que se apagan en las orillas.
//
// Para no cargar la página, los teléfonos no van en el HTML del servidor: el
// slot recibe `visible` y dibuja cada teléfono hasta que el carril se acerca a
// la pantalla; mientras, un hueco del mismo tamaño (sin saltos al aparecer).
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

defineProps<{ label: string; prevLabel: string; nextLabel: string }>();
const emit = defineEmits<{ visible: [] }>();

const carril = ref<HTMLElement | null>(null);
const alInicio = ref(true);
const alFinal = ref(false);
const visible = ref(false);
let observador: IntersectionObserver | null = null;

function medir() {
  const el = carril.value;
  if (!el) return;
  alInicio.value = el.scrollLeft <= 4;
  alFinal.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
}

function mover(sentido: 1 | -1) {
  const el = carril.value;
  if (!el) return;
  const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollBy({ left: sentido * el.clientWidth * 0.8, behavior: quieto ? "auto" : "smooth" });
}

defineExpose({ alPrincipio: () => carril.value?.scrollTo({ left: 0 }) });

onMounted(() => {
  medir();
  if (!carril.value) return;
  observador = new IntersectionObserver(
    ([e]) => {
      if (!e?.isIntersecting) return;
      visible.value = true;
      emit("visible");
      observador?.disconnect();
      requestAnimationFrame(medir);
    },
    { rootMargin: "600px 0px" },
  );
  observador.observe(carril.value);
});
onBeforeUnmount(() => observador?.disconnect());
</script>

<template>
  <div class="relative">
    <div
      ref="carril"
      class="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-4 pt-2 [scrollbar-width:none] sm:gap-8 sm:[mask-image:linear-gradient(to_right,black_calc(100%-96px),transparent)] [&::-webkit-scrollbar]:hidden"
      role="region"
      :aria-label="label"
      tabindex="0"
      @scroll.passive="medir"
    >
      <slot :visible="visible" />
    </div>
    <div class="mt-4 hidden justify-end gap-2 sm:flex">
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-35 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        :disabled="alInicio"
        :aria-label="prevLabel"
        @click="mover(-1)"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>
      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-35 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
        :disabled="alFinal"
        :aria-label="nextLabel"
        @click="mover(1)"
      >
        <ChevronRight class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
