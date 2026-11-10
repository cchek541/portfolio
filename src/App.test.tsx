import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App.tsx'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  beforeEach(() => window.localStorage.clear())

  it('renders the name and primary navigation', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: 'Chinguun' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Live demo' })).toBeInTheDocument()
  })

  it('renders the TomYo case study', () => {
    renderAt('/work/tomyo')
    expect(
      screen.getByRole('heading', { level: 1, name: /Backend, payments, and mobile/ }),
    ).toBeInTheDocument()
  })

  it('links the capstone live site', () => {
    renderAt('/work/capstone')
    expect(screen.getByRole('link', { name: /Live site/ })).toHaveAttribute(
      'href',
      'https://capstone-project-nf9e.onrender.com',
    )
  })

  it('switches to Korean and remembers it', () => {
    renderAt('/')
    fireEvent.click(screen.getByRole('button', { name: '한국어' }))
    expect(screen.getByRole('heading', { level: 1, name: '친궁' })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('ko')
    expect(window.localStorage.getItem('portfolio-lang')).toBe('ko')
  })

  it('offers the CV in the current language', () => {
    renderAt('/evidence')
    expect(screen.getByRole('link', { name: /Download CV/ })).toHaveAttribute('href', '/cv.pdf')
    fireEvent.click(screen.getByRole('button', { name: '한국어' }))
    expect(screen.getByRole('link', { name: /이력서 다운로드/ })).toHaveAttribute(
      'href',
      '/cv-ko.pdf',
    )
  })
})
