"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import categoriesData from "@/data/category.json";
import type { Category } from "@/types";

export type CategoryItem = { src: string; alt: string; href?: string };

type LocalCategory = Category;

export default function CategoriesCarousel({ box = 64 }: { box?: number }) {
    return (
        <section className="w-full py-3">
            <div className="mx-auto ">
                <Carousel opts={{ align: "start" }} autoPlayMs={10000} pauseOnHover className="w-full">
                    <CarouselContent>
                        {categoriesData.map((item: LocalCategory, idx: number) => (
                            <CarouselItem key={idx} className="basis-auto shrink-0">
                                <div className="mr-1 sm:mr-3">
                                    <Card className="rounded-xl border-0 bg-transparent shadow-none">
                                        <CardContent className="p-0">
                                            <Link href={item.slug ? `/products?category=${item.slug}` : "#"} className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                                <div className="relative rounded-xl overflow-hidden" style={{ width: box, height: box }}>
                                                    <Image src={item.image} alt={item.name} fill sizes={`${box}px`} className="object-cover object-center" />
                                                </div>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
