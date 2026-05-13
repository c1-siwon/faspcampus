import React, { useRef } from 'react'
import { Icon } from '../Icon/Icon'

export interface SearchbarProps {
  /** 플레이스홀더 텍스트 */
  placeholder?: string
  /** 현재 입력값 */
  value?: string
  /** 값 변경 핸들러 */
  onChange?: (value: string) => void
  /** 검색 제출 핸들러 */
  onSearch?: (value: string) => void
  /** 초기화 핸들러 */
  onClear?: () => void
  /** 비활성화 */
  disabled?: boolean
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Searchbar({
  placeholder = '검색어를 입력하세요',
  value = '',
  onChange,
  onSearch,
  onClear,
  disabled = false,
  className = '',
  style,
}: SearchbarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onSearch?.(value)
    }
  }

  function handleClear() {
    onChange?.('')
    onClear?.()
    inputRef.current?.focus()
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        paddingLeft: 'var(--spacing-16)',
        paddingRight: 'var(--spacing-16)',
        paddingTop: 'var(--spacing-8)',
        paddingBottom: 'var(--spacing-8)',
        height: '36px',
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--color-border-default)',
        backgroundColor: 'var(--color-bg-default)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* 검색 아이콘 */}
      <Icon
        name="search"
        size={16}
        color="var(--color-text-tertiary)"
        label="검색"
      />

      {/* 입력 필드 */}
      <input
        ref={inputRef}
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          fontFamily: 'var(--font-family-pretendard)',
          fontSize: 'var(--font-size-body-sm)',
          fontWeight: 'var(--font-weight-regular)',
          color: 'var(--color-text-primary)',
          lineHeight: 'var(--font-line-height-base)',
        }}
      />

      {/* 초기화 버튼 (값이 있을 때만 표시) */}
      {value && (
        <button
          type="button"
          aria-label="검색어 지우기"
          onClick={handleClear}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: 'var(--color-text-tertiary)',
          }}
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  )
}
