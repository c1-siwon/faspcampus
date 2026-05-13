import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Logingoogle } from './Logingoogle'

describe('Logingoogle', () => {
  it('버튼 텍스트를 렌더링한다', () => {
    render(<Logingoogle />)
    expect(
      screen.getByRole('button', { name: /구글로 계속하기/ })
    ).toBeInTheDocument()
  })

  it('onClick 핸들러를 호출한다', async () => {
    const onClick = vi.fn()
    render(<Logingoogle onClick={onClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('disabled 상태에서 클릭되지 않는다', async () => {
    const onClick = vi.fn()
    render(<Logingoogle onClick={onClick} disabled />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('loading 상태에서 버튼이 비활성화된다', () => {
    render(<Logingoogle loading />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
