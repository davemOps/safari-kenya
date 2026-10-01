import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { CtaBand } from "@/components/ui/CtaBand";
import { JournalCard } from "@/components/journal/JournalCard";
import { articles, getArticle } from "@/data/journal";
import { buildMeta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export async function generateMetadata({ params }: P) {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return buildMeta({ title: a.title, description: a.excerpt, path: `/journal/${a.slug}`, image: a.image });
}
export default async function Page({ params }: P) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <>
      <PageHero title={a.title} eyebrow={`${a.category} · ${a.readTime}`} image={a.image} label={a.title} />
      <article className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="mb-10 text-2xl italic leading-relaxed text-forest">{a.excerpt}</p>
        <div className="space-y-6 text-xl leading-[1.8] text-charcoal/85">{a.body.map((p) => <p key={p}>{p}</p>)}</div>
        <Link href="/journal" className="mt-12 inline-flex items-center gap-2 uppercase tracking-[0.2em] text-forest hover:text-terracotta"><ArrowLeft className="h-4 w-4" aria-hidden />All articles</Link>
      </article>
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8"><h2 className="mb-8 text-3xl text-forest">Keep reading</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{more.map((m) => <JournalCard key={m.slug} a={m} />)}</div></section>
      <CtaBand />
    </>
  );
}
