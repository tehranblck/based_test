import { render, screen } from "@testing-library/react";
import CategoriesCarousel from "@/components/Categories_Circle/CategoriesCarousel";
import categories from "@/data/categories.json";
import type { Category } from "@/types";

describe("CategoriesCarousel", () => {
    it("renders items and links to product category", () => {
        render(<CategoriesCarousel box={16} />);
        const first = (categories as Category[])[0];
        const link = screen.getByRole("link", { name: first.name });
        expect(link).toHaveAttribute("href", `/products?category=${first.slug}`);
    });

    it("shows navigation buttons", () => {
        render(<CategoriesCarousel />);
        expect(screen.getByRole("button", { name: /prev/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
    });
});


