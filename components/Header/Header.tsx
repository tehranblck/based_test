"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Navlinks } from "./Navlinks";
import { Search } from "./Search";
import { AccountButton } from "./Account_Button";
import { MobileNav } from "./MobileNav";
import Topbar from "./Topbar";
import { cn } from "@/lib/utils";
import { IoWalletOutline } from "react-icons/io5";

export default function Header() {
    const [showTopbar, setShowTopbar] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if (typeof window === "undefined") return;
            setShowTopbar(window.scrollY < 40);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 text-card-foreground backdrop-blur supports-[backdrop-filter]:bg-card/60">
                <div
                    className={cn(
                        "overflow-hidden will-change-[max-height,opacity,transform] transition-[max-height,opacity,transform] duration-300 ease-out",
                        showTopbar ? "max-h-10 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                    )}
                >
                    <Topbar />
                </div>
                <div className="mx-auto flex h-16 items-center gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 shrink-0">
                        <MobileNav />
                        <Logo />
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

        </>
    );
}
