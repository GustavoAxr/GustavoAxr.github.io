// Al cambiar de idioma (ES ⇄ EN) la ruta cambia (/proyectos ⇄ /en/proyectos)
// y Nuxt lo trata como otra página: subiría al inicio. Aquí cada ruta le dice
// que no lo haga cuando solo cambia el idioma, así la pantalla se queda en los
// mismos pixeles. Se usa `meta.scrollToTop`, que el scrollBehavior de Nuxt ya
// respeta, y se conserva el valor que cada página haya definido.

// Las rutas de @nuxtjs/i18n se llaman "<ruta>___<idioma>"
const baseName = (name: unknown) => String(name ?? "").split("___")[0];

const isLocaleSwitch = (to: { name?: unknown }, from: { name?: unknown }) =>
  !!to.name && to.name !== from.name && baseName(to.name) === baseName(from.name);

export default defineNuxtPlugin(() => {
  for (const route of useRouter().getRoutes()) {
    const prev = route.meta.scrollToTop;
    route.meta.scrollToTop = (to, from) =>
      isLocaleSwitch(to, from)
        ? false
        : typeof prev === "function"
          ? prev(to, from)
          : prev !== false;
  }
});
