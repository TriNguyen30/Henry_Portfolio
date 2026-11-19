import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Supported locales
  locales: ["en", "vi"],

  // Used when no locale matches
  defaultLocale: "en",

  // Keep English at the root (no prefix) and serve Vietnamese from /vi
  localePrefix: "as-needed",

  // English always lives at `/` and Vietnamese at `/vi`. Without this, the
  // Accept-Language header / NEXT_LOCALE cookie would redirect `/` to `/vi`,
  // preventing the language switcher from ever returning to English.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
