import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('기본 렌더링', () => {
    render(<Icon name="search" />)
    const icon = screen.getByRole('presentation')
    expect(icon).toBeInTheDocument()
  })

  it('label prop이 있으면 img role과 aria-label 적용', () => {
    render(<Icon name="bell" label="알림" />)
    const icon = screen.getByRole('img', { name: '알림' })
    expect(icon).toBeInTheDocument()
  })

  it('size prop이 SVG width/height에 반영됨', () => {
    render(<Icon name="search" size={32} />)
    const icon = screen.getByRole('presentation')
    expect(icon).toHaveAttribute('width', '32')
    expect(icon).toHaveAttribute('height', '32')
  })

  it('기본 size는 24', () => {
    render(<Icon name="close" />)
    const icon = screen.getByRole('presentation')
    expect(icon).toHaveAttribute('width', '24')
  })

  it('className prop 적용', () => {
    render(<Icon name="search" className="test-class" />)
    const icon = screen.getByRole('presentation')
    expect(icon).toHaveClass('test-class')
  })
})
