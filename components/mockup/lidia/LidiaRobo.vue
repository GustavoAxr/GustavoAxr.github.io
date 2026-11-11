<script setup lang="ts">
// Alertas de robo (MunicipalFeedScreen): los robos reportados en el municipio,
// sin datos de quién los reportó.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";

const alertas = [
  { titulo: "3 animales reportados", detalle: "Escárcega · hace 2 h", fotos: "2 con foto", foto: "res-3" },
  { titulo: "1 animal reportado", detalle: "Escárcega · hace 1 día", fotos: "", foto: "" },
  { titulo: "5 animales reportados", detalle: "Escárcega · hace 4 días", fotos: "4 con foto", foto: "res-1" },
  { titulo: "2 animales reportados", detalle: "Escárcega · hace 9 días", fotos: "", foto: "" },
];
</script>

<template>
  <div class="contenido sin-tabs">
    <LidiaBarra titulo="Alertas de robo" volver :avatar="false" :acciones="['assignment']" />
    <div class="fx col g10 mt4">
      <div v-for="a in alertas" :key="a.detalle" class="tarjeta ap fx ac g12">
        <span v-if="a.foto" class="foto" style="width: 46px; height: 46px; border-radius: 10px">
          <img :src="`/img/lidia/maqueta/${a.foto}.webp`" alt="" loading="lazy" />
        </span>
        <span v-else class="ic lg rosa"><Icono n="mi-report-gmailerrorred" /></span>
        <div class="grow">
          <p class="fs15 fw6 hi">{{ a.titulo }}</p>
          <p class="fs13 muted mt2">{{ a.detalle }}</p>
          <p v-if="a.fotos" class="fs12 dim mt2">{{ a.fotos }}</p>
        </div>
        <Icono n="mi-chevron-right" c="sm dim" />
      </div>
    </div>
  </div>
  <span class="fab ancho" style="bottom: 34px"><Icono n="mi-add-alert" />Reportar robo</span>
</template>
