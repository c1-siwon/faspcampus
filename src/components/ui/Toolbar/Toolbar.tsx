import React from 'react'

export interface ToolbarProps {
  /** 왼쪽 영역 콘텐츠 */
  leading?: React.ReactNode
  /** 중앙 영역 콘텐츠 */
  center?: React.ReactNode
  /** 오른쪽 영역 콘텐츠 */
  trailing?: React.ReactNode
  /** 하단 보더 표시 여부 */
  bordered?: boolean
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

export function Toolbar({
  leading,
  center,
  trailing,
  bordered = true,
  className = '',
  style,
}: ToolbarProps) {
  return (
    <header
      role="toolbar"
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 'var(--spacing-16)',
        paddingRight: 'var(--spacing-16)',
        backgroundColor: 'var(--color-bg-default)',
        borderBottom: bordered
          ? '1px solid var(--color-border-default)'
          : 'none',
        ...style,
      }}
    >
      {/* 왼쪽 영역 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          flex: center ? '0 0 auto' : '1',
        }}
      >
        {leading}
      </div>

      {/* 중앙 영역 */}
      {center && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {center}
        </div>
      )}

      {/* 오른쪽 영역 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          flex: center ? '0 0 auto' : '0',
        }}
      >
        {trailing}
      </div>
    </header>
  )
}
