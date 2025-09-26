"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./nav-links";

export default function Navlinks() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="max-w-[90rem] mx-auto  hidden items-center gap-2 rounded-full bg-background/40 px-2  py-1 shadow-sm ring-1 ring-border/50 backdrop-blur md:flex">
            {NAV_LINKS.map((link) => {
                const Icon = link.icon as React.ComponentType<{ className?: string }> | undefined;
                const active = isActive(link.href);
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${active
                            ? "bg-secondary text-primary-foreground shadow-sm"
                            : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                            }`}
                    >
                        {Icon ? <Icon className="h-4 w-4" /> : null}
                        <span className={active ? "font-medium" : ""}>{link.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
