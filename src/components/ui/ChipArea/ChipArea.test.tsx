import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ChipArea } from './ChipArea'

const options = [
  { value: 'frontend', label: '프론트엔드' },
  { value: 'backend', label: '백엔드' },
  { value: 'design', label: '디자인' },
]

describe('ChipArea', () => {
  it('기본 렌더링 — listbox와 칩들이 표시됨', () => {
    render(<ChipArea options={options} />)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })

  it('다중 선택 모드에서 aria-multiselectable=true', () => {
    render(<ChipArea options={options} singleSelect={false} />)
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-multiselectable',
      'true'
    )
  })

  it('단일 선택 모드에서 aria-multiselectable=false', () => {
    render(<ChipArea options={options} singleSelect />)
    expect(screen.getByRole('listbox')).toHaveAttribute(
      'aria-multiselectable',
      'false'
    )
  })

  it('selectedValues에 해당하는 칩이 선택 상태로 표시됨', () => {
    render(<ChipArea options={options} selectedValues={['frontend']} />)
    expect(screen.getByRole('option', { name: '프론트엔드' })).toHaveAttribute(
      'aria-selected',
      'true'
    )
    expect(screen.getByRole('option', { name: '백엔드' })).toHaveAttribute(
      'aria-selected',
      'false'
    )
  })

  it('칩 클릭 시 onChange 호출 — 다중 선택에서 선택 추가', () => {
    const onChange = vi.fn()
    render(
      <ChipArea options={options} selectedValues={[]} onChange={onChange} />
    )
    fireEvent.click(screen.getByRole('option', { name: '프론트엔드' }))
    expect(onChange).toHaveBeenCalledWith(['frontend'])
  })

  it('칩 클릭 시 onChange 호출 — 다중 선택에서 선택 해제', () => {
    const onChange = vi.fn()
    render(
      <ChipArea
        options={options}
        selectedValues={['frontend']}
        onChange={onChange}
      />
    )
    fireEvent.click(screen.getByRole('option', { name: '프론트엔드' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('단일 선택 모드에서 칩 클릭 시 하나만 선택됨', () => {
    const onChange = vi.fn()
    render(
      <ChipArea
        options={options}
        selectedValues={['frontend']}
        onChange={onChange}
        singleSelect
      />
    )
    fireEvent.click(screen.getByRole('option', { name: '백엔드' }))
    expect(onChange).toHaveBeenCalledWith(['backend'])
  })

  it('단일 선택 모드에서 선택된 칩 재클릭 시 선택 해제됨', () => {
    const onChange = vi.fn()
    render(
      <ChipArea
        options={options}
        selectedValues={['frontend']}
        onChange={onChange}
        singleSelect
      />
    )
    fireEvent.click(screen.getByRole('option', { name: '프론트엔드' }))
    expect(onChange).toHaveBeenCalledWith([])
  })

  it('onChange 없어도 클릭이 에러 없이 동작함', () => {
    render(<ChipArea options={options} />)
    expect(() => {
      fireEvent.click(screen.getByRole('option', { name: '프론트엔드' }))
    }).not.toThrow()
  })
})
