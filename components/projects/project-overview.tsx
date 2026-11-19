"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { ProjectOverview as OverviewType } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectOverviewProps {
  overview?: OverviewType;
}

export function ProjectOverview({ overview }: ProjectOverviewProps) {
  const t = useTranslations("ProjectDetail");

  if (!overview) return null;

  const cards = [
    {
      title: t("overviewCards.problem"),
      description: overview.problem,
      icon: AlertCircle,
      accent: "text-amber-600 bg-amber-50 border-amber-200/60",
      pill: t("overviewCards.problemPill"),
    },
    {
      title: t("overviewCards.solution"),
      description: overview.solution,
      icon: Lightbulb,
      accent: "text-blue-600 bg-blue-50 border-blue-200/60",
      pill: t("overviewCards.solutionPill"),
    },
    {
      title: t("overviewCards.impact"),
      description: overview.impact,
      icon: TrendingUp,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
      pill: t("overviewCards.impactPill"),
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-2.5">
        <div className="size-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
          <CheckCircle2 className="size-4" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            {t("overviewTitle")}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            {t("overviewSubtitle")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={fadeInUpVariants}
              whileHover={{ y: -4 }}
              transition={SPRING_GENTLE}
              className="flex flex-col justify-between p-5 rounded-2xl bg-zinc-50/60 border border-zinc-200/60 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${card.accent}`}
                  >
                    <Icon className="size-3.5" />
                    <span>{card.pill}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 mt-3.5">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default ProjectOverview;
