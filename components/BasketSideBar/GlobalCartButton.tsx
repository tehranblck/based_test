"use client";

import { ShoppingCart } from "lucide-react";
import { openBasket } from "./BasketSideBar";

export default function GlobalCartButton() {
    return (
        <button
            aria-label="Səbəti aç"
            onClick={() => openBasket()}
            className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-md transition-transform hover:scale-105"
        >
            <ShoppingCart className="h-5 w-5" />
        </button>
    );
}
