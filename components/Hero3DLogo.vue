<script setup>
import { onMounted, ref } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <!--
    Ornamento decorativo: su ancho se calcula con el margen libre real
    del viewport (100vw menos la columna de texto de 64rem, entre 2),
    de modo que NUNCA puede montarse sobre el contenido central.
  -->
  <div
    class="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
    style="width: min(calc((100vw - 64rem) / 2 + 2rem), 600px)"
    aria-hidden="true"
  >
    <div
      :class="[
        'w-full',
        'transition-all duration-1500 ease-out',
        isVisible
          ? 'opacity-100 translate-x-0 rotate-y-0'
          : 'opacity-0 translate-x-32 rotate-y-45',
      ]"
      style="transform-style: preserve-3d; perspective: 1000px"
    >
      <img
        src="~/assets/img/codegahp2-03.png"
        alt=""
        class="w-full h-auto drop-shadow-2xl animate-float"
        style="
          filter: drop-shadow(0 25px 50px rgba(45, 206, 154, 0.3));
          transform: rotateY(-15deg) rotateX(5deg);
          transform-style: preserve-3d;
        "
      />
    </div>
  </div>
</template>

<style scoped>
.rotate-y-0 {
  transform: rotateY(0deg) rotateX(0deg);
}

.rotate-y-45 {
  transform: rotateY(45deg) rotateX(10deg);
}

@keyframes float {
  0%,
  100% {
    transform: rotateY(-15deg) rotateX(5deg) translateY(0px);
  }
  50% {
    transform: rotateY(-15deg) rotateX(5deg) translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
