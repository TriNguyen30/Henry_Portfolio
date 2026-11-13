"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { SPRING_GENTLE } from "@/lib/animations";

export type { Project };

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={SPRING_GENTLE}
      whileHover={{
        y: -5,
        boxShadow: "0 14px 30px -8px rgba(0, 0, 0, 0.08)",
      }}
      className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/75 bg-white p-4 sm:p-5 hover:border-zinc-300 transition-colors duration-200"
    >
      <div>
        {/* Project Thumbnail / Preview (Links to detail) */}
        <Link
          href={`/projects/${project.id}`}
          className="block relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 border border-zinc-100"
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill={true}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 text-zinc-400">
              <span className="text-xs font-medium tracking-wide uppercase">
                {project.category}
              </span>
            </div>
          )}

          {/* Quick External Link Indicator */}
          {project.projectUrl && (
            <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-xs opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 backdrop-blur-xs">
              <ArrowUpRight className="size-4" />
            </div>
          )}
        </Link>

        {/* Project Details */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">
              {project.category}
            </span>
          </div>

          <Link href={`/projects/${project.id}`} className="block group/title">
            <h3 className="mt-1 text-base font-bold text-zinc-900 group-hover/title:text-zinc-600 transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tags & Action Links */}
      <div className="mt-4 pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <motion.span
              key={idx}
              whileHover={{ y: -1, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 450, damping: 25 }}
              className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 text-[11px] font-medium text-zinc-500 border border-zinc-200/50 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-semibold text-zinc-900 hover:text-zinc-600 inline-flex items-center gap-1 group-hover:underline underline-offset-4"
          >
            <span>Detail</span>
            <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {project.projectUrl && (
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-0.5"
            >
              <span>Live</span>
              <ArrowUpRight className="size-3" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
