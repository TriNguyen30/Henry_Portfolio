import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
        404
      </p>
      <h1 className="mt-3 text-2xl font-bold text-zinc-950 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-md text-sm text-zinc-500">
        {t("description")}
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 sm:text-sm"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
