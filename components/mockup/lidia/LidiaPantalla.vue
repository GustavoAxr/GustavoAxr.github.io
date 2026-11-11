<script lang="ts">
export type PantallaLidia =
  | "inicio"
  | "inicio-pendiente"
  | "inicio-sin-senal"
  | "inventario"
  | "ficha"
  | "escanear"
  | "vender"
  | "vender-sin-senal"
  | "trato"
  | "sanidad"
  | "utilidades"
  | "movilizacion"
  | "robo";
</script>

<script setup lang="ts">
// Una pantalla de Lidia dentro de un teléfono, por nombre. Las pantallas están
// hechas a mano a partir de la app (lib/features/** de Flutter), con su paleta
// y sus textos.
import { computed, type Component } from "vue";
import PhoneMock from "@/components/mockup/PhoneMock.vue";
import LidiaInicio from "@/components/mockup/lidia/LidiaInicio.vue";
import LidiaInventario from "@/components/mockup/lidia/LidiaInventario.vue";
import LidiaFicha from "@/components/mockup/lidia/LidiaFicha.vue";
import LidiaEscanear from "@/components/mockup/lidia/LidiaEscanear.vue";
import LidiaVender from "@/components/mockup/lidia/LidiaVender.vue";
import LidiaTrato from "@/components/mockup/lidia/LidiaTrato.vue";
import LidiaSanidad from "@/components/mockup/lidia/LidiaSanidad.vue";
import LidiaUtilidades from "@/components/mockup/lidia/LidiaUtilidades.vue";
import LidiaMovilizacion from "@/components/mockup/lidia/LidiaMovilizacion.vue";
import LidiaRobo from "@/components/mockup/lidia/LidiaRobo.vue";

const props = withDefaults(
  defineProps<{
    id: PantallaLidia;
    label: string;
    size?: "xs" | "sm" | "md" | "lg" | "fluid";
  }>(),
  { size: "md" },
);

const pantallas: Record<
  PantallaLidia,
  { c: Component; props?: Record<string, unknown>; camara?: boolean; sinSenal?: boolean }
> = {
  inicio: { c: LidiaInicio },
  "inicio-pendiente": { c: LidiaInicio, props: { sync: "pendiente" } },
  "inicio-sin-senal": { c: LidiaInicio, props: { sync: "sinConexion" }, sinSenal: true },
  inventario: { c: LidiaInventario },
  ficha: { c: LidiaFicha, sinSenal: true },
  escanear: { c: LidiaEscanear, camara: true },
  vender: { c: LidiaVender },
  "vender-sin-senal": { c: LidiaVender, props: { sinSenal: true }, sinSenal: true },
  trato: { c: LidiaTrato, sinSenal: true },
  sanidad: { c: LidiaSanidad },
  utilidades: { c: LidiaUtilidades },
  movilizacion: { c: LidiaMovilizacion },
  robo: { c: LidiaRobo },
};

const p = computed(() => pantallas[props.id]);
</script>

<template>
  <PhoneMock app="lidia" :size="size" :camara="p.camara" :sin-senal="p.sinSenal" :label="label">
    <component :is="p.c" v-bind="p.props" />
  </PhoneMock>
</template>
