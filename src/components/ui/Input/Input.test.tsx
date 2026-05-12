import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('기본 렌더링', () => {
    render(<Input placeholder="입력하세요" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('레이블이 있을 때 표시됨', () => {
    render(<Input label="이름" />)
    expect(screen.getByText('이름')).toBeInTheDocument()
  })

  it('레이블 htmlFor와 input id가 연결됨', () => {
    render(<Input label="이름" id="name-input" />)
    const label = screen.getByText('이름')
    expect(label).toHaveAttribute('for', 'name-input')
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'name-input')
  })

  it('에러 메시지가 있을 때 alert 역할로 표시됨', () => {
    render(<Input error="필수 입력 항목입니다." />)
    expect(screen.getByRole('alert')).toHaveTextContent('필수 입력 항목입니다.')
  })

  it('에러 상태에서 aria-invalid=true', () => {
    render(<Input error="오류" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('에러 없을 때 aria-invalid=false', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')
  })

  it('disabled 상태에서 입력 불가', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('onChange 핸들러 호출', () => {
    const onChange = vi.fn()
    render(<Input onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '테스트' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('placeholder 텍스트 표시', () => {
    render(<Input placeholder="여기에 입력하세요" />)
    expect(screen.getByPlaceholderText('여기에 입력하세요')).toBeInTheDocument()
  })

  it('leadingIcon 렌더링', () => {
    render(<Input leadingIcon={<span data-testid="leading-icon" />} />)
    expect(screen.getByTestId('leading-icon')).toBeInTheDocument()
  })

  it('trailingIcon 렌더링', () => {
    render(<Input trailingIcon={<span data-testid="trailing-icon" />} />)
    expect(screen.getByTestId('trailing-icon')).toBeInTheDocument()
  })
})
