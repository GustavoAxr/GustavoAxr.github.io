<script setup lang="ts">
// Un teléfono dibujado con HTML para presentar las apps. La pantalla va en el
// slot, dentro de la vista de la maqueta (`.mk`), que pone la barra de estado y
// los colores de cada app. Se dibuja a 372 × 790, el tamaño de la maqueta, y se
// escala con `size`: el contenido no se reacomoda, se ve igual que en la app.
// Con `size="fluid"` ocupa el ancho de su contenedor: mide ese ancho y escala;
// hasta medirlo no se ve (aparece con un fundido).
//
// Los iconos salen de los sprites estáticos de public/img/iconos (ver Icono.vue).
import { onBeforeUnmount, onMounted, ref } from "vue";
import "~/assets/css/mockups.css";

const props = withDefaults(
  defineProps<{
    app: "clocc" | "lidia";
    size?: "xs" | "sm" | "md" | "lg" | "fluid";
    hora?: string;
    /** La cámara a pantalla completa: fondo oscuro y barra de estado blanca. */
    camara?: boolean;
    /** Sin señal: las rayitas apagadas y sin wifi. */
    sinSenal?: boolean;
    /** Lo que dice el lector de pantalla en lugar de leer toda la maqueta. */
    label: string;
  }>(),
  { size: "md", hora: "9:41", camara: false, sinSenal: false },
);

const raiz = ref<HTMLElement | null>(null);
const k = ref<number | null>(null);
let observador: ResizeObserver | null = null;

onMounted(() => {
  if (props.size !== "fluid" || !raiz.value) return;
  observador = new ResizeObserver(([e]) => {
    if (e) k.value = e.contentRect.width / 372;
  });
  observador.observe(raiz.value);
});
onBeforeUnmount(() => observador?.disconnect());
</script>

<template>
  <div
    ref="raiz"
    class="pm"
    :class="`pm-${size}`"
    :style="k ? { '--k': k } : undefined"
    :data-medido="k ? '' : undefined"
    role="img"
    :aria-label="label"
  >
    <div class="pm-cuerpo" aria-hidden="true">
      <span class="pm-boton" style="left: -2px; top: 150px; height: 30px" />
      <span class="pm-boton" style="left: -2px; top: 204px; height: 58px" />
      <span class="pm-boton" style="left: -2px; top: 272px; height: 58px" />
      <span class="pm-boton" style="right: -2px; top: 226px; height: 92px" />
      <div class="pm-chasis">
        <div class="pm-bisel">
          <div class="mk vista" :class="[`mk-${app}`, { camara }]">
            <div class="isla" />
            <div class="barra-estado">
              <span class="num">{{ hora }}</span>
              <span class="fx ac g6">
                <svg width="17" height="11" viewBox="0 0 17 11" :class="{ apagada: sinSenal }">
                  <rect x="0" y="7" width="3" height="4" rx="1" fill="currentColor" />
                  <rect x="4.5" y="5" width="3" height="6" rx="1" fill="currentColor" />
                  <rect x="9" y="2.5" width="3" height="8.5" rx="1" fill="currentColor" />
                  <rect x="13.5" y="0" width="3" height="11" rx="1" fill="currentColor" />
                </svg>
                <svg v-if="!sinSenal" width="15" height="11" viewBox="0 0 15 11">
                  <path
                    d="M7.5 2.2c2.2 0 4.2.8 5.7 2.2l1.1-1.1A9.6 9.6 0 0 0 7.5.6 9.6 9.6 0 0 0 .7 3.3l1.1 1.1A8 8 0 0 1 7.5 2.2Zm0 3.2c1.3 0 2.5.5 3.4 1.3L12 5.6a6.4 6.4 0 0 0-9 0l1.1 1.1c.9-.8 2.1-1.3 3.4-1.3Zm0 3.2c.5 0 .9.2 1.2.5L7.5 10.3 6.3 9.1c.3-.3.7-.5 1.2-.5Z"
                    fill="currentColor"
                  />
                </svg>
                <svg width="26" height="12" viewBox="0 0 26 12">
                  <rect x=".5" y=".5" width="22" height="11" rx="3.2" fill="none" stroke="currentColor" opacity=".4" />
                  <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
                  <path d="M24 4v4c.8-.3 1.3-1 1.3-2s-.5-1.7-1.3-2Z" fill="currentColor" opacity=".45" />
                </svg>
              </span>
            </div>
            <slot />
          </div>
        </div>
      </div>
      <div class="pm-brillo" />
    </div>
  </div>
</template>
