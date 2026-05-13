import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PostCardStats } from './PostCardStats'

describe('PostCardStats', () => {
  it('기본 렌더링 — views와 likes 표시', () => {
    render(<PostCardStats views={200} likes={10} />)
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('숫자 포맷 — 1000 이상은 k 단위', () => {
    render(<PostCardStats views={1500} likes={0} />)
    expect(screen.getByText('1.5k')).toBeInTheDocument()
  })

  it('기본값 0으로 렌더링', () => {
    render(<PostCardStats />)
    const zeros = screen.getAllByText('0')
    expect(zeros.length).toBeGreaterThanOrEqual(2)
  })
})
