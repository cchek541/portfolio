import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('App shell', () => {
  it('renders the engineer name and primary navigation', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getAllByText('Chingun').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Live demo' })).toBeInTheDocument()
  })
})
