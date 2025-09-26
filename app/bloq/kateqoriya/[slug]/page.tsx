import PostsGrid from "@/components/Blogs/PostsGrid";
import { BLOG_POSTS, type BlogPost } from "@/components/Blogs/types";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { slugify } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const name = params.slug.replace(/-/g, " ");
    return {
        title: `${name} | Bloq kateqoriyası | Based.az`,
        description: `${name} kateqoriyası üzrə məqalələr`,
    };
}

export default function BlogCategoryPage({ params }: Props) {
    const categorySlug = params.slug;
    const items: BlogPost[] = BLOG_POSTS.filter((p) => slugify(p.category) === categorySlug);
    const allCategories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
    const counts = BLOG_POSTS.reduce<Record<string, number>>((acc, p) => {
        const s = slugify(p.category);
        acc[s] = (acc[s] ?? 0) + 1;
        return acc;
    }, {});

    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
                items={[
                    { href: "/", label: "Ana Səhifə" },
                    { href: "/bloq", label: "Bloq" },
                    { href: `/bloq/kateqoriya/${categorySlug}`, label: `Kateqoriya: ${categorySlug.replace(/-/g, " ")}` },
                ]}
                className="mb-6"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <section className="lg:col-span-8">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Kateqoriya: {categorySlug.replace(/-/g, " ")}</h1>
                    <div className="mt-6">
                        {items.length > 0 ? (
                            <PostsGrid items={items} />
                        ) : (
                            <div className="rounded-xl border border-border bg-card/60 p-6 text-sm text-muted-foreground">
                                Bu kateqoriya üçün hələ məqalə yoxdur.
                            </div>
                        )}
                    </div>
                </section>

                <aside className="lg:col-span-4">
                    <div className="rounded-xl border border-border bg-card/60 p-5">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Kateqoriyalar</h4>
                        <ul className="mt-3 divide-y divide-border/60">
                            {allCategories.map((c) => {
                                const s = slugify(c);
                                const active = s === categorySlug;
                                return (
                                    <li key={c} className="py-2">
                                        <Link
                                            href={`/bloq/kateqoriya/${encodeURIComponent(s)}`}
                                            className={
                                                active
                                                    ? "text-sm font-medium text-foreground"
                                                    : "text-sm text-muted-foreground hover:text-foreground transition-colors"
                                            }
                                            aria-current={active ? "page" : undefined}
                                        >
                                            {c} {typeof counts[s] === "number" ? `(${counts[s]})` : ""}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}