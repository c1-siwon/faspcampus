import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('NavigationBar를 렌더링한다', () => {
    render(<HomePage />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('"전체 게시글" 제목을 렌더링한다', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      '전체 게시글'
    )
  })

  it('기본 6개 게시글을 렌더링한다', () => {
    render(<HomePage />)
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('빈 posts 배열이면 게시글이 없다', () => {
    render(<HomePage posts={[]} />)
    expect(screen.queryAllByRole('article')).toHaveLength(0)
  })

  it('onWrite 핸들러를 호출한다', async () => {
    const onWrite = vi.fn()
    render(<HomePage onWrite={onWrite} />)
    await userEvent.click(screen.getByRole('button', { name: '글쓰기' }))
    expect(onWrite).toHaveBeenCalledOnce()
  })

  it('onPostClick 핸들러를 호출한다', async () => {
    const onPostClick = vi.fn()
    render(<HomePage onPostClick={onPostClick} />)
    await userEvent.click(screen.getAllByRole('article')[0])
    expect(onPostClick).toHaveBeenCalledWith('1')
  })
})
