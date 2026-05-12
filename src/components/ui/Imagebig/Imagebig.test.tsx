import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Imagebig } from './Imagebig'

describe('Imagebig', () => {
  it('src가 있을 때 img 태그 렌더링', () => {
    render(<Imagebig src="/test.png" alt="테스트 이미지" />)
    const img = screen.getByRole('img', { name: '테스트 이미지' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/test.png')
  })

  it('src가 없을 때 플레이스홀더 표시 (img 없음)', () => {
    render(<Imagebig />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
