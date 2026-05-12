import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Chip } from './Chip'

describe('Chip', () => {
  it('기본 렌더링', () => {
    render(<Chip label="프론트엔드" />)
    expect(
      screen.getByRole('option', { name: /프론트엔드/ })
    ).toBeInTheDocument()
  })

  it('isSelected=false 일 때 aria-selected=false', () => {
    render(<Chip label="테스트" isSelected={false} />)
    expect(screen.getByRole('option')).toHaveAttribute('aria-selected', 'false')
  })

  it('variant=selected 일 때 aria-selected=true', () => {
    render(<Chip label="선택됨" variant="selected" />)
    expect(screen.getByRole('option')).toHaveAttribute('aria-selected', 'true')
  })

  it('onClick 핸들러 호출', () => {
    const onClick = vi.fn()
    render(<Chip label="클릭" onClick={onClick} />)
    fireEvent.click(screen.getByRole('option'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('removable=true 일 때 제거 버튼 표시', () => {
    render(<Chip label="제거 가능" removable />)
    expect(screen.getByLabelText('제거 가능 제거')).toBeInTheDocument()
  })

  it('onRemove 핸들러 호출', () => {
    const onRemove = vi.fn()
    render(<Chip label="제거" removable onRemove={onRemove} />)
    fireEvent.click(screen.getByLabelText('제거 제거'))
    expect(onRemove).toHaveBeenCalledTimes(1)
  })
})
