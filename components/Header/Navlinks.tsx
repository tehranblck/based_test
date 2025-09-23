"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Info, Phone, FileText, Shield } from "lucide-react";

const navigationLinks = [
    { href: "/", label: "Ana Səhifə", icon: Home },
    { href: "/products", label: "Məhsullar", icon: ShoppingBag },
    { href: "/about", label: "Haqqımızda", icon: Info },
    { href: "/bloq", label: "Bloq", icon: Shield },
    { href: "/terms", label: "Şərtlər", icon: FileText },
    { href: "/contact", label: "Əlaqə", icon: Phone },

];

export function Navlinks() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="ml-2 hidden items-center gap-2 rounded-full bg-background/40 px-1 py-1 shadow-sm ring-1 ring-border/50 backdrop-blur md:flex">
            {navigationLinks.map((link) => {
                const Icon = link.icon;
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
                        <Icon className="h-4 w-4" />
                        <span className={active ? "font-medium" : ""}>{link.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
