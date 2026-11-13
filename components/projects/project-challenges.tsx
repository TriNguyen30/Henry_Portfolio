"use client";

import React from "react";
import { motion } from "motion/react";
import { Wrench, ShieldAlert, CheckCircle } from "lucide-react";
import { ProjectChallenge } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectChallengesProps {
  challenges?: ProjectChallenge[];
}

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  if (!challenges || challenges.length === 0) return null;

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
          <Wrench className="size-4" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            Engineering Challenges & Solutions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            Key architectural bottlenecks encountered during development and how they were resolved
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6"
      >
        {challenges.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUpVariants}
            whileHover={{ y: -3 }}
            transition={SPRING_GENTLE}
            className="flex flex-col justify-between p-5 rounded-2xl bg-zinc-50/60 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
          >
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900">
                {item.title}
              </h3>

              <div className="mt-3.5 space-y-3">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 bg-white p-3 rounded-xl border border-zinc-200/60">
                  <ShieldAlert className="size-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 block text-[11px] uppercase tracking-wider text-amber-600 mb-0.5">
                      Challenge
                    </span>
                    <span>{item.description}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 bg-white p-3 rounded-xl border border-zinc-200/60">
                  <CheckCircle className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-zinc-900 block text-[11px] uppercase tracking-wider text-emerald-600 mb-0.5">
                      Solution
                    </span>
                    <span>{item.solution}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectChallenges;

