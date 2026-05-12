import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SortTab } from './SortTab'

const options = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'comments', label: '댓글순' },
]

describe('SortTab', () => {
  it('기본 렌더링 — tablist 및 탭 아이템 확인', () => {
    render(<SortTab options={options} />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })

  it('첫 번째 탭이 기본 선택', () => {
    render(<SortTab options={options} />)
    expect(screen.getByRole('tab', { name: '최신순' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('value prop으로 선택 탭 제어', () => {
    render(<SortTab options={options} value="popular" />)
    expect(screen.getByRole('tab', { name: '인기순' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('탭 클릭 시 onChange 호출', () => {
    const onChange = vi.fn()
    render(<SortTab options={options} onChange={onChange} />)
    fireEvent.click(screen.getByRole('tab', { name: '댓글순' }))
    expect(onChange).toHaveBeenCalledWith('comments')
  })
})
