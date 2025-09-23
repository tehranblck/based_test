import { render } from '@testing-library/react'
import RootLayout from '@/app/layout'
import HomePage from '@/app/page'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

it('renders layout without crashing', () => {
    render(<RootLayout><div /></RootLayout> as any)
})

it('renders home page without crashing', () => {
    render(<HomePage />)
})
