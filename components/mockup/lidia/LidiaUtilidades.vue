<script setup lang="ts">
// Utilidades (ReemoHubScreen): tarjetas fijas por sección. Los textos son los
// de la app.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
import LidiaTabBar from "@/components/mockup/lidia/LidiaTabBar.vue";

const secciones = [
  {
    titulo: "Movilidad y comercio",
    apartados: [
      { icono: "mi-local-shipping", tono: "verde", titulo: "Movilizaciones", detalle: "Guías REEMO, autorizaciones y llegadas." },
      { icono: "mi-handshake", tono: "cielo", titulo: "Compra-venta", detalle: "Vende o compra con doble-QR firmado." },
      { icono: "mi-report-gmailerrorred", tono: "rosa", titulo: "Alertas de robo", detalle: "Reporta un robo y mantente alerta de tu municipio." },
    ],
  },
  {
    titulo: "El hato",
    apartados: [
      { icono: "mi-checklist", tono: "verde", titulo: "Conteo del hato", detalle: "Pasa lista en el corral y ve quién falta." },
      { icono: "mi-grass", tono: "verde", titulo: "Rotación de potreros", detalle: "Qué lote está en cada potrero y cuánto lleva descansando." },
      { icono: "mi-water-drop", tono: "cielo", titulo: "Leche", detalle: "Ordeña por vaca y por día; respeta el retiro de leche." },
    ],
  },
];
</script>

<template>
  <div class="contenido">
    <LidiaBarra titulo="Utilidades" />
    <template v-for="(s, i) in secciones" :key="s.titulo">
      <h2 class="seccion" :style="i === 0 ? 'margin-top: 6px' : ''">{{ s.titulo }}</h2>
      <div class="mosaico">
        <div v-for="a in s.apartados" :key="a.titulo" class="baldosa" style="gap: 0">
          <span class="ic" :class="a.tono"><Icono :n="a.icono" /></span>
          <p class="fs15 fw6 hi mt12">{{ a.titulo }}</p>
          <p class="fs12 muted fw5 mt4" style="line-height: 1.35">{{ a.detalle }}</p>
        </div>
      </div>
    </template>
  </div>
  <LidiaTabBar activo="utilidades" />
</template>
