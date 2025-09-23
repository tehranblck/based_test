"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CarouselContextValue = {
    scrollTo: (index: number) => void;
    next: () => void;
    prev: () => void;
    current: number;
    count: number;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function Carousel({ className, children, opts, autoPlayMs = 0, pauseOnHover = true }: { className?: string; children: React.ReactNode; opts?: { align?: "start" | "center" }; autoPlayMs?: number; pauseOnHover?: boolean }) {
    const viewportRef = React.useRef<HTMLDivElement | null>(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const align = opts?.align ?? "start";

    const scrollTo = (index: number) => {
        const vp = viewportRef.current;
        if (!vp) return;
        const items = Array.from(vp.querySelectorAll("[data-carousel-item]")) as HTMLElement[];
        const target = items[index];
        if (!target) return;
        const left = target.offsetLeft - (align === "center" ? (vp.clientWidth - target.clientWidth) / 2 : 0);
        vp.scrollTo({ left, behavior: "smooth" });
        setCurrent(index);
    };

    const next = () => {
        if (count <= 0) return;
        scrollTo((current + 1) % count);
    };
    const prev = () => {
        if (count <= 0) return;
        scrollTo((current - 1 + count) % count);
    };

    React.useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;
        const items = vp.querySelectorAll("[data-carousel-item]");
        setCount(items.length);
    }, [children]);

    React.useEffect(() => {
        if (!autoPlayMs || autoPlayMs <= 0) return;
        if (paused) return;
        if (count <= 0) return;
        const id = setInterval(() => {
            // use latest current
            const vp = viewportRef.current;
            if (!vp) return;
            const nextIndex = (current + 1) % count;
            scrollTo(nextIndex);
        }, autoPlayMs);
        return () => clearInterval(id);
    }, [autoPlayMs, paused, current, count, scrollTo]);

    return (
        <CarouselContext.Provider value={{ scrollTo, next, prev, current, count }}>
            <div className={cn("relative", className)}>
                <div
                    ref={viewportRef}
                    className="overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    onMouseEnter={() => pauseOnHover && setPaused(true)}
                    onMouseLeave={() => pauseOnHover && setPaused(false)}
                >
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    );
}

export function CarouselContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div className={cn("flex", className)}>
            {children}
        </div>
    );
}

export function CarouselItem({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div data-carousel-item className={cn("basis-full shrink-0", className)}>
            {children}
        </div>
    );
}

export function CarouselNext({ className }: { className?: string }) {
    const ctx = React.useContext(CarouselContext)!;
    return (
        <button type="button" onClick={ctx.next} className={cn("absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-card/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)} aria-label="Next">›</button>
    );
}

export function CarouselPrevious({ className }: { className?: string }) {
    const ctx = React.useContext(CarouselContext)!;
    return (
        <button type="button" onClick={ctx.prev} className={cn("absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-card/70 text-foreground shadow-sm ring-1 ring-border backdrop-blur hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)} aria-label="Prev">‹</button>
    );
}
