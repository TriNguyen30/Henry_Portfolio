"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { SPRING_GENTLE } from "@/lib/animations";

export interface SocialItem {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function BehanceIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-5.836-2.916-5.836-5.828 0-3.344 2.227-6.172 6.096-6.172 4.398 0 5.674 3.396 5.176 6.777h-8.896c.078 1.488 1.055 3.385 3.525 3.385 1.588 0 2.684-.719 3.036-1.162zm-6.852-4.148h6.299c-.066-1.504-.816-3.111-3.076-3.111-2.072 0-3.045 1.477-3.223 3.111zm-10.874 7.148h-6v-16h6.141c3.275 0 5.359 1.464 5.359 4.336 0 1.637-.803 2.923-2.186 3.633 1.83.676 2.686 2.269 2.686 4.095 0 3.308-2.607 3.936-6 3.936zm-3.6-6.836h3.188c1.656 0 2.67-.656 2.67-1.922 0-1.258-.992-1.854-2.584-1.854h-3.274v3.776zm0 4.672h3.398c1.789 0 2.945-.719 2.945-2.133 0-1.391-1.109-2.109-2.898-2.109h-3.445v4.242z" />
    </svg>
  );
}

export function DribbbleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.932 7.034a10.024 10.024 0 0 1 1.045 4.542c-.502-.093-2.738-.475-5.322-.05-.084-.202-.172-.403-.263-.604a37.89 37.89 0 0 0-1.042-2.115c3.08-1.096 5.176-1.748 5.582-1.773zm-7.616-4.887c2.408.823 4.298 2.668 5.17 5.044-.383.031-2.428.665-5.46 1.74a38.487 38.487 0 0 0-2.316-4.086c.866-.184 1.769-.283 2.606-.283v-.415zm-4.708 1.488a38.56 38.56 0 0 1 2.215 3.924c-3.87 1.134-7.464 1.173-7.859 1.173a10.038 10.038 0 0 1 5.644-5.097zM2.023 12.425c.348 0 3.738-.035 7.49-1.127.279.569.544 1.15.793 1.737-4.498 1.402-8.528 4.673-8.875 4.966a9.98 9.98 0 0 1-.408-5.576h1remzm3.266 7.026c.356-.312 4.148-3.411 8.525-4.869 1.082 2.872 1.637 5.799 1.785 6.643a9.982 9.982 0 0 1-10.31-1.774zm12.355.195c-.17-.822-.72-3.64-1.758-6.444 2.457-.457 4.549-.125 5.05.006a10.01 10.01 0 0 1-3.292 6.438z" />
    </svg>
  );
}

export function GitHubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const defaultSocials: SocialItem[] = [
  { id: "linkedin", name: "LinkedIn", url: "https://linkedin.com", icon: <LinkedInIcon /> },
  { id: "behance", name: "Behance", url: "https://behance.net", icon: <BehanceIcon /> },
  { id: "dribbble", name: "Dribbble", url: "https://dribbble.com", icon: <DribbbleIcon /> },
  { id: "github", name: "GitHub", url: "https://github.com", icon: <GitHubIcon /> },
];

export function SocialLinks({ items = defaultSocials }: { items?: SocialItem[] }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -2.5, scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={SPRING_GENTLE}
        >
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="flex p-1.5 rounded-lg border border-zinc-200/70 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default SocialLinks;
