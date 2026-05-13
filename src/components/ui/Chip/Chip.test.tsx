import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  it('category 타입 기본 렌더링', () => {
    render(<Chip label="디자인" type="category" />)
    expect(screen.getByText('디자인')).toBeInTheDocument()
  })

  it('notice 타입 렌더링', () => {
    render(<Chip label="공지" type="notice" />)
    expect(screen.getByText('공지')).toBeInTheDocument()
  })

  it('기본 type은 category', () => {
    render(<Chip label="테스트" />)
    expect(screen.getByText('테스트')).toBeInTheDocument()
  })

  it('onClick 핸들러 호출', () => {
    const onClick = vi.fn()
    render(<Chip label="클릭" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('onClick 없을 때 button role 없음', () => {
    render(<Chip label="비클릭" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
