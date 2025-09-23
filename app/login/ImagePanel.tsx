import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePanelProps {
    mode: "login" | "register";
}

export default function ImagePanel({ mode }: ImagePanelProps) {
    return (
        <div
            className={cn(
                "absolute inset-y-0 left-0 z-20 w-1/2 transform transition-transform duration-700 ease-in-out will-change-transform hidden md:block",
                mode === "register" ? "translate-x-0" : "translate-x-full"
            )}
            aria-hidden
        >
            <div className="relative h-full w-full overflow-hidden rounded-l-3xl bg-gradient-to-br from-amber-400 to-orange-500">
                <Image
                    src="/slide.png"
                    alt="Promo"
                    fill
                    priority
                    className={cn(
                        "object-cover max-h-[550px] transition-transform duration-700 ease-in-out",
                        mode === "register" ? "scale-[1.04]" : "scale-100"
                    )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity duration-700" />
            </div>
        </div>
    );
}
