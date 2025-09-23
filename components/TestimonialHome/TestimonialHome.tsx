"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import testimonials from "@/data/testimonial.json";
import type { Testimonial, SortOption } from "@/types";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ActionLinkButton from "@/components/ui/action-link-button";
import Bar from "@/components/Bar/Bar";
import { Calendar, Star, SortAsc, SortDesc } from "lucide-react";

const Card = dynamic(() => import("./TestimonialCard"), { ssr: true });

export default function TestimonialHome() {
    const [sortValue, setSortValue] = useState<string>("newest");
    const sortOptions: SortOption[] = [
        { value: "newest", label: "Ən yeni", icon: Calendar },
        { value: "oldest", label: "Ən köhnə", icon: Calendar },
        { value: "rating-high", label: "Reytinq (Yuxarı)", icon: Star },
        { value: "rating-low", label: "Reytinq (Aşağı)", icon: Star },
        { value: "az", label: "Əlifba (A-Z)", icon: SortAsc },
        { value: "za", label: "Əlifba (Z-A)", icon: SortDesc },
    ];

    return (
        <section className="w-full py-10 sm:py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <Bar className="sm:px-4 mb-4" title="Müştəri Rəyləri" />

                <Carousel opts={{ align: "start" }} autoPlayMs={8000} pauseOnHover className="w-full">
                    <CarouselContent>
                        {testimonials.slice(0, 16).map((item) => (
                            <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pr-3">
                                <Card item={item as Testimonial} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:inline-flex" />
                    <CarouselNext className="hidden sm:inline-flex" />
                </Carousel>

                <div className="mt-6 flex justify-center">
                    <ActionLinkButton label="Bütün rəylərə bax" href="/musteri-reyleri" />
                </div>
            </div>
        </section>
    );
}


