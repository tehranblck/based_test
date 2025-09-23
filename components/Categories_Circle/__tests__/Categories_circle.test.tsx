import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CategoriesCircle, { type CategoryItem } from '@/components/Categories_Circle/Categories_circle'

jest.useFakeTimers()

function getTrack(container: HTMLElement) {
    const track = container.querySelector('[class*="overflow-x-auto"]') as HTMLDivElement | null
    if (!track) throw new Error('track not found')
    return track
}

describe('CategoriesCircle', () => {
    it('renders items and supports links', () => {
        const items: CategoryItem[] = [
            { src: '/slide_2.png', alt: 'cat-1', href: '/c/1' },
            { src: '/slide_2.png', alt: 'cat-2' },
        ]
        const { container } = render(<CategoriesCircle items={items} size={48} />)
        expect(container).toMatchSnapshot()
        expect(screen.getByRole('link', { name: 'cat-1' })).toBeInTheDocument()
    })

    it('auto-scrolls when content overflows and not hovering', () => {
        const { container } = render(<CategoriesCircle size={48} speedMsPerStep={10} />)
        const track = getTrack(container)
        Object.defineProperty(track, 'clientWidth', { value: 100, configurable: true })
        Object.defineProperty(track, 'scrollWidth', { value: 300, configurable: true })
        Object.defineProperty(track, 'scrollLeft', { value: 0, writable: true })

        fireEvent.mouseEnter(track)
        fireEvent.mouseLeave(track)

        jest.advanceTimersByTime(12)
        expect(track.scrollLeft).toBeGreaterThan(0)
    })

    it('manual prev/next buttons call scrollTo with smooth behavior', () => {
        const items: CategoryItem[] = new Array(5).fill(0).map((_, i) => ({ src: '/slide_2.png', alt: `cat-${i}` }))
        const { container } = render(<CategoriesCircle items={items} size={60} />)
        const track = getTrack(container)
        Object.defineProperty(track, 'clientWidth', { value: 120, configurable: true })
        Object.defineProperty(track, 'scrollWidth', { value: 800, configurable: true })
        Object.defineProperty(track, 'scrollLeft', { value: 0, writable: true })
        // @ts-expect-error jsdom
        track.scrollTo = jest.fn()

        fireEvent.click(screen.getByRole('button', { name: 'Next' }))
        expect((track.scrollTo as jest.Mock).mock.calls[0][0]).toMatchObject({ left: expect.any(Number), behavior: 'smooth' })

        fireEvent.click(screen.getByRole('button', { name: 'Prev' }))
        expect((track.scrollTo as jest.Mock).mock.calls[1][0]).toMatchObject({ left: expect.any(Number), behavior: 'smooth' })
    })
})



