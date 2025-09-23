import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '@/app/login/page'

describe('LoginPage', () => {
    it('renders login form by default', () => {
        render(<LoginPage />)
        expect(screen.getByText('Giriş')).toBeInTheDocument()
    })

    it('switches to register form on action', () => {
        render(<LoginPage />)
        const buttons = screen.getAllByRole('button', { name: /qeydiyyatdan keç/i })
        fireEvent.click(buttons[0])
        expect(screen.getByText('Qeydiyyat')).toBeInTheDocument()
    })
})
