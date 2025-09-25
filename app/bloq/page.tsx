import SearchAndHero from "@/components/Blogs/SearchAndHero";
import TrendingSidebar from "@/components/Blogs/TrendingSidebar";
import PostsGrid from "@/components/Blogs/PostsGrid";
import type { BlogPost } from "@/components/Blogs/types";

const posts: BlogPost[] = [
    {
        id: "p1",
        title: "2025 üçün 50+ Süni İntellekt (AI) startap ideyası",
        category: "Süni İntellekt",
        date: "25 Sentyabr 2025",
        image: "/slide.png",
        excerpt: "Yeni AI alətləri müxtəlif sahələrdə saysız-hesabsız niş imkanlar yaradır.",
        author: "INTELEGAIN TECHNOLOGIES",
        featured: true,
    },
    {
        id: "p2",
        title: "AI Agentləri fırıldaqçılığın aşkarlanmasını necə dəyişir?",
        category: "Süni İntellekt",
        date: "23 Sentyabr 2025",
        image: "/slide.png",
        excerpt: "Rəqəmsal bankçılığın artması ilə AI agentləri fırıldaq riskini ciddi azaldır.",
        author: "INTELEGAIN TECHNOLOGIES",
        featured: true,
    },
    {
        id: "p3",
        title: "Səhiyyədə Prediktiv Analitika: istifadə sahələri və nümunələr",
        category: "Süni İntellekt",
        date: "18 Sentyabr 2025",
        image: "/slide.png",
        excerpt: "Səhiyyədə prediktiv analitika bazarı sürətlə böyüməkdədir.",
        author: "INTELEGAIN TECHNOLOGIES",
        featured: true,
    },
    {
        id: "p4",
        title: "2025 üçün Böyük Britaniyada Top 10 ERP proqramı",
        category: "Dynamics 365 Business Central",
        date: "16 Sentyabr 2025",
        image: "/slide.png",
        excerpt: "Bazarda seçim çox olduğundan düzgün ERP seçimi çətin ola bilər.",
        author: "INTELEGAIN TECHNOLOGIES",
        featured: true,
    },
];

function makeList(src: BlogPost[], len: number, prefix: string): BlogPost[] {
    if (src.length === 0) return [];
    return Array.from({ length: len }, (_, i) => {
        const base = src[i % src.length];
        return { ...base, id: `${prefix}-${i}-${base.id}` };
    });
}

export default function BlogIndexPage() {
    const featured = posts[0];
    const pool = posts;

    // Hər tab üçün daima 6 element
    const trending = makeList(pool, 6, "t");
    const recommended = makeList(pool.slice().reverse(), 6, "r");

    // Demo üçün qridə bütün postlar
    const gridItems = posts;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 order-1 lg:order-none">
                    <SearchAndHero featured={featured} />
                </div>
                <div className="lg:col-span-4">
                    <TrendingSidebar trending={trending} recommended={recommended} />
                </div>
            </div>

            <PostsGrid items={gridItems} />
        </div>
    );
}