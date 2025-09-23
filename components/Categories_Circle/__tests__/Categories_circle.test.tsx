import { render, screen } from '@testing-library/react'
import CategoriesCarousel from '@/components/Categories_Circle/CategoriesCarousel'

describe('CategoriesCarousel (legacy test path)', () => {
    it('renders items and links', () => {
        render(<CategoriesCarousel box={16} />)
        // Expect there is at least one link rendered to a category
        const links = screen.getAllByRole('link')
        expect(links.length).toBeGreaterThan(0)
    })

    it('renders navigation buttons', () => {
        render(<CategoriesCarousel />)
        expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })
})




