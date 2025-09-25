import { render, screen } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb";

jest.mock("next/navigation", () => ({
    usePathname: () => "/haqqimizda",
}));

describe("Breadcrumb", () => {
    it("derives crumbs from current path", () => {
        render(<Breadcrumb />);
        expect(screen.getByText(/Ana Səhifə/i)).toBeInTheDocument();
        expect(screen.getByText(/Haqqımızda/i)).toBeInTheDocument();
    });

    it("accepts custom items", () => {
        render(<Breadcrumb items={[{ href: "/", label: "Ev" }, { href: "/rules", label: "Qaydalar" }]} />);
        expect(screen.getByText(/Ev/i)).toBeInTheDocument();
        expect(screen.getByText(/Qaydalar/i)).toBeInTheDocument();
    });
});
