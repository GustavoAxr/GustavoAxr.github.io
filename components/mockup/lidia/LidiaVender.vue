<script setup lang="ts">
// Vender con doble-QR (SellSaleScreen, fase del QR): el vendedor muestra su
// oferta firmada y después escanea la aceptación del comprador. Sin señal, el
// QR es el de la venta sin señal, que se registra en un plazo de 48 horas.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
import QrMuestra from "@/components/mockup/lidia/QrMuestra.vue";

withDefaults(defineProps<{ sinSenal?: boolean }>(), { sinSenal: false });
</script>

<template>
  <div class="contenido sin-tabs">
    <LidiaBarra titulo="Vender" volver :avatar="false" />
    <div class="fx col ac center" style="padding: 18px 8px 0">
      <p class="fs17 fw6 hi num">
        {{ sinSenal ? "Venta sin señal" : "Venta" }} · $33,000.00
      </p>
      <div class="qr-papel mt16"><QrMuestra /></div>
      <p class="fs13 muted mt16" style="max-width: 280px">
        <template v-if="sinSenal">
          Pide al comprador que escanee este QR con Lidia. Funciona sin señal: la venta se
          registra cuando los dos teléfonos tengan señal (máximo 48 horas).
        </template>
        <template v-else>
          Pide al comprador que escanee este QR desde su app Lidia. Válido por 30 minutos.
        </template>
      </p>
      <p v-if="!sinSenal" class="fx ac g6 enlace mt16">
        <Icono n="mi-signal-cellular-off" c="sm" />¿El comprador no tiene señal?
      </p>
    </div>
  </div>
  <div class="accion-abajo">
    <span class="btn texto sm" style="align-self: center"><Icono n="mi-arrow-back" c="sm" />Volver a editar la venta</span>
    <span class="btn solid">El comprador ya aceptó — escanear su QR</span>
  </div>
</template>
