import { render } from '@testing-library/react'
import Hero from '@/components/Hero/Hero'

test('renders hero banners without crashing', () => {
    render(<Hero />)
})
