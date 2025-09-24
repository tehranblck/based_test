"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Navlinks } from "./Navlinks";
import { Search } from "./Search";
import { AccountButton } from "./Account_Button";
import { MobileNav } from "./MobileNav";
import Topbar from "./Topbar";
import { IoWalletOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (typeof window === "undefined") return;
            setScrolled(window.scrollY > 8);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className={cn(
                "fixed top-0 z-50 w-full border-b border-border text-card-foreground backdrop-blur supports-[backdrop-filter]:bg-card/90",
                scrolled ? "bg-card/95 shadow-sm" : "bg-card/95"
            )}>
                <div className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                    scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
                )}>
                    <Topbar />
                </div>
                <div className={cn(
                    "mx-auto flex items-center gap-3 px-4 sm:px-6 lg:px-8 transition-[height] duration-300 ease-out",
                    scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                )}>
                    <div className="flex items-center gap-3 shrink-0">
                        <MobileNav />
                        <Navlinks />
                    </div>

                    <Search />

                    <div className="ml-auto flex items-center gap-2 sm:gap-3 shrink-0">
                        <div className="hidden sm:flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-colors">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <IoWalletOutline className="h-4 w-4" />
                            <span className="font-semibold">0.0 ₼</span>
                        </div>
                        <AccountButton />
                    </div>
                </div>
            </header>
            <div className={cn(
                "transition-[height] duration-300 ease-out",
                scrolled ? "h-14 sm:h-20" : "h-[100px] sm:h-[120px]"
            )} />
        </>
    );
}
