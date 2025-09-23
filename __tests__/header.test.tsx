import { render, screen } from '@testing-library/react'
import Header from '@/components/Header/Header'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}))

describe('Header', () => {
    beforeEach(() => {
        ; (usePathname as jest.Mock).mockReturnValue('/')
    })

    it('renders navigation links with icons', () => {
        render(<Header />)
        expect(screen.getByText('Ana Səhifə')).toBeInTheDocument()
        expect(screen.getByText('Məhsullar')).toBeInTheDocument()
        expect(screen.getByText('Haqqımızda')).toBeInTheDocument()
        expect(screen.getByText('Əlaqə')).toBeInTheDocument()
        expect(screen.getByText('Şərtlər')).toBeInTheDocument()
    })

    it('shows balance badge', () => {
        render(<Header />)
        expect(screen.getByText('0.0 ₼')).toBeInTheDocument()
    })

    it('highlights active link for homepage', () => {
        render(<Header />)
        const home = screen.getByText('Ana Səhifə')
        expect(home.parentElement).toHaveClass('bg-secondary')
    })
})
