"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiCplusplus,
  SiMysql,  
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  SPRING_GENTLE,
} from "@/lib/animations";
import {
  stackItems,
  type StackItem,
  type StackIconKey,
} from "@/data/stack";

const stackIcons: Record<
  StackIconKey,
  React.ComponentType<{ className?: string }>
> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  git: SiGit,
  figma: SiFigma,
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  cplusplus: SiCplusplus,
  java: FaJava,
  mysql: SiMysql,
};

function StackCard({ item }: { item: StackItem }) {
  const Icon = stackIcons[item.icon];

  const card = (
    <motion.div
      variants={fadeInUpVariants}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: "0 10px 24px -6px rgba(0, 0, 0, 0.06)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING_GENTLE}
      className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border border-zinc-200/70 bg-white hover:border-zinc-300 hover:bg-zinc-50/40 transition-colors duration-200 group h-full cursor-pointer"
    >
      {/* Icon Container */}
      <div className="size-11 sm:size-12 rounded-xl flex items-center justify-center shrink-0 text-zinc-700 group-hover:text-zinc-950 transition-colors">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={SPRING_GENTLE}
        >
          <Icon className="size-6 sm:size-7" />
        </motion.div>
      </div>

      {/* Text Info */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-950 truncate transition-colors">
          {item.name}
        </span>
        <span className="text-xs text-zinc-400 font-normal truncate">
          {item.category}
        </span>
      </div>
    </motion.div>
  );

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-2xl"
      >
        {card}
      </a>
    );
  }

  return <div>{card}</div>;
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export interface StackSectionProps {
  title?: string;
  linkText?: string;
  previewCount?: number;
  items?: StackItem[];
}

export function StackSection({
  title = "Stack",
  linkText = "View All",
  previewCount = 8,
  items = stackItems,
}: StackSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useIsClient();

  const previewItems = items.slice(0, previewCount);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const modal =
    isClient &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={SPRING_GENTLE}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="stack-modal-title"
              className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-[28px] bg-white border border-zinc-200/80 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 px-6 sm:px-7 pt-6 pb-4 border-b border-zinc-100">
                <div>
                  <h2
                    id="stack-modal-title"
                    className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
                  >
                    {title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {items.length} tools & technologies I work with
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close stack"
                  className="shrink-0 size-9 rounded-full bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 text-zinc-600 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* All Stack Items */}
              <div className="overflow-y-auto p-6 sm:p-7">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
                >
                  {items.map((item) => (
                    <StackCard key={item.id} item={item} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      >
        {/* Header Row: Title & Action Pill */}
        <div className="flex items-center justify-between">
          <motion.h2
            variants={fadeInUpVariants}
            className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.96 }}
            transition={SPRING_GENTLE}
          >
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group cursor-pointer"
            >
              <span>{linkText}</span>
              <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Grid of Stack Items (preview) */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6"
        >
          {previewItems.map((item) => (
            <StackCard key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.section>

      {modal}
    </>
  );
}

export default StackSection;
