"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

export interface TestimonialCardProps {
    item: Testimonial;
    className?: string;
}

export default function TestimonialCard({ item, className }: TestimonialCardProps) {
    return (
        <article className={cn("rounded-2xl bg-card/60 ring-1 ring-border/50 backdrop-blur p-4 sm:p-5 text-foreground shadow-sm", className)}>
            <p className="text-sm sm:text-base leading-6 text-muted-foreground">{item.comment}</p>
            <div className="mt-5 flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-border/60">
                    <Image src={item.avatar} alt={item.name} fill sizes="32px" className="object-cover" />
                </div>
                <div>
                    <p className="text-sm font-medium">{item.name}</p>
                </div>
            </div>
        </article>
    );
}


