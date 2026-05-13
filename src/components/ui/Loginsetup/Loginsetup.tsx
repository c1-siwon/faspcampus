import React from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'

export interface LoginsetupProps {
  keepLoggedIn?: boolean
  onKeepLoggedInChange?: (checked: boolean) => void
  onForgotPassword?: () => void
  className?: string
  style?: React.CSSProperties
}

export function Loginsetup({
  keepLoggedIn = false,
  onKeepLoggedInChange,
  onForgotPassword,
  className = '',
  style,
}: LoginsetupProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
        }}
      >
        <Checkbox
          checked={keepLoggedIn}
          onChange={(e) => onKeepLoggedInChange?.(e.target.checked)}
        />
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-lg)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-content-strong)',
            lineHeight: 'var(--font-line-height-base)',
            whiteSpace: 'nowrap',
          }}
        >
          로그인 유지
        </span>
      </div>

      <Button size="small" variant="outline" onClick={onForgotPassword}>
        비밀번호 찾기
      </Button>
    </div>
  )
}
