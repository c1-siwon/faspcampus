import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Logo } from './Logo'

describe('Logo', () => {
  it('기본 렌더링', () => {
    render(<Logo />)
    expect(
      screen.getByRole('img', { name: 'FigmaPedia 로고' })
    ).toBeInTheDocument()
  })

  it('로고 SVG 이미지 src 포함', () => {
    render(<Logo />)
    const img = screen.getByRole('img', { name: 'FigmaPedia 로고' })
    expect(img.querySelector('img')).toBeTruthy()
  })

  it('onClick 핸들러 호출', () => {
    const onClick = vi.fn()
    render(<Logo onClick={onClick} />)
    screen.getByRole('img', { name: 'FigmaPedia 로고' }).click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
