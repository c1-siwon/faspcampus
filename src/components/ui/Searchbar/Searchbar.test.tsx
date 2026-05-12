import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Searchbar } from './Searchbar'

describe('Searchbar', () => {
  it('기본 렌더링', () => {
    render(<Searchbar />)
    const input = screen.getByRole('searchbox')
    expect(input).toBeInTheDocument()
  })

  it('placeholder 텍스트 표시', () => {
    render(<Searchbar placeholder="검색하세요" />)
    expect(screen.getByPlaceholderText('검색하세요')).toBeInTheDocument()
  })

  it('onChange 핸들러 호출', () => {
    const onChange = vi.fn()
    render(<Searchbar onChange={onChange} />)
    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: '테스트' } })
    expect(onChange).toHaveBeenCalledWith('테스트')
  })

  it('Enter 키 입력 시 onSearch 호출', () => {
    const onSearch = vi.fn()
    render(<Searchbar value="검색어" onSearch={onSearch} />)
    const input = screen.getByRole('searchbox')
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onSearch).toHaveBeenCalledWith('검색어')
  })

  it('값이 있을 때 초기화 버튼 표시', () => {
    render(<Searchbar value="검색어" />)
    expect(screen.getByLabelText('검색어 지우기')).toBeInTheDocument()
  })

  it('값이 없을 때 초기화 버튼 숨김', () => {
    render(<Searchbar value="" />)
    expect(screen.queryByLabelText('검색어 지우기')).not.toBeInTheDocument()
  })

  it('disabled 상태', () => {
    render(<Searchbar disabled />)
    expect(screen.getByRole('searchbox')).toBeDisabled()
  })
})
