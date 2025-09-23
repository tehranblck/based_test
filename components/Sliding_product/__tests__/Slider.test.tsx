import React from 'react'
import { render, screen } from '@testing-library/react'
import Slider from '@/components/Sliding_product/Slider'

describe('Slider', () => {
    it('renders images', () => {
        render(<Slider data={[{ src: '/slide_1.webp', alt: 'brand-1' }, { src: '/slide_2.png', alt: 'brand-2' }]} />)
        expect(screen.getByRole('img', { name: 'brand-1' })).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'brand-2' })).toBeInTheDocument()
    })

    it('matches snapshot', () => {
        const { container } = render(<Slider />)
        expect(container).toMatchSnapshot()
    })
})


