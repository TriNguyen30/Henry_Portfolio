"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SPRING_GENTLE } from "@/lib/animations";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  actionIcon?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  actionText,
  actionHref,
  actionIcon,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${className}`}
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-normal">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionHref && (
        <motion.div
          whileHover={{ scale: 1.03, x: 2 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_GENTLE}
        >
          <Link
            href={actionHref}
            className="inline-flex self-start sm:self-auto items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group"
          >
            {actionIcon}
            <span>{actionText}</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default SectionHeading;
