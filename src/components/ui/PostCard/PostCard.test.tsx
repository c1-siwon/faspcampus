import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PostCard } from './PostCard'

const BASE_PROPS = {
  title: '피그마 커뮤니티는 역시 피그마피디아',
  preview: '디자인 지식 플랫폼입니다.',
  timeAgo: '1분 전',
}

describe('PostCard', () => {
  it('제목을 렌더링한다', () => {
    render(<PostCard {...BASE_PROPS} />)
    expect(screen.getByText(BASE_PROPS.title)).toBeInTheDocument()
  })

  it('article 역할로 렌더링된다', () => {
    render(<PostCard {...BASE_PROPS} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('미리보기 텍스트를 렌더링한다', () => {
    render(<PostCard {...BASE_PROPS} />)
    expect(screen.getByText(BASE_PROPS.preview)).toBeInTheDocument()
  })

  it('timeAgo를 표시한다', () => {
    render(<PostCard {...BASE_PROPS} />)
    expect(screen.getByText('1분 전')).toBeInTheDocument()
  })

  it('썸네일이 있으면 img를 렌더링한다', () => {
    render(<PostCard {...BASE_PROPS} thumbnail="/img.jpg" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('썸네일이 없으면 img를 렌더링하지 않는다', () => {
    render(<PostCard {...BASE_PROPS} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('chips를 렌더링한다', () => {
    render(
      <PostCard
        {...BASE_PROPS}
        chips={[{ type: 'notice', label: '공지사항' }]}
      />
    )
    expect(screen.getByText('공지사항')).toBeInTheDocument()
  })

  it('onClick 핸들러를 호출한다', () => {
    const onClick = vi.fn()
    render(<PostCard {...BASE_PROPS} onClick={onClick} />)
    fireEvent.click(screen.getByRole('article'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
