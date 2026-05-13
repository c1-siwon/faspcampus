import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Category } from './Category'

describe('Category', () => {
  it('레이블을 렌더링한다', () => {
    render(<Category label="커뮤니티" />)
    expect(screen.getByText('커뮤니티')).toBeInTheDocument()
  })

  it('state=default 기본 렌더링', () => {
    render(<Category label="스터디" state="default" />)
    expect(screen.getByText('스터디')).toBeInTheDocument()
  })

  it('state=selected 렌더링', () => {
    render(<Category label="커뮤니티" state="selected" />)
    expect(screen.getByText('커뮤니티')).toBeInTheDocument()
  })

  it('onClick 핸들러 호출', () => {
    const onClick = vi.fn()
    render(<Category label="프로젝트" onClick={onClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('onClick 없을 때 button role 없음', () => {
    render(<Category label="커뮤니티" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
