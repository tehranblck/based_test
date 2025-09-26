import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "./types";

export default function PostsGrid({ items }: { items: BlogPost[] }) {
    return (
        <div className="grid gap-3 sm:gap-6 grid-cols-2 sm:[grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {items.map((p) => (
                <Link key={p.id} href={`/bloq/${p.slug}`} className="group rounded-2xl bg-card/60 ring-1 ring-border/60 overflow-hidden hover:ring-secondary transition">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="p-4 sm:p-5">
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{p.category}</div>
                        <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline underline-offset-4">{p.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                        <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
