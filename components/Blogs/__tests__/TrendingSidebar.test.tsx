import { fireEvent, render, screen } from "@testing-library/react";
import TrendingSidebar from "../TrendingSidebar";
import type { BlogPost } from "../types";

const make = (id: string): BlogPost => ({
    id,
    title: `Post ${id}`,
    category: "Kateqoriya",
    date: "25 Sentyabr 2025",
    image: "/slide.png",
    excerpt: "excerpt",
    author: "Based.az",
});

const trending = [make("t1"), make("t2")];
const recommended = [make("r1"), make("r2")];

describe("TrendingSidebar", () => {
    it("shows trending by default", () => {
        render(<TrendingSidebar trending={trending} recommended={recommended} />);
        expect(screen.getByText(/Post t1/i)).toBeInTheDocument();
        expect(screen.queryByText(/Post r1/i)).not.toBeInTheDocument();
    });

    it("switches to recommended on click", () => {
        render(<TrendingSidebar trending={trending} recommended={recommended} />);
        fireEvent.click(screen.getByRole("button", { name: /tövsiyə olunanlar/i }));
        expect(screen.getByText(/Post r1/i)).toBeInTheDocument();
        expect(screen.queryByText(/Post t1/i)).not.toBeInTheDocument();
    });
});
