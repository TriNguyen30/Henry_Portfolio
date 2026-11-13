"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { SPRING_GENTLE } from "@/lib/animations";
import { personalData } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
    >
      <div className="flex items-center gap-2">
        <span className="font-medium text-zinc-600">{personalData.name}</span>
        <span>•</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Designed & Developed with Care</span>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={SPRING_GENTLE}
          className="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="size-3" />
        </motion.button>
      </div>
    </motion.footer>
  );
}

export default Footer;
