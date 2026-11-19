"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Home, User, Layers, LayoutGrid, Mail } from "lucide-react";
import { SPRING_GENTLE } from "@/lib/animations";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export interface FloatingNavProps {
  items?: NavItem[];
  activeId?: string;
  className?: string;
}

export function FloatingNav({
  items,
  activeId: controlledActiveId,
  className = "",
}: FloatingNavProps) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const defaultItems = useMemo<NavItem[]>(
    () => [
      { id: "home", label: t("home"), icon: Home, href: "/#home" },
      { id: "about", label: t("about"), icon: User, href: "/#about" },
      { id: "stack", label: t("stack"), icon: Layers, href: "/#stack" },
      {
        id: "projects",
        label: t("projects"),
        icon: LayoutGrid,
        href: "/#projects",
      },
      { id: "contact", label: t("contact"), icon: Mail, href: "/#contact" },
    ],
    [t]
  );

  const navItems = items ?? defaultItems;

  const [activeTabState, setActiveTabState] = useState<string>(
    controlledActiveId || navItems[0]?.id || "home"
  );
  const activeTab = controlledActiveId ?? activeTabState;

  // Auto detect active section based on scroll position
  useEffect(() => {
    if (controlledActiveId || !isHome) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTabState(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlledActiveId, isHome, navItems]);

  return (
    <motion.nav
      aria-label={t("ariaLabel")}
      initial={{ y: 50, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed bottom-6 left-1/2 z-50 ${className}`}
    >
      <div className="floating-dock flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.14)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = isHome && activeTab === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTabState(item.id)}
              aria-label={item.label}
              className={`relative size-10 rounded-full flex items-center justify-center transition-colors duration-200 group ${
                isActive
                  ? "text-zinc-950"
                  : "text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50/60"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFloatingNavIndicator"
                  className="absolute inset-0 bg-zinc-100 rounded-full shadow-xs -z-0"
                  transition={SPRING_GENTLE}
                />
              )}

              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="relative z-10 flex items-center justify-center"
              >
                <Icon className="size-4.5 stroke-[1.8]" />
              </motion.div>

              {/* Tooltip on hover */}
              <span className="absolute -top-9 px-2 py-1 bg-zinc-900 text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap shadow-sm z-20">
                {item.label}
              </span>
            </Link>
          );
        })}

        <span
          aria-hidden="true"
          className="mx-0.5 h-6 w-px bg-zinc-200/80"
        />

        <LanguageSwitcher />

        <span
          aria-hidden="true"
          className="mx-0.5 h-6 w-px bg-zinc-200/80"
        />

        <ThemeToggle />
      </div>
    </motion.nav>
  );
}

export default FloatingNav;
