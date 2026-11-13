import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/personal";
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

export const metadata: Metadata = {
  title: `Portfolio | ${personalData.name}`,
  description: `Portfolio of ${personalData.name}, a ${personalData.role} building modern, responsive web applications with React, Next.js, and TypeScript.`,
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-full flex flex-col bg-[#F6F7F9] dark:bg-[#06070C]">
        <FluidBackground />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <FloatingNav />
      </body>
    </html>
  );
}
