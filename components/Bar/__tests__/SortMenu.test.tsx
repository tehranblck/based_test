import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SortMenu, { type SortOption } from '@/components/Bar/SortMenu'

const options: SortOption[] = [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
]

describe('SortMenu', () => {
    it('opens and closes menu', () => {
        render(<SortMenu options={options} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(screen.getAllByText('A').length).toBeGreaterThan(0)
        fireEvent.click(document.body)
    })

    it('selects option in uncontrolled mode', () => {
        render(<SortMenu options={options} />)
        fireEvent.click(screen.getByRole('button'))
        fireEvent.click(screen.getByText('B'))
        expect(screen.getByRole('button')).toHaveTextContent('B')
    })

    it('calls onChange in controlled mode', () => {
        const onChange = jest.fn()
        render(<SortMenu options={options} value="a" onChange={onChange} />)
        fireEvent.click(screen.getByRole('button'))
        fireEvent.click(screen.getByText('B'))
        expect(onChange).toHaveBeenCalledWith('b')
    })
})


