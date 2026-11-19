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
