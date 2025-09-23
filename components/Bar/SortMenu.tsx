"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SortOption = {
    value: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
};

interface SortMenuProps {
    options: SortOption[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

export default function SortMenu({ options, value, onChange, className }: SortMenuProps) {
    const [open, setOpen] = useState(false);
    const [internal, setInternal] = useState<string>(value ?? options[0]?.value ?? "");

    const selectedValue = value ?? internal;
    const current = options.find((o) => o.value === selectedValue) ?? options[0];

    function handleSelect(v: string) {
        if (onChange) onChange(v);
        else setInternal(v);
        setOpen(false);
    }

    return (
        <div className={cn("relative", className)}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-lg bg-background/80 border border-border px-3 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-expanded={open}
                aria-haspopup="listbox"
            >
                {current?.icon ? <current.icon className="h-4 w-4" /> : null}
                <span className="hidden sm:inline">{current?.label}</span>
                <span className="sm:hidden">Sıralama</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
            </button>

            {open && (
                <div className="absolute right-0 top-full z-50 mt-1 w-56 rounded-lg border border-border bg-card shadow-lg">
                    <div className="p-1">
                        {options.map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => handleSelect(opt.value)}
                                className={cn(
                                    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors text-left",
                                    selectedValue === opt.value
                                        ? "bg-secondary text-secondary-foreground"
                                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                                )}
                            >
                                {opt.icon ? <opt.icon className="h-4 w-4" /> : null}
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {open && (
                <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden="true" />
            )}
        </div>
    );
}




