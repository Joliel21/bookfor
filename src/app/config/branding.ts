export interface BrandingConfig {
  publicationName: string;
  browserTitle: string;
  logoUrl: string;
  logoAlt: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    accentLight: string;
    surface: string;
    ink: string;
    border: string;
    hover: string;
    readerBackground: string;
  };
  fonts: {
    heading: string;
    body: string;
    interface: string;
    googleFontsUrl?: string;
  };
}

const DEFAULT_BRANDING: BrandingConfig = {
  publicationName: "RARE Revolution Magazine",
  browserTitle: "RARE Revolution Magazine",
  logoUrl: "/images/brand/rare-revolution-trademark-logo.png",
  logoAlt: "RARE Revolution Magazine",
  colors: {
    primary: "#0A6E78",
    secondary: "#D1E8E9",
    accent: "#FFFFFF",
    accentLight: "#D1E8E9",
    surface: "#FFFFFF",
    ink: "#0F7F8A",
    border: "#D1E8E9",
    hover: "#0A6E78",
    readerBackground: "#75B7D1",
  },
  fonts: {
    heading: "Arial",
    body: "Arial",
    interface: "Arial",
  },
};

let activeBranding = DEFAULT_BRANDING;

const mergeBranding = (value: Partial<BrandingConfig>): BrandingConfig => ({
  ...DEFAULT_BRANDING,
  ...value,
  colors: { ...DEFAULT_BRANDING.colors, ...(value.colors || {}) },
  fonts: { ...DEFAULT_BRANDING.fonts, ...(value.fonts || {}) },
});

const applyBrandingToDocument = (branding: BrandingConfig) => {
  const root = document.documentElement;
  const variables: Record<string, string> = {
    "--brand-primary": branding.colors.primary,
    "--brand-secondary": branding.colors.secondary,
    "--brand-accent": branding.colors.accent,
    "--brand-accent-light": branding.colors.accentLight,
    "--brand-surface": branding.colors.surface,
    "--brand-ink": branding.colors.ink,
    "--brand-border": branding.colors.border,
    "--brand-hover": branding.colors.hover,
    "--brand-reader-background": branding.colors.readerBackground,
    "--brand-font-heading": `"${branding.fonts.heading}", serif`,
    "--brand-font-body": `"${branding.fonts.body}", serif`,
    "--brand-font-interface": `"${branding.fonts.interface}", sans-serif`,
  };

  Object.entries(variables).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });

  document.title = branding.browserTitle || branding.publicationName;

  if (branding.fonts.googleFontsUrl) {
    const id = "magazine-brand-fonts";
    let link = document.getElementById(id) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = branding.fonts.googleFontsUrl;
  }
};

export const loadBranding = async (): Promise<BrandingConfig> => {
  const configuredUrl =
    typeof window !== "undefined"
      ? (window as any).theWordsWeCarryConfig?.brandingUrl
      : undefined;
  const url =
    configuredUrl ||
    "https://raw.githubusercontent.com/Joliel21/rare_revolution_magazine_2026/main/assets/data/magazine-source/public/branding.json";

  try {
    const response = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Branding returned HTTP ${response.status} from ${url}`);
    }

    const contentType = response.headers.get("content-type") || "";
    const rawText = await response.text();
    if (
      !contentType.toLowerCase().includes("application/json") &&
      rawText.trimStart().startsWith("<")
    ) {
      throw new Error(
        `Branding URL returned HTML instead of JSON: ${url}`,
      );
    }

    let parsedBranding: Partial<BrandingConfig>;
    try {
      parsedBranding = JSON.parse(rawText);
    } catch (parseError) {
      throw new Error(
        `Branding URL returned invalid JSON: ${url}. ${
          parseError instanceof Error ? parseError.message : String(parseError)
        }`,
      );
    }

    activeBranding = mergeBranding(parsedBranding);
  } catch (error) {
    console.warn("Branding configuration could not be loaded; defaults are in use.", error);
    activeBranding = DEFAULT_BRANDING;
  }

  applyBrandingToDocument(activeBranding);
  return activeBranding;
};

export const getBranding = () => activeBranding;
