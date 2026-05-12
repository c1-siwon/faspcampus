import React from 'react'

export type LogoSize = 'sm' | 'md' | 'lg'

export interface LogoProps {
  /** 로고 크기 */
  size?: LogoSize
  /** 클릭 핸들러 */
  onClick?: () => void
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: React.CSSProperties
}

const sizeMap: Record<LogoSize, { fontSize: string; iconSize: number }> = {
  sm: { fontSize: 'var(--font-size-body-lg)', iconSize: 20 },
  md: { fontSize: 'var(--font-size-title-lg)', iconSize: 24 },
  lg: { fontSize: 'var(--font-size-display-sm)', iconSize: 32 },
}

export function Logo({
  size = 'md',
  onClick,
  className = '',
  style,
}: LogoProps) {
  const { fontSize, iconSize } = sizeMap[size]

  return (
    <div
      role="img"
      aria-label="커뮤니티 로고"
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        ...style,
      }}
    >
      {/* 로고 아이콘 영역 */}
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: 'var(--radius-8)',
          backgroundColor: 'var(--color-bg-brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg
          width={iconSize * 0.6}
          height={iconSize * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            fill="white"
          />
        </svg>
      </div>

      {/* 로고 텍스트 */}
      <span
        style={{
          fontFamily: 'var(--font-family-pretendard)',
          fontSize,
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--color-text-primary)',
          lineHeight: 1,
        }}
      >
        커뮤니티
      </span>
    </div>
  )
}
