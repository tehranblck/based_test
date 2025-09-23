"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type CategoryItem = {
    src: string;
    alt: string;
    href?: string;
};

interface CategoriesCircleProps {
    items?: CategoryItem[];
    size?: number;
    autoScroll?: boolean;
    speedMsPerStep?: number;
}

const defaults: CategoryItem[] = new Array(25).fill(0).map((_, i) => ({
    src: "/slide_2.png",
    alt: `cat-${i + 1}`,
}));

export default function CategoriesCircle({
    items = defaults,
    size = 72,
    autoScroll = true,
    speedMsPerStep = 18,
}: CategoriesCircleProps) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isHovering, setIsHovering] = useState(false);

    // Auto scroll
    useEffect(() => {
        if (!autoScroll) return;
        const el = trackRef.current;
        if (!el) return;
        if (el.scrollWidth <= el.clientWidth) return; // scroll yoxdursa dayan

        const tick = () => {
            const el2 = trackRef.current;
            if (!el2) return;
            const { scrollLeft, scrollWidth, clientWidth } = el2;
            const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
            el2.scrollLeft = atEnd ? 0 : scrollLeft + 1;
        };

        if (!isHovering) {
            intervalRef.current = setInterval(tick, speedMsPerStep);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [autoScroll, speedMsPerStep, isHovering]);

    // Manual scroll
    const scrollByAmount = (dir: "left" | "right") => {
        const el = trackRef.current;
        if (!el) return;
        if (el.scrollWidth <= el.clientWidth) return; // scroll yoxdursa dayan

        // autoScroll-u dayandır
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        const maxLeft = el.scrollWidth - el.clientWidth;
        const step = Math.max(size * 6, Math.floor(el.clientWidth * 0.8));
        const target = Math.min(
            Math.max(0, el.scrollLeft + (dir === "left" ? -step : step)),
            maxLeft
        );
        el.scrollTo({ left: target, behavior: "smooth" });

        // 2 saniyədən sonra autoScroll-u yenidən başlat
        if (autoScroll) {
            setTimeout(() => setIsHovering(false), 2000);
        }
    };

    const fadeMask = {
        WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
    } as React.CSSProperties;

    return (
        <section className="w-full py-6">
            <div className="relative mx-auto">
                <div className="relative overflow-hidden" style={fadeMask}>
                    <div
                        ref={trackRef}
                        className="flex flex-nowrap gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {items.map((item, idx) => {
                            const Box = (
                                <div
                                    key={`${item.alt}-${idx}`}
                                    className="group relative shrink-0 snap-start rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-transparent to-primary/40"
                                    style={{ width: size, height: size }}
                                >
                                    <div className="relative h-full w-full rounded-[14px] bg-card/70 backdrop-blur-sm shadow-sm transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-0.5">
                                        <div className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            sizes={`${size}px`}
                                            className="object-cover rounded-[14px] transition-transform duration-300 group-hover:scale-[1.06]"
                                        />
                                    </div>
                                </div>
                            );
                            return item.href ? (
                                <Link
                                    key={`${item.alt}-${idx}-link`}
                                    href={item.href}
                                    className="outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-2xl"
                                    aria-label={item.alt}
                                >
                                    {Box}
                                </Link>
                            ) : (
                                Box
                            );
                        })}
                    </div>

                    <div className="absolute z-50 inset-y-0 left-0 right-0 hidden items-center justify-between sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollByAmount("left")}
                            className="h-8 z-50 w-8 -translate-x-2 rounded-full bg-card/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label="Prev"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByAmount("right")}
                            className="h-8 z-50 w-8 translate-x-0 rounded-full bg-card/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
