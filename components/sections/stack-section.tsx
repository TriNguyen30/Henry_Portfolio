"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
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
};

export interface StackSectionProps {
  title?: string;
  linkText?: string;
  linkHref?: string;
  items?: StackItem[];
}

export function StackSection({
  title = "Stack",
  linkText = "Full Stack",
  linkHref = "#stack",
  items = stackItems,
}: StackSectionProps) {
  return (
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
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group"
          >
            <span>{linkText}</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Grid of Stack Items */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6"
      >
        {items.map((item) => {
          const Icon = stackIcons[item.icon];
          const CardContent = (
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
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-2xl"
              >
                {CardContent}
              </Link>
            );
          }

          return <div key={item.id}>{CardContent}</div>;
        })}
      </motion.div>
    </motion.section>
  );
}

export default StackSection;
