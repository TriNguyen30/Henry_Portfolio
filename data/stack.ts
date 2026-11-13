export type StackIconKey =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "redux"
  | "nodejs"
  | "mongodb"
  | "git"
  | "figma"
  | "html"
  | "css"
  | "javascript"
  | "cplusplus"
  | "java"
  | "mysql";
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
    id: "mysql",
    name: "MySQL",
    category: "Database",
    icon: "mysql",
    url: "https://www.mysql.com/",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    icon: "git",
    url: "https://git-scm.com/",
  },
  {
    id: "html",
    name: "HTML5",
    category: "Markup Language",
    icon: "html",
    url: "https://www.w3.org/html/",
  },
  {
    id: "css",
    name: "CSS3",
    category: "Style Sheet Language",
    icon: "css",
    url: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming Language",
    icon: "javascript",
    url: "https://www.javascript.com/",
  },
  {
    id: "cplusplus",
    name: "C++",
    category: "Programming Language",
    icon: "cplusplus",
    url: "https://www.cplusplus.com/",
  },
  {
    id: "java",
    name: "Java",
    category: "Programming Language",
    icon: "java",
    url: "https://www.java.com/",
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX Design",
    icon: "figma",
    url: "https://www.figma.com/",
  },
];
