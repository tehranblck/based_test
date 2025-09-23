import { render, screen } from '@testing-library/react'
import { Container } from '@/components/Container/Container'

test('renders children inside Container', () => {
    render(<Container><div>child</div></Container>)
    expect(screen.getByText('child')).toBeInTheDocument()
})
