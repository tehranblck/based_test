import { render, screen } from "@testing-library/react";
import WhyUs from "../WhyUs";

describe("WhyUs", () => {
    it("renders the section title and subtitle", () => {
        render(<WhyUs />);

        expect(screen.getByText("Niyə Biz?")).toBeInTheDocument();
        expect(screen.getByText('"Rahatlıq, təhlükəsizlik və sərfəli qiymətlər bir arada."')).toBeInTheDocument();
    });

    it("renders all four feature boxes", () => {
        render(<WhyUs />);

        expect(screen.getByText("Rəsmi Hesablar")).toBeInTheDocument();
        expect(screen.getByText("Münasib Qiymətlər")).toBeInTheDocument();
        expect(screen.getByText("24/7 Dəstək Komandası")).toBeInTheDocument();
        expect(screen.getByText("Sürətli Təhvil")).toBeInTheDocument();
    });

    it("renders feature descriptions", () => {
        render(<WhyUs />);

        expect(screen.getByText(/Sizə yalnız lisenziyalı, rəsmi və təhlükəsiz premium hesablar/)).toBeInTheDocument();
        expect(screen.getByText(/Ən populyar platformlara sərfəli qiymətlərlə çıxış imkanı/)).toBeInTheDocument();
        expect(screen.getByText(/Sual və çətinlik yaranırsa, gecə və ya gündüz fərq etməz/)).toBeInTheDocument();
        expect(screen.getByText(/Sifarişi etdiyiniz xidmətlər dərhal aktivləşdirilir/)).toBeInTheDocument();
    });

    it("applies correct section styling", () => {
        const { container } = render(<WhyUs />);
        const section = container.querySelector("section");

        expect(section).toHaveClass("py-16", "px-4", "bg-background");
    });

    it("has responsive grid layout", () => {
        render(<WhyUs />);
        const gridContainer = screen.getByText("Rəsmi Hesablar").closest(".grid");

        expect(gridContainer).toHaveClass("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6");
    });

    it("centers content with max width container", () => {
        const { container } = render(<WhyUs />);
        const mainContainer = container.querySelector(".max-w-7xl");

        expect(mainContainer).toBeInTheDocument();
        expect(mainContainer).toHaveClass("mx-auto");
    });

    it("renders title with correct typography", () => {
        render(<WhyUs />);
        const title = screen.getByText("Niyə Biz?");

        expect(title).toHaveClass("text-3xl", "md:text-4xl", "font-bold", "text-foreground", "mb-4");
    });

    it("renders subtitle with correct styling", () => {
        render(<WhyUs />);
        const subtitle = screen.getByText('"Rahatlıq, təhlükəsizlik və sərfəli qiymətlər bir arada."');

        expect(subtitle).toHaveClass("text-lg", "text-muted-foreground", "max-w-2xl", "mx-auto");
    });

    it("renders icons for all features", () => {
        const { container } = render(<WhyUs />);
        const icons = container.querySelectorAll("svg");

        expect(icons).toHaveLength(4);
    });

    it("has proper semantic HTML structure", () => {
        render(<WhyUs />);

        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Niyə Biz?");
    });

    it("renders exactly 4 feature boxes", () => {
        const { container } = render(<WhyUs />);
        const featureBoxes = container.querySelectorAll(".bg-card");

        expect(featureBoxes).toHaveLength(4);
    });

    it("has proper spacing for header section", () => {
        const { container } = render(<WhyUs />);
        const headerSection = container.querySelector(".text-center");

        expect(headerSection).toHaveClass("mb-12");
    });

    it("matches snapshot", () => {
        const { container } = render(<WhyUs />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
