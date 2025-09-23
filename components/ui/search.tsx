"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                    className={cn(
                        "flex h-11 md:h-12 w-full rounded-full bg-input/60 border border-primary/20 pl-11 pr-4 text-sm shadow-sm transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60  disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
