"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Images, Maximize2, X } from "lucide-react";
import { ProjectGalleryItem } from "@/data/projects";
import {
  sectionVariants,
  fadeInUpVariants,
  staggerContainer,
  SPRING_GENTLE,
} from "@/lib/animations";

export interface ProjectGalleryProps {
  gallery?: ProjectGalleryItem[];
  title?: string;
}

export function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  const t = useTranslations("ProjectDetail");
  const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(
    null
  );

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!gallery || gallery.length === 0) return null;

  const imageAlt = (item: ProjectGalleryItem) =>
    item.caption || t("galleryImageAlt", { project: title ?? "" });

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={sectionVariants}
        className="relative w-full rounded-[28px] sm:rounded-[32px] bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-8 overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700">
            <Images className="size-4" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
              {t("galleryTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              {t("gallerySubtitle")}
            </p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          className={`grid gap-4 sm:gap-6 mt-6 ${
            gallery.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUpVariants}
              whileHover={{ y: -4 }}
              transition={SPRING_GENTLE}
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-zinc-50 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={item.url}
                  alt={imageAlt(item)}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="size-10 rounded-full bg-white/95 text-zinc-900 flex items-center justify-center shadow-md backdrop-blur-xs scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="size-4.5" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-zinc-100">
                {item.title && (
                  <h4 className="text-xs font-bold text-zinc-900">
                    {item.title}
                  </h4>
                )}
                <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Lightbox Modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center overflow-y-auto overscroll-contain p-4 sm:p-8"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={SPRING_GENTLE}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-label={selectedImage.title || t("imagePreview")}
                  className="relative my-auto w-full max-w-5xl max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    aria-label={t("closePreview")}
                    className="absolute top-4 right-4 z-10 size-9 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="size-4.5" />
                  </button>

                  <div className="relative aspect-[16/10] w-full bg-zinc-900">
                    <Image
                      src={selectedImage.url}
                      alt={selectedImage.caption}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800">
                    {selectedImage.title && (
                      <h4 className="text-sm font-semibold text-white">
                        {selectedImage.title}
                      </h4>
                    )}
                    <p className="text-xs text-zinc-400 mt-1">
                      {selectedImage.caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default ProjectGallery;
