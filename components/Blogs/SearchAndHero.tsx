"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogPost } from "./types";

export default function SearchAndHero({ featured }: { featured: BlogPost }) {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div className="relative flex-1">
                    <input
                        placeholder="Bloqda axtar"
                        className="w-full rounded-full bg-input/40 border border-input pl-5 pr-10 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
            </div>
            <Link href={`/bloq/${featured.slug}`} className="block mt-4 sm:mt-6 rounded-2xl overflow-hidden bg-card ring-1 ring-border/60 hover:ring-secondary transition">
                <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full">
                    <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                    <div className="text-xs font-medium uppercase text-muted-foreground tracking-wide">{featured.category}</div>
                    <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">{featured.title}</h2>
                    <div className="mt-4 text-xs text-muted-foreground">{featured.date}</div>
                </div>
            </Link>
        </div>
    );
}
