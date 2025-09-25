import { render, screen } from "@testing-library/react";
import PostsGrid from "../PostsGrid";
import type { BlogPost } from "../types";

const items: BlogPost[] = Array.from({ length: 3 }).map((_, i) => ({
    id: `id-${i}`,
    title: `Başlıq ${i}`,
    category: "Süni İntellekt",
    date: "25 Sentyabr 2025",
    image: "/slide.png",
    excerpt: "Qısa məzmun",
    author: "Based.az",
}));

describe("PostsGrid", () => {
    it("renders all posts", () => {
        render(<PostsGrid items={items} />);
        items.forEach((p) => {
            expect(screen.getByText(p.title)).toBeInTheDocument();
            expect(screen.getByText(p.category)).toBeInTheDocument();
            expect(screen.getByText(p.date)).toBeInTheDocument();
        });
    });

    it("has responsive grid class", () => {
        const { container } = render(<PostsGrid items={items} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid.className).toMatch(/grid/);
    });
});
