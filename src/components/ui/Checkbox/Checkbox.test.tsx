import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('기본 렌더링', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('레이블이 있을 때 표시됨', () => {
    render(<Checkbox label="동의합니다" />)
    expect(screen.getByText('동의합니다')).toBeInTheDocument()
  })

  it('checked=true 일 때 체크됨', () => {
    render(<Checkbox checked onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('checked=false 일 때 미체크됨', () => {
    render(<Checkbox checked={false} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('indeterminate=true 일 때 aria-checked=mixed', () => {
    render(<Checkbox indeterminate />)
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'mixed'
    )
  })

  it('disabled 상태에서 클릭 불가', () => {
    const onChange = vi.fn()
    render(<Checkbox disabled onChange={onChange} />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
    fireEvent.click(screen.getByRole('checkbox'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('onChange 핸들러 호출', () => {
    const onChange = vi.fn()
    render(<Checkbox checked={false} onChange={onChange} />)
    fireEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('레이블 클릭 시 onChange 호출', () => {
    const onChange = vi.fn()
    render(<Checkbox label="클릭 레이블" checked={false} onChange={onChange} />)
    fireEvent.click(screen.getByText('클릭 레이블'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('레이블 htmlFor와 input id가 연결됨', () => {
    render(<Checkbox label="테스트" id="chk-test" />)
    const label = screen.getByText('테스트').closest('label')
    expect(label).toHaveAttribute('for', 'chk-test')
  })
})
