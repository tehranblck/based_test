"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

type Props = {
    placeholder?: string;
};

export default function BlogSearch({ placeholder = "Bloqda axtar" }: Props) {
    const router = useRouter();
    const params = useSearchParams();
    const [value, setValue] = useState("");

    useEffect(() => {
        const q = params?.get("search") ?? "";
        setValue(q);
    }, [params]);

    function go() {
        const q = value.trim();
        if (q.length === 0) {
            router.push("/bloq");
            return;
        }
        router.push(`/bloq?search=${encodeURIComponent(q)}`);
    }

    return (
        <div className="relative">
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") go();
                }}
                placeholder={placeholder}
                className="w-full rounded-md border border-border bg-background px-3 py-2 pr-9 text-sm outline-none focus:ring-2 focus:ring-secondary/40"
            />
            <button
                type="button"
                aria-label="Axtar"
                onClick={go}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
                <Search className="h-4 w-4" />
            </button>
        </div>
    );
}


