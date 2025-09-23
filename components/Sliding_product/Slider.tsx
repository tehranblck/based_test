import React from "react";
import Image from "next/image";

export type SliderItem = {
    src: string;
    alt: string;
};

const items: SliderItem[] = [
    { src: "/slide_1.webp", alt: "brand-1" },
    { src: "/slide_2.png", alt: "brand-2" },
    { src: "/slide_1.webp", alt: "brand-3" },
    { src: "/slide_1.webp", alt: "brand-4" },
    { src: "/slide_1.webp", alt: "brand-5" },
    { src: "/slide_1.webp", alt: "brand-6" },
    { src: "/slide_1.webp", alt: "brand-7" },
    { src: "/slide_1.webp", alt: "brand-8" },
];

export default function Slider({ data = items }: { data?: SliderItem[] }) {
    const fadeMask = {
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
    } as React.CSSProperties;

    const Track = ({ duplicate, className }: { duplicate?: boolean, className?: string }) => (
        <div className="flex items-center gap-10 sm:gap-14 md:gap-16 whitespace-nowrap will-change-transform animate-[marquee-rtl_28s_linear_infinite]" aria-hidden={duplicate}>
            {data.map((item, idx) => (
                <div key={(duplicate ? "dup-" : "") + idx} className={`relative scale-75 h-8 sm:h-10 md:h-12 w-[110px] sm:w-[140px] md:w-[160px] opacity-80 transition-opacity hover:opacity-100 ${className}`}>
                    <Image src={item.src} alt={item.alt} fill className="object-contain" sizes="(max-width: 640px) 110px, (max-width: 768px) 140px, 160px" />
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full py-6 sm:py-8">
            <div className="relative w-full overflow-hidden" style={fadeMask}>
                <div className="flex w-max">
                    <Track className="mr-16" />
                    <Track duplicate />
                </div>
            </div>
        </div>
    );
}
