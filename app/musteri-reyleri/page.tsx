import testimonials from "@/data/testimonial.json";
import Image from "next/image";
import ReviewForm from "@/components/Reviews/ReviewForm";
import type { Testimonial } from "@/types";

function formatDate(value: string) {
    const d = new Date(value);
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", year: "numeric" }).format(d);
}

function handleFromName(name: string) {
    const base = name.toLowerCase().replace(/[^a-z0-9]+/g, "");
    return `@${base.slice(0, 14)}`;
}

export default function MusteriReyleriPage() {
    return (
        <section className="py-8">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Müştəri rəyləri</h1>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(testimonials as unknown as Testimonial[]).map((t: Testimonial) => (
                        <article key={t.id} className="rounded-2xl bg-card/60 ring-1 ring-border/60 shadow-sm p-4 sm:p-5">
                            <header className="flex items-center justify-between">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full ring-1 ring-border/60 shrink-0">
                                        <Image src={t.avatar} alt={t.name} fill sizes="36px" className="object-cover" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium leading-5 truncate">{t.name}</p>
                                        <p className="text-xs text-muted-foreground truncate">{handleFromName(t.name)}</p>
                                    </div>
                                </div>
                                <span className="shrink-0 rounded-full bg-muted px-2 py-1 text-[10px] sm:text-xs font-medium ring-1 ring-border/60">{t.service}</span>
                            </header>
                            <div className="my-4 h-px border-t border-dashed border-border/70" />
                            <p className="text-sm sm:text-[0.95rem] leading-6 text-muted-foreground">{t.comment}</p>
                            <div className="mt-4 h-px border-t border-dashed border-border/70" />
                            <footer className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                                <span className="tracking-[0.2em] uppercase opacity-70">{t.service}</span>
                                <time dateTime={t.date}>{formatDate(t.date)}</time>
                            </footer>
                        </article>
                    ))}
                </div>

                <div className="mt-8 max-w-2xl">
                    <ReviewForm />
                </div>
            </div>
        </section>
    );
}