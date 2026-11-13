"use client";

import React from "react";
import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { ProjectTechCategory } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  tagVariants,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectTechStackProps {
  techStack?: ProjectTechCategory[];
}

export function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  if (!techStack || techStack.length === 0) return null;

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
          <Code2 className="size-4" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
            Technologies & Architecture
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
            The technical stack and tools chosen to build a performant, scalable system
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-6"
      >
        {techStack.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeInUpVariants}
            whileHover={{ y: -3 }}
            transition={SPRING_GENTLE}
            className="flex flex-col p-4 sm:p-5 rounded-2xl bg-zinc-50/60 border border-zinc-200/70 hover:border-zinc-300 hover:bg-zinc-50 transition-colors cursor-default"
          >
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200/50">
              <span className="text-xs font-bold text-zinc-900">
                {group.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-zinc-500 border border-zinc-200/60 font-medium">
                {group.technologies.length}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {group.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  variants={tagVariants}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 450, damping: 25 }}
                  className="px-2.5 py-1 rounded-lg bg-white text-xs font-medium text-zinc-700 border border-zinc-200/70 shadow-2xs hover:border-zinc-300 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default ProjectTechStack;

