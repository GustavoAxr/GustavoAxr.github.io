<script setup lang="ts">
// Un trato hecho sin señal (TratoSinSenalScreen, ADR-0037): qué se acordó y
// cómo va mientras los dos teléfonos suben su parte.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";

const animales = [
  { arete: "0412345691", detalle: "Cruza · 238 kg", precio: "$11,400.00", foto: "res-4" },
  { arete: "0412345702", detalle: "Suizo · 226 kg", precio: "$10,800.00", foto: "res-5" },
  { arete: "0412345715", detalle: "Cruza · 221 kg", precio: "$10,800.00", foto: "res-6" },
];
</script>

<template>
  <div class="contenido sin-tabs">
    <LidiaBarra titulo="Venta" volver :avatar="false" />
    <div class="nota ambar">
      <Icono n="mi-hourglass-top" />
      <div class="grow">
        <b>Por confirmar</b>
        <p>
          Tu parte ya subió. Falta la del otro teléfono. Se registra cuando los dos teléfonos
          tengan señal, máximo en 48 horas. Mientras tanto los animales quedan apartados.
        </p>
      </div>
    </div>
    <div class="lista mt12">
      <div class="dato">Comprador <b>Rancho Los Álamos</b></div>
      <div class="dato">Total <b>$33,000.00</b></div>
      <div class="dato">Acordada <b>11/11/2026 10:24</b></div>
      <div class="dato">Vence <b>13/11/2026 10:24</b></div>
    </div>
    <h2 class="seccion">Animales (3)</h2>
    <div class="lista">
      <div v-for="a in animales" :key="a.arete" class="fila">
        <span class="foto"><img :src="`/img/lidia/maqueta/${a.foto}.webp`" alt="" loading="lazy" /></span>
        <div class="grow">
          <p class="fs15 fw6 hi num">{{ a.arete }}</p>
          <p class="fs13 muted">{{ a.detalle }}</p>
        </div>
        <span class="fs14 fw6 hi num">{{ a.precio }}</span>
      </div>
    </div>
  </div>
  <div class="accion-abajo">
    <span class="btn solid">Marcar como pagada</span>
    <span class="btn contorno"><Icono n="mi-qr-code-2" />Mostrar mi oferta</span>
  </div>
</template>
