import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Loginsetup } from './Loginsetup'

describe('Loginsetup', () => {
  it('"로그인 유지" 텍스트를 렌더링한다', () => {
    render(<Loginsetup />)
    expect(screen.getByText('로그인 유지')).toBeInTheDocument()
  })

  it('"비밀번호 찾기" 버튼을 렌더링한다', () => {
    render(<Loginsetup />)
    expect(
      screen.getByRole('button', { name: '비밀번호 찾기' })
    ).toBeInTheDocument()
  })

  it('체크박스가 렌더링된다', () => {
    render(<Loginsetup />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('keepLoggedIn=true 이면 체크박스가 체크됨', () => {
    render(<Loginsetup keepLoggedIn={true} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('onForgotPassword 핸들러를 호출한다', () => {
    const onForgotPassword = vi.fn()
    render(<Loginsetup onForgotPassword={onForgotPassword} />)
    fireEvent.click(screen.getByRole('button', { name: '비밀번호 찾기' }))
    expect(onForgotPassword).toHaveBeenCalledTimes(1)
  })
})
