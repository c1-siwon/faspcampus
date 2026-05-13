import React from 'react'
import { Icon } from '../Icon/Icon'

export interface LogingoogleProps {
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Logingoogle({
  onClick,
  disabled = false,
  loading = false,
  className = '',
  style,
}: LogingoogleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-8)',
        width: '100%',
        padding: 'var(--spacing-12) var(--spacing-16)',
        background: 'var(--color-bg-default)',
        border: '1px solid var(--color-border-default)',
        borderRadius: 'var(--radius-8)',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        fontFamily: 'var(--font-family-pretendard)',
        fontSize: 'var(--font-size-body-sm)',
        fontWeight: 'var(--font-weight-medium)',
        color: 'var(--color-text-primary)',
        lineHeight: 'var(--font-line-height-base)',
        transition: 'background 0.15s, border-color 0.15s',
        ...style,
      }}
    >
      {loading ? (
        <span
          style={{
            width: 20,
            height: 20,
            borderRadius: 'var(--radius-full)',
            border: '2px solid var(--color-border-default)',
            borderTopColor: 'var(--color-interactive-primary)',
            animation: 'spin 0.6s linear infinite',
            flexShrink: 0,
          }}
        />
      ) : (
        <Icon name="google" size={20} />
      )}
      <span>구글로 계속하기</span>
    </button>
  )
}
