import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ContentInputContainer } from './ContentInputContainer'

describe('ContentInputContainer', () => {
  it('textarea를 렌더링한다', () => {
    render(<ContentInputContainer />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('placeholder를 표시한다', () => {
    render(<ContentInputContainer placeholder="내용 입력" />)
    expect(screen.getByPlaceholderText('내용 입력')).toBeInTheDocument()
  })

  it('label을 표시한다', () => {
    render(<ContentInputContainer label="본문" />)
    expect(screen.getByLabelText('본문')).toBeInTheDocument()
  })

  it('onChange를 호출한다', async () => {
    const onChange = vi.fn()
    render(<ContentInputContainer onChange={onChange} />)
    await userEvent.type(screen.getByRole('textbox'), 'hello')
    expect(onChange).toHaveBeenCalled()
  })

  it('에러 메시지를 표시한다', () => {
    render(<ContentInputContainer error="필수 항목입니다" />)
    expect(screen.getByText('필수 항목입니다')).toBeInTheDocument()
  })

  it('maxLength 카운터를 표시한다', () => {
    render(<ContentInputContainer maxLength={100} value="abc" />)
    expect(screen.getByText('3 / 100')).toBeInTheDocument()
  })
})
