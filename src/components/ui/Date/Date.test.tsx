import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DateLabel } from './Date'

const HOUR_AGO = new Date(Date.now() - 60 * 60 * 1000)
const DAY_AGO = new Date(Date.now() - 24 * 60 * 60 * 1000)

describe('DateLabel', () => {
  it('time 요소를 렌더링한다', () => {
    render(<DateLabel date={HOUR_AGO} />)
    expect(screen.getByRole('time')).toBeInTheDocument()
  })

  it('상대 시간 형식으로 표시한다', () => {
    render(<DateLabel date={HOUR_AGO} format="relative" />)
    expect(screen.getByRole('time')).toHaveTextContent('시간 전')
  })

  it('방금 전을 표시한다', () => {
    render(<DateLabel date={new Date()} format="relative" />)
    expect(screen.getByRole('time')).toHaveTextContent('방금 전')
  })

  it('절대 날짜 형식으로 표시한다', () => {
    render(<DateLabel date={DAY_AGO} format="absolute" />)
    expect(screen.getByRole('time').textContent).toMatch(/\d{4}/)
  })

  it('dateTime 속성에 ISO 문자열을 설정한다', () => {
    const date = new Date('2024-01-15T10:00:00Z')
    render(<DateLabel date={date} />)
    expect(screen.getByRole('time')).toHaveAttribute(
      'dateTime',
      expect.stringContaining('2024-01-15')
    )
  })
})
