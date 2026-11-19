"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteContent } from "@/data/content";

const ContentContext = createContext<SiteContent | null>(null);

export function ContentProvider({
  content,
  children,
}: {
  content: SiteContent;
  children: ReactNode;
}) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): SiteContent {
  const content = useContext(ContentContext);

  if (!content) {
    throw new Error("useContent must be used within a ContentProvider");
  }

  return content;
}
