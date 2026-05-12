import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('children을 렌더링한다', () => {
    render(<Button>확인</Button>)
    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument()
  })

  it('disabled 상태에서 클릭이 동작하지 않는다', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        버튼
      </Button>
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('클릭 핸들러가 호출된다', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>클릭</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('variant에 따라 올바른 클래스가 적용된다', () => {
    const { rerender } = render(<Button variant="core">버튼</Button>)
    expect(screen.getByRole('button').className).toContain(
      '--color-interactive-primary'
    )

    rerender(<Button variant="outline">버튼</Button>)
    expect(screen.getByRole('button').className).toContain('--color-bg-default')
  })

  it('iconOnly 모드에서 children을 아이콘으로 감싼다', () => {
    render(
      <Button iconOnly>
        <svg data-testid="icon" />
      </Button>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('leadingIcon이 label 버튼에 렌더링된다', () => {
    render(
      <Button leadingIcon={<svg data-testid="leading-icon" />}>버튼</Button>
    )
    expect(screen.getByTestId('leading-icon')).toBeInTheDocument()
  })
})
