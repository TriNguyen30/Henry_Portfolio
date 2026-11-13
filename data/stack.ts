export type StackIconKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "redux"
  | "nodejs"
  | "mongodb"
  | "git";

export interface StackItem {
  id: string;
  name: string;
  category: string;
  icon: StackIconKey;
  url?: string;
}

export const stackItems: StackItem[] = [
  {
    id: "react",
    name: "ReactJS",
    category: "Frontend Development",
    icon: "react",
    url: "https://react.dev/",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "React Framework",
    icon: "nextjs",
    url: "https://nextjs.org/",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming Language",
    icon: "typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "tailwind",
    url: "https://tailwindcss.com/",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    category: "State Management",
    icon: "redux",
    url: "https://redux-toolkit.js.org/",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend Runtime",
    icon: "nodejs",
    url: "https://nodejs.org/",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: "mongodb",
    url: "https://www.mongodb.com/",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    icon: "git",
    url: "https://git-scm.com/",
  },
];
