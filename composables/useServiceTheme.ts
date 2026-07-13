interface ModePalette {
  default: string;
  dark: string;
  light: string;
}

interface ServiceTheme {
  /** Modo claro: tonos profundos que cumplen contraste WCAG AA sobre blanco */
  light: ModePalette;
  /** Modo oscuro: tonos brillantes de la marca (los botones usan texto oscuro) */
  dark: ModePalette;
}

// Verdes de marca (mismos valores que main.css). Antes cada servicio tenía su
// propio color (morado, azul, ámbar…) — ese "arcoíris" daba el aire de
// plantilla/IA. Ahora todo el sitio usa los dos verdes de la marca.
const DEFAULT_THEME: ServiceTheme = {
  light: { default: "64 144 40", dark: "47 106 30", light: "121 197 166" },
  dark: { default: "121 197 166", dark: "90 169 138", light: "155 214 190" },
};

const SERVICE_THEMES: Record<string, ServiceTheme> = {
  // LIDIA conserva el verde profundo #409028 también en modo oscuro.
  lidia: {
    light: { default: "64 144 40", dark: "47 106 30", light: "121 197 166" },
    dark: { default: "93 181 74", dark: "64 144 40", light: "150 214 130" },
  },
};

export const useServiceTheme = () => {
  const route = useRoute();
  const colorMode = useColorMode();

  const currentTheme = computed<ServiceTheme>(() => {
    const match = route.path.match(/^\/servicios\/([^/]+)/);
    if (match) {
      return SERVICE_THEMES[match[1]] || DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  const currentColor = computed<ModePalette>(() =>
    colorMode.value === "dark"
      ? currentTheme.value.dark
      : currentTheme.value.light,
  );

  // Acento decorativo (SVGs, brillos): siempre la variante viva de la marca
  const currentColorHex = computed(() => {
    const [r, g, b] = currentTheme.value.dark.default.split(" ").map(Number);
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  });

  const applyTheme = () => {
    if (!import.meta.client) return;
    const el = document.documentElement;
    el.style.setProperty("--color-primary", currentColor.value.default);
    el.style.setProperty("--color-primary-dark", currentColor.value.dark);
    el.style.setProperty("--color-primary-light", currentColor.value.light);
  };

  watch(currentColor, applyTheme, { immediate: true });

  return { currentColor, currentColorHex };
};
