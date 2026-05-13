import React, { useId } from 'react'

export interface TitleInputProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'rows'
> {
  /** 플레이스홀더 텍스트 */
  placeholder?: string
  /** 현재 값 */
  value?: string
  /** 값 변경 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  /** 최대 글자 수 */
  maxLength?: number
  /** 비활성화 */
  disabled?: boolean
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function TitleInput({
  placeholder = '제목을 입력하세요',
  value = '',
  onChange,
  maxLength,
  disabled = false,
  className = '',
  style,
  id: idProp,
  ...textareaProps
}: TitleInputProps) {
  const generatedId = useId()
  const inputId = idProp ?? generatedId

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 64,
          paddingLeft: 'var(--spacing-24)',
          paddingRight: 'var(--spacing-24)',
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-8)',
          boxSizing: 'border-box',
        }}
      >
        <textarea
          id={inputId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          placeholder={placeholder}
          rows={1}
          aria-label="제목 입력"
          style={{
            resize: 'none',
            overflow: 'hidden',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-title-lg)',
            fontWeight: 'var(--font-weight-regular)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
            lineHeight: 'var(--font-line-height-base)',
            width: '100%',
            padding: 0,
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          {...textareaProps}
        />
      </div>

      {/* 글자 수 카운터 */}
      {maxLength !== undefined && (
        <span
          aria-live="polite"
          style={{
            alignSelf: 'flex-end',
            fontFamily: 'var(--font-family-pretendard)',
            fontSize: 'var(--font-size-caption-sm)',
            fontWeight: 'var(--font-weight-regular)',
            color: 'var(--color-text-tertiary)',
            lineHeight: 'var(--font-line-height-base)',
          }}
        >
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  )
}
