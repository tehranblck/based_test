"use client";

import { useMemo, useState } from "react";
import CategoryBox from "./CategoryBox";
import categoriesData from "@/data/categories.json";
import ActionLinkButton from "@/components/ui/action-link-button";
import Bar from "@/components/Bar/Bar";
import type { Category } from "@/types";

export default function CategoriesHome() {
    const [sortValue, setSortValue] = useState<string>("newest");
    const sorted = useMemo(() => {
        const list = [...(categoriesData as Category[])];
        const toTime = (d?: string) => (d ? new Date(d).getTime() : 0);
        switch (sortValue) {
            case "oldest":
                return list.sort((a, b) => toTime(a.createdAt) - toTime(b.createdAt));
            case "az":
                return list.sort((a, b) => a.name.localeCompare(b.name, "az"));
            case "za":
                return list.sort((a, b) => b.name.localeCompare(a.name, "az"));
            case "price-low":
                return list.sort((a, b) => (a.priceFrom ?? Infinity) - (b.priceFrom ?? Infinity));
            case "price-high":
                return list.sort((a, b) => (b.priceFrom ?? -Infinity) - (a.priceFrom ?? -Infinity));
            case "newest":
            default:
                return list.sort((a, b) => toTime(b.createdAt) - toTime(a.createdAt));
        }
    }, [sortValue]);

    return (
        <section className="w-full py-8">
            <div className="mx-auto ">
                <Bar className="sm:px-4 mb-4" title="Kateqoriyalar" sortValue={sortValue} onSortChange={setSortValue} />
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {sorted.slice(0, 10).map((category) => (
                        <CategoryBox
                            key={category.id}
                            id={category.id}
                            name={category.name}
                            image={category.image}
                            href={`/products?category=${category.slug}`}

                        />
                    ))}
                </div>
                <div className="mt-6 flex justify-center">
                    <ActionLinkButton label="Bütün məhsullar" href="/mehsullar" />
                </div>
            </div>
        </section>
    );
}
