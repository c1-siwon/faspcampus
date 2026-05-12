import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Logo } from './Logo'

describe('Logo', () => {
  it('기본 렌더링', () => {
    render(<Logo />)
    expect(
      screen.getByRole('img', { name: '커뮤니티 로고' })
    ).toBeInTheDocument()
  })

  it('로고 텍스트 표시', () => {
    render(<Logo />)
    expect(screen.getByText('커뮤니티')).toBeInTheDocument()
  })

  it('onClick 핸들러 호출', () => {
    const onClick = vi.fn()
    render(<Logo onClick={onClick} />)
    screen.getByRole('img').click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
