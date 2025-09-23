import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Bar from '@/components/Bar/Bar'

describe('Bar', () => {
    it('renders title', () => {
        render(<Bar title="Test Title" />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('delegates onSortChange when controlled', () => {
        const onSortChange = jest.fn()
        render(<Bar sortValue="a" onSortChange={onSortChange} sortOptions={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]} />)
        const trigger = screen.getByRole('button')
        fireEvent.click(trigger)
        fireEvent.click(screen.getByText('B'))
        expect(onSortChange).toHaveBeenCalledWith('b')
    })
})



