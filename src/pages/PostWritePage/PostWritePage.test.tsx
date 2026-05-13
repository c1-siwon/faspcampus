import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { PostWritePage } from './PostWritePage'

describe('PostWritePage', () => {
  it('NavigationBar를 렌더링한다', () => {
    render(<PostWritePage />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('"게시글 쓰기" 헤딩을 렌더링한다', () => {
    render(<PostWritePage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '게시글 쓰기'
    )
  })

  it('"등록하기" 버튼을 렌더링한다', () => {
    render(<PostWritePage />)
    expect(screen.getByRole('button', { name: '등록하기' })).toBeInTheDocument()
  })

  it('onSubmit 핸들러를 호출한다', async () => {
    const onSubmit = vi.fn()
    render(<PostWritePage onSubmit={onSubmit} />)
    await userEvent.click(screen.getByRole('button', { name: '등록하기' }))
    expect(onSubmit).toHaveBeenCalledWith({ title: '', content: '' })
  })
})
