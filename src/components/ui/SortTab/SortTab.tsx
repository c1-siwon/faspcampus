import React, { useState } from 'react'
import { SortTabItem } from '../SortTabItem/SortTabItem'

export interface SortTabOption {
  /** 탭 고유 값 */
  value: string
  /** 탭 레이블 */
  label: string
}

export interface SortTabProps {
  /** 탭 옵션 목록 */
  options: SortTabOption[]
  /** 현재 선택된 값 */
  value?: string
  /** 선택 변경 핸들러 */
  onChange?: (value: string) => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function SortTab({
  options,
  value,
  onChange,
  className = '',
  style,
}: SortTabProps) {
  // 비제어 모드를 위한 내부 상태
  const [internalValue, setInternalValue] = useState(
    value ?? options[0]?.value ?? ''
  )

  const selectedValue = value !== undefined ? value : internalValue

  function handleSelect(optionValue: string) {
    if (value === undefined) {
      setInternalValue(optionValue)
    }
    onChange?.(optionValue)
  }

  return (
    <div
      role="tablist"
      aria-label="정렬 탭"
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-12)',
        ...style,
      }}
    >
      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          {index > 0 && (
            <div
              aria-hidden
              style={{
                width: 1,
                height: 12,
                backgroundColor: 'var(--color-border-default)',
                flexShrink: 0,
              }}
            />
          )}
          <SortTabItem
            label={option.label}
            isSelected={selectedValue === option.value}
            onClick={() => handleSelect(option.value)}
          />
        </React.Fragment>
      ))}
    </div>
  )
}
