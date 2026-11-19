import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ProjectSection } from "@/components/sections/project-section";
import { Footer } from "@/components/layout/footer";
import { personalData } from "@/data/personal";
import { getContent } from "@/data/content";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Metadata",
  });
  const content = getContent(locale);

  return {
    title: t("projectsTitle", {
      name: personalData.name,
      role: content.personal.role,
    }),
    description: t("projectsDescription", { name: personalData.name }),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "Projects",
  });

  return (
    <div className="min-h-screen text-zinc-900 antialiased selection:bg-zinc-200 selection:text-zinc-900 pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors shadow-2xs"
        >
          <ArrowLeft className="size-4" />
          <span>{t("backToHome")}</span>
        </Link>

        <ProjectSection
          title={t("allProjects")}
          linkText={t("backToHome")}
          linkHref="/"
        />

        <Footer />
      </main>
    </div>
  );
}
