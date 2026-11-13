"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectSectionProps, defaultProjects } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  SPRING_GENTLE,
} from "@/lib/animations";

export function ProjectSection({
  title = "Selected Projects",
  linkText = "All Projects",
  linkHref = "/projects",
  projects = defaultProjects,
}: ProjectSectionProps) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web App"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Header Row: Title & Action Pill */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs sm:text-sm text-zinc-400 mt-1"
          >
            Handcrafted digital experiences, design systems, and product
            solutions
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUpVariants}
          whileHover={{ scale: 1.03, x: 2 }}
          whileTap={{ scale: 0.96 }}
          transition={SPRING_GENTLE}
        >
          <Link
            href={linkHref}
            className="inline-flex self-start sm:self-auto items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:shadow-xs group"
          >
            <span>{linkText}</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Filter Chips with animated sliding indicator */}
      <motion.div
        variants={fadeInUpVariants}
        className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none"
      >
        {categories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-3.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                isActive
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-zinc-900 rounded-full shadow-xs -z-0"
                  transition={SPRING_GENTLE}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects Grid with layout animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}

export default ProjectSection;
