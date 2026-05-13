import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PostFilterHeader } from './PostFilterHeader'

describe('PostFilterHeader', () => {
  it('기본 제목 "전체 게시글"을 렌더링한다', () => {
    render(<PostFilterHeader />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      '전체 게시글'
    )
  })

  it('커스텀 제목을 표시한다', () => {
    render(<PostFilterHeader title="인기 게시글" />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      '인기 게시글'
    )
  })

  it('"글쓰기" 버튼을 렌더링한다', () => {
    render(<PostFilterHeader />)
    expect(screen.getByRole('button', { name: '글쓰기' })).toBeInTheDocument()
  })

  it('onWrite 핸들러를 호출한다', async () => {
    const onWrite = vi.fn()
    render(<PostFilterHeader onWrite={onWrite} />)
    await userEvent.click(screen.getByRole('button', { name: '글쓰기' }))
    expect(onWrite).toHaveBeenCalledTimes(1)
  })

  it('기본 정렬 탭(최신글/인기글)을 렌더링한다', () => {
    render(<PostFilterHeader />)
    expect(screen.getByRole('tab', { name: '최신글' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '인기글' })).toBeInTheDocument()
  })

  it('탭 클릭 시 onSortChange를 호출한다', async () => {
    const onSortChange = vi.fn()
    render(<PostFilterHeader onSortChange={onSortChange} />)
    await userEvent.click(screen.getByRole('tab', { name: '인기글' }))
    expect(onSortChange).toHaveBeenCalledWith('popular')
  })
})
