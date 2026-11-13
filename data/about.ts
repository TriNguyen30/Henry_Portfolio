import { personalData } from "@/data/personal";

export interface TextRun {
  text: string;
  bold?: boolean;
}

export type AboutParagraph = TextRun[];

export type AboutPillarIcon = "code" | "layers" | "database" | "devices";

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutPillar {
  icon: AboutPillarIcon;
  title: string;
  description: string;
}

export interface AboutData {
  title: string;
  intro: AboutParagraph[];
  highlights: AboutHighlight[];
  focusHeading: string;
  pillars: AboutPillar[];
  principles: string[];
}

export const aboutData: AboutData = {
  title: "About Me",
  intro: [
    [
      { text: "Hi, I'm " },
      { text: personalData.name, bold: true },
      {
        text: ", a Frontend Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas and designs into functional digital experiences using modern frontend technologies.",
      },
    ],
    [
      {
        text: "I have experience working with ReactJS, TypeScript, and modern frontend ecosystems through practical projects and my experience at FPT Software. My projects include ",
      },
      { text: "FengDesk AI", bold: true },
      {
        text: ", an AI-powered Feng Shui plant recommendation and e-commerce platform, and ",
      },
      { text: "Rescue AID", bold: true },
      {
        text: ", a disaster response platform featuring interactive maps and emergency coordination workflows.",
      },
    ],
    [
      {
        text: "I value clean code, reusable components, and continuous learning. I'm always exploring new technologies and improving my skills to build better products and deliver meaningful user experiences.",
      },
    ],
  ],
  highlights: [
    { label: "Featured Projects", value: "02+" },
    { label: "Core Focus", value: "Frontend" },
    { label: "Development", value: "React & React Native" },
    { label: "Interests", value: "AI & Web/Mobile" },
  ],
  focusHeading: "What I Do",
  pillars: [
    {
      icon: "code",
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and maintainable web applications using React, Next.js, and TypeScript.",
    },
    {
      icon: "layers",
      title: "UI Implementation",
      description:
        "Transforming Figma designs into pixel-perfect interfaces with reusable components and consistent design systems.",
    },
    {
      icon: "database",
      title: "API & State Management",
      description:
        "Integrating RESTful APIs and managing application data with Redux Toolkit and TanStack Query.",
    },
    {
      icon: "devices",
      title: "Interactive Web Experiences",
      description:
        "Developing engaging user experiences through interactive maps, 3D visualization, animations, and modern web technologies.",
    },
  ],
  principles: [
    "Clean & Maintainable Code",
    "Reusable Components",
    "Responsive Design",
    "Performance Optimization",
    "Problem Solving",
    "Continuous Learning",
  ],
};
