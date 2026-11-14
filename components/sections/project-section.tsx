"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import "swiper/css";

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
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const categories = ["All", "Web App", "Academic Project", "Personal Project"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  const hasMultipleProjects = filteredProjects.length > 1;
  const currentProject = Math.min(activeIndex + 1, filteredProjects.length);

  const syncNavigation = (instance: SwiperClass) => {
    setActiveIndex(instance.activeIndex);
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

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

      {/* Filter Chips & Carousel Navigation */}
      <motion.div
        variants={fadeInUpVariants}
        className="flex items-center justify-between gap-3 mt-6"
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
        </div>

        {hasMultipleProjects && (
          <div className="flex items-center gap-2.5 shrink-0">
            <span
              aria-live="polite"
              className="text-[11px] font-medium tabular-nums text-zinc-400"
            >
              {String(currentProject).padStart(2, "0")}
              <span className="text-zinc-300">
                {" "}
                / {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => swiper?.slidePrev()}
                disabled={!swiper || isBeginning}
                aria-label="Previous project"
                className="size-7 rounded-full flex items-center justify-center text-zinc-500 bg-zinc-50 border border-zinc-200/70 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-50 disabled:hover:text-zinc-500 cursor-pointer"
              >
                <ArrowLeft className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => swiper?.slideNext()}
                disabled={!swiper || isEnd}
                aria-label="Next project"
                className="size-7 rounded-full flex items-center justify-center text-zinc-500 bg-zinc-50 border border-zinc-200/70 transition-all duration-200 hover:text-zinc-950 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-50 disabled:hover:text-zinc-500 cursor-pointer"
              >
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Projects Carousel */}
      <motion.div variants={fadeInUpVariants} className="mt-5">
        <Swiper
          key={filter}
          modules={[A11y, Keyboard]}
          onSwiper={(instance) => {
            setSwiper(instance);
            syncNavigation(instance);
          }}
          onSlideChange={syncNavigation}
          onReachBeginning={syncNavigation}
          onReachEnd={syncNavigation}
          onFromEdge={syncNavigation}
          onLock={syncNavigation}
          onUnlock={syncNavigation}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          speed={550}
          watchOverflow
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{ enabled: true }}
          style={{ paddingTop: 8, paddingRight: 4, paddingBottom: 8, paddingLeft: 4 }}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id} style={{ height: "auto" }}>
              <ProjectCard project={project} className="h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

export default ProjectSection;
