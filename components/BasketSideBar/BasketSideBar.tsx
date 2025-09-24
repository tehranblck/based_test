"use client";

import { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, Trash2, ShoppingCart } from "lucide-react";

export type BasketItem = {
    id: string;
    title: string;
    price: number;
    image?: string;
    qty?: number;
};

export type BasketSideBarOpenEvent = CustomEvent<{ open?: boolean }>;

export function openBasket() {
    dispatchEvent(new CustomEvent("basket:toggle", { detail: { open: true } }));
}

export function closeBasket() {
    dispatchEvent(new CustomEvent("basket:toggle", { detail: { open: false } }));
}

export function toggleBasket() {
    dispatchEvent(new CustomEvent("basket:toggle", { detail: { open: undefined } }));
}

export default function BasketSideBar() {
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState<BasketItem[]>([]);

    useEffect(() => {
        const handler = (e: Event) => {
            const ce = e as BasketSideBarOpenEvent;
            if (typeof ce.detail?.open === "boolean") setOpen(ce.detail.open);
            else setOpen((v) => !v);
        };
        addEventListener("basket:toggle", handler as EventListener);
        return () => removeEventListener("basket:toggle", handler as EventListener);
    }, []);

    const total = useMemo(() => items.reduce((s, i) => s + i.price * (i.qty ?? 1), 0), [items]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="w-[380px] max-w-[92vw] bg-card text-foreground">
                <SheetHeader className="px-4 py-3 border-b sticky top-0 bg-card z-10">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5 text-secondary" />
                            <SheetTitle className="text-base font-semibold">Səbət</SheetTitle>
                        </div>
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <X className="h-4 w-4" />
                            </Button>
                        </SheetClose>
                    </div>
                </SheetHeader>

                <div className="flex h-full flex-col">
                    <div className="flex-1 overflow-auto p-4 space-y-3">
                        {items.length === 0 ? (
                            <div className="text-center text-sm text-muted-foreground py-12">Səbət boşdur</div>
                        ) : (
                            items.map((it) => (
                                <div key={it.id} className="flex items-center gap-3 rounded-lg bg-card/60 ring-1 ring-border/60 p-3">
                                    <div className="h-12 w-12 rounded-md bg-muted" />
                                    <div className="flex-1">
                                        <div className="text-sm font-medium line-clamp-1">{it.title}</div>
                                        <div className="text-xs text-muted-foreground">{(it.qty ?? 1)} × {(it.price).toFixed(2)} ₼</div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Sil">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="border-t p-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Cəmi</span>
                            <span className="font-semibold">{total.toFixed(2)} ₼</span>
                        </div>
                        <Button className="w-full">Sifarişi tamamla</Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
