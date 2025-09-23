import { render, screen } from "@testing-library/react";
import { Shield } from "lucide-react";
import FeatureBox from "../FeatureBox";

describe("FeatureBox", () => {
    const mockProps = {
        icon: <Shield data-testid="shield-icon" />,
        title: "Test Title",
        description: "Test description for the feature box component."
    };

    it("renders with all required props", () => {
        render(<FeatureBox {...mockProps} />);

        expect(screen.getByTestId("shield-icon")).toBeInTheDocument();
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test description for the feature box component.")).toBeInTheDocument();
    });

    it("applies correct CSS classes for styling", () => {
        const { container } = render(<FeatureBox {...mockProps} />);
        const featureBox = container.firstChild as HTMLElement;

        expect(featureBox).toHaveClass("group", "bg-card", "border", "border-border", "rounded-lg", "p-6");
        expect(featureBox).toHaveClass("hover:shadow-xl", "hover:-translate-y-1", "transition-all", "duration-300", "cursor-pointer");
    });

    it("renders icon container with yellow background and hover animations", () => {
        const { container } = render(<FeatureBox {...mockProps} />);
        const iconContainer = container.querySelector(".bg-yellow-400");

        expect(iconContainer).toBeInTheDocument();
        expect(iconContainer).toHaveClass("inline-flex", "items-center", "justify-center", "w-12", "h-12", "rounded-lg");
        expect(iconContainer).toHaveClass("group-hover:scale-110", "group-hover:rotate-3", "transition-all");
    });

    it("renders title with correct typography and hover classes", () => {
        render(<FeatureBox {...mockProps} />);
        const title = screen.getByText("Test Title");

        expect(title).toHaveClass("text-lg", "font-semibold", "text-foreground", "mb-3");
        expect(title).toHaveClass("group-hover:text-yellow-600", "dark:group-hover:text-yellow-400", "transition-colors");
    });

    it("renders description with correct typography and hover classes", () => {
        render(<FeatureBox {...mockProps} />);
        const description = screen.getByText("Test description for the feature box component.");

        expect(description).toHaveClass("text-sm", "text-muted-foreground", "leading-relaxed");
        expect(description).toHaveClass("group-hover:text-foreground", "transition-colors");
    });

    it("handles empty title gracefully", () => {
        render(<FeatureBox {...mockProps} title="" />);

        expect(screen.getByTestId("shield-icon")).toBeInTheDocument();
        expect(screen.getByText("Test description for the feature box component.")).toBeInTheDocument();
    });

    it("handles empty description gracefully", () => {
        render(<FeatureBox {...mockProps} description="" />);

        expect(screen.getByTestId("shield-icon")).toBeInTheDocument();
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("renders different icons correctly", () => {
        const customIcon = <div data-testid="custom-icon">Custom</div>;
        render(<FeatureBox {...mockProps} icon={customIcon} />);

        expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
        expect(screen.queryByTestId("shield-icon")).not.toBeInTheDocument();
    });

    it("has hover animation classes for interactive effects", () => {
        const { container } = render(<FeatureBox {...mockProps} />);
        const featureBox = container.firstChild as HTMLElement;
        const iconContainer = container.querySelector(".bg-yellow-400");
        const iconWrapper = iconContainer?.firstChild as HTMLElement;

        expect(featureBox).toHaveClass("group");
        expect(iconContainer).toHaveClass("group-hover:scale-110", "group-hover:rotate-3", "group-hover:bg-yellow-300");
        expect(iconWrapper).toHaveClass("group-hover:scale-90");
    });

    it("matches snapshot", () => {
        const { container } = render(<FeatureBox {...mockProps} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
