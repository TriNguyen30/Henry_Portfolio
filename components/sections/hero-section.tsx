"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa6";
import {
  sectionVariants,
  fadeInUpVariants,
  fadeInDownVariants,
  scaleInVariants,
  tagContainerVariants,
  tagVariants,
  SPRING_GENTLE,
} from "@/lib/animations";
import { personalData } from "@/data/personal";
import { heroSkills } from "@/data/skills";

export interface HeroSectionProps {
  status?: string;
  name?: string;
  role?: string;
  bio?: string;
  location?: string;
  avatarUrl?: string;
  skills?: string[];
  socials?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

export function HeroSection({
  status = personalData.status,
  name = personalData.name,
  role = personalData.role,
  bio = personalData.bio,
  location = personalData.location,
  avatarUrl = personalData.avatarUrl,
  skills = heroSkills,
  socials = personalData.socials,
}: HeroSectionProps) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 md:p-12 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Top Bar: Availability Pill & Social Links */}
      <div className="flex items-center justify-between w-full">
        {/* Availability Badge */}
        <motion.div
          variants={fadeInDownVariants}
          whileHover={{ scale: 1.03 }}
          transition={SPRING_GENTLE}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200/60 shadow-xs cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{status}</span>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={fadeInDownVariants} className="flex items-center gap-2">
          {socials.linkedin && (
            <motion.div
              whileHover={{ y: -2.5, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={SPRING_GENTLE}
            >
              <Link
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex p-2 rounded-lg border border-zinc-200/70 text-zinc-500 hover:text-[#0A66C2] hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200"
              >
                <FaLinkedinIn className="size-4" />
              </Link>
            </motion.div>
          )}

          {socials.github && (
            <motion.div
              whileHover={{ y: -2.5, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={SPRING_GENTLE}
            >
              <Link
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex p-2 rounded-lg border border-zinc-200/70 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200"
              >
                <FaGithub className="size-4" />
              </Link>
            </motion.div>
          )}

          {socials.facebook && (
            <motion.div
              whileHover={{ y: -2.5, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={SPRING_GENTLE}
            >
              <Link
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex p-2 rounded-lg border border-zinc-200/70 text-zinc-500 hover:text-[#1877F2] hover:border-zinc-300 hover:bg-zinc-50 transition-colors duration-200"
              >
                <FaFacebookF className="size-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Center Content: Avatar, Heading & Bio */}
      <div className="flex flex-col items-center text-center mt-6 sm:mt-8">
        {/* Avatar */}
        <motion.div
          variants={scaleInVariants}
          whileHover={{ scale: 1.04, rotate: 0.5 }}
          transition={SPRING_GENTLE}
          className="relative size-32 sm:size-40 rounded-full p-1 bg-gradient-to-b from-zinc-100 to-zinc-200 shadow-md cursor-pointer"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-100 border-2 border-white">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={name}
                fill
                className="object-cover object-[center_20%]"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 text-zinc-600 font-bold text-3xl">
                <svg
                  className="w-full h-full text-zinc-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            )}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeInUpVariants}
          className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-6"
        >
          Hi! I&apos;m {name}.
        </motion.h2>

        <motion.h1
          variants={fadeInUpVariants}
          className="text-2xl sm:text-4xl md:text-[38px] font-extrabold text-zinc-950 tracking-tight mt-1.5 leading-snug"
        >
          {role}
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={fadeInUpVariants}
          className="max-w-4xl text-xs sm:text-sm md:text-base text-zinc-500 leading-relaxed mt-4 font-normal"
        >
          {bio}
        </motion.p>
      </div>

      {/* Info Row: Location & More About Me */}
      <motion.div
        variants={fadeInUpVariants}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-4 border-t border-zinc-100"
      >
        <div className="flex items-center gap-1.5 text-xs text-zinc-400">
          <MapPin className="size-3.5 text-zinc-400 shrink-0" />
          <span>{location}</span>
        </div>

        <motion.div
          whileHover={{ scale: 1.02, x: 2 }}
          whileTap={{ scale: 0.97 }}
          transition={SPRING_GENTLE}
        >
          <Link
            href="#about"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/60 px-4 py-2 rounded-full transition-colors duration-200 hover:shadow-xs group"
          >
            <span>More about Me</span>
            <ArrowRight className="size-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Skills Tag Cloud with + icons */}
      <motion.div
        variants={tagContainerVariants}
        className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-3 pt-6 mt-2 border-t border-zinc-100/80"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={tagVariants}
            whileHover={{ y: -2, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-medium hover:text-zinc-950 transition-colors cursor-default"
          >
            <span className="text-zinc-400 font-bold text-sm leading-none select-none">
              +
            </span>
            <span>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
