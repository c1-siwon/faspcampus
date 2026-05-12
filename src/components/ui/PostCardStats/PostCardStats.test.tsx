import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PostCardStats } from './PostCardStats'

describe('PostCardStats', () => {
  it('기본 렌더링', () => {
    render(<PostCardStats likes={10} views={200} comments={5} />)
    expect(screen.getByLabelText('좋아요 10개')).toBeInTheDocument()
  })

  it('숫자 포맷 — 1000 이상은 k 단위', () => {
    render(<PostCardStats likes={1500} views={0} comments={0} />)
    expect(screen.getByText('1.5k')).toBeInTheDocument()
  })

  it('isLiked=true 일 때 aria-pressed=true', () => {
    render(<PostCardStats isLiked likes={5} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  })

  it('onLike 클릭 핸들러 호출', () => {
    const onLike = vi.fn()
    render(<PostCardStats onLike={onLike} likes={3} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onLike).toHaveBeenCalledTimes(1)
  })
})
