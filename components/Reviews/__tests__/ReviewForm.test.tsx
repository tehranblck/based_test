import { render, screen, fireEvent } from "@testing-library/react";
import ReviewForm from "@/components/Reviews/ReviewForm";

describe("ReviewForm", () => {
    it("renders and validates required fields", () => {
        render(<ReviewForm />);
        fireEvent.click(screen.getByRole("button", { name: /göndər/i }));
        expect(screen.getByText(/ad çox qısadır/i)).toBeInTheDocument();
        expect(screen.getByText(/xidməti seçin/i)).toBeInTheDocument();
        expect(screen.getByText(/minimum 10 simvol/i)).toBeInTheDocument();
    });

    it("submits when valid and shows success", () => {
        render(<ReviewForm />);
        const name = screen.getByLabelText(/ad soyad/i);
        fireEvent.change(name, { target: { value: "John Doe" } });

        const service = screen.getByLabelText(/xidmət/i);
        fireEvent.change(service, { target: { value: "Netflix" } });

        const textarea = screen.getByLabelText(/rəyiniz/i);
        fireEvent.change(textarea, { target: { value: "Bu çox yaxşı xidmətdir." } });

        fireEvent.click(screen.getByRole("button", { name: /göndər/i }));

        expect(screen.getByText(/təşəkkürlər/i)).toBeInTheDocument();
    });

    it("changes rating via radiogroup buttons", () => {
        render(<ReviewForm />);
        const third = screen.getByRole("radio", { name: /rating 3/i });
        fireEvent.click(third);
        expect(third).toHaveAttribute("aria-checked", "true");
    });
});


