<script setup lang="ts">
// La barra de arriba de Lidia (LidiaAppBar): menú o regresar, el título y, en
// las pantallas principales, la foto de la cuenta con el aro de la
// sincronización (aspectoDeSync): verde al día, naranja con cambios por subir,
// gris sin señal.
import Icono from "@/components/mockup/Icono.vue";

withDefaults(
  defineProps<{
    titulo: string;
    overline?: string;
    volver?: boolean;
    chico?: boolean;
    acciones?: string[];
    avatar?: boolean;
    sync?: "alDia" | "pendiente" | "sinConexion";
  }>(),
  { volver: false, chico: false, acciones: () => [], avatar: true, sync: "alDia" },
);
</script>

<template>
  <div class="barra-lidia">
    <span v-if="volver" class="volver-l"><Icono n="mi-arrow-back-ios-new" /></span>
    <span v-else class="menu"><Icono n="mi-menu" /></span>
    <div class="tit">
      <small v-if="overline">{{ overline }}</small>
      <b :class="{ chico }">{{ titulo }}</b>
    </div>
    <span v-for="a in acciones" :key="a" class="accion"><Icono :n="`mi-${a}`" /></span>
    <span v-if="avatar" class="aro" :class="sync">
      <span class="ini">RS</span>
      <span v-if="sync !== 'alDia'" class="esquina">
        <Icono :n="sync === 'pendiente' ? 'mi-sync' : 'mi-cloud-off'" />
      </span>
    </span>
  </div>
</template>
