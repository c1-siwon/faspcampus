import React from 'react'

export type CategoryState = 'default' | 'selected'

export interface CategoryProps {
  label: string
  state?: CategoryState
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function Category({
  label,
  state = 'default',
  onClick,
  className = '',
  style,
}: CategoryProps) {
  const isSelected = state === 'selected'

  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick()
            }
          : undefined
      }
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        paddingTop: 'var(--spacing-4)',
        paddingBottom: 'var(--spacing-8)',
        paddingLeft: 'var(--spacing-8)',
        paddingRight: 'var(--spacing-8)',
        borderBottom: isSelected
          ? '4px solid var(--color-interactive-primary)'
          : '4px solid transparent',
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-display-lg)',
          fontWeight: isSelected
            ? 'var(--font-weight-bold)'
            : 'var(--font-weight-regular)',
          color: isSelected
            ? 'var(--color-text-primary)'
            : 'var(--color-text-disabled)',
          lineHeight: 'var(--font-line-height-base)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  )
}
