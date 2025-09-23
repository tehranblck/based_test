"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import testimonials from "@/data/testimonial.json";
import type { Testimonial } from "@/types";
import ActionLinkButton from "@/components/ui/action-link-button";
import Bar from "@/components/Bar/Bar";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Card = dynamic(() => import("./TestimonialCard"), { ssr: true });

function AutoRow({ items, direction = "left", speedMsPerSec = 40 }: { items: Testimonial[]; direction?: "left" | "right"; speedMsPerSec?: number }) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const posRef = useRef<number>(0);
    const widthRef = useRef<number>(0);
    const [isHovering, setIsHovering] = useState(false);
    const loopItems = useMemo(() => (items.length ? [...items, ...items] : items), [items]);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                widthRef.current = trackRef.current.scrollWidth / 2;
            }
        };
        measure();
        window.addEventListener("resize", measure, { passive: true });
        return () => window.removeEventListener("resize", measure);
    }, [loopItems.length]);

    useEffect(() => {
        let last = performance.now();
        const tick = (now: number) => {
            const dt = Math.min(64, now - last) / 1000; // clamp delta
            last = now;
            if (!isHovering && trackRef.current) {
                const delta = speedMsPerSec * dt * (direction === "left" ? -1 : 1);
                posRef.current += delta;
                const half = widthRef.current || 1;
                if (posRef.current <= -half) posRef.current += half;
                if (posRef.current >= 0) posRef.current -= half;
                trackRef.current.style.transform = `translateX(${posRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        };
    }, [direction, speedMsPerSec, isHovering]);

    const fadeMask = {
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
    } as React.CSSProperties;

    return (
        <div ref={wrapperRef} className="relative overflow-hidden" style={fadeMask}>
            <div
                ref={trackRef}
                className="flex flex-nowrap gap-3 will-change-transform"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {loopItems.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="shrink-0 basis-full sm:basis-1/2 xl:basis-1/3 pr-3">
                        <Card item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TestimonialHome() {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number>(5);
    const [sent, setSent] = useState(false);
    console.log(service)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2500);
        setName("");
        setService("");
        setComment("");
        setRating(5);
    }

    return (
        <section className="w-full py-10 sm:py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <Bar className="sm:px-4 mb-4" title="Müştəri Rəyləri" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {(() => {
                            const list = (testimonials as Testimonial[]).slice(0, 18);
                            const half = Math.ceil(list.length / 2);
                            const rows = [list.slice(0, half), list.slice(half)];
                            return (
                                <>
                                    <AutoRow items={rows[0]} direction="left" />
                                    <AutoRow items={rows[1]} direction="right" />
                                </>
                            );
                        })()}
                    </div>

                    <div className="lg:col-span-4">
                        <form onSubmit={handleSubmit} className="rounded-2xl bg-card/60 ring-1 ring-border/50 backdrop-blur p-4 sm:p-5 text-foreground shadow-sm">
                            <h3 className="text-lg font-semibold">Rəyinizi bildirin</h3>
                            <p className="text-sm text-muted-foreground mt-1">Qısa fikrinizi bizimlə bölüşün</p>

                            <div className="mt-4 grid grid-cols-1 gap-3">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Ad Soyad"
                                    className="w-full rounded-xl bg-input/50 border border-border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                    aria-label="Ad Soyad"
                                />

                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Qısa rəy"
                                    className="min-h-[96px] w-full rounded-xl bg-input/50 border border-border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                                    aria-label="Rəy"
                                />
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Qiymət:</span>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <button type="button" key={i} onClick={() => setRating(i)} aria-label={`Rating ${i}`} className="p-1 rounded-md hover:bg-accent">
                                                <Star className={"h-4 w-4 " + (i <= rating ? "text-yellow-400" : "text-muted-foreground")}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button type="submit" className="w-full rounded-full">Göndər</Button>
                            </div>
                            {sent ? (
                                <div className="mt-3 text-sm text-green-500">Təşəkkürlər! Rəyiniz qeydə alındı.</div>
                            ) : null}
                        </form>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <ActionLinkButton label="Bütün rəylərə bax" href="/musteri-reyleri" />
                </div>
            </div>
        </section>
    );
}


