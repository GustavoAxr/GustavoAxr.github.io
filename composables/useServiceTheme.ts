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

const DEFAULT_THEME: ServiceTheme = {
  light: { default: "14 128 96", dark: "10 104 78", light: "45 206 154" },
  dark: { default: "45 206 154", dark: "37 176 133", light: "94 221 181" },
};

const SERVICE_THEMES: Record<string, ServiceTheme> = {
  "landing-page": {
    light: { default: "126 34 206", dark: "107 33 168", light: "168 85 247" },
    dark: { default: "168 85 247", dark: "147 51 234", light: "192 132 252" },
  },
  corporativo: {
    light: { default: "29 78 216", dark: "30 64 175", light: "59 130 246" },
    dark: { default: "96 165 250", dark: "59 130 246", light: "147 197 253" },
  },
  dominio: {
    light: { default: "4 120 87", dark: "6 95 70", light: "52 211 153" },
    dark: { default: "52 211 153", dark: "16 185 129", light: "110 231 183" },
  },
  hosting: {
    light: { default: "14 116 144", dark: "21 94 117", light: "34 211 238" },
    dark: { default: "34 211 238", dark: "6 182 212", light: "103 232 249" },
  },
  email: {
    light: { default: "180 83 9", dark: "146 64 14", light: "251 191 36" },
    dark: { default: "251 191 36", dark: "245 158 11", light: "252 211 77" },
  },
  aws: {
    light: { default: "194 65 12", dark: "154 52 18", light: "251 146 60" },
    dark: { default: "251 146 60", dark: "249 115 22", light: "253 186 116" },
  },
  lidia: {
    light: { default: "21 128 61", dark: "22 101 52", light: "34 197 94" },
    dark: { default: "34 197 94", dark: "22 163 74", light: "74 222 128" },
  },
  equipos: {
    light: { default: "185 28 28", dark: "153 27 27", light: "248 113 113" },
    dark: { default: "248 113 113", dark: "239 68 68", light: "252 165 165" },
  },
  redes: {
    light: { default: "109 40 217", dark: "91 33 182", light: "167 139 250" },
    dark: { default: "167 139 250", dark: "139 92 246", light: "196 181 253" },
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
