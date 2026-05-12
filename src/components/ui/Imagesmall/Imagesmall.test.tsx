import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Imagesmall } from './Imagesmall'

describe('Imagesmall', () => {
  it('src가 있을 때 img 렌더링', () => {
    render(<Imagesmall src="/test.png" alt="썸네일" />)
    const img = screen.getByRole('img', { name: '썸네일' })
    expect(img).toBeInTheDocument()
  })

  it('src가 없을 때 플레이스홀더 (img 없음)', () => {
    render(<Imagesmall />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('기본 크기 80x80 적용', () => {
    const { container } = render(<Imagesmall />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveStyle({ width: '80px', height: '80px' })
  })
})
