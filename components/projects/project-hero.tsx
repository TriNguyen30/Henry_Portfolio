"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  UserCheck,
  Users,
  Monitor,
  MessageSquare,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/data/projects";
import { personalData } from "@/data/personal";
import {
  sectionVariants,
  fadeInUpVariants,
  fadeInDownVariants,
  scaleInVariants,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const specs = [
    {
      label: "Role",
      value: project.role || personalData.role,
      icon: UserCheck,
    },
    {
      label: "Timeline",
      value: project.timeline || "2024",
      icon: Calendar,
    },
    {
      label: "Team",
      value: project.team || "Independent Project",
      icon: Users,
    },
    {
      label: "Platform",
      value: project.platform || "Web Application",
      icon: Monitor,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="space-y-6"
    >
      {/* Top Breadcrumb & Navigation */}
      <motion.div
        variants={fadeInDownVariants}
        className="flex items-center justify-between gap-3 text-xs sm:text-sm"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 transition-colors shadow-2xs font-medium"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Projects</span>
        </Link>

        <div className="flex items-center gap-1.5 text-zinc-400 text-xs">
          <Link href="/" className="hover:text-zinc-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-zinc-700 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-zinc-700 font-medium truncate max-w-[120px] sm:max-w-[200px]">
            {project.title}
          </span>
        </div>
      </motion.div>

      {/* Main Hero Card */}
      <section className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 overflow-hidden">
        {/* Badges Row */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-white shadow-xs">
            {project.category}
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Production Ready</span>
          </span>

          {project.timeline && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">
              {project.timeline}
            </span>
          )}
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div variants={fadeInUpVariants} className="mt-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-sm sm:text-lg text-zinc-500 mt-2.5 font-normal max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-zinc-600 mt-4 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Action Buttons Row */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-zinc-100"
        >
          {project.projectUrl && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_GENTLE}
            >
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Visit Live Application</span>
                <ExternalLink className="size-3.5" />
              </Link>
            </motion.div>
          )}

          {project.githubUrl && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRING_GENTLE}
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 text-zinc-900 text-xs sm:text-sm font-semibold border border-zinc-200/70 transition-colors"
              >
                <FaGithub className="size-4" />
                <span>Source Code</span>
              </Link>
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_GENTLE}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 text-xs sm:text-sm font-medium border border-zinc-200/70 transition-colors"
            >
              <MessageSquare className="size-3.5 text-zinc-500" />
              <span>Discuss Project</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Mockup Preview Image */}
        {project.imageUrl && (
          <motion.div
            variants={scaleInVariants}
            className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-md group"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>
        )}

        {/* Quick Specs Cards Grid */}
        <motion.div
          variants={fadeInUpVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-zinc-100"
        >
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/60"
              >
                <div className="flex items-center gap-2 text-zinc-400">
                  <Icon className="size-3.5" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-zinc-900 mt-1 truncate">
                  {item.value}
                </div>
              </div>
            );
          })}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default ProjectHero;
