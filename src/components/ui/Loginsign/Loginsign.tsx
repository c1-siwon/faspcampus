import React from 'react'

export interface LoginsignProps {
  onSignUp?: () => void
  className?: string
  style?: React.CSSProperties
}

export function Loginsign({ onSignUp, className = '', style }: LoginsignProps) {
  return (
    <div
      className={className}
      style={{
        width: 185,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        paddingTop: 'var(--spacing-12)',
        paddingBottom: 'var(--spacing-12)',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-caption-lg)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--color-text-tertiary)',
          lineHeight: 'var(--font-line-height-base)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        아직 피그마피디아 회원이 아니세요?
      </span>

      <button
        type="button"
        onClick={onSignUp}
        style={{
          width: '100%',
          height: 32,
          borderRadius: 'var(--radius-8)',
          border: 'none',
          backgroundColor: 'var(--color-bg-muted)',
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-caption-lg)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-content-strong)',
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        회원가입
      </button>
    </div>
  )
}
