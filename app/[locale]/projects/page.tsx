import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectSection } from "@/components/sections/project-section";
import { Footer } from "@/components/layout/footer";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  title: `Projects – ${personalData.name} | ${personalData.role}`,
  description: `Explore featured frontend projects, web applications, and digital experiences developed by ${personalData.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors shadow-2xs"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>

        <ProjectSection
          title="All Projects"
          linkText="Back to Home"
          linkHref="/"
        />

        <Footer />
      </main>
    </div>
  );
}
