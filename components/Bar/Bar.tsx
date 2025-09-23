"use client";

import { useState } from "react";
import { SortAsc, SortDesc, Calendar, Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import SortMenu from "./SortMenu";
import type { SortOption } from "@/types";

interface BarProps {
    title?: string;
    className?: string;
    sortOptions?: SortOption[];
    sortValue?: string;
    onSortChange?: (value: string) => void;
}

const defaultOptions: SortOption[] = [
    { value: "newest", label: "Ən yeni", icon: Calendar },
    { value: "oldest", label: "Ən köhnə", icon: Calendar },
    { value: "az", label: "Əlifba sırası (A-Z)", icon: SortAsc },
    { value: "za", label: "Əlifba sırası (Z-A)", icon: SortDesc },
    { value: "price-low", label: "Qiymət (Aşağı)", icon: Hash },
    { value: "price-high", label: "Qiymət (Yuxarı)", icon: Hash },
];

export default function Bar({ title = "Məhsullar", className, sortOptions, sortValue, onSortChange }: BarProps) {
    const optionsToUse = (sortOptions && sortOptions.length > 0) ? sortOptions : (onSortChange ? defaultOptions : []);
    const [internal, setInternal] = useState(sortValue ?? optionsToUse[0]?.value ?? "newest");
    const currentValue = sortValue ?? internal;
    const hasSort = optionsToUse.length > 0;

    return (
        <div className={cn("w-full bg-secondary rounded-xl text-secondary-foreground shadow-sm", className)}>
            <div className="mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between gap-4 py-3">
                    <div className="flex items-center gap-3">
                        <h1 className="text-lg font-semibold text-secondary-foreground sm:text-xl md:text-xl">
                            {title}
                        </h1>
                    </div>

                    {hasSort ? (
                        <SortMenu
                            options={optionsToUse}
                            value={currentValue}
                            onChange={(v) => (onSortChange ? onSortChange(v) : setInternal(v))}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}
