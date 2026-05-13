import React from 'react'
import { Icon } from '../Icon/Icon'

export interface ChipAreaOption {
  value: string
  label: string
}

export interface ChipAreaProps {
  options: ChipAreaOption[]
  selectedValues?: string[]
  onChange?: (values: string[]) => void
  singleSelect?: boolean
  className?: string
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
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value)
        return (
          <div
            key={option.value}
            role="option"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={() => handleChipClick(option.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ')
                handleChipClick(option.value)
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              paddingLeft: 'var(--spacing-8)',
              paddingRight: 'var(--spacing-8)',
              paddingTop: 'var(--spacing-4)',
              paddingBottom: 'var(--spacing-4)',
              borderRadius: 'var(--radius-8)',
              backgroundColor: isSelected
                ? 'var(--color-bg-brand-subtle)'
                : 'var(--color-bg-muted)',
              outline: isSelected
                ? '2px solid var(--color-interactive-primary)'
                : 'none',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <Icon
              name="design"
              size={16}
              color={
                isSelected
                  ? 'var(--color-interactive-primary)'
                  : 'var(--color-content-strong)'
              }
            />
            <span
              style={{
                fontFamily: 'var(--font-family-pretendard)',
                fontSize: 'var(--font-size-body-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: isSelected
                  ? 'var(--color-interactive-primary)'
                  : 'var(--color-content-strong)',
                lineHeight: 'var(--font-line-height-base)',
                whiteSpace: 'nowrap',
              }}
            >
              {option.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
