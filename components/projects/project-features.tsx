"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Check } from "lucide-react";
import { ProjectFeature } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectFeaturesProps {
  features?: ProjectFeature[];
}

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-2.5">
        <div className="size-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
          <Sparkles className="size-4" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            Key Features & Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Designed for performance, intuitive workflows, and modern aesthetics
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            variants={fadeInUpVariants}
            whileHover={{
              y: -4,
              scale: 1.015,
              boxShadow: "0 10px 24px -6px rgba(0, 0, 0, 0.06)",
            }}
            transition={SPRING_GENTLE}
            className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl border border-zinc-200/70 bg-white hover:border-zinc-300 hover:bg-zinc-50/40 transition-colors duration-200 cursor-default group"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-medium text-zinc-400">
                  0{idx + 1}
                </span>

                {feature.tag && (
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-[10px] font-semibold text-zinc-600 border border-zinc-200/60">
                    {feature.tag}
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-zinc-950 mt-3 transition-colors">
                {feature.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
              <Check className="size-3" />
              <span>Production ready</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectFeatures;

