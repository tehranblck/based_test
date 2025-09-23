import type React from "react";

export type Product = {
    id: string;
    title: string;
    image: string;
    price: number;
    currency: "AZN";
    categoryId: string;
    stock?: number;
};

export type Category = {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    popularity?: number;
    priceFrom?: number;
};

export type Testimonial = {
    id: string;
    name: string;
    avatar: string;
    rating: 1 | 2 | 3 | 4 | 5;
    service: string;
    comment: string;
    date: string;
};

export type BigCategoryItem = {
    src: string;
    alt: string;
    href?: string;
};

export type BigCategory = {
    id: string;
    title: string;
    description: string;
    href: string;
    items: BigCategoryItem[];
};

export type SortOption = {
    value: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
};

export type FeatureBoxProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

