import Link from "next/link";
import { User, ShoppingCart } from "lucide-react";

export function AccountButton() {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            <Link
                href="/cart"
                className="relative inline-flex items-center gap-2 rounded-md px-2 py-2 text-foreground transition-colors  hover:bg-primary/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden text-sm sm:inline">Səbət</span>
            </Link>

            <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-md border-2 border-secondary  px-3 py-2 text-sm text-black transition-colors bg-secondary  shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Hesab</span>
            </Link>
        </div>
    );
}
