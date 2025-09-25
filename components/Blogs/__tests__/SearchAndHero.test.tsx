import { render, screen } from "@testing-library/react";
import SearchAndHero from "../SearchAndHero";
import type { BlogPost } from "../types";

const featured: BlogPost = {
    id: "f1",
    title: "Sınaq Başlığı",
    category: "Süni İntellekt",
    date: "25 Sentyabr 2025",
    image: "/slide.png",
    excerpt: "excerpt",
    author: "Based.az",
    featured: true,
};

describe("SearchAndHero", () => {
    it("renders search input and featured info", () => {
        render(<SearchAndHero featured={featured} />);
        expect(screen.getByPlaceholderText(/bloqda axtar/i)).toBeInTheDocument();
        expect(screen.getByText(/Süni İntellekt/i)).toBeInTheDocument();
        expect(screen.getByText(/Sınaq Başlığı/i)).toBeInTheDocument();
        expect(screen.getByText(/25 Sentyabr 2025/i)).toBeInTheDocument();
    });
});
