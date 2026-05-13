import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { LoginBottom } from './LoginBottom'

describe('LoginBottom', () => {
  it('"로그인 유지" 체크박스를 렌더링한다', () => {
    render(<LoginBottom />)
    expect(screen.getByText('로그인 유지')).toBeInTheDocument()
  })

  it('"비밀번호 찾기" 버튼을 렌더링한다', () => {
    render(<LoginBottom />)
    expect(
      screen.getByRole('button', { name: '비밀번호 찾기' })
    ).toBeInTheDocument()
  })

  it('"회원가입" 버튼을 렌더링한다', () => {
    render(<LoginBottom />)
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument()
  })

  it('onSignUp 핸들러를 호출한다', async () => {
    const onSignUp = vi.fn()
    render(<LoginBottom onSignUp={onSignUp} />)
    await userEvent.click(screen.getByRole('button', { name: '회원가입' }))
    expect(onSignUp).toHaveBeenCalledOnce()
  })

  it('onForgotPassword 핸들러를 호출한다', async () => {
    const onForgotPassword = vi.fn()
    render(<LoginBottom onForgotPassword={onForgotPassword} />)
    await userEvent.click(screen.getByRole('button', { name: '비밀번호 찾기' }))
    expect(onForgotPassword).toHaveBeenCalledOnce()
  })
})
