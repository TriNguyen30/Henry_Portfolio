export type ProjectCategory = "webApp" | "academic" | "personal";

export interface ProjectFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface ProjectTechCategory {
  category: string;
  technologies: string[];
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
  title?: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface ProjectOverview {
  problem: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  role?: string;
  timeline?: string;
  team?: string;
  platform?: string;
  deliverables?: string[];
  overview?: ProjectOverview;
  features?: ProjectFeature[];
  techStack?: ProjectTechCategory[];
  gallery?: ProjectGalleryItem[];
  challenges?: ProjectChallenge[];
}

export interface ProjectSectionProps {
  title?: string;
  linkText?: string;
  linkHref?: string;
}
