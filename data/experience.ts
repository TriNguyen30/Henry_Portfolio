export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    type: string;
    description: string;
    skills: string[];
}

export const defaultExperiences: ExperienceItem[] = [
    {
        id: "exp-1",
        role: "Software Engineer",
        company: "FPT Software",
        period: "01/2025 - 04/2025",
        type: "Internship",
        description:
            "Developed responsive user interfaces from Figma designs using ReactJS and TypeScript. Completed assigned UI/UX tasks, translated wireframes and interactive prototypes into pixel-perfect components, and collaborated with mentors in an Agile/Scrum environment. Participated in code reviews and applied feedback to improve code quality and maintainability.",
        skills: [
            "ReactJS",
            "TypeScript",
            "Figma",
            "Git",
            "UI/UX",
            "Agile/Scrum"
        ],
    },
];