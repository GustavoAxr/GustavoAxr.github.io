<script setup lang="ts">
// La barra de abajo de Lidia (AppBottomNav): Escanear verde al centro.
import Icono from "@/components/mockup/Icono.vue";

defineProps<{
  activo?: "inicio" | "inventario" | "utilidades" | "sanidad";
}>();
</script>

<template>
  <nav class="tabbar">
    <span class="tab" :class="{ activo: activo === 'inicio' }"><Icono n="mi-home" />Inicio</span>
    <span class="tab" :class="{ activo: activo === 'inventario' }"><Icono n="mi-inventory-2" />Inventario</span>
    <span class="tab checar">
      <span class="tab-checar"><Icono n="mi-qr-code-scanner" c="lg" /></span>Escanear
    </span>
    <span class="tab" :class="{ activo: activo === 'utilidades' }"><Icono n="mi-swap-horiz" />Utilidades</span>
    <span class="tab" :class="{ activo: activo === 'sanidad' }"><Icono n="mi-medical-services" />Sanidad</span>
  </nav>
</template>
