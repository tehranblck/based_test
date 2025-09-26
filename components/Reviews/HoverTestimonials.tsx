"use client";

// Based on Aceternity UI "Hover Effect" component
// Source: https://www.aceternity.com/components/hover-effect

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Item = {
    title: string;
    description: string;
    link?: string;
    avatar?: string;
    name?: string;
};

export function HoverEffect({ items, className }: { items: Item[]; className?: string }) {
    const featured = items;
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 " + (className ?? "")}>
            {featured.map((item, idx) => (
                <HoverCard
                    key={idx}
                    item={item}
                    isActive={hoveredIndex === idx}
                    onEnter={() => setHoveredIndex(idx)}
                    onLeave={() => setHoveredIndex(null)}
                />
            ))}
        </div>
    );
}

function HoverCard({ item, isActive, onEnter, onLeave }: { item: Item; isActive: boolean; onEnter: () => void; onLeave: () => void }) {
    return (
        <Link
            href={item.link || "#"}
            className="group relative block rounded-2xl border border-border bg-card/60 p-5 overflow-hidden"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {isActive ? (
                <motion.span
                    layoutId="hoverBackground"
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-secondary/10 via-secondary/5 to-foreground/5 ring-1 ring-secondary/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.2 }}
                />
            ) : null}
            <div className="relative flex items-center gap-3">
                {item.avatar ? (
                    <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-border/60">
                        <Image src={item.avatar} alt={item.name || item.title} fill className="object-cover" />
                    </div>
                ) : null}
                <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                    {item.name ? <p className="text-xs text-muted-foreground">{item.name}</p> : null}
                </div>
            </div>
            <p className="relative mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.description}</p>
        </Link>
    );
}


