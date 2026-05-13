import React, { useId } from 'react'

export type InputVariant = 'default' | 'focused' | 'error' | 'disabled'

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  /** 입력 필드 레이블 */
  label?: string
  /** 에러 메시지 (설정 시 error 상태로 표시) */
  error?: string
  /** 왼쪽 아이콘 */
  leadingIcon?: React.ReactNode
  /** 오른쪽 아이콘 */
  trailingIcon?: React.ReactNode
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Input({
  label,
  error,
  leadingIcon,
  trailingIcon,
  disabled = false,
  className = '',
  style,
  id: idProp,
  ...inputProps
}: InputProps) {
  const generatedId = useId()
  const inputId = idProp ?? generatedId

  const hasError = Boolean(error)

  /* 컨테이너 테두리 색상 — 상태별 */
  const borderColor = hasError
    ? 'var(--color-border-danger)'
    : 'var(--color-border-default)'

  const focusStyle = hasError
    ? 'var(--color-border-danger)'
    : 'var(--color-border-brand)'

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
      {/* 레이블 */}
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {label}
        </label>
      )}

      {/* 입력 박스 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          paddingLeft: leadingIcon ? 'var(--spacing-12)' : 'var(--spacing-16)',
          paddingRight: trailingIcon
            ? 'var(--spacing-12)'
            : 'var(--spacing-16)',
          /* ⚠️ 높이 44px — --spacing-44 토큰 없음, 입력 필드 고정값 유지 */
          height: '44px',
          borderRadius: 'var(--radius-8)',
          border: `1px solid ${borderColor}`,
          backgroundColor: disabled
            ? 'var(--color-bg-muted)'
            : 'var(--color-bg-default)',
          /* focus-within 은 CSS 변수로 처리 불가하므로 inline onFocus/onBlur로 처리 */
        }}
        /* focus-within 효과를 위한 CSS 클래스 */
        className="input-wrapper"
        onFocus={(e) => {
          if (!disabled) {
            ;(e.currentTarget as HTMLDivElement).style.borderColor = focusStyle
          }
        }}
        onBlur={(e) => {
          ;(e.currentTarget as HTMLDivElement).style.borderColor = borderColor
        }}
      >
        {/* 왼쪽 아이콘 */}
        {leadingIcon && (
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: disabled
                ? 'var(--color-text-disabled)'
                : 'var(--color-text-tertiary)',
            }}
          >
            {leadingIcon}
          </span>
        )}

        {/* 입력 필드 */}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : undefined}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-regular)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
          {...inputProps}
        />

        {/* 오른쪽 아이콘 */}
        {trailingIcon && (
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: disabled
                ? 'var(--color-text-disabled)'
                : 'var(--color-text-tertiary)',
            }}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && (
        <span
          id={`${inputId}-error`}
          role="alert"
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-lg)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-danger)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
