<script setup lang="ts">
// Escanear (EarTagScannerScreen): la cámara apunta al arete SINIIGA y abre la
// ficha del animal; si no existe, ofrece darlo de alta con ese arete.
import { useId } from "vue";
import Icono from "@/components/mockup/Icono.vue";

const uid = useId();

// Las barras del código del arete: anchos fijos para que el dibujo no cambie
// entre el servidor y el navegador.
const anchos = [2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 2, 1, 1, 3, 1, 1, 2, 1, 2, 1, 3, 2, 1, 1, 2];
const barras: { x: number; w: number }[] = [];
let x = 30;
for (const [i, w] of anchos.entries()) {
  if (i % 2 === 0) barras.push({ x, w: w * 1.6 });
  x += w * 1.6 + 1.2;
}
</script>

<template>
  <div class="visor lidia-campo" aria-hidden="true">
    <span class="pared" />
    <svg class="arete" viewBox="0 0 170 214">
      <defs>
        <linearGradient :id="`brillo-${uid}`" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".35" />
          <stop offset=".45" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect x="68" y="0" width="34" height="46" rx="12" fill="#d9a90c" />
      <circle cx="85" cy="17" r="7" fill="#20231d" />
      <rect x="6" y="34" width="158" height="178" rx="28" fill="#f4c21b" />
      <rect x="6" y="34" width="158" height="178" rx="28" :fill="`url(#brillo-${uid})`" />
      <text x="85" y="70" text-anchor="middle" font-size="16" font-weight="800" letter-spacing="3" fill="#1f2430">SINIIGA</text>
      <text x="85" y="86" text-anchor="middle" font-size="9" font-weight="700" letter-spacing="2" fill="#3d4350">MÉXICO</text>
      <rect v-for="b in barras" :key="b.x" :x="b.x" y="98" :width="b.w" height="46" fill="#1f2430" />
      <text x="85" y="176" text-anchor="middle" font-size="21" font-weight="800" fill="#1f2430">04 1234 5678</text>
    </svg>
  </div>
  <svg class="marco" viewBox="0 0 252 252" aria-hidden="true">
    <defs>
      <linearGradient :id="`linea-${uid}`" x1="0" x2="1">
        <stop offset="0" stop-color="#8db57f" stop-opacity="0" />
        <stop offset=".5" stop-color="#8db57f" />
        <stop offset="1" stop-color="#8db57f" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M4 56 V26 Q4 4 26 4 H56 M196 4 H226 Q248 4 248 26 V56 M4 196 V226 Q4 248 26 248 H56 M196 248 H226 Q248 248 248 226 V196"
      fill="none"
      stroke="#fff"
      stroke-width="5"
      stroke-linecap="round"
    />
    <rect x="22" y="132" width="208" height="2.5" rx="1.25" :fill="`url(#linea-${uid})`" />
  </svg>
  <div class="camara-arriba">
    <span class="redondo"><Icono n="mi-close" /></span>
    <span class="redondo"><Icono n="mi-flashlight-on" /></span>
  </div>
  <div class="camara-abajo">
    <p class="fs17 fw7">Apunta al código del arete</p>
    <p class="fs13 mt4" style="opacity: 0.75">QR, código de barras o número de arete</p>
  </div>
</template>
