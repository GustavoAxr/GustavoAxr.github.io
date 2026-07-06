<script setup>
import ThemeToggle from "~/components/ThemeToggle.vue";
import { ChevronDown, Calculator, Lightbulb } from "lucide-vue-next";
const { servicesMenu } = useServices();

// Estado para el menú móvil y acordeón
const isMobileMenuOpen = ref(false);
const isMobileServicesOpen = ref(false);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
    <!-- Efecto de borde gradiente animado -->
    <div
      class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
    ></div>

    <!-- Fondo con efecto glassmorphism mejorado -->
    <div
      class="absolute inset-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl"
    ></div>

    <div
      class="container mx-auto px-6 h-20 flex items-center justify-between relative"
    >
      <!-- Logo con imagen real -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10 flex items-center justify-center">
          <img
            src="~/assets/img/logo-code.svg"
            alt=""
            class="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <!-- Efecto glow en hover -->
          <div
            class="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
        <span class="text-xl font-bold tracking-tight">
          <span class="text-slate-600 dark:text-slate-300">CODE</span
          ><span class="text-primary">GAHP</span>
        </span>
      </NuxtLink>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          to="/"
          exact-active-class="!text-primary-dark dark:!text-primary bg-primary/10 dark:bg-primary/20"
          class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors rounded-lg group"
        >
          <span class="relative z-10">Inicio</span>
          <span
            class="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/proyectos"
          active-class="!text-primary-dark dark:!text-primary bg-primary/10 dark:bg-primary/20"
          class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors rounded-lg group"
        >
          <span class="relative z-10">Proyectos</span>
          <span
            class="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
          ></span>
        </NuxtLink>
        <!-- Servicios Mega Menu Trigger -->
        <div class="group relative">
          <NuxtLink
            to="/servicios"
            active-class="!text-primary-dark dark:!text-primary bg-primary/10 dark:bg-primary/20"
            class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors rounded-lg flex items-center gap-1"
          >
            <span class="relative z-10">Servicios</span>
            <ChevronDown
              class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
            />
            <span
              class="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 z-0"
            ></span>
          </NuxtLink>

          <!-- Mega Menu Dropdown -->
          <div
            class="fixed top-20 left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-300"
            style="width: min(1000px, calc(100vw - 2rem))"
          >
            <div
              class="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-[calc(100vh-7rem)] overflow-y-auto"
            >
              <!-- Grid de Servicios -->
              <div class="grid grid-cols-2 xl:grid-cols-4 gap-8 p-8">
                <div
                  v-for="(category, idx) in servicesMenu"
                  :key="idx"
                  class="space-y-4"
                >
                  <h3
                    class="text-xs font-bold text-slate-400 uppercase tracking-wider"
                  >
                    {{ category.category }}
                  </h3>
                  <div class="space-y-4">
                    <NuxtLink
                      v-for="(item, itemIdx) in category.items"
                      :key="itemIdx"
                      :to="item.to"
                      class="flex items-start gap-3 group/item p-2 -mx-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <component
                        :is="item.icon"
                        class="w-5 h-5 text-slate-400 group-hover/item:text-primary mt-0.5 shrink-0 transition-colors"
                      />
                      <div>
                        <div class="flex items-center gap-2">
                          <span
                            class="font-medium text-slate-700 dark:text-slate-200 group-hover/item:text-primary transition-colors text-sm"
                            >{{ item.title }}</span
                          >
                          <span
                            v-if="item.badge"
                            :class="[
                              'text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide',
                              item.badgeColor,
                            ]"
                            >{{ item.badge }}</span
                          >
                        </div>
                        <p
                          class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed"
                        >
                          {{ item.desc }}
                        </p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Bottom Cards -->
              <div
                class="grid grid-cols-2 gap-px bg-slate-100 dark:bg-slate-800 border-t border-slate-100 dark:border-slate-800"
              >
                <NuxtLink
                  to="/contacto"
                  class="bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex items-center justify-between group cursor-pointer hover:from-slate-800 hover:to-slate-900 transition-all"
                >
                  <div class="flex items-center gap-4">
                    <div
                      class="p-2 border border-slate-700 rounded-full text-slate-400 bg-slate-900"
                    >
                      <Calculator class="w-5 h-5" />
                    </div>
                    <div>
                      <p class="font-semibold text-white text-sm">
                        Cotiza tu proyecto
                      </p>
                      <p class="text-xs text-slate-400">
                        Obtén una estimación rápida.
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 text-slate-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="/#booking-section"
                  class="bg-gradient-to-br from-slate-900 to-slate-950 p-6 flex items-center justify-between group cursor-pointer hover:from-slate-800 hover:to-slate-900 transition-all border-l border-slate-800"
                >
                  <div class="flex items-center gap-4">
                    <div
                      class="p-2 border border-slate-700 rounded-full text-slate-400 bg-slate-900"
                    >
                      <Lightbulb class="w-5 h-5" />
                    </div>
                    <div>
                      <p class="font-semibold text-white text-sm">
                        Asesoría sin costo
                      </p>
                      <p class="text-xs text-slate-400">
                        Agenda una videollamada.
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 text-slate-500 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/contacto"
          active-class="!text-primary-dark dark:!text-primary bg-primary/10 dark:bg-primary/20"
          class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors rounded-lg group"
        >
          <span class="relative z-10">Contacto</span>
          <span
            class="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Acciones del header y Menú Hamburguesa -->
      <div class="flex items-center gap-3">
        <ThemeToggle />

        <!-- Botón CTA Desktop -->
        <NuxtLink
          to="/contacto"
          class="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
        >
          <span>Hablemos</span>
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </NuxtLink>

        <!-- Botón Menú Móvil -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          :aria-label="isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="isMobileMenuOpen"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú Móvil Full Screen -->
    <div
      v-if="isMobileMenuOpen"
      class="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col p-6 animate-fade-in-down border-t border-slate-200 dark:border-slate-800"
    >
      <nav class="flex flex-col gap-4 text-center">
        <NuxtLink
          to="/"
          @click="isMobileMenuOpen = false"
          exact-active-class="text-primary bg-primary/10"
          class="text-xl font-medium py-4 rounded-xl text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
        >
          Inicio
        </NuxtLink>
        <NuxtLink
          to="/proyectos"
          @click="isMobileMenuOpen = false"
          active-class="text-primary bg-primary/10"
          class="text-xl font-medium py-4 rounded-xl text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
        >
          Proyectos
        </NuxtLink>
        <!-- Servicios Accordion Mobile -->
        <div class="flex flex-col">
          <button
            @click="isMobileServicesOpen = !isMobileServicesOpen"
            class="text-xl font-medium py-4 rounded-xl text-slate-700 dark:text-slate-200 hover:text-primary transition-colors flex items-center justify-center gap-2"
            :class="{ 'text-primary bg-primary/10': isMobileServicesOpen }"
          >
            Servicios
            <ChevronDown
              :class="[
                'w-5 h-5 transition-transform duration-300',
                isMobileServicesOpen ? 'rotate-180' : '',
              ]"
            />
          </button>

          <div
            v-show="isMobileServicesOpen"
            class="overflow-hidden transition-all duration-300 bg-slate-50 dark:bg-slate-900/50 rounded-xl mt-2 p-4 text-left space-y-6"
          >
            <div v-for="(category, idx) in servicesMenu" :key="idx">
              <h3
                class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3"
              >
                {{ category.category }}
              </h3>
              <div class="space-y-3">
                <NuxtLink
                  v-for="(item, itemIdx) in category.items"
                  :key="itemIdx"
                  :to="item.to"
                  @click="isMobileMenuOpen = false"
                  class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <component
                    :is="item.icon"
                    class="w-5 h-5 text-slate-400 shrink-0"
                  />
                  <span
                    class="text-sm font-medium text-slate-700 dark:text-slate-200"
                    >{{ item.title }}</span
                  >
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/contacto"
          @click="isMobileMenuOpen = false"
          active-class="text-primary bg-primary/10"
          class="text-xl font-medium py-4 rounded-xl text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
        >
          Contacto
        </NuxtLink>

        <div class="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

        <NuxtLink
          to="/contacto"
          @click="isMobileMenuOpen = false"
          class="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/25 mt-2"
        >
          <span>Hablemos</span>
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
