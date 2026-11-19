"use client";

import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";
import { motion } from "motion/react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { SPRING_GENTLE } from "@/lib/animations";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "vi" : "en";
  const nextLanguage =
    nextLocale === "en" ? t("english") : t("vietnamese");
  const label = t("switchTo", { language: nextLanguage });

  const switchLocale = () => {
    // Keep the current query string and hash (e.g. `/#projects`) intact.
    const { search, hash } = window.location;
    router.replace(`${pathname}${search}${hash}`, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={label}
      title={label}
      className="relative size-10 rounded-full flex items-center justify-center gap-0.5 text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50/60 transition-colors duration-200 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={SPRING_GENTLE}
        className="relative z-10 flex items-center justify-center gap-0.5"
      >
        <Languages className="size-4.5 stroke-[1.8]" />
        <span className="text-[9px] font-bold uppercase leading-none">
          {locale}
        </span>
      </motion.div>

      {/* Tooltip on hover */}
      <span className="absolute -top-9 px-2 py-1 bg-zinc-900 text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap shadow-sm z-20">
        {label}
      </span>
    </button>
  );
}

export default LanguageSwitcher;
