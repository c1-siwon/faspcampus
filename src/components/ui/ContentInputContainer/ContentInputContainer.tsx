import React, { useId } from 'react'

export interface ContentInputContainerProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  maxLength?: number
  minRows?: number
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export function ContentInputContainer({
  value = '',
  onChange,
  placeholder = '내용을 입력하세요',
  maxLength,
  minRows = 8,
  label,
  error,
  disabled = false,
  className = '',
  style,
}: ContentInputContainerProps) {
  const id = useId()
  const hasError = Boolean(error)

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
        ...style,
      }}
    >
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          position: 'relative',
          border: `1px solid ${hasError ? 'var(--color-border-danger)' : 'var(--color-border-default)'}`,
          borderRadius: 'var(--radius-8)',
          background: disabled
            ? 'var(--color-bg-muted)'
            : 'var(--color-bg-default)',
          overflow: 'hidden',
          transition: 'border-color 0.15s',
        }}
      >
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          rows={minRows}
          style={{
            display: 'block',
            width: '100%',
            padding: 'var(--spacing-16)',
            paddingBottom: maxLength
              ? 'var(--spacing-32)'
              : 'var(--spacing-16)',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
            cursor: disabled ? 'not-allowed' : 'text',
            boxSizing: 'border-box',
          }}
        />
        {maxLength && (
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--spacing-8)',
              right: 'var(--spacing-12)',
              fontSize: 'var(--font-size-caption-sm)',
              color:
                value.length >= maxLength
                  ? 'var(--color-text-danger)'
                  : 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-family-pretendard)',
              pointerEvents: 'none',
            }}
          >
            {value.length} / {maxLength}
          </div>
        )}
      </div>
      {hasError && (
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-caption-sm)',
            color: 'var(--color-text-danger)',
            fontFamily: 'var(--font-family-pretendard)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {error}
        </p>
      )}
    </div>
  )
}
