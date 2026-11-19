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
  intro: AboutParagraph[];
  highlights: AboutHighlight[];
  focusHeading: string;
  pillars: AboutPillar[];
  principles: string[];
}
