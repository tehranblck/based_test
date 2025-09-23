import { render, screen } from "@testing-library/react";
import ActionLinkButton from "@/components/ui/action-link-button";

describe("ActionLinkButton", () => {
    it("renders label and href", () => {
        render(<ActionLinkButton label="Go Products" href="/mehsullar" />);
        const link = screen.getByRole("link", { name: /go products/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/mehsullar");
    });

    it("accepts custom className", () => {
        render(<ActionLinkButton label="Open" href="/x" className="data-test-class" />);
        const link = screen.getByRole("link", { name: /open/i });
        expect(link).toHaveClass("bg-secondary");
        // With Radix Slot asChild, classes are forwarded to the Link element itself
        expect(link).toHaveClass("data-test-class");
    });
});


