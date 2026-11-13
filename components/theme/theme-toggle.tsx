"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/** Server and first client render assume light; the bootstrap script sets the
 *  real class before paint, so the store corrects itself immediately. */
function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next: Theme = getSnapshot() === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies) — the
      // class change still applies for this session.
    }
  }, []);

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="relative size-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-800 hover:bg-zinc-50/60 transition-colors duration-200 group cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        className="relative z-10 flex items-center justify-center"
      >
        <Sun className="hidden dark:block size-4.5 stroke-[1.8]" />
        <Moon className="block dark:hidden size-4.5 stroke-[1.8]" />
      </motion.div>

      {/* Tooltip on hover */}
      <span className="absolute -top-9 px-2 py-1 bg-zinc-900 text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 -translate-y-1 group-hover:translate-y-0 whitespace-nowrap shadow-sm z-20">
        {label}
      </span>
    </button>
  );
}

export default ThemeToggle;
