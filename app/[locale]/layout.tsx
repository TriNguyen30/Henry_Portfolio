import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { getContent } from "@/data/content";
import { personalData } from "@/data/personal";
import { ContentProvider } from "@/components/providers/content-provider";
import { FluidBackground } from "@/components/background/fluid-background";
import { FloatingNav } from "@/components/layout/floating-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  } catch (error) {}
})();
`;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
    title: t("homeTitle", { name: personalData.name }),
    description: t("homeDescription", {
      name: personalData.name,
      role: content.personal.role,
    }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const content = getContent(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-full flex flex-col bg-[#F6F7F9] dark:bg-[#06070C]">
        <NextIntlClientProvider>
          <ContentProvider content={content}>
            <FluidBackground />
            <div className="relative z-10 flex flex-1 flex-col">{children}</div>
            <Suspense fallback={null}>
              <FloatingNav />
            </Suspense>
          </ContentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
