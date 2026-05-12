import React from 'react'

export type ChipVariant = 'default' | 'selected' | 'outlined'

export interface ChipProps {
  /** 칩 레이블 */
  label: string
  /** 칩 스타일 변형 */
  variant?: ChipVariant
  /** 선택 여부 */
  isSelected?: boolean
  /** 클릭 핸들러 */
  onClick?: () => void
  /** 제거 버튼 표시 여부 */
  removable?: boolean
  /** 제거 핸들러 */
  onRemove?: () => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Chip({
  label,
  variant = 'default',
  isSelected = false,
  onClick,
  removable = false,
  onRemove,
  className = '',
  style,
}: ChipProps) {
  const active = isSelected || variant === 'selected'

  const bgColor = active
    ? 'var(--color-bg-brand-subtle)'
    : variant === 'outlined'
      ? 'var(--color-bg-default)'
      : 'var(--color-bg-muted)'

  const textColor = active
    ? 'var(--color-interactive-primary)'
    : 'var(--color-text-secondary)'

  const borderColor = active
    ? 'var(--color-border-brand)'
    : variant === 'outlined'
      ? 'var(--color-border-default)'
      : 'transparent'

  return (
    <div
      role="option"
      aria-selected={active}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-4)',
        paddingLeft: 'var(--spacing-12)',
        paddingRight: removable ? 'var(--spacing-8)' : 'var(--spacing-12)',
        paddingTop: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-4)',
        borderRadius: 'var(--radius-full)',
        border: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        ...style,
      }}
      onClick={onClick}
    >
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-caption-lg)',
          fontWeight: active
            ? 'var(--font-weight-medium)'
            : 'var(--font-weight-regular)',
          color: textColor,
          lineHeight: 'var(--font-line-height-base)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>

      {removable && (
        <button
          type="button"
          aria-label={`${label} 제거`}
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: textColor,
            lineHeight: 1,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
