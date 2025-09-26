"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import categoriesData from "@/data/category.json";
import ActionLinkButton from "@/components/ui/action-link-button";
import type { Category, BigCategory, BigCategoryItem } from "@/types";

export type { BigCategoryItem, BigCategory };

export default function BigCategories({ data }: { data?: BigCategory[] }) {
    const list = useMemo<BigCategory[]>(() => {
        if (data && data.length) return data;

        const cats = (categoriesData as unknown as Category[]);

        const GROUP_DEFS: Array<{ id: BigCategory["id"]; title: string; description: string; slugs: string[] }> = [
            {
                id: "entertainment",
                title: "Film & Musiqi & Əyləncə",
                description:
                    "Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.",
                slugs: ["netflix", "spotify", "youtube", "disney", "amazon", "hulu", "paramount", "hbo", "apple"],
            },
            {
                id: "social",
                title: "Sosial Media Panel Xidmətləri",
                description:
                    "Sosial mediada böyümə və brend görünürlüğü üçün praktiki xidmətlər.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.",
                slugs: ["social"],
            },
            {
                id: "design",
                title: "Dizayn Proqramları",
                description:
                    "Qrafik dizayn üçün peşəkar və əlçatan vasitələr.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.",
                slugs: ["adobe", "figma", "canva", "office"],
            },
            {
                id: "seo",
                title: "Qrafik & SEO tətbiqləri",
                description:
                    "Məhsuldarlıq, dev və SEO üçün effektiv alətlər.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.Musiqi, film və əyləncə platformaları ilə istirahətinizi daha keyifli edin.",
                slugs: ["productivity", "github", "vpn"],
            },
        ];

        const groups: BigCategory[] = GROUP_DEFS.map((g) => {
            const items: BigCategoryItem[] = cats
                .filter((c) => g.slugs.includes(c.slug))
                .map((c) => ({ src: c.image, alt: c.name, href: `/products?category=${c.slug}` }));
            return {
                id: g.id,
                title: g.title,
                description: g.description,
                href: "/mehsullar",
                items,
            };
        }).filter((g) => g.items.length > 0);

        return groups;
    }, [data]);

    return (
        <section className="w-full py-6">
            <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2">
                {list.map((cat) => (
                    <article key={cat.id} className="rounded-2xl  ring-1 ring-border/60 bg-black/10 backdrop-blur-3xl p-6 text-foreground shadow-sm">
                        <h2 className="text-2xl sm:text-3xl font-semibold">{cat.title}</h2>
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-6">
                            {cat.description}
                        </p>
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((it, idx) => (
                                    <div key={`${it.alt}-${idx}`} className="relative rounded-xl p-[1px] bg-gradient-to-br from-primary/30 via-transparent to-primary/30" style={{ width: 44, height: 44 }}>
                                        <div className="relative h-full w-full rounded-[10px] bg-card/70 backdrop-blur-sm ring-1 ring-border/50 overflow-hidden">
                                            <Image src={it.src} alt={it.alt} fill sizes="44px" className="object-cover rounded-[10px]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link href={cat.href} className="text-yellow-400 font-semibold hover:underline" aria-label="Ətraflı Bax">
                                Ətraflı Bax
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-6 flex justify-center">
                <ActionLinkButton label="Bütün kateqoriyalar" href="/mehsullar" />
            </div>
        </section>
    );
}



