<script setup lang="ts">
// El detalle de una movilización (MovementDetailScreen), visto desde la UPP
// de destino: motivo y estatus, ruta, logística y los animales; el destino
// confirma la llegada.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
</script>

<template>
  <div class="contenido sin-tabs">
    <LidiaBarra titulo="Movilización" volver :avatar="false" />
    <div class="fx ac jb g8" style="margin-top: 4px">
      <p class="fs20 fw7 hi">Compra-venta</p>
      <span class="pill ambar">En ruta</span>
    </div>
    <h2 class="seccion">Ruta</h2>
    <div class="lista">
      <div class="dato">Origen <b>UPP El Mezquite</b></div>
      <div class="dato">Destino <b>UPP Los Álamos</b></div>
    </div>
    <h2 class="seccion">Logística</h2>
    <div class="lista">
      <div class="dato">Salida <b>11/11/2026 07:30</b></div>
      <div class="dato">Llegada estimada <b>11/11/2026 11:00</b></div>
      <div class="dato">Chofer <b>Mario Canul</b></div>
      <div class="dato">Licencia <b>CAM-58213</b></div>
    </div>
    <h2 class="seccion">Animales (3)</h2>
    <div class="lista">
      <div class="fila">
        <span class="foto"><img src="/img/lidia/maqueta/res-4.webp" alt="" loading="lazy" /></span>
        <div class="grow"><p class="fs15 fw6 hi num">0412345691</p><p class="fs13 muted">Becerro · Cruza</p></div>
        <Icono n="mi-chevron-right" c="sm dim" />
      </div>
      <div class="fila">
        <span class="foto"><img src="/img/lidia/maqueta/res-5.webp" alt="" loading="lazy" /></span>
        <div class="grow"><p class="fs15 fw6 hi num">0412345702</p><p class="fs13 muted">Becerro · Suizo</p></div>
        <Icono n="mi-chevron-right" c="sm dim" />
      </div>
    </div>
  </div>
  <div class="accion-abajo">
    <span class="btn solid"><Icono n="mi-check-circle" />Confirmar llegada</span>
  </div>
</template>
