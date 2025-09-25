"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/components/Header/nav-links";
import { cn } from "@/lib/utils";

export type Crumb = {
    href: string;
    label: string;
};

export type BreadcrumbProps = {
    items?: Crumb[];
    className?: string;
    separator?: React.ReactNode;
    rootLabel?: string;
    rootHref?: string;
};

function humanize(segment: string) {
    try {
        const s = decodeURIComponent(segment.replace(/-/g, " "));
        return s.charAt(0).toUpperCase() + s.slice(1);
    } catch {
        return segment;
    }
}

function buildFromPath(pathname: string, rootLabel = "Ana Səhifə", rootHref = "/"): Crumb[] {
    const map = new Map<string, string>(NAV_LINKS.map((n) => [n.href, n.label]));
    const parts = pathname.split("?")[0].split("/").filter(Boolean);

    const crumbs: Crumb[] = [{ href: rootHref, label: rootLabel }];
    let acc = "";
    for (const p of parts) {
        acc += `/${p}`;
        const label = map.get(acc) ?? humanize(p);
        crumbs.push({ href: acc, label });
    }
    return crumbs;
}

export default function Breadcrumb({ items, className, separator = <span className="mx-2 text-muted-foreground">/</span>, rootLabel, rootHref }: BreadcrumbProps) {
    const pathname = usePathname();
    const derived = buildFromPath(pathname || "/", rootLabel, rootHref);
    const list = items && items.length > 0 ? items : derived;

    return (
        <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
            <ol className="flex flex-wrap items-center text-muted-foreground">
                {list.map((c, i) => {
                    const isLast = i === list.length - 1;
                    return (
                        <li key={`${c.href}-${i}`} className="flex items-center">
                            {isLast ? (
                                <span aria-current="page" className="text-foreground font-medium">{c.label}</span>
                            ) : (
                                <Link href={c.href} className="hover:text-foreground transition-colors">{c.label}</Link>
                            )}
                            {!isLast ? separator : null}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
