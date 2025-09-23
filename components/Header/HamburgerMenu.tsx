"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

export function HamburgerMenu({ isOpen, onToggle, className }: HamburgerMenuProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className={cn(
                "h-9 w-9 md:hidden",
                className
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            {isOpen ? (
                <X className="h-5 w-5" />
            ) : (
                <Menu className="h-5 w-5" />
            )}
        </Button>
    );
}


