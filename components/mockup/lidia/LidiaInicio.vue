<script setup lang="ts">
// Inicio de Lidia (home_screen + DashboardStatsSection): los accesos, las
// cifras del hato y sus desgloses. Todo sale del teléfono, con o sin señal.
import Icono from "@/components/mockup/Icono.vue";
import LidiaBarra from "@/components/mockup/lidia/LidiaBarra.vue";
import LidiaTabBar from "@/components/mockup/lidia/LidiaTabBar.vue";

withDefaults(defineProps<{ sync?: "alDia" | "pendiente" | "sinConexion" }>(), {
  sync: "alDia",
});

// 191 hembras y 57 machos sobre una circunferencia de 2π·46.
const circulo = 2 * Math.PI * 46;
const hembras = (191 / 248) * circulo;
</script>

<template>
  <div class="contenido">
    <LidiaBarra
      overline="El Mezquite · miércoles 11 de noviembre"
      titulo="Buenos días, Ramiro"
      :sync="sync"
    />
    <div class="tarjeta accesos">
      <span><Icono n="mi-add" />Alta</span>
      <span class="div" />
      <span><Icono n="mi-sell" />Venta</span>
      <span class="div" />
      <span><Icono n="mi-shopping-cart" />Compra</span>
    </div>
    <div class="cifras mt24">
      <div class="cifra"><b>248</b><span>cabezas activas</span></div>
      <div class="cifra ambar"><b>91%</b><span>aretado · 226 de 248</span></div>
      <div class="cifra cielo"><b>3.4</b><span>hembras por macho</span></div>
      <div class="cifra neutra"><b>2</b><span>bajas</span></div>
    </div>
    <h2 class="seccion">Composición del hato</h2>
    <div class="tarjeta fx ac g12">
      <div class="dona">
        <svg viewBox="0 0 112 112">
          <circle cx="56" cy="56" r="46" fill="none" stroke="#b5d3a9" stroke-width="13" />
          <circle
            cx="56"
            cy="56"
            r="46"
            fill="none"
            stroke="#6b9b5e"
            stroke-width="13"
            :stroke-dasharray="`${hembras} ${circulo}`"
          />
        </svg>
        <div class="centro"><b>248</b><span>cabezas</span></div>
      </div>
      <div class="grow fx col g12" style="padding-left: 8px">
        <div class="fx g10">
          <i class="punto" style="background: #6b9b5e" />
          <div>
            <p class="fs14 toned">Hembras</p>
            <p class="fs20 fw7 hi num">191 <span class="fs12 muted fw5">77.0%</span></p>
          </div>
        </div>
        <div class="fx g10">
          <i class="punto" style="background: #b5d3a9" />
          <div>
            <p class="fs14 toned">Machos</p>
            <p class="fs20 fw7 hi num">57 <span class="fs12 muted fw5">23.0%</span></p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="seccion">Registro al día</h2>
    <div class="tarjeta">
      <div class="avance">
        <p class="fx jb fs14 toned">Arete SINIIGA <span class="fs12 muted num">226 de 248 · 91%</span></p>
        <div class="barra mt8"><i style="width: 91%" /></div>
      </div>
      <div class="avance">
        <p class="fx jb fs14 toned">Estado reproductivo <span class="fs12 muted num">142 de 191 · 74%</span></p>
        <div class="barra mt8"><i style="width: 74%" /></div>
      </div>
      <p class="fx g16 mt12">
        <span class="enlace ambar">Aretar 22 →</span>
        <span class="enlace">Registrar gestaciones →</span>
      </p>
    </div>
  </div>
  <LidiaTabBar activo="inicio" />
</template>
