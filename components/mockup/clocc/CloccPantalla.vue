<script setup lang="ts">
// Una pantalla de la maqueta de Clocc dentro de un teléfono. El HTML es de la
// maqueta (lib/maquetas), contenido nuestro y fijo.
import { computed, useId } from "vue";
import PhoneMock from "@/components/mockup/PhoneMock.vue";
import type { PantallaClocc } from "@/lib/maquetas/clocc-portada";

const props = withDefaults(
  defineProps<{
    pantalla: PantallaClocc;
    label: string;
    size?: "xs" | "sm" | "md" | "lg" | "fluid";
  }>(),
  { size: "md" },
);

const sufijo = `-${useId()}`;
const html = computed(() => props.pantalla.html.replaceAll("__U__", sufijo));
</script>

<template>
  <PhoneMock app="clocc" :size="size" :camara="pantalla.camara" :label="label">
    <div class="html" v-html="html" />
  </PhoneMock>
</template>
