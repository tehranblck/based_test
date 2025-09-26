import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

describe('ui/carousel', () => {
    function setup(props?: { autoPlayMs?: number; pauseOnHover?: boolean; align?: 'start' | 'center' }) {
        const utils = render(
            <Carousel autoPlayMs={props?.autoPlayMs ?? 0} pauseOnHover={props?.pauseOnHover ?? true} opts={{ align: props?.align ?? 'start' }}>
                <CarouselContent>
                    <CarouselItem>Slide 1</CarouselItem>
                    <CarouselItem>Slide 2</CarouselItem>
                    <CarouselItem>Slide 3</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        )
        return utils
    }

    it('renders and navigates next/prev', () => {
        const { container } = setup()
        const viewport = container.querySelector('[class*="overflow-x-auto"]') as HTMLDivElement
        Object.defineProperty(viewport, 'clientWidth', { value: 300, configurable: true })
        const items = container.querySelectorAll('[data-carousel-item]')
        items.forEach((el) => Object.defineProperty(el, 'offsetLeft', { value: 200, configurable: true }))
        items.forEach((el) => Object.defineProperty(el, 'clientWidth', { value: 200, configurable: true }))
        // @ts-expect-error jsdom
        viewport.scrollTo = jest.fn()

        fireEvent.click(screen.getByRole('button', { name: 'Next' }))
        fireEvent.click(screen.getByRole('button', { name: 'Prev' }))
        expect((viewport.scrollTo as jest.Mock).mock.calls.length).toBeGreaterThanOrEqual(2)
    })

    it('centers when align is center', () => {
        const { container } = setup({ align: 'center' })
        const viewport = container.querySelector('[class*="overflow-x-auto"]') as HTMLDivElement
        Object.defineProperty(viewport, 'clientWidth', { value: 300, configurable: true })
        const first = container.querySelector('[data-carousel-item]') as HTMLDivElement
        Object.defineProperty(first, 'offsetLeft', { value: 200, configurable: true })
        Object.defineProperty(first, 'clientWidth', { value: 100, configurable: true })
        // @ts-expect-error jsdom
        viewport.scrollTo = jest.fn()
        fireEvent.click(screen.getByRole('button', { name: 'Next' }))
        expect((viewport.scrollTo as jest.Mock).mock.calls[0][0]).toMatchObject({ left: expect.any(Number), behavior: 'smooth' })
    })

    it('pauses on hover when pauseOnHover is true', () => {
        jest.useFakeTimers()
        const { container } = setup({ autoPlayMs: 100, pauseOnHover: true })
        const viewport = container.querySelector('[class*="overflow-x-auto"]') as HTMLDivElement
        // @ts-expect-error jsdom
        viewport.scrollTo = jest.fn()
        fireEvent.mouseEnter(viewport)
        jest.advanceTimersByTime(300)
        expect((viewport.scrollTo as jest.Mock).mock.calls.length).toBe(0)
        fireEvent.mouseLeave(viewport)
        jest.advanceTimersByTime(120)
        expect((viewport.scrollTo as jest.Mock).mock.calls.length).toBeGreaterThanOrEqual(1)
    })
})





