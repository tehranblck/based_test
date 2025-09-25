import Image from "next/image";
import type { BlogPost } from "./types";

export default function PostsGrid({ items }: { items: BlogPost[] }) {
    return (
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {items.map((p) => (
                <article key={p.id} className="group rounded-2xl bg-card/60 ring-1 ring-border/60 overflow-hidden">
                    <div className="relative aspect-[16/9]">
                        <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="p-5">
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{p.category}</div>
                        <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline underline-offset-4">{p.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                        <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
                    </div>
                </article>
            ))}
        </div>
    );
}
