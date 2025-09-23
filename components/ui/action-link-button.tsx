"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ActionLinkButtonProps {
    label: string;
    href: string;
    className?: string;
    size?: "sm" | "default" | "lg";
}

export function ActionLinkButton({ label, href, className, size = "lg" }: ActionLinkButtonProps) {
    return (
        <Button asChild size={size} className={cn("rounded-full", className)}>
            <Link className="bg-secondary text-primary-foreground shadow-sm" href={href} aria-label={label}>
                {label}
            </Link>
        </Button>
    );
}

export default ActionLinkButton;


