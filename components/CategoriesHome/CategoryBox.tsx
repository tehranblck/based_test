import Image from "next/image";
import Link from "next/link";

export interface CategoryBoxProps {
    id: string;
    name: string;
    image: string;
    href?: string;
    bgColor?: string;
}

export default function CategoryBox({ name, image, href = "#" }: CategoryBoxProps) {
    return (
        <Link
            href={href}
            className="group block outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-2xl"
            aria-label={`Browse ${name} products`}
        >
            <article className="overflow-hidden rounded-2xl ring-1 ring-border/60 bg-card/40 backdrop-blur transition-transform duration-200 group-hover:scale-[1.01]">
                <div className={`relative aspect-[16/9] w-full`}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover "
                    />
                </div>
                <div className="flex h-14 items-center justify-center bg-popover text-popover-foreground">
                    <h3 className="text-sm font-medium text-popover-foreground">
                        {name}
                    </h3>
                </div>
            </article>
        </Link>
    );
}
