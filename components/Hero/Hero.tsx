import Image from "next/image";
import Link from "next/link";

type HeroItem = {
    src: string;
    alt: string;
    href?: string;
    priority?: boolean;
};

interface HeroProps {
    main: HeroItem;
    sideTop: HeroItem;
    sideBottom: HeroItem;
}

export default function Hero({
    main = { src: "/slide.png", alt: "Featured banner", priority: true },
    sideTop = { src: "/slide.png", alt: "Top banner" },
    sideBottom = { src: "/slide.png", alt: "Bottom banner" },
}: Partial<HeroProps>) {
    return (
        <section className="w-full">
            <div className="mx-auto grid  grid-cols-2 grid-rows-2 gap-1  sm:gap-4  md:grid-cols-3 md:grid-rows-2">
                <div className="relative overflow-hidden rounded-xl border border-border col-span-2 md:col-span-2 md:row-span-2">
                    <Image
                        src={main.src}
                        alt={main.alt}
                        fill
                        sizes="(min-width: 768px) 66vw, 100vw"
                        priority={main.priority}
                        className="object-cover"
                    />
                </div>

                <Link href={sideTop.href ?? "#"} className="relative overflow-hidden rounded-xl sm:border sm:border-border sm:bg-card">
                    <Image
                        src={sideTop.src}
                        alt={sideTop.alt}
                        fill
                        sizes="(max-width: 767px) 50vw, 33vw"
                        className="object-cover max-h-[120px] rounded-xl md:max-h-none md:object-cover p-0 md:p-0"
                    />
                    <div className="h-[140px] sm:h-[170px] md:h-[170px]" />
                </Link>

                <Link href={sideBottom.href ?? "#"} className="relative overflow-hidden rounded-xl sm:border sm:border-border sm:bg-card">
                    <Image
                        src={sideBottom.src}
                        alt={sideBottom.alt}
                        fill
                        sizes="(max-width: 767px) 50vw, 33vw"
                        className="object-cover max-h-[120px] md:max-h-none !rounded-xl md:object-cover md:p-0"
                    />
                    <div className="h-[140px] sm:h-[170px] md:h-[170px]" />
                </Link>
            </div>
        </section>
    );
}
