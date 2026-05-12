import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SortTabItem } from './SortTabItem'

describe('SortTabItem', () => {
  it('기본 렌더링', () => {
    render(<SortTabItem label="최신순" />)
    expect(screen.getByRole('tab', { name: '최신순' })).toBeInTheDocument()
  })

  it('isSelected=true 일 때 aria-selected 반영', () => {
    render(<SortTabItem label="인기순" isSelected />)
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true')
  })

  it('isSelected=false 일 때 aria-selected=false', () => {
    render(<SortTabItem label="최신순" isSelected={false} />)
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'false')
  })

  it('클릭 시 onClick 호출', () => {
    const onClick = vi.fn()
    render(<SortTabItem label="최신순" onClick={onClick} />)
    fireEvent.click(screen.getByRole('tab'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
