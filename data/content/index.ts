import type { Locale } from "@/i18n/routing";
import en, { type SiteContent } from "./en";
import vi from "./vi";

export type { SiteContent };

const content: Record<Locale, SiteContent> = {
  en,
  vi,
};

export function getContent(locale: string): SiteContent {
  return content[locale as Locale] ?? content.en;
}
