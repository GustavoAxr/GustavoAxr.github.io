<script setup lang="ts">
// Terminal que se escribe sola en el hero de "Sobre mí": comandos con datos
// reales (quién soy, qué hago, dónde estoy y qué proyectos tengo). Es
// decorativa (aria-hidden): lo mismo dice el texto del hero. Una copia
// invisible del contenido final fija el tamaño, así la ventana no crece
// mientras se escribe. En el HTML estático sale vacía y se escribe al montar;
// con "menos movimiento" aparece completa de una vez.
const { t } = useI18n({ useScope: "local" });

const lines = computed(() => [
  { cmd: "whoami", out: t("whoami") },
  { cmd: t("roleCmd"), out: t("role") },
  { cmd: "pwd", out: t("pwd") },
  { cmd: t("lsCmd"), out: "" }, // la salida (clocc/ lidia/) va con sus colores
]);

const step = ref(-1); // línea que se está escribiendo (-1: aún no empieza)
const chars = ref(0); // letras escritas del comando actual
const showOut = ref(false); // ya se ve la salida de la línea actual
const done = computed(() => step.value >= lines.value.length);

let timer: ReturnType<typeof setTimeout> | undefined;
const later = (fn: () => void, ms: number) => (timer = setTimeout(fn, ms));

function tick() {
  const line = lines.value[step.value];
  if (!line) return;
  if (chars.value < line.cmd.length) {
    chars.value++;
    later(tick, 55 + Math.random() * 50);
  } else if (!showOut.value) {
    later(() => {
      showOut.value = true;
      later(next, 700);
    }, 260);
  }
}
function next() {
  step.value++;
  chars.value = 0;
  showOut.value = false;
  later(tick, 380);
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    step.value = lines.value.length;
    return;
  }
  later(next, 900);
});
onBeforeUnmount(() => clearTimeout(timer));

// Lo que se ve de cada línea en este momento
function visible(i: number) {
  if (i < step.value) return { cmd: lines.value[i]!.cmd, out: true, caret: false };
  if (i === step.value)
    return {
      cmd: lines.value[i]!.cmd.slice(0, chars.value),
      out: showOut.value,
      caret: !showOut.value,
    };
  return null;
}
</script>

<template>
  <div
    class="w-[min(100%,28rem)] overflow-hidden rounded-xl bg-slate-950 font-mono text-[12.5px] shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:text-[13px]"
    aria-hidden="true"
  >
    <div class="flex h-8 items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3">
      <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
      <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
      <span class="ml-3 text-[11px] text-slate-500">gustavo@codegahp: ~</span>
    </div>

    <!-- Copia invisible (tamaño final) y la versión que se escribe, encimadas -->
    <div class="grid p-4 leading-relaxed">
      <div class="invisible [grid-area:1/1]">
        <template v-for="(l, i) in lines" :key="`s${i}`">
          <p><span class="text-primary">~ $</span> {{ l.cmd }}</p>
          <p>{{ l.out || "clocc/  lidia/" }}</p>
        </template>
        <p>~ $</p>
      </div>

      <div class="[grid-area:1/1]">
        <template v-for="(l, i) in lines" :key="i">
          <template v-if="visible(i)">
            <p class="text-slate-100">
              <span class="text-primary">~</span>
              <span class="text-slate-500"> $ </span>{{ visible(i)!.cmd
              }}<span v-if="visible(i)!.caret" class="term-caret"></span>
            </p>
            <p v-if="visible(i)!.out && l.out" class="text-slate-400">
              {{ l.out }}
            </p>
            <p v-else-if="visible(i)!.out">
              <span class="text-sky-400">clocc/</span>
              <span class="ml-3 text-emerald-400">lidia/</span>
            </p>
          </template>
        </template>
        <p v-if="done || step < 0" class="text-slate-100">
          <span class="text-primary">~</span>
          <span class="text-slate-500"> $ </span><span class="term-caret"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.term-caret {
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  margin-left: 1px;
  vertical-align: -0.15em;
  background: rgb(var(--color-primary));
  animation: caret 1s steps(1) infinite;
}
@keyframes caret {
  50% {
    opacity: 0;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "whoami": "Gustavo A. Herrera Pérez",
    "roleCmd": "cat rol.txt",
    "role": "desarrollador de software · fundador de CODEGAHP",
    "pwd": "~/mexico/campeche/ciudad-del-carmen",
    "lsCmd": "ls proyectos/"
  },
  "en": {
    "whoami": "Gustavo A. Herrera Pérez",
    "roleCmd": "cat role.txt",
    "role": "software developer · founder of CODEGAHP",
    "pwd": "~/mexico/campeche/ciudad-del-carmen",
    "lsCmd": "ls projects/"
  }
}
</i18n>
