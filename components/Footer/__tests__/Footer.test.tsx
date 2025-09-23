import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
    it("renders the company name", () => {
        render(<Footer />);

        expect(screen.getByText("BASED.AZ")).toBeInTheDocument();
    });

    it("renders the company description", () => {
        render(<Footer />);

        expect(screen.getByText(/Rəqəmsal hesablar, abunəliklər, oyunlar/)).toBeInTheDocument();
    });

    it("renders contact section", () => {
        render(<Footer />);

        expect(screen.getByText("Əlaqə")).toBeInTheDocument();
        expect(screen.getByText("Əlaqə nömrəsi: +994775450755")).toBeInTheDocument();
        expect(screen.getByText("Email: contact@based.az")).toBeInTheDocument();
    });

    it("renders discover section links", () => {
        render(<Footer />);

        expect(screen.getByText("Kəşf et")).toBeInTheDocument();
        expect(screen.getByText("Hesablar və Abunəliklər")).toBeInTheDocument();
        expect(screen.getByText("Proqram Lisenziyaları")).toBeInTheDocument();
        expect(screen.getByText("Panel Xidmətləri və Alətlər")).toBeInTheDocument();
        expect(screen.getByText("Sayt və Marketing Halləri")).toBeInTheDocument();
        expect(screen.getByText("Rəqəmsal Məhsullar və Alətlər")).toBeInTheDocument();
    });

    it("renders advantages section", () => {
        render(<Footer />);

        expect(screen.getByText("Üstünlüklərimiz")).toBeInTheDocument();
        expect(screen.getByText("Sürətli Təhvil")).toBeInTheDocument();
        expect(screen.getByText("Etibarlı Xidmət")).toBeInTheDocument();
        expect(screen.getByText("24/7 Dəstək")).toBeInTheDocument();
        expect(screen.getByText("Sərfəli Qiymətlər")).toBeInTheDocument();
        expect(screen.getByText("Avtomatlaşdırılmış Sistem")).toBeInTheDocument();
    });

    it("renders social media links", () => {
        render(<Footer />);

        const socialLinks = screen.getAllByRole("link");
        const facebookLink = socialLinks.find(link => link.getAttribute("href")?.includes("facebook.com"));
        const instagramLink = socialLinks.find(link => link.getAttribute("href")?.includes("instagram.com"));
        const telegramLink = socialLinks.find(link => link.getAttribute("href")?.includes("t.me"));
        const whatsappLinks = socialLinks.filter(link => link.getAttribute("href")?.includes("wa.me"));
        const youtubeLink = socialLinks.find(link => link.getAttribute("href")?.includes("youtube.com"));

        expect(facebookLink).toBeInTheDocument();
        expect(instagramLink).toBeInTheDocument();
        expect(telegramLink).toBeInTheDocument();
        expect(whatsappLinks.length).toBeGreaterThan(0);
        expect(youtubeLink).toBeInTheDocument();
    });

    it("renders footer with dark styling", () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector("footer");

        expect(footer).toHaveClass("text-white", "relative");
    });

    it("has responsive grid layout", () => {
        const { container } = render(<Footer />);
        const gridContainer = container.querySelector(".grid");

        expect(gridContainer).toHaveClass("grid-cols-1", "md:grid-cols-4", "gap-8");
    });

    it("renders section headings with yellow color", () => {
        render(<Footer />);

        const contactHeading = screen.getByText("Əlaqə");
        const discoverHeading = screen.getByText("Kəşf et");
        const advantagesHeading = screen.getByText("Üstünlüklərimiz");

        expect(contactHeading).toHaveClass("text-yellow-400", "font-semibold", "text-lg");
        expect(discoverHeading).toHaveClass("text-yellow-400", "font-semibold", "text-lg");
        expect(advantagesHeading).toHaveClass("text-yellow-400", "font-semibold", "text-lg");
    });

    it("renders copyright with current year", () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();

        expect(screen.getByText(`Based.az ${currentYear} © Bütün hüquqlar qorunur`, { exact: false })).toBeInTheDocument();
    });

    it("renders bottom section with Saytpro credit", () => {
        render(<Footer />);

        expect(screen.getByText("Saytpro")).toBeInTheDocument();
        expect(screen.getByText("tərəfindən hazırlanıb ❤️")).toBeInTheDocument();
        expect(screen.getByText("Məxfilik Siyasəti")).toBeInTheDocument();
        expect(screen.getByText("Qaydalar")).toBeInTheDocument();
    });

    it("renders Saytpro badge with purple styling", () => {
        render(<Footer />);

        const saytproBadge = screen.getByText("Saytpro");
        expect(saytproBadge).toHaveClass("bg-purple-600", "text-white", "rounded-md", "font-medium");
    });

    it("contact links have correct href attributes", () => {
        render(<Footer />);

        const phoneLink = screen.getByText("Əlaqə nömrəsi: +994775450755").closest("a");
        const emailLink = screen.getByText("Email: contact@based.az").closest("a");

        expect(phoneLink).toHaveAttribute("href", "tel:+994775450755");
        expect(emailLink).toHaveAttribute("href", "mailto:contact@based.az");
    });

    it("social links open in new tab", () => {
        render(<Footer />);

        const socialLinks = screen.getAllByRole("link").filter(link =>
            link.getAttribute("href")?.includes("facebook.com") ||
            link.getAttribute("href")?.includes("instagram.com") ||
            link.getAttribute("href")?.includes("t.me") ||
            link.getAttribute("href")?.includes("wa.me") ||
            link.getAttribute("href")?.includes("youtube.com")
        );

        socialLinks.forEach(link => {
            expect(link).toHaveAttribute("target", "_blank");
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
        });
    });

    it("has proper accessibility attributes for social links", () => {
        render(<Footer />);

        const socialLinks = screen.getAllByRole("link").filter(link =>
            link.getAttribute("aria-label")
        );

        expect(socialLinks.length).toBeGreaterThanOrEqual(5);
    });

    it("renders floating WhatsApp button", () => {
        render(<Footer />);

        const whatsappButtons = screen.getAllByLabelText("WhatsApp ilə əlaqə");
        expect(whatsappButtons.length).toBeGreaterThanOrEqual(1);
        expect(whatsappButtons[0]).toHaveAttribute("href", "https://wa.me/994775450755");
    });

    it("floating WhatsApp button has correct styling", () => {
        const { container } = render(<Footer />);
        const whatsappButton = container.querySelector(".fixed.bottom-6.left-6");

        expect(whatsappButton).toBeInTheDocument();
        expect(whatsappButton?.querySelector("a")).toHaveClass("bg-green-500", "hover:bg-green-600", "animate-pulse");
    });

    it("renders bullet points for lists", () => {
        const { container } = render(<Footer />);
        const bulletPoints = container.querySelectorAll(".bg-yellow-400.rounded-full");

        expect(bulletPoints.length).toBeGreaterThan(0);
    });

    it("has hover effects on social links", () => {
        const { container } = render(<Footer />);
        const socialLinks = container.querySelectorAll(".bg-gray-700");

        expect(socialLinks.length).toBe(5);
    });

    it("matches snapshot", () => {
        const { container } = render(<Footer />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
