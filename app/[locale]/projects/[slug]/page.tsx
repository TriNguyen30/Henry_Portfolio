import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";
import { personalData } from "@/data/personal";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectFeatures } from "@/components/projects/project-features";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectChallenges } from "@/components/projects/project-challenges";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { Footer } from "@/components/layout/footer";

export async function generateStaticParams() {
  return getContent("en").projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });
  const project = getContent(locale).projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: t("projectNotFound", { name: personalData.name }),
    };
  }

  return {
    title: t("projectTitle", {
      project: project.title,
      name: personalData.name,
    }),
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "ProjectDetail",
  });
  const content = getContent(locale);

  const projectIndex = content.projects.findIndex((p) => p.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = content.projects[projectIndex];
  const nextProject =
    content.projects[(projectIndex + 1) % content.projects.length];
  const prevProject =
    content.projects[
      (projectIndex - 1 + content.projects.length) % content.projects.length
    ];

  return (
    <div className="min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 pb-20">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10 space-y-6 sm:space-y-8">
        {/* Project Hero (Title, Badges, Specs, Preview Mockup, Actions) */}
        <ProjectHero project={project} />

        {/* Project Overview (Problem, Solution, Impact) */}
        <ProjectOverview overview={project.overview} />

        {/* Core Features & Highlights */}
        <ProjectFeatures features={project.features} />

        {/* Technologies & Tech Stack Architecture */}
        <ProjectTechStack techStack={project.techStack} />

        {/* Visual Gallery & Screenshot Walkthrough */}
        <ProjectGallery
          gallery={project.gallery}
          title={project.title}
        />

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
                {t("cta.eyebrow")}
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-1">
                {t("cta.title")}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                {t("cta.description", { role: content.personal.role })}
              </p>
            </div>

            <Link
              href="/#contact"
              className="cta-button inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-bold hover:bg-zinc-100 transition-colors shadow-sm group shrink-0"
            >
              <Mail className="size-4" />
              <span>{t("cta.button")}</span>
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
