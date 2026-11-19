"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowRight, Briefcase } from "lucide-react";
import { personalData } from "@/data/personal";
import { useContent } from "@/components/providers/content-provider";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  SPRING_GENTLE,
} from "@/lib/animations";

export function ExperienceSection() {
  const t = useTranslations("Experience");
  const { experience } = useContent();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <motion.h2
          variants={fadeInUpVariants}
          className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.03, x: 2 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_GENTLE}
        >
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group"
          >
            <span>{t("linkedinProfile")}</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Timeline items */}
      <motion.div
        variants={staggerContainer}
        className="mt-8 space-y-4 sm:space-y-5"
      >
        {experience.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUpVariants}
            whileHover={{
              x: 4,
              y: -2,
              boxShadow: "0 10px 24px -6px rgba(0, 0, 0, 0.05)",
            }}
            transition={SPRING_GENTLE}
            className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:border-zinc-200/80 hover:bg-zinc-50/90 transition-colors duration-200 group cursor-default"
          >
            <div className="flex items-start gap-3.5">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -4 }}
                transition={SPRING_GENTLE}
                className="size-10 rounded-xl bg-white border border-zinc-200/70 flex items-center justify-center text-zinc-700 shrink-0 shadow-2xs group-hover:border-zinc-300"
              >
                <Briefcase className="size-4.5" />
              </motion.div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-xs text-zinc-400 font-medium">
                    • {item.company}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-zinc-200/60 text-[10px] font-semibold text-zinc-700">
                    {item.type}
                  </span>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 450, damping: 25 }}
                      className="px-2 py-0.5 rounded-md bg-white text-[11px] font-medium text-zinc-600 border border-zinc-200/60"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-block text-xs font-semibold text-zinc-400 bg-white/70 px-2.5 py-1 rounded-full border border-zinc-200/50">
                {item.period}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ExperienceSection;
