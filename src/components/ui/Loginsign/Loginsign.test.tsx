import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Loginsign } from './Loginsign'

describe('Loginsign', () => {
  it('안내 문구를 렌더링한다', () => {
    render(<Loginsign />)
    expect(
      screen.getByText('아직 피그마피디아 회원이 아니세요?')
    ).toBeInTheDocument()
  })

  it('"회원가입" 버튼을 렌더링한다', () => {
    render(<Loginsign />)
    expect(screen.getByRole('button', { name: '회원가입' })).toBeInTheDocument()
  })

  it('onSignUp 핸들러를 호출한다', async () => {
    const onSignUp = vi.fn()
    render(<Loginsign onSignUp={onSignUp} />)
    await userEvent.click(screen.getByRole('button', { name: '회원가입' }))
    expect(onSignUp).toHaveBeenCalledOnce()
  })
})
