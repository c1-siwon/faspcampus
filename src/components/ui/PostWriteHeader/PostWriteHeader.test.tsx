import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PostWriteHeader } from './PostWriteHeader'

describe('PostWriteHeader', () => {
  it('기본 제목을 렌더링한다', () => {
    render(<PostWriteHeader />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '게시글 쓰기'
    )
  })

  it('커스텀 제목을 표시한다', () => {
    render(<PostWriteHeader title="질문하기" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '질문하기'
    )
  })

  it('description이 있으면 표시한다', () => {
    render(<PostWriteHeader description="디스크립션" />)
    expect(screen.getByText('디스크립션')).toBeInTheDocument()
  })

  it('description이 없으면 렌더링하지 않는다', () => {
    render(<PostWriteHeader />)
    expect(screen.queryByText('디스크립션')).not.toBeInTheDocument()
  })
})
