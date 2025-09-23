import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from '@/components/ui/search'

it('renders search input and accepts typing', () => {
    render(<SearchInput placeholder="Servis axtar" />)
    const input = screen.getByPlaceholderText('Servis axtar') as HTMLInputElement
    expect(input).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'netflix' } })
    expect(input.value).toBe('netflix')
})


