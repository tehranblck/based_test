"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { BlogPost } from "./types";
import { useState } from "react";

type Props = {
    trending: BlogPost[];
    recommended: BlogPost[];
};

export default function TrendingSidebar({ trending, recommended }: Props) {
    const [tab, setTab] = useState<"trending" | "recommended">("trending");
    const items = tab === "trending" ? trending : recommended;

    return (
        <aside>
            <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 p-4">
                <div className="flex items-center gap-4 border-b pb-2">
                    <button
                        className={cn(
                            "text-sm font-semibold pb-1 border-b-2 border-transparent",
                            tab === "trending" ? "text-foreground border-secondary" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setTab("trending")}
                        type="button"
                        aria-pressed={tab === "trending"}
                    >
                        Trend
                    </button>
                    <button
                        className={cn(
                            "text-sm font-semibold pb-1 border-b-2 border-transparent",
                            tab === "recommended" ? "text-foreground border-secondary" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setTab("recommended")}
                        type="button"
                        aria-pressed={tab === "recommended"}
                    >
                        Tövsiyə olunanlar
                    </button>
                </div>
                <div className="mt-3 space-y-3">
                    {items.map((p) => (
                        <a key={p.id} href="#" className="flex gap-3 rounded-lg hover:bg-accent/40 p-2 transition-colors">
                            <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-md">
                                <Image src={p.image} alt={p.title} fill className="object-cover" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{p.category}</div>
                                <div className="text-sm font-medium leading-snug line-clamp-2">{p.title}</div>
                                <div className="mt-1 text-[10px] text-muted-foreground">{p.author}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
}
