<script setup lang="ts">
// Inventario de Lidia (AnimalListScreen + AnimalListTile): el buscador, las
// pestañas, los filtros y una tarjeta por animal con su foto y sus marcas.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
import LidiaTabBar from "@/components/mockup/lidia/LidiaTabBar.vue";

const animales = [
  { arete: "0412345678", detalle: "Bovino · Brahman · #125", foto: "res-2" },
  { arete: "0412345691", detalle: "Bovino · Cruza · #131", foto: "res-4", dueno: "De Juan" },
  { arete: "0412345702", detalle: "Bovino · Suizo · #140", foto: "res-1" },
  { arete: "0412345715", detalle: "Bovino · Cruza · #152", foto: "res-5", robado: true },
  { arete: "0412345733", detalle: "Bovino · Beefmaster · #158", foto: "res-6" },
  { arete: "0412345748", detalle: "Bovino · Brahman · #161", foto: "" },
];
</script>

<template>
  <div class="contenido">
    <LidiaBarra titulo="Inventario" :acciones="['ios-share']" />
    <div class="buscador">
      <Icono n="mi-search" /><span class="trunc">Buscar por SINIIGA, arete o nombre…</span>
      <span class="cam"><Icono n="mi-photo-camera" /></span>
    </div>
    <div class="pestanas mt12">
      <span class="pestana on">Vivos <span class="cuenta num">248</span></span>
      <span class="pestana">Bajas <span class="cuenta num">2</span></span>
      <span class="pestana">Vendidos <span class="cuenta num">31</span></span>
    </div>
    <div class="chips mt10" style="flex-wrap: nowrap; overflow: hidden">
      <span class="chip on">Hembras</span>
      <span class="chip">Especie</span>
      <span class="chip">Raza</span>
      <span class="chip">Reproductivo</span>
      <span class="chip">UPP</span>
    </div>
    <p class="fs13 muted mt12" style="margin-bottom: 8px">191 animales</p>
    <div v-for="a in animales" :key="a.arete" class="animal">
      <span class="foto">
        <img v-if="a.foto" :src="`/img/lidia/maqueta/${a.foto}.webp`" alt="" loading="lazy" />
        <Icono v-else n="mi-pets" />
      </span>
      <div class="grow">
        <p class="fx ac g8">
          <span class="fs15 fw6 hi num trunc">{{ a.arete }}</span>
          <span v-if="a.robado" class="pill rosa"><Icono n="mi-report-gmailerrorred" c="xs" />Robado</span>
        </p>
        <p class="fs13 muted trunc mt2">{{ a.detalle }}</p>
        <p v-if="a.dueno" class="mt6"><span class="pill cielo">{{ a.dueno }}</span></p>
      </div>
      <Icono n="mi-chevron-right" c="sm dim" />
    </div>
  </div>
  <span class="fab"><Icono n="mi-add" /></span>
  <LidiaTabBar activo="inventario" />
</template>
