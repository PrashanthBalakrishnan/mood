import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import HomePage from '../app/page'
import { ReactNode } from 'react'

vi.mock('@clerk/nextjs', () => {
    return {
        auth: () =>
            new Promise((resolve) => resolve({ userId: 'asdlfjalsdkfj' })),
        ClerkProvider: ({ children }: { children: ReactNode }) => (
            <div>{children}</div>
        ),
        useUser: () => ({
            isSignedIn: true,
            user: {
                id: 'user_2NNEqL2nrIRdJ194ndJqAHwEfxC',
                fullName: 'Charles Harris',
            },
        }),
    }
})

test('Home', async () => {
    render(await HomePage())
    expect(screen.getByRole('button')).toBeInTheDocument()
})
