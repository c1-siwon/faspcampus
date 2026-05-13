import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { PostDetailPage } from './PostDetailPage'

describe('PostDetailPage', () => {
  it('NavigationBar를 렌더링한다', () => {
    render(<PostDetailPage />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('뒤로가기 버튼을 렌더링한다', () => {
    render(<PostDetailPage />)
    expect(screen.getByRole('button', { name: '뒤로가기' })).toBeInTheDocument()
  })

  it('게시글 제목을 렌더링한다', () => {
    render(<PostDetailPage title="테스트 게시글" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '테스트 게시글'
    )
  })

  it('onBack 핸들러를 호출한다', async () => {
    const onBack = vi.fn()
    render(<PostDetailPage onBack={onBack} />)
    await userEvent.click(screen.getByRole('button', { name: '뒤로가기' }))
    expect(onBack).toHaveBeenCalledOnce()
  })
})
