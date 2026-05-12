import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { TitleInput } from './TitleInput'

describe('TitleInput', () => {
  it('기본 렌더링', () => {
    render(<TitleInput />)
    expect(
      screen.getByRole('textbox', { name: '제목 입력' })
    ).toBeInTheDocument()
  })

  it('placeholder 텍스트 표시', () => {
    render(<TitleInput placeholder="제목을 입력하세요" />)
    expect(screen.getByPlaceholderText('제목을 입력하세요')).toBeInTheDocument()
  })

  it('value가 표시됨', () => {
    render(<TitleInput value="테스트 제목" onChange={() => {}} />)
    expect(screen.getByRole('textbox', { name: '제목 입력' })).toHaveValue(
      '테스트 제목'
    )
  })

  it('onChange 핸들러 호출', () => {
    const onChange = vi.fn()
    render(<TitleInput value="" onChange={onChange} />)
    fireEvent.change(screen.getByRole('textbox', { name: '제목 입력' }), {
      target: { value: '새 제목' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('disabled 상태에서 입력 불가', () => {
    render(<TitleInput disabled />)
    expect(screen.getByRole('textbox', { name: '제목 입력' })).toBeDisabled()
  })

  it('maxLength 설정 시 카운터 표시', () => {
    render(<TitleInput value="안녕" maxLength={100} onChange={() => {}} />)
    expect(screen.getByText('2/100')).toBeInTheDocument()
  })

  it('maxLength 없을 때 카운터 미표시', () => {
    render(<TitleInput value="안녕" />)
    expect(screen.queryByText(/\/\d+/)).not.toBeInTheDocument()
  })

  it('maxLength 초과 입력 방지', () => {
    render(<TitleInput value="12345" maxLength={5} onChange={() => {}} />)
    const textarea = screen.getByRole('textbox', { name: '제목 입력' })
    expect(textarea).toHaveAttribute('maxlength', '5')
  })
})
