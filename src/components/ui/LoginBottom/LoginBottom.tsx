import React from 'react'
import { Loginsetup } from '../Loginsetup/Loginsetup'
import { Loginsign } from '../Loginsign/Loginsign'

export interface LoginBottomProps {
  keepLoggedIn?: boolean
  onKeepLoggedInChange?: (checked: boolean) => void
  onForgotPassword?: () => void
  onSignUp?: () => void
  className?: string
  style?: React.CSSProperties
}

export function LoginBottom({
  keepLoggedIn = false,
  onKeepLoggedInChange,
  onForgotPassword,
  onSignUp,
  className = '',
  style,
}: LoginBottomProps) {
  return (
    <div
      className={className}
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        ...style,
      }}
    >
      <Loginsetup
        keepLoggedIn={keepLoggedIn}
        onKeepLoggedInChange={onKeepLoggedInChange}
        onForgotPassword={onForgotPassword}
        style={{ width: '100%' }}
      />
      <Loginsign onSignUp={onSignUp} />
    </div>
  )
}
