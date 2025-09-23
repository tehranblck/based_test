"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PanelLeftOpen, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigationLinks = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/products", label: "Məhsullar" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/contact", label: "Əlaqə" },
    { href: "/terms", label: "Şərtlər" }
];

export function MobileNav() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center gap-2 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
                        {open ? <X className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Based.az" width={28} height={28} />
                            <span>Based.az</span>
                        </SheetTitle>
                        <ThemeToggle />
                    </SheetHeader>
                    <div className="p-4 space-y-4">
                        <div>
                            <SearchInput
                                placeholder="Servis axtar"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                aria-label="Axtarış"
                            />
                        </div>
                        <nav className="flex flex-col gap-1">
                            {navigationLinks.map((link) => (
                                <SheetClose key={link.href} asChild>
                                    <Link
                                        href={link.href}
                                        className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
