import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Toolbar } from './Toolbar'

describe('Toolbar', () => {
  it('기본 렌더링', () => {
    render(<Toolbar />)
    const toolbar = screen.getByRole('toolbar')
    expect(toolbar).toBeInTheDocument()
  })

  it('leading 콘텐츠 렌더링', () => {
    render(<Toolbar leading={<span>로고</span>} />)
    expect(screen.getByText('로고')).toBeInTheDocument()
  })

  it('center 콘텐츠 렌더링', () => {
    render(<Toolbar center={<span>타이틀</span>} />)
    expect(screen.getByText('타이틀')).toBeInTheDocument()
  })

  it('trailing 콘텐츠 렌더링', () => {
    render(<Toolbar trailing={<button>검색</button>} />)
    expect(screen.getByText('검색')).toBeInTheDocument()
  })
})
