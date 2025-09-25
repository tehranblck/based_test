import type { ComponentType } from "react";
import { Home, ShoppingBag, Info, Phone, FileText, Shield, Gem } from "lucide-react";

export type NavLinkItem = {
    href: string;
    label: string;
    icon?: ComponentType<{ className?: string }>;
};

export const NAV_LINKS: NavLinkItem[] = [
    { href: "/", label: "Ana Səhifə", icon: Home },
    { href: "/products", label: "Məhsullar", icon: ShoppingBag },
    { href: "/haqqimizda", label: "Haqqımızda", icon: Info },
    { href: "/rules", label: "Şərtlər", icon: FileText },
    { href: "/musteri-reyleri", label: "Rəylər", icon: Gem },
    { href: "/bloq", label: "Bloq", icon: Shield },
    { href: "/elaqe", label: "Əlaqə", icon: Phone },
];
