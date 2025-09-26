import type { Metadata } from "next";

type MetaProps = { params: { slug: string } | Promise<{ slug: string }> };

function getPostMeta(slug: string) {
    const map: Record<string, { title: string; description: string; image: string }> = {
        "2025-ai-startup-ideyalari": {
            title: "2025 üçün 50+ Süni İntellekt startap ideyası",
            description: "Yeni AI alətləri müxtəlif sahələrdə saysız-hesabsız niş imkanlar yaradır.",
            image: "/slide.png",
        },
        "ai-agentleri-firildaq": {
            title: "AI Agentləri fırıldaqçılığın aşkarlanmasını necə dəyişir?",
            description: "Rəqəmsal bankçılığın artması ilə AI agentləri fırıldaq riskini ciddi azaldır.",
            image: "/slide.png",
        },
        "saglamliq-prediktiv-analitika": {
            title: "Səhiyyədə Prediktiv Analitika: istifadə sahələri və nümunələr",
            description: "Səhiyyədə prediktiv analitika bazarı sürətlə böyüməkdədir.",
            image: "/slide.png",
        },
        "uk-erp-top-10-2025": {
            title: "2025 üçün Böyük Britaniyada Top 10 ERP proqramı",
            description: "Bazarda seçim çox olduğundan düzgün ERP seçimi çətin ola bilər.",
            image: "/slide.png",
        },
    };
    return (
        map[slug] || {
            title: "Bloq Yazısı",
            description: "Based.az bloq məqaləsi",
            image: "/slide.png",
        }
    );
}

export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
    const p = params instanceof Promise ? await params : params;
    const meta = getPostMeta(p.slug);
    const url = `/bloq/${p.slug}`;
    return {
        title: `${meta.title} | Bloq | Based.az`,
        description: meta.description,
        alternates: { canonical: url },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url,
            type: "article",
            images: [{ url: meta.image }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: [meta.image],
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="">
            <div className="">{children}</div>
        </section>
    );
}
