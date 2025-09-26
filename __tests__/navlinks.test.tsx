import { render, screen } from '@testing-library/react'
import { Navlinks } from '@/components/Header/Navlinks'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({ usePathname: jest.fn() }))

describe('Navlinks', () => {
    it('highlights /products when on products path', () => {
        ; (usePathname as jest.Mock).mockReturnValue('/products/123')
        render(<Navlinks />)
        const link = screen.getByText('Məhsullar')
        expect(link.parentElement).toHaveClass('bg-secondary')
    })

    it('shows icons next to labels', () => {
        ; (usePathname as jest.Mock).mockReturnValue('/')
        render(<Navlinks />)
        expect(screen.getByText('Ana Səhifə').previousSibling).toBeInTheDocument()
    })
})





