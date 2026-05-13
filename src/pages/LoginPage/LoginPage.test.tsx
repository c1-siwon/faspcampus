import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { LoginPage } from './LoginPage'

describe('LoginPage', () => {
  it('로고를 렌더링한다', () => {
    render(<LoginPage />)
    expect(
      screen.getByRole('img', { name: 'FigmaPedia 로고' })
    ).toBeInTheDocument()
  })

  it('이메일 입력 필드를 렌더링한다', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('이메일')).toBeInTheDocument()
  })

  it('비밀번호 입력 필드를 렌더링한다', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument()
  })

  it('로그인 버튼을 렌더링한다', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument()
  })

  it('회원가입 버튼을 렌더링한다', () => {
    render(<LoginPage />)
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument()
  })

  it('onLogin 핸들러를 호출한다', async () => {
    const onLogin = vi.fn()
    render(<LoginPage onLogin={onLogin} />)
    await userEvent.click(screen.getByRole('button', { name: '로그인' }))
    expect(onLogin).toHaveBeenCalledOnce()
  })

  it('onSignUp 핸들러를 호출한다', async () => {
    const onSignUp = vi.fn()
    render(<LoginPage onSignUp={onSignUp} />)
    await userEvent.click(screen.getByRole('button', { name: '회원가입' }))
    expect(onSignUp).toHaveBeenCalledOnce()
  })
})
