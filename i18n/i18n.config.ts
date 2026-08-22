// Configuración base de vue-i18n. Los mensajes viven en bloques <i18n> de cada
// componente (scope local). Si falta una clave en inglés, cae al español.
export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: "es",
  fallbackWarn: false,
  missingWarn: false,
}));
