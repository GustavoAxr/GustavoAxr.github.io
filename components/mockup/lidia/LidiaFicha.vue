<script setup lang="ts">
// La ficha de un animal (AnimalDetailScreen): foto, arete, pestañas y los
// datos de la identidad. Se ve igual sin señal: la ficha vive en el teléfono.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
</script>

<template>
  <div class="contenido sin-tabs">
    <LidiaBarra
      titulo="Inventario"
      volver
      chico
      :avatar="false"
      :acciones="['picture-as-pdf', 'center-focus-strong']"
    />
    <div class="fx ac g12">
      <span class="foto grande"><img src="/img/lidia/maqueta/res-2.webp" alt="" loading="lazy" /></span>
      <div class="grow">
        <p class="fs20 fw7 hi num">0412345678</p>
        <p class="fs13 muted mt2">Brahman · Hembra · 3a 2m</p>
      </div>
      <span class="pill verde">Viva</span>
    </div>
    <div class="pestanas mt16">
      <span class="pestana on">Identidad</span>
      <span class="pestana">Genealogía</span>
      <span class="pestana">Partos</span>
      <span class="pestana">Salud</span>
      <span class="pestana">REEMO</span>
    </div>
    <div class="tarjeta mt16" style="background: var(--p-verde); padding: 14px 16px">
      <p class="fx ac g8 fs14 fw7 verde-tx">
        <Icono n="mi-pregnant-woman" c="sm" /><span class="grow">Gestación</span>Faltan 96 d
      </p>
      <div class="barra mt10" style="background: var(--sup)"><i style="width: 66%" /></div>
      <p class="fx jb mt6 fs12"><span class="muted num">187 / 283 días</span><span class="fw6 verde-tx">66%</span></p>
    </div>
    <h2 class="seccion">Identificación</h2>
    <div class="lista">
      <div class="dato">SINIIGA <b>0412345678</b></div>
      <div class="dato">Piezas puestas <b>Botón y bandera</b></div>
      <div class="dato">Arete interno <b>#125</b></div>
      <div class="dato">Nombre <b>La Pinta</b></div>
    </div>
    <h2 class="seccion">Datos físicos</h2>
    <div class="lista">
      <div class="dato">Nacimiento <b>14/08/2022</b></div>
      <div class="dato">Último peso <b>412 kg</b></div>
      <div class="dato">Color <b>Barcino</b></div>
    </div>
  </div>
  <span class="fab" style="bottom: 34px"><Icono n="mi-edit" /></span>
</template>
