import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { defaultProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectChallenges } from "@/components/projects/project-challenges";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { Footer } from "@/components/layout/footer";
import { personalData } from "@/data/personal";

export async function generateStaticParams() {
  return defaultProjects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = defaultProjects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: `Project Not Found – ${personalData.name}`,
    };
  }

  return {
    title: `${project.title} – Case Study | ${personalData.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = defaultProjects.findIndex((p) => p.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = defaultProjects[projectIndex];
  const nextProject =
    defaultProjects[(projectIndex + 1) % defaultProjects.length];
  const prevProject =
    defaultProjects[
      (projectIndex - 1 + defaultProjects.length) % defaultProjects.length
    ];

  return (
    <div className="min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 pb-20">
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-6 sm:pt-10 space-y-6 sm:space-y-8">
        {/* Project Hero (Title, Badges, Specs, Preview Mockup, Actions) */}
        <ProjectHero project={project} />

        {/* Project Overview (Problem, Solution, Impact) */}
        <ProjectOverview overview={project.overview} />

        {/* Core Features & Highlights */}
        <ProjectFeatures features={project.features} />

        {/* Technologies & Tech Stack Architecture */}
        <ProjectTechStack techStack={project.techStack} />

        {/* Visual Gallery & Screenshot Walkthrough */}
        <ProjectGallery gallery={project.gallery} title={project.title} />

        {/* Engineering Challenges & Problem Solving */}
        <ProjectChallenges challenges={project.challenges} />

        {/* Project Next/Previous Navigation */}
        <ProjectNavigation
          prevProject={prevProject}
          nextProject={nextProject}
        />

        {/* Contact CTA Banner */}
        <section className="cta-panel relative w-full rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white p-6 sm:p-10 overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Interested in working together?
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                Let&apos;s build your next digital product.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                Whether you need a dedicated {personalData.role} or want to discuss
                architectural ideas, my inbox is always open.
              </p>
            </div>

            <Link
              href="/#contact"
              className="cta-button inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-bold hover:bg-zinc-100 transition-colors shadow-sm group shrink-0"
            >
              <Mail className="size-4" />
              <span>Get in Touch</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
