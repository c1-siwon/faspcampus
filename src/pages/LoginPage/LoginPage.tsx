import React, { useState } from 'react'
import { Logo } from '../../components/ui/Logo/Logo'
import { Logingoogle } from '../../components/ui/Logingoogle/Logingoogle'
import { Input } from '../../components/ui/Input/Input'
import { Button } from '../../components/ui/Button/Button'
import { LoginBottom } from '../../components/ui/LoginBottom/LoginBottom'
import { Icon } from '../../components/ui/Icon/Icon'

export interface LoginPageProps {
  onLogin?: (email: string, password: string) => void
  onGoogleLogin?: () => void
  onForgotPassword?: () => void
  onSignUp?: () => void
  className?: string
  style?: React.CSSProperties
}

export function LoginPage({
  onLogin,
  onGoogleLogin,
  onForgotPassword,
  onSignUp,
  className = '',
  style,
}: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  return (
    <div
      className={className}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {/* 로그인 카드 */}
      <div
        style={{
          width: 720,
          backgroundColor: 'var(--color-bg-default)',
          borderRadius: 'var(--radius-24)',
          paddingTop: 90,
          paddingBottom: 90,
          paddingLeft: 160,
          paddingRight: 160,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-32)',
          boxSizing: 'border-box',
        }}
      >
        <Logo />

        {/* inputlist — gap-16: body + loginbottom */}
        <div
          style={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-16)',
          }}
        >
          {/* body — gap-8: loginarea + button + logingoogle */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-8)',
            }}
          >
            {/* loginarea — gap-16: 이메일 + 비밀번호 */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-16)',
              }}
            >
              <Input
                label="이메일"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-4)',
                }}
              >
                <Input
                  label="비밀번호"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  trailingIcon={
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'var(--color-text-tertiary)',
                      }}
                      aria-label={
                        showPassword ? '비밀번호 숨기기' : '비밀번호 보기'
                      }
                    >
                      <Icon name="eye-off" size={16} />
                    </button>
                  }
                />
                <span
                  style={{
                    fontFamily: 'var(--font-family-pretendard)',
                    fontSize: 'var(--font-size-caption-lg)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-tertiary)',
                    lineHeight: 'var(--font-line-height-base)',
                    paddingLeft: 'var(--spacing-4)',
                  }}
                >
                  8자 이상 입력해주세요.
                </span>
              </div>
            </div>

            <Button
              size="large"
              variant="core"
              style={{ width: '100%' }}
              onClick={() => onLogin?.(email, password)}
            >
              로그인
            </Button>

            <Logingoogle onClick={onGoogleLogin} />
          </div>

          <LoginBottom
            keepLoggedIn={keepLoggedIn}
            onKeepLoggedInChange={setKeepLoggedIn}
            onForgotPassword={onForgotPassword}
            onSignUp={onSignUp}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
