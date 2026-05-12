import React from 'react'
import { Chip } from '../Chip/Chip'

export interface ChipAreaOption {
  /** 옵션 고유 값 */
  value: string
  /** 옵션 레이블 */
  label: string
}

export interface ChipAreaProps {
  /** 칩 옵션 목록 */
  options: ChipAreaOption[]
  /** 선택된 값 목록 */
  selectedValues?: string[]
  /** 선택 변경 핸들러 */
  onChange?: (values: string[]) => void
  /** 단일 선택 모드 */
  singleSelect?: boolean
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function ChipArea({
  options,
  selectedValues = [],
  onChange,
  singleSelect = false,
  className = '',
  style,
}: ChipAreaProps) {
  function handleChipClick(value: string) {
    if (!onChange) return

    if (singleSelect) {
      onChange(selectedValues.includes(value) ? [] : [value])
      return
    }

    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  return (
    <div
      role="listbox"
      aria-label="카테고리 필터"
      aria-multiselectable={!singleSelect}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--spacing-8)',
        ...style,
      }}
    >
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          isSelected={selectedValues.includes(option.value)}
          onClick={() => handleChipClick(option.value)}
        />
      ))}
    </div>
  )
}
