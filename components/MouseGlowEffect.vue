<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const mouseX = ref(0);
const mouseY = ref(0);
const isVisible = ref(false);

// Secciones donde el efecto del mouse está activo
// Puedes modificar esta lista para añadir o quitar secciones
const allowedSections = [
  "hero-section", // Hero principal
  "about", // Quiénes Somos
  "proud-products", // Spotlight de LIDIA
  "main-footer", // Footer
];

const isInAllowedSection = (element: Element | null): boolean => {
  if (!element) return false;

  // Check if the element or any parent has one of the allowed IDs
  let current: Element | null = element;
  while (current) {
    if (current.id && allowedSections.includes(current.id)) {
      return true;
    }
    // Also check for footer tag
    if (current.tagName === "FOOTER") {
      return true;
    }
    current = current.parentElement;
  }
  return false;
};

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;

  // Check if mouse is over an allowed section
  const elementUnderMouse = document.elementFromPoint(e.clientX, e.clientY);
  isVisible.value = isInAllowedSection(elementUnderMouse);
};

const handleMouseLeave = () => {
  isVisible.value = false;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  document.body.addEventListener("mouseleave", handleMouseLeave);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  document.body.removeEventListener("mouseleave", handleMouseLeave);
});
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    aria-hidden="true"
  >
    <!-- Main glow circle -->
    <div
      class="absolute w-64 h-64 rounded-full transition-opacity duration-300"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      :style="{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(45, 206, 154, 0.15) 0%, rgba(45, 206, 154, 0.05) 40%, transparent 70%)',
        filter: 'blur(20px)',
      }"
    ></div>

    <!-- Secondary smaller glow -->
    <div
      class="absolute w-32 h-32 rounded-full transition-opacity duration-200"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
      :style="{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        transform: 'translate(-50%, -50%)',
        background:
          'radial-gradient(circle, rgba(45, 206, 154, 0.5) 0%, transparent 60%)',
        filter: 'blur(10px)',
      }"
    ></div>
  </div>
</template>
