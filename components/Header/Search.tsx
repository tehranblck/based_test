"use client";

import { useState } from "react";
import { SearchInput } from "@/components/ui/search";

export function Search() {
    const [query, setQuery] = useState("");

    return (
        <div className="flex-1 min-w-0 max-w-2xl">
            <SearchInput
                placeholder="Servis axtar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Axtarış"
            />
        </div>
    );
}
