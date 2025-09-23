import { render, screen } from "@testing-library/react";
import BigCategories from "@/components/BigCategories/BigCategories";

const mockData = [
    {
        id: "entertainment",
        title: "Film & Musiqi & Əyləncə",
        description: "desc",
        href: "/mehsullar",
        items: [
            { src: "/categori.webp", alt: "Netflix" },
            { src: "/categori3.gif", alt: "Spotify" },
        ],
    },
];

describe("BigCategories", () => {
    it("renders categories and link button", () => {
        render(<BigCategories data={mockData} />);
        expect(screen.getByText(/film & musiqi/i)).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /Ətraflı Bax/i })).toHaveAttribute("href", "/mehsullar");
        // bottom action button
        expect(screen.getByRole("link", { name: /bütün kateqoriyalar/i })).toHaveAttribute("href", "/mehsullar");
    });
});


