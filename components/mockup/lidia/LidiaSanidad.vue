<script setup lang="ts">
// Sanidad (HealthScreen): tres cifras que filtran y las campañas del hato
// (TarjetaDeCampania), cada una con su avance.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
import LidiaTabBar from "@/components/mockup/lidia/LidiaTabBar.vue";

const campanias = [
  {
    nombre: "Vacuna contra derriengue",
    detalle: "Vacunación · Rabia paralítica bovina",
    icono: "mi-vaccines",
    tono: "verde",
    barra: "var(--primary)",
    hechos: 38,
    total: 64,
    saltados: 2,
    fecha: "12 nov",
  },
  {
    nombre: "Desparasitación de otoño",
    detalle: "Desparasitación · Ivermectina",
    icono: "mi-bug-report",
    tono: "cielo",
    barra: "var(--informa)",
    hechos: 120,
    total: 191,
    saltados: 0,
    fecha: "8 nov",
  },
  {
    nombre: "Aretado de becerros",
    detalle: "Aretado · SINIIGA",
    icono: "mi-confirmation-number",
    tono: "neutro",
    barra: "var(--primary)",
    hechos: 22,
    total: 22,
    saltados: 0,
    fecha: "",
  },
];
</script>

<template>
  <div class="contenido">
    <LidiaBarra titulo="Sanidad" />
    <div class="cifras tres mt4">
      <div class="cifra ambar"><Icono n="mi-pending-actions" /><b>2</b><span>campañas en curso</span></div>
      <div class="cifra"><Icono n="mi-vaccines" /><b>95</b><span>animales por aplicar</span></div>
      <div class="cifra rosa"><Icono n="mi-timer" /><b>5</b><span>animales en retiro</span></div>
    </div>
    <div class="fx col g10 mt24">
      <div v-for="c in campanias" :key="c.nombre" class="tarjeta">
        <div class="fx as g12">
          <span class="ic lg" :class="c.tono"><Icono :n="c.icono" /></span>
          <div class="grow">
            <p class="fs15 fw6 hi">{{ c.nombre }}</p>
            <p class="fs13 muted trunc mt2">{{ c.detalle }}</p>
          </div>
          <span v-if="c.hechos < c.total" class="pill ambar">En curso</span>
          <span v-else class="pill verde">Terminada</span>
        </div>
        <div class="barra mt12">
          <i :style="{ width: `${(c.hechos / c.total) * 100}%`, background: c.barra }" />
        </div>
        <p class="fx ac jb mt8 fs13 muted num">
          <span><b class="hi">{{ c.hechos }} de {{ c.total }}</b> aplicados<span v-if="c.saltados" class="dim"> · {{ c.saltados }} saltados</span></span>
          <span v-if="c.fecha" class="fx ac g4 fs12 dim"><Icono n="mi-event" c="xs" />{{ c.fecha }}</span>
        </p>
      </div>
    </div>
  </div>
  <span class="fab ancho"><Icono n="mi-add" />Nueva campaña</span>
  <LidiaTabBar activo="sanidad" />
</template>
