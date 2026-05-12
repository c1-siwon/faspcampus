import React, { useId, useEffect, useRef } from 'react'

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  /** 체크박스 레이블 */
  label?: string
  /** 체크 여부 */
  checked?: boolean
  /** 중간 상태 (일부 선택) */
  indeterminate?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  className = '',
  style,
  id: idProp,
  ...inputProps
}: CheckboxProps) {
  const generatedId = useId()
  const inputId = idProp ?? generatedId
  const inputRef = useRef<HTMLInputElement>(null)

  /* indeterminate는 HTML attribute가 아닌 DOM property이므로 ref로 설정 */
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const isActive = checked || indeterminate

  /* 체크박스 박스 배경/테두리 */
  const boxBg = disabled
    ? 'var(--color-bg-muted)'
    : isActive
      ? 'var(--color-interactive-primary)'
      : 'var(--color-bg-default)'

  const boxBorder = disabled
    ? 'var(--color-border-default)'
    : isActive
      ? 'var(--color-interactive-primary)'
      : 'var(--color-border-default)'

  return (
    <label
      htmlFor={inputId}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        ...style,
      }}
    >
      {/* 숨긴 네이티브 input */}
      <input
        ref={inputRef}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        aria-checked={indeterminate ? 'mixed' : checked}
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
        {...inputProps}
      />

      {/* 커스텀 체크박스 박스 */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 18,
          height: 18,
          flexShrink: 0,
          borderRadius: 'var(--radius-4)',
          border: `1.5px solid ${boxBorder}`,
          backgroundColor: boxBg,
          transition: 'background-color 0.15s, border-color 0.15s',
        }}
      >
        {/* 체크 아이콘 */}
        {checked && !indeterminate && (
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 4L4 7L10 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {/* 중간 상태 아이콘 */}
        {indeterminate && (
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1H9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>

      {/* 레이블 텍스트 */}
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-body-sm)',
            fontWeight: 'var(--font-weight-regular)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {label}
        </span>
      )}
    </label>
  )
}
