import { notFound } from "next/navigation";

// Ensures unknown routes inside the locale segment render the localized
// `not-found` page instead of Next.js' default 404.
//
// This route is intentionally blocking (`instant = false`) so `notFound()` runs
// before the response starts streaming, which lets it answer with a real 404
// status instead of a 200 with a not-found body.
export const instant = false;

export default function CatchAllPage() {
  notFound();
}
