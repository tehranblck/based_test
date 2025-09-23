import { render, screen } from "@testing-library/react";
import CategoriesHome from "@/components/CategoriesHome/CategoriesHome";

describe("CategoriesHome", () => {
    it("renders and has bottom link to all products", () => {
        render(<CategoriesHome />);
        expect(screen.getByRole("link", { name: /bütün məhsullar/i })).toHaveAttribute("href", "/mehsullar");
    });
});


