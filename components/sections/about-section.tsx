"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Code2,
  Layers,
  Database,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  tagContainerVariants,
  tagVariants,
  SPRING_GENTLE,
} from "@/lib/animations";
import { personalData } from "@/data/personal";
import { useContent } from "@/components/providers/content-provider";

const pillarIcons = {
  code: Code2,
  layers: Layers,
  database: Database,
  devices: MonitorSmartphone,
} as const;

export function AboutSection() {
  const t = useTranslations("About");
  const { about } = useContent();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <motion.h2
          variants={fadeInUpVariants}
          className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.a
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.03, x: 2 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_GENTLE}
          href={personalData.cvUrl}
          download={personalData.cvFileName}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group shrink-0"
        >
          <Download className="size-3 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
          <span>{t("downloadCv")}</span>
          <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </div>

      {/* Introduction */}
      <motion.div
        variants={fadeInUpVariants}
        className="mt-6 space-y-3.5 text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl"
      >
        {about.intro.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0 ? undefined : "text-zinc-500 text-xs sm:text-sm"
            }
          >
            {paragraph.map((run, runIndex) =>
              run.bold ? (
                <span
                  key={runIndex}
                  className={
                    index === 0
                      ? "font-semibold text-zinc-900"
                      : "font-medium text-zinc-700"
                  }
                >
                  {run.text}
                </span>
              ) : (
                <React.Fragment key={runIndex}>{run.text}</React.Fragment>
              )
            )}
          </p>
        ))}
      </motion.div>

      {/* Highlights */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-zinc-100"
      >
        {about.highlights.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeInUpVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={SPRING_GENTLE}
            className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-zinc-50/60 border border-zinc-200/60 text-center hover:bg-zinc-50 hover:border-zinc-300 transition-colors cursor-default"
          >
            <span className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
              {item.value}
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Focus Areas */}
      <motion.div variants={fadeInUpVariants} className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="size-4 text-zinc-500" />
          <h3 className="text-sm font-semibold text-zinc-900">
            {about.focusHeading}
          </h3>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {about.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon];

            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUpVariants}
                whileHover={{ y: -3 }}
                transition={SPRING_GENTLE}
                className="flex items-start gap-3.5 p-4 rounded-2xl border border-zinc-200/70 bg-white hover:border-zinc-300 hover:bg-zinc-50/40 hover:shadow-xs transition-colors duration-200 group cursor-default"
              >
                <div className="size-10 rounded-xl bg-zinc-100 border border-zinc-200/50 flex items-center justify-center text-zinc-700 shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200">
                  <Icon className="size-[18px] group-hover:scale-110 transition-transform duration-200" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-zinc-900">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Development Principles */}
      <motion.div
        variants={tagContainerVariants}
        className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2.5 pt-6 mt-6 border-t border-zinc-100/80"
      >
        {about.principles.map((item) => (
          <motion.div
            key={item}
            variants={tagVariants}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={SPRING_GENTLE}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium hover:text-zinc-900 transition-colors cursor-default"
          >
            <span className="text-zinc-400 font-bold text-sm leading-none">
              +
            </span>
            <span>{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
