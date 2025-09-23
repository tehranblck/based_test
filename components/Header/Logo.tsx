import Link from "next/link";
import Image from "next/image";

export function Logo() {
    return (
        <Link
            href="/"
            className="hidden sm:flex items-center gap-2 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
            <Image src="/logo.png" alt="Based.az Logo" className="w-20 h-20 object-contain" width={64} height={64} />
        </Link>
    );
}
