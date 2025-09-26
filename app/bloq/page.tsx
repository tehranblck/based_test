import SearchAndHero from "@/components/Blogs/SearchAndHero";
import TrendingSidebar from "@/components/Blogs/TrendingSidebar";
import PostsGrid from "@/components/Blogs/PostsGrid";
import type { BlogPost } from "@/components/Blogs/types";
import { BLOG_POSTS } from "@/components/Blogs/types";
import BlogSearch from "@/components/Blogs/BlogSearch";
import { notFound } from "next/navigation";

const posts: BlogPost[] = BLOG_POSTS;

function makeList(src: BlogPost[], len: number, prefix: string): BlogPost[] {
    if (src.length === 0) return [];
    return Array.from({ length: len }, (_, i) => {
        const base = src[i % src.length];
        return { ...base, id: `${prefix}-${i}-${base.id}` };
    });
}

export default function BlogIndexPage({ searchParams }: { searchParams?: { search?: string } }) {
    const featured = posts[0];
    const pool = posts;

    // Hər tab üçün daima 6 element
    const trending = makeList(pool, 6, "t");
    const recommended = makeList(pool.slice().reverse(), 6, "r");

    // Demo üçün qridə bütün postlar
    const query = (searchParams?.search ?? "").toLowerCase();
    const gridItems = query
        ? posts.filter((p) =>
            [p.title, p.excerpt, p.category, p.author].some((t) => t.toLowerCase().includes(query))
        )
        : posts;

    return (
        <div className="max-w-[90rem] mx-auto space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                <div className="lg:col-span-8 order-1 lg:order-none">

                    <SearchAndHero featured={featured} />
                </div>
                <div className="lg:col-span-4 ">
                    <TrendingSidebar trending={trending} recommended={recommended} />
                </div>
            </div>

            <PostsGrid items={gridItems} />
        </div>
    );
}