import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NavigationBar } from './NavigationBar'

describe('NavigationBar', () => {
  it('header(banner) 역할로 렌더링된다', () => {
    render(<NavigationBar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('state=login 일 때 로그인 버튼 표시', () => {
    render(<NavigationBar state="login" />)
    expect(screen.getByText('로그인')).toBeInTheDocument()
  })

  it('state=logout 일 때 로그아웃 버튼 표시', () => {
    render(<NavigationBar state="logout" />)
    expect(screen.getByText('로그아웃')).toBeInTheDocument()
  })

  it('카테고리 탭을 렌더링한다', () => {
    render(<NavigationBar categories={['커뮤니티', '스터디']} />)
    expect(screen.getByText('커뮤니티')).toBeInTheDocument()
    expect(screen.getByText('스터디')).toBeInTheDocument()
  })

  it('onAuthClick 핸들러 호출', () => {
    const onAuthClick = vi.fn()
    render(<NavigationBar onAuthClick={onAuthClick} />)
    fireEvent.click(screen.getByText('로그인'))
    expect(onAuthClick).toHaveBeenCalledTimes(1)
  })
})
