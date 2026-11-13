"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { SPRING_GENTLE } from "@/lib/animations";

export interface ProjectNavigationProps {
  prevProject?: Project;
  nextProject?: Project;
}

export function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {prevProject && (
        <motion.div
          whileHover={{ y: -3 }}
          transition={SPRING_GENTLE}
          className="h-full"
        >
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-colors h-full group"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-zinc-600">
              <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <div className="mt-2">
              <span className="text-xs text-zinc-400 font-medium">
                {prevProject.category}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-zinc-950 mt-0.5">
                {prevProject.title}
              </h4>
            </div>
          </Link>
        </motion.div>
      )}

      {nextProject && (
        <motion.div
          whileHover={{ y: -3 }}
          transition={SPRING_GENTLE}
          className="h-full sm:text-right"
        >
          <Link
            href={`/projects/${nextProject.id}`}
            className="flex flex-col justify-between p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-colors h-full group"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-zinc-600 sm:justify-end">
              <span>Next Project</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="mt-2">
              <span className="text-xs text-zinc-400 font-medium">
                {nextProject.category}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-zinc-950 mt-0.5">
                {nextProject.title}
              </h4>
            </div>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default ProjectNavigation;

