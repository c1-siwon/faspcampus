import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Divider } from './Divider'

describe('Divider', () => {
  it('기본 렌더링 (horizontal)', () => {
    render(<Divider />)
    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
  })

  it('orientation="vertical" 적용', () => {
    render(<Divider orientation="vertical" />)
    const divider = screen.getByRole('separator')
    expect(divider).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('orientation="horizontal" 기본값', () => {
    render(<Divider />)
    const divider = screen.getByRole('separator')
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
  })
})
